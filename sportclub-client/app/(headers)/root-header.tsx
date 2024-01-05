'use client'
import React, {useEffect, useState} from 'react';
import LoginBtn from "@/app/login-btn";
import {useSession} from "next-auth/react";
import {RoleEnum} from "@/enums";
import AdminHeader from "@/app/(headers)/admin-header";
import ClientHeader from "@/app/(headers)/client-header";
import logo from "../favicon.ico"
import Image from "next/image";

export default function RootHeader() {
    const {data: session} = useSession();
    const [pathName, setPathName] = useState<string>('')
    const [headerVariant, setHeaderVariant] = useState(<></>);

    useEffect(()=>{
        setPathName(window.location.pathname)
    })

    useEffect(() => {
        if (session) {
            if(session.user.roleId === RoleEnum.ADMIN) setHeaderVariant(<AdminHeader path={pathName}/>)
            else if(session.user.roleId === RoleEnum.USER) setHeaderVariant(<ClientHeader path={pathName}/>)
        }
    }, [session])

    useEffect(() => {
        const handlePathNameChange = () => {
            setPathName(window.location.pathname);
        };

        window.addEventListener('location change', handlePathNameChange);
        return () => {
            window.removeEventListener('location change', handlePathNameChange);
        };
    }, []);

    return (
        <div className='bg-gray-200'>
            <div className="container mx-auto flex justify-between py-4 xl:px-10 lg:px-5 text-lg">
                <div className='flex gap-2 items-center'>
                    <Image src={logo} alt='logo' className='w-8 h-8'/>
                    <p className='text-2xl'>Sport Club</p>
                </div>
                {headerVariant}
                <LoginBtn/>
            </div>
            <div>

            </div>
        </div>
    );
}
