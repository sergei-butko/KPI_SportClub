import React, {useEffect, useState} from 'react';
import {getUserSubscriptions} from "@/app/api/user-subscriptions/getUserSubscriptions";
import {userSubscriptionDto} from "@/types/dto/userSubscriptionDto";
import SubscriptionCard from "@/components/subscription-card";
import SubscriptionHistory from "@/components/subscription-history";
import AddSubscription
    from "@/app/admin/manage-client/edit-client/[slug]/subscription/manage-subscription/add-subscription";
import DeleteSubscriptionButton
    from "@/app/admin/manage-client/edit-client/[slug]/subscription/manage-subscription/delete-subscription-button";

export default function Subscription(props: { userId: number, access_token: string }) {
    const [userSubscriptionsData, setUserSubscriptionsData] = useState<userSubscriptionDto[]>()
    const [activeSubscription, setActiveSubscription] = useState<userSubscriptionDto[]>()
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false);

    useEffect(() => {
        (async function () {
            await getUserSubscriptions(props.userId, props.access_token)
                .then(data => setUserSubscriptionsData(data));
        })()
    }, [updateTrigger])

    useEffect(() => {
        if (userSubscriptionsData) {
            setActiveSubscription(userSubscriptionsData.filter((userSubscription) => new Date(userSubscription.endDate) > new Date()))
        }

    }, [userSubscriptionsData])

    const updateSubscriptionData = () => {
        setUpdateTrigger(prevState => !prevState);
    }

    return (
        <>
            {userSubscriptionsData &&
                <div>
                    <p className='text-2xl font-bold text-sky-600 mb-2'>Current subscription</p>
                    {activeSubscription && activeSubscription.length !== 0
                        ? activeSubscription.map(userSubscription => {
                            return (
                                <>
                                    <SubscriptionCard userSubscriptionData={userSubscription}
                                                      key={userSubscription.id}/>
                                    <DeleteSubscriptionButton userSubscriptionId={userSubscription.id}
                                                              access_token={props.access_token}
                                                              callback={updateSubscriptionData}/>
                                </>
                            )
                        })
                        : <AddSubscription userId={props.userId} access_token={props.access_token}
                                           callback={updateSubscriptionData}/>
                    }
                    <SubscriptionHistory userSubscriptionsData={userSubscriptionsData}/>
                </div>
            }
        </>
    );
}
