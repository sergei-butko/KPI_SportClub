import React, {FormEvent, useRef} from 'react';
import {postGift} from "@/app/api/gifts/postGift";
import GiftForm from "@/app/admin/edit-data/gifts/gift-form";

function AddGift(props: { access_token: string, callback: () => void }) {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const costRef = useRef<HTMLInputElement | null>(null);
    const isAvailableRef = useRef<HTMLInputElement | null>(null);

    async function onSubmit(e: FormEvent, giftId: number) {
        console.log(giftId);
        e.preventDefault();
        const giftToAdd = {
            name: nameRef.current?.value,
            description: descriptionRef.current?.value,
            requiredAmountOfBonuses: costRef.current?.value,
            isAvailable: isAvailableRef.current?.checked
        }
        await postGift(props.access_token, giftToAdd)
            .then(() => {
                alert("Gift was successfully added")
                props.callback();
            })
            .catch(error => alert(error))
    }

    return (
        <div>
            <GiftForm
                      onSubmit={onSubmit}
                      nameRef={nameRef}
                      descriptionRef={descriptionRef}
                      costRef={costRef}
                      isAvailableRef={isAvailableRef}
                      isAddForm={true}/>
        </div>
    );
}

export default AddGift;