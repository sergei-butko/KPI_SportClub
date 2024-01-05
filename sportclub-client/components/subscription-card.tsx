import React from 'react';
import {userSubscriptionDto} from "@/types/dto/userSubscriptionDto";
import SubscriptionToggle from "@/app/admin/manage-client/edit-client/[slug]/subscription/subscription-toggle";

function SubscriptionCard(props:{userSubscriptionData: userSubscriptionDto}) {
    return (
        <div className='p-2 border-2 rounded-lg bg-white border-gray-300'>
            <SubscriptionToggle subscription={props.userSubscriptionData.subscription}/>
            <div className='p-2'>
                <p><span className='font-semibold'>start date: </span> {props.userSubscriptionData.startDate.substring(0,10)}</p>
                <p><span className={`font-semibold ${new Date(props.userSubscriptionData.endDate)>new Date()? 'text-red-600':''}`}>end date:</span> {props.userSubscriptionData.endDate.substring(0,10)}</p>
            </div>
        </div>
    );
}

export default SubscriptionCard;