import React, {useState} from 'react';
import {subscriptionDto} from "@/types/dto/subscriptionDto";
import EditSubscription from "@/app/admin/edit-data/subscriptions/edit-subscription";

function EditSubscriptionList(props: {subscriptionsData: subscriptionDto[], access_token: string, callback:()=>void}) {
    const [searchQuery, setSearchQuery] = useState<string>('')

    return (
        <div>
            <input className='border-b-2 focus:outline-none w-52 my-3' placeholder='Search subscription name...' onInput={(e)=>setSearchQuery(e.currentTarget.value)}></input>
            {props.subscriptionsData &&
                props.subscriptionsData.filter(gift => gift.name.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => { return b.isAvailable ? 1 : -1}).map(subscription=>{
                    return(
                        <EditSubscription subscription={subscription} access_token={props.access_token} key={subscription.id} callback={props.callback}/>
                    )
                })
            }
        </div>
    )
}

export default EditSubscriptionList;