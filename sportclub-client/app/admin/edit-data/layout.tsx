'use client'
import React, {useEffect, useState} from 'react';

function Layout({
                    children,
                }: {
    children: React.ReactNode
}) {
    const [pathName, setPathName] = useState<string>(window.location.pathname)

    useEffect(() => {
        const handlePathNameChange = () => {
            console.log(window.location.pathname)
            setPathName(window.location.pathname);
        };

        window.addEventListener('location change', handlePathNameChange);
        return () => {
            window.removeEventListener('location change', handlePathNameChange);
        };
    }, []);
    return (
        <div>
            <div className='flex gap-12 justify-center bg-gray-600 p-1 mb-3 text-white'>
                <a className={pathName.split('/')[3]==='subscriptions'?'underline text-sky-400 font-semibold':''} href='/admin/edit-data/subscriptions#edit'>Subscriptions</a>
                <a className={pathName.split('/')[3]==='gifts'?'underline text-sky-400 font-semibold':''} href='/admin/edit-data/gifts#edit'>Gifts</a>
            </div>
            {children}
        </div>
    );
}

export default Layout;