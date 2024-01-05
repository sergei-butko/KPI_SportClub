import React, {useEffect, useState} from 'react';
import {userSubscriptionDto} from "@/types/dto/userSubscriptionDto";
import SubscriptionCard from "@/components/subscription-card";
import WarningInlineMessage from "@/components/warning-inline-message";

function SubscriptionHistory(props:{userSubscriptionsData: userSubscriptionDto[]}) {
    const [subscriptionHistory, setSubscriptionHistory] = useState<userSubscriptionDto[]>([]);

    useEffect(()=>{
        setSubscriptionHistory(props.userSubscriptionsData.filter((userSubscription)=> new Date(userSubscription.endDate) < new Date()))
    },[props.userSubscriptionsData])

    return (
        <>
            <p className='text-2xl font-bold text-sky-600 mt-4 mb-2'>Subscription history</p>
            {subscriptionHistory.length !== 0 && subscriptionHistory.map(userSubscription=>{
                return(
                    <SubscriptionCard userSubscriptionData={userSubscription} key={userSubscription.id}/>
                )
            })}
            {subscriptionHistory.length === 0
            && <WarningInlineMessage textContent='No subscription history'/>
            }
        </>
    );
}

export default SubscriptionHistory;