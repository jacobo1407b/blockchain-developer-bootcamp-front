import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as patch from 'redux/accion';4
import ChangePrice from 'components/ChangePrice';

interface IProps {
    item: any,
    address?: string,
    methods: any
}
const CardProperty: FunctionComponent<IProps> = ({ item, address, methods }) => {

    const dispatch = useDispatch()
    const [data, setData] = useState<any>({})
    useEffect(() => {
        methods.getIdProperty(item).call({ from: address }).then((res: any) => {
            setData(res);
        })
    }, [])

    function onVisible() {
        methods.onVisible(!data.visible, item).send({ from: address }).then((res: any) => {
            setData({
                ...data,
                visible: !data.visible
            })
        })
    }

    function onChangePrice() {
        dispatch(patch.setModal({
            title: 'Cambiar precio',
            body: <ChangePrice
            methods={methods}
            id={item}
            address={address}
            price={data.price}
            />
        }))
        const modalToOpen: any = document.querySelector('.' + 'main-modal');
        modalToOpen.classList.remove('fadeOut');
        modalToOpen.classList.add('fadeIn');
        modalToOpen.style.display = 'flex';
    }
    return (
        <div>
            <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg')" }}
            >
                <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                    <div>
                        <div className="text-white text-lg flex space-x-2 items-center my-over" onClick={onVisible}>
                            <div className="bg-white rounded-md p-2 flex items-center">
                                {data?.visible ? (
                                    <i className="far fa-eye text-blue-800"></i>
                                ) : (
                                    <i className="fas fa-eye-slash fa-sm text-blue-800"></i>
                                )}

                            </div>
                        </div>
                        <h3 className="text-white text-3xl mt-2 font-bold">
                            <div
                                className="my-over"
                                onClick={onChangePrice}
                            >
                                {data?.price} ETH
                            </div>$
                        </h3>
                        <h3 className="text-white text-lg mt-2 ">
                            <span>{data?.name}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProperty
/**
 *
 */