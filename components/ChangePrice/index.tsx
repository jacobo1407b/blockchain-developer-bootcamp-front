import React,{FunctionComponent,useState} from 'react'
import Loading from 'components/Loading'
interface IChangePrice {
    methods:any,
    id:any,
    address:any,
    price:any,
}
const ChangePrice:FunctionComponent<IChangePrice> = ({price,id,address,methods}) => {

    const [load, setLoad] = useState<boolean>(false);
    const [pric, setpric] = useState<any>(price)
    function handleChange(e:any){
        const {value}=e.target;
        setpric(value)
    }

    function handleSubmit(){
        if(pric.length<0 || !pric || pric==0){
            alert('Ingrese un precio valido')
        }else{
            setLoad(true)
            methods.onUpdatePrice(id,pric).send({from:address}).then(()=>{
                setLoad(false);
                alert('Precio actualizado');
               const formE = document.getElementById('price') as HTMLInputElement;
                formE.value='';
            })
        }
    }
    return (
        <div id="add_caretaker_form" className="w-full">
                            <div className="">
                                <div className="">
                                    <label className="text-md text-gray-600">Precio (ETH)</label>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleChange}
                                        defaultValue={price}
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
                                    ) : 'Actualizar'}

                                </button>
                            </div>
                        </div>
    )
}

export default ChangePrice
