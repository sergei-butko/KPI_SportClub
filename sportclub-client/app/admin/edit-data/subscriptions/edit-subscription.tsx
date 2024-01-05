import React, {FormEvent, useRef} from 'react';
import {putSubscription} from "@/app/api/subscription/putSubscription";
import {subscriptionDto} from "@/types/dto/subscriptionDto";
import SubscriptionForm from "@/app/admin/edit-data/subscriptions/subscription-form";

function EditSubscription(props:{subscription: subscriptionDto, access_token: string, callback:()=>void}) {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const priceRef = useRef<HTMLInputElement | null>(null);
    const durationRef = useRef<HTMLInputElement | null>(null);
    const entryTimeRef = useRef<HTMLInputElement | null>(null);
    const exitTimeRef = useRef<HTMLInputElement | null>(null);
    const isAvailableRef = useRef<HTMLInputElement | null>(null);
    async function onSubmit(e: FormEvent, subscriptionId: number) {
        e.preventDefault();
        const subscriptionToUpdate = {
            name: nameRef.current?.value,
            description: descriptionRef.current?.value,
            price: priceRef.current?.value,
            duration: durationRef.current?.value,
            entry_time: entryTimeRef.current?.value,
            exit_time: exitTimeRef.current?.value,
            isAvailable: isAvailableRef.current?.checked
        }
        await putSubscription(subscriptionId, props.access_token, subscriptionToUpdate)
            .then(()=>{
                alert("Subscription was successfully updated")
                props.callback();
            });
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
                          isAddForm={false}
                          subscription={props.subscription}
        />
    );
}

export default EditSubscription;