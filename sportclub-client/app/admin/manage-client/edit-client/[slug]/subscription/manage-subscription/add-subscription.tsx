import React from 'react';
import AddSubscriptionForm
    from "@/app/admin/manage-client/edit-client/[slug]/subscription/manage-subscription/add-subscription-form";
import WarningInlineMessage from "@/components/warning-inline-message";

function AddSubscription(props: { userId: number, access_token: string, callback:()=>void }) {
    return (
        <>
            <WarningInlineMessage textContent="Client doesn't have active subscription"/>
            <AddSubscriptionForm userId={props.userId} access_token={props.access_token} callback={props.callback} />
        </>
    );
}

export default AddSubscription;