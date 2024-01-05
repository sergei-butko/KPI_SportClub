'use client'
import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {userDto} from "@/types/dto/userDto";
import {getUser} from "@/app/api/user/getUser";
import UserData from "@/app/client/account/profile/user-data";
import UserSubscription from "@/app/client/account/subscription/user-subscription";
import TabTemplate from "@/components/tab-template";
import {AccountTabs} from "@/consts/tabs-data/client/account-tabs";
import VisitHistory from "@/app/client/account/visits/visit-history";
import Gifts from "@/app/client/account/gifts/gifts";

export default function AccountPage() {
    const [userData, setUserData] = useState<userDto>()
    const {data: session} = useSession();
    const [hash, setHash] = useState<string>('#profile');

    useEffect(() => {
        setHash(window.location.hash);
    }, [])

    useEffect(() => {
        (async function () {
            if (session) {
                await getUser(session.user.id, session.user.token)
                    .then(data => setUserData(data));
            }
        })();
    }, [session])

    useEffect(() => {
        const handleHashChange = () => {
            console.log('Hash changed:', window.location.hash);
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className='flex flex-col container mx-auto lg:px-10 md:px-5'>
            <p className='text-3xl text-sky-600 font-bold text-center'>Personal Profile</p>
            <TabTemplate hash={hash} tabs={AccountTabs}/>
            {userData && session &&
                <div>
                    {hash === '#subscriptions' &&
                        <UserSubscription userID={userData.id} access_token={session.user.token}/>}
                    {hash === '#profile' && <UserData userData={userData} access_token={session.user.token}/>}
                    {hash === '#visits' && <VisitHistory/>}
                    {hash.includes('gifts') && <Gifts/>}
                </div>
            }
        </div>
    );
}
