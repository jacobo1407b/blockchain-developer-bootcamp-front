import React, { useState,useEffect } from 'react';
import Loading from '@components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import * as patch from 'redux/accion';
const { DrizzleContext } = require("@drizzle/react-plugin");

const AddProperty = () => {
    const dispatch = useDispatch();
    const [property, setproperty] = useState({ name: "", price: 0 });
    const [load, setload] = useState<boolean>(false);
    const [drizz, setDrizz] = useState<any>({});
    const user = useSelector((state: any) => state.user)
    const propertyRedux = useSelector((state:any) => state.property);



    const handleChange = (e: any) => {
        var { name, value } = e.target;
        if (name === "price") {
            value = parseInt(value);
        }
        setproperty({ ...property, [name]: value });
    }

    function validateForm() {
        return property.name.length > 0;
    }
    function handleSubmit(e: any) {
        if (!validateForm() || (property.price < 1) || property.price === 0 || !property.price) {
            alert("Please fill all the fields");
        } else {
            setload(true);
            drizz
                ?.contracts
                ?.AssetT
                ?.methods
                ?.emitRegisterProperty('cid document', 'cid img', property.name, property.price)
                ?.send({ from: user.address, gas: 3000000 }).then((res: any) => {
                    drizz.contracts.AssetT.methods.getIdProperty(res.events.propertyIssued.returnValues.property).call(
                        { from: user.address, gas: 3000000 }
                    ).then((res: any) => {
                        const values = [...propertyRedux];
                        values.push(res);
                        dispatch(patch.setProperty(values));
                        setload(false);
                        alert("Property added successfully");
                        clearForm()
                    })
                        .catch((err: any) => {
                            setload(false);
                        })

                }).catch((err: any) => {
                    setload(false);
                })
        }
    }

    function clearForm(){
        const formvalue:any= document.getElementById('names');
        const priceform:any = document.getElementById('price')
        priceform.value = 0
        formvalue.value = "";
    }
    return (
        <>
            <DrizzleContext.Consumer>
                {(drizzleContext: any) => {
                    const { drizzle } = drizzleContext;
                    setDrizz(drizzle);
                    return (
                        <div id="add_caretaker_form" className="w-full">
                            <div className="">
                                <div className="">
                                    <label className="text-md text-gray-600">Nombre</label>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="names"
                                        name="name"
                                        className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                        placeholder="Example"
                                    />
                                </div>
                                <div className="">
                                    <label className="text-md text-gray-600">Precio (ETH)</label>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleChange}
                                        type="number"
                                        id="price"
                                        name="price"
                                        className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                        placeholder="Any value ETH" />
                                </div>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                >
                                    {load ? (
                                        <Loading load={load} />
                                    ) : 'Create new property'}

                                </button>
                            </div>
                        </div>
                    )
                }}
            </DrizzleContext.Consumer>
        </>
    )
}

export default AddProperty
