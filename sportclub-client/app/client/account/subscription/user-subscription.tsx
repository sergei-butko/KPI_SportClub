'use client'
import React, {useEffect, useState} from 'react';
import {userSubscriptionDto} from "@/types/dto/userSubscriptionDto";
import {getUserSubscriptions} from "@/app/api/user-subscriptions/getUserSubscriptions";
import SubscriptionCard from "@/components/subscription-card";
import SubscriptionHistory from "@/components/subscription-history";
import WarningInlineMessage from "@/components/warning-inline-message";

function UserSubscription(props:{userID: number, access_token: string}) {
    const [userSubscriptionsData, setUserSubscriptionsData] = useState<userSubscriptionDto[]>()
    const [activeSubscription, setActiveSubscription] = useState<userSubscriptionDto[]>()


    useEffect(()=>{
        (async function () {
            await getUserSubscriptions(props.userID, props.access_token)
                .then(data => setUserSubscriptionsData(data));
        })();
    },[])

    useEffect(()=>{
        if(userSubscriptionsData){
            setActiveSubscription(userSubscriptionsData.filter((userSubscription)=> new Date(userSubscription.endDate)>new Date()))
        }
    }, [userSubscriptionsData])

    return (
        <div>{
            userSubscriptionsData &&
            <div>
                <p className='text-2xl font-bold text-sky-400 mt-4 mb-2'>Current subscription</p>
                {activeSubscription && activeSubscription.length!==0 ?
                    activeSubscription.map(userSubscription=>{
                    return(
                        <SubscriptionCard userSubscriptionData={userSubscription} key={userSubscription.id}/>
                    )
                })
                    :<WarningInlineMessage textContent="You don't have active subscription"/>
                }
                <SubscriptionHistory userSubscriptionsData={userSubscriptionsData}/>
            </div>
        }</div>
    );
}

export default UserSubscription;