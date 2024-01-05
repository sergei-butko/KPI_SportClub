import React, {FormEvent, useRef} from 'react';
import {postSubscription} from "@/app/api/subscription/postSubscription";
import SubscriptionForm from "@/app/admin/edit-data/subscriptions/subscription-form";

function AddSubscription(props: { access_token: string, callback: () => void }) {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const priceRef = useRef<HTMLInputElement | null>(null);
    const durationRef = useRef<HTMLInputElement | null>(null);
    const entryTimeRef = useRef<HTMLInputElement | null>(null);
    const exitTimeRef = useRef<HTMLInputElement | null>(null);
    const isAvailableRef = useRef<HTMLInputElement | null>(null);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        const subscriptionToAdd = {
            name: nameRef.current?.value,
            description: descriptionRef.current?.value,
            price: priceRef.current?.value,
            duration: durationRef.current?.value,
            entry_time: entryTimeRef.current?.value,
            exit_time: exitTimeRef.current?.value,
            isAvailable: isAvailableRef.current?.checked
        }
        await postSubscription(props.access_token, subscriptionToAdd)
            .then(() => {
                alert("Subscription was successfully added")
                props.callback();
            })
    }

    return (
        <SubscriptionForm onSubmit={onSubmit}
                          nameRef={nameRef}
                          descriptionRef={descriptionRef}
                          priceRef={priceRef}
                          durationRef={durationRef}
                          entryTimeRef={entryTimeRef}
                          exitTimeRef={exitTimeRef}
                          isAvailableRef={isAvailableRef}
                          isAddForm={true}/>
    );
}

export default AddSubscription;