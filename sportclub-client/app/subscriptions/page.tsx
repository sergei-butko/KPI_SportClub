'use client'
import React, {useEffect, useState} from 'react';
import {subscriptionDto} from "@/types/dto/subscriptionDto";
import {getAllSubscriptions} from "@/app/api/subscription/getAllSubscriptions";

export default function SubscriptionPage() {
    const [subscriptionsData, setSubscriptionsData] = useState<subscriptionDto[]>([])

    useEffect(() => {
        (async function () {
            await getAllSubscriptions()
                .then(data => setSubscriptionsData(data));
        })();
    }, [])


    return (
        <div>
            {subscriptionsData &&
                <div className='flex flex-col items-center'>
                    <h1 className='text-sky-600 font-bold text-3xl'>Subscriptions</h1>
                    <div>
                        {subscriptionsData.filter(subscription=>subscription.isAvailable).map(subscription=>{
                        return (
                            <div key={subscription.id} className='m-1 p-3 border-2 rounded border-cyan-900'>
                                <p className='text-xl text-cyan-600 font-bold'>{subscription.name}</p>
                                <p>{subscription.description}</p>
                                <p>Valid for {subscription.duration} month</p>
                                <p>Visit at: {subscription.entry_time.substring(0,5)}-{subscription.exit_time.substring(0,5)}</p>
                                <p>Price: {subscription.price} uah</p>
                            </div>
                        )})
                        }
                    </div>
                </div>
            }
        </div>
    );
}

