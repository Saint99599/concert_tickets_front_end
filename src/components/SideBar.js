"use client"

import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import SideBarAdmin from './SideBarAdmin';
import SideBarUser from './SideBarUser';

export default function SideBar() {
    const token = Cookies.get('token');
    let sidebarComponent = null;

    if (token) {
        const decodedToken = jwt.decode(token);
        const role = decodedToken ? decodedToken.role : null;

        if (role === 'admin') {
            sidebarComponent = <SideBarAdmin />;
        } else if (role === 'user') {
            sidebarComponent = <SideBarUser />;
        }
    }

    return (
        <div>
            {sidebarComponent}
        </div>
    );
}
