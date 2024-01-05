import React, {FormEvent, useRef} from 'react';
import {giftDto} from "@/types/dto/giftDto";
import {putGift} from "@/app/api/gifts/putGift";
import GiftForm from "@/app/admin/edit-data/gifts/gift-form";

function EditGift(props:{gift: giftDto, access_token: string, callback:()=>void}) {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const costRef = useRef<HTMLInputElement | null>(null);
    const isAvailableRef = useRef<HTMLInputElement | null>(null);

    async function onSubmit(e: FormEvent, giftId: number) {
        e.preventDefault();
        const giftToUpdate = {
            name: nameRef.current?.value,
            description: descriptionRef.current?.value,
            requiredAmountOfBonuses: costRef.current?.value,
            isAvailable: isAvailableRef.current?.checked
        }
        await putGift(giftId, props.access_token, giftToUpdate)
            .then(()=>{
                alert("Gift was successfully updated");
                props.callback();
            })
    }

    return (
            <GiftForm
                onSubmit={onSubmit}
                nameRef={nameRef}
                descriptionRef={descriptionRef}
                costRef={costRef}
                isAvailableRef={isAvailableRef}
                isAddForm={false}
                gift={props.gift}
            />
    );
}

export default EditGift;