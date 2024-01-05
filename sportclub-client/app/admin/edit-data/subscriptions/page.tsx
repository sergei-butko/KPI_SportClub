'use client'
import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {subscriptionDto} from "@/types/dto/subscriptionDto";
import {getAllSubscriptions} from "@/app/api/subscription/getAllSubscriptions";
import TabTemplate from "@/components/tab-template";
import {SubscriptionTabs} from "@/consts";
import AddSubscription from "@/app/admin/edit-data/subscriptions/add-subscription";
import EditSubscriptionList from "@/app/admin/edit-data/subscriptions/edit-subscription-list";

export default function SubscriptionsPage() {
    const [subscriptionsData, setSubscriptionsData] = useState<subscriptionDto[]>()
    const [hash, setHash] = useState<string>('#edit');
    const {data: session} = useSession()
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false);


    useEffect(() => {
        setHash(window.location.hash);
    }, [])

    useEffect(() => {
        (async function () {
            await getAllSubscriptions()
                .then(data => setSubscriptionsData(data));
        })();
    }, [updateTrigger])

    useEffect(() => {
       window.addEventListener('hashchange', ()=>setHash(window.location.hash));
        return () => {
            window.removeEventListener('hashchange', ()=>setHash(window.location.hash));
        };
    }, []);

    return (
        <div>
            <p className='text-4xl font-bold text-sky-800 text-center'>Subscriptions</p>
            {subscriptionsData && session &&
                <div>
                    <TabTemplate hash={hash} tabs={SubscriptionTabs}/>
                    <div>
                        {
                            hash === '#new'
                                ? <AddSubscription access_token={session.user.token} callback={()=>setUpdateTrigger(prevState => !prevState)}/>
                                : <EditSubscriptionList subscriptionsData={subscriptionsData} access_token={session.user.token} callback={()=>setUpdateTrigger(prevState => !prevState)}/>
                        }
                    </div>
                </div>
            }
        </div>
    );
}
