'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import {checkAccessRights} from "@/functions";
import {RoleEnum, SessionStatusEnum} from "@/enums";
import ForbiddenPage from "@/app/(error-pages)/forbidden";
import Loading from "@/components/loading";

const allowedRoles:RoleEnum[] = [RoleEnum.ADMIN];
export default function AdminLayout({
children,
}: {
    children: React.ReactNode
}) {
    const {data: session, status} = useSession();

    return (
        <div>
            {status === SessionStatusEnum.LOADING
                ? <Loading/>
                : status === SessionStatusEnum.AUTHENTICATED && session && checkAccessRights(session, allowedRoles) ?
                    children
                    : <ForbiddenPage/>
            }
        </div>
    )
}

