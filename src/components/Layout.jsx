import * as React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Menu from './Menu';

export default function Layout({ children }) {

    return (
        <div className='app-layout'>
            <Sidebar />
            <div className="container">
                <Topbar />
                <Menu />
            </div>
        </div>
    );
}