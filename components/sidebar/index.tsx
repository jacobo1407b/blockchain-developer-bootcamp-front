import React from 'react';
import Link from 'next/link';
import { routes } from 'utils';

export default function SideBar(): JSX.Element {
  return (
    <>
      <aside className="w-20 relative z-20 flex-shrink-0  px-2 overflow-y-auto bg-indigo-600 sm:block">
        <div className="mb-6">
          <div className="flex justify-center">
            <Link href={routes.perfil}>
            <div className="w-14 h-14 rounded-full bg-gray-300 border-2 border-white mt-2 cursor-pointer">
              <img
                src="https://mui.com/static/images/avatar/2.jpg"
                className="rounded-full w-auto"
              />
            </div>
            </Link>
            
          </div>

          <div>
            <ul className="mt-6 leading-10 px-4">
              <Link href={routes.home}>
                <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-blue-400 cursor-pointer"
                >
                  <i className="fas fa-home fa-sm text-white"></i>
                </li>
              </Link>
              <Link href={routes.propiedad}>
                <li className="mb-3 p-2 rounded-md flex items-center justify-center bg-pink-400 cursor-pointer">
                  <i className="fas fa-hotel fa-sm text-white"></i>
                  {/** <i className="fas fa-question-circle fa-sm text-white"></i> */}
                </li>
              </Link>
              {/**<li className="mb-3 p-2 rounded-md flex items-center justify-center bg-yellow-400 cursor-pointer">
                <i className="fas fa-headphones fa-sm text-white"></i>
              </li> */}
              {/**Logout */}
              <li className="absolute bottom-0 mb-3 p-2 rounded-full flex items-center mx-auto bg-white cursor-pointer">
                <i className="fas fa-power-off fa-sm text-indigo-600"></i>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
}
