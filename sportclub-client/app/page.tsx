'use client'
import {useSession} from "next-auth/react";
import {RoleEnum} from "@/enums";
import React from "react";

export default function Home() {
    const {data: session} = useSession();
    return (
        <div className='flex flex-col items-center'>
            <p className='text-sky-600 font-bold text-3xl mt-4'>Home</p>
            <p>Sport Club</p>
            {session && session.user.roleId === RoleEnum.ADMIN
                ? <p className='text-3xl font-bold text-violet-400 underline mt-5'>Admin Panel</p>
                : <p className='text-3xl font-bold text-violet-400 underline mt-5'>Client Portal</p>
            }
        </div>
    )
}
