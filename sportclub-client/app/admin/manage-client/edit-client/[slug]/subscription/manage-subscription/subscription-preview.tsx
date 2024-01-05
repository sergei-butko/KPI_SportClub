import React from 'react';
import {subscriptionDto} from "@/types/dto/subscriptionDto";

function SubscriptionPreview(props:{subscription: subscriptionDto, selectedId?: number}) {
    return (
        <div key={`info${props.subscription.id}`} className={`border-2 rounded p-4 ${props.subscription.id === props.selectedId? '': 'hidden'}`}>
            <p className='text-xl underline font-semibold mb-2'>{props.subscription.name}</p>
            <p className='font-semibold'>Description:</p>
            <p>{props.subscription.description}</p>
            <p><span className='font-semibold'>Price:</span> {props.subscription.price} uah</p>
            <p><span className='font-semibold'>Visit time:</span> {props.subscription.entry_time.substring(0,5)} - {props.subscription.exit_time.substring(0,5)}</p>
            <p><span className='font-semibold'>Duration:</span> {props.subscription.duration} month</p>
        </div>
    );
}

export default SubscriptionPreview;