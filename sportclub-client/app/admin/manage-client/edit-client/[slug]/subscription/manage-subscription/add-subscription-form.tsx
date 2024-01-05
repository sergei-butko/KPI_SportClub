import React, {FormEvent, useEffect, useState} from 'react';
import SubscriptionPreview
    from "@/app/admin/manage-client/edit-client/[slug]/subscription/manage-subscription/subscription-preview";
import {subscriptionDto} from "@/types/dto/subscriptionDto";
import {addUserSubscription} from "@/app/api/user-subscriptions/addUserSubscription";
import {getAllSubscriptions} from "@/app/api/subscription/getAllSubscriptions";

function AddSubscriptionForm(props:{userId:number, access_token:string, callback:()=>void}) {
    const [subscriptionsData, setSubscriptionsData] = useState<subscriptionDto[]>()
    const [selectedSubscription, setSelectedSubscription] = useState<number>()

    const submitForm = async (e: FormEvent) => {
        e.preventDefault();
        const selectedRadioButton: HTMLInputElement = document.querySelector('input[name="subscription"]:checked') as HTMLInputElement;
        if (selectedRadioButton) {
            await addUserSubscription(props.userId, parseInt(selectedRadioButton.value), props.access_token)
                .then(()=>{
                    alert('Subscription was successfully added')
                    props.callback();
                })
        } else {
            alert('Select a subscription')
        }
    }

    useEffect(() => {
        (async function () {
            await getAllSubscriptions()
                .then(data => setSubscriptionsData(data));
        })()
    }, [])
    return (
        <div className='bg-white p-2'>
            <p className='text-xl text-emerald-600 font-semibold mb-2'>Add subscription</p>
            <div className=' flex gap-4'>
                <form onSubmit={submitForm}>
                    <fieldset className='w-max'>
                        {subscriptionsData &&
                            subscriptionsData.filter(subscription=> subscription.isAvailable).map((subscription) => {
                                return (
                                    <div key={`label${subscription.id}blah`} className='flex gap-2 mb-1 border-2 p-1 w-full'>
                                        <input
                                            id={`st${subscription.id}`}
                                            type="radio"
                                            name='subscription'
                                            value={subscription.id}
                                            onChange={()=>setSelectedSubscription(subscription.id)}
                                        />
                                        <label htmlFor={`st${subscription.id}`}>
                                            {subscription.name}
                                        </label>
                                    </div>
                                );
                            })}
                    </fieldset>
                    <button type='submit' className='bg-emerald-500 p-2 my-2 rounded'>Save</button>
                </form>
                <div>
                    {subscriptionsData && subscriptionsData.map(subscription=>{
                        return(
                            <SubscriptionPreview subscription={subscription} selectedId={selectedSubscription} key={subscription.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AddSubscriptionForm;