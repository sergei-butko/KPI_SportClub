'use client'
import React, {useEffect, useState} from 'react';
import {getUser} from "@/app/api/user/getUser";
import {useSession} from "next-auth/react";
import {userDto} from "@/types/dto/userDto";
import Gifts from "@/app/admin/manage-client/edit-client/[slug]/gifts/gifts";
import Profile from "@/app/admin/manage-client/edit-client/[slug]/profile";
import TabTemplate from "@/components/tab-template";
import {ManageUserTabs} from "@/consts";
import Subscription from "@/app/admin/manage-client/edit-client/[slug]/subscription/subscription";
import Visits from "@/app/admin/manage-client/edit-client/[slug]/visits/visits";


export default function ManageUserPage({params}: { params: { slug: string } }) {
    const {data: session} = useSession();
    const id = parseInt(params.slug);
    const [targetUser, setTargetUser] = useState<userDto>();
    const [hash, setHash] = useState<string>('#profile');
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false);

    useEffect(()=>{
        setHash(window.location.hash);
    },[])

    useEffect(() => {
        (async function () {
            if (id && session) {
                await getUser(id, session.user.token)
                    .then(data => setTargetUser(data));
            }
        })();
    }, [id, session, updateTrigger])

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div>
            {targetUser && session &&
                <div>
                    <p className='text-3xl text-sky-600 font-bold text-center'>Manage Client</p>
                    <div className='flex gap-12'>
                        <div className='mt-14 bg-gray-200 p-4'>
                            <Profile userData={targetUser} access_token={session.user.token}/>
                        </div>
                        <div className=' w-full'>
                            <TabTemplate hash={hash} tabs={ManageUserTabs}/>
                            <div className='border-2 p-4  bg-gray-200'>
                                {
                                    hash==='#subscription'?
                                        <Subscription userId={id} access_token={session.user.token}/>
                                        : hash==='#gifts'? <Gifts userId={id}/>
                                            : <Visits userId={id} access_token={session.user.token} callback={()=>setUpdateTrigger(prevState => !prevState)}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

