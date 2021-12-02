import React from 'react'
import { useSelector } from 'react-redux';

type State = {
    login: boolean;
    user: {
        name: string;
        id: string;
        username: string;
        address: string;
        logo: string;
        nameimg: string;
    }
    contract: any;
    modal: {
        title: string;
        body: React.ReactNode | null;
    }
}
const Modal = () => {
    const modal = useSelector((state: State) => state.modal)
    function closeModal() {
        const modalToClose: any = document.querySelector('.' + 'main-modal');
        modalToClose.classList.remove('fadeIn');
        modalToClose.classList.add('fadeOut');
        setTimeout(() => {
            modalToClose.style.display = 'none';
        }, 500);
    }
    return (
        <div>
            <div
                className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeOut faster"
                style={{ background: 'rgba(0,0,0,.7)',display:'none' }}
            >
                <div
                    className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
                >
                    <div className="modal-content py-4 text-left px-6">

                        <div className="flex justify-between items-center pb-3">
                            <p
                                className="text-2xl font-bold text-gray-500"
                            >
                                {modal.title}
                            </p>
                            <div
                                className="modal-close cursor-pointer z-50"
                                onClick={closeModal}
                            >
                                <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="my-5 mr-5 ml-5 flex justify-center">
                            {modal.body}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
