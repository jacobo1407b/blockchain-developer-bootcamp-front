import React, { FunctionComponent} from 'react';
import SideBar from '../components/sidebar';
import { useSelector } from 'react-redux';

interface ILayout {
    children: React.ReactNode;
    drizzle:any
}
const Layout: FunctionComponent<ILayout> = ({ children }) => {
    const login = useSelector((state:any) => state.login)
    return (
       
            <div className="flex h-screen w-full bg-gray-800 " x-data="{openMenu:1}">
                {/**SideBar start */}
                {login && <SideBar />}
                {/**SideBar end */}
                <div className="flex flex-col flex-1 w-full overflow-y-auto">
                    <main className="relative z-0 flex-1 pb-8 px-6 bg-white">
                        <div className="grid pb-10  mt-4 ">
                            {/**title bar */}
                            {children}
                        </div>
                    </main>
                </div>

            </div>

    )
}

export default Layout;
