"use client";
import {useSession, signIn, signOut} from "next-auth/react";
import {RoleEnum} from "@/enums";
import React from "react";

export default function LoginBtn() {
    const {data: session} = useSession();

    if (session) {
        return (
            <div  className='flex gap-5 items-center'>
                {
                    session.user.roleId === RoleEnum.USER
                    ? <a className='text-sky-400' href='/client/account#profile'>{session.user.email}</a>
                        :<p className='text-sky-600'>Logged in as <span className='underline font-semibold'>ADMIN</span></p>

                }
                <button onClick={() => signOut({redirect: true, callbackUrl: '/auth/login'})}>Sign out</button>
            </div>
        );
    }
    return (
        <div className='flex gap-5'>
            <button onClick={() => signIn()}>Sign in</button>
            <button><a href='/auth/signup'>Sign up</a></button>
        </div>
    );
}