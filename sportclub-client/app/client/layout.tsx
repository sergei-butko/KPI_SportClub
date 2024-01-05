'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import {checkAccessRights} from "@/functions";
import {RoleEnum, SessionStatusEnum} from "@/enums";
import ForbiddenPage from "@/app/(error-pages)/forbidden";
import Loading from "@/components/loading";

const allowedRoles:RoleEnum[] = [RoleEnum.USER];
export default function ClientLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    const {data: session, status} = useSession();

    return (
        <div className='xl:px-10 mt-4'>
            {status === SessionStatusEnum.LOADING
                ? <Loading/>
                : status === SessionStatusEnum.AUTHENTICATED && session && checkAccessRights(session, allowedRoles) ?
                    children
                    : <ForbiddenPage/>
            }
        </div>
    )
}

