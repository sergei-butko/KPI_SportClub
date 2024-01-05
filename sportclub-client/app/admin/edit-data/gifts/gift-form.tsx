import React, {FormEvent} from 'react';
import {darkGrayButton, grayButton} from "@/consts/tailwindClassSets";
import {giftDto} from "@/types/dto/giftDto";

export default function GiftForm(props: {
    onSubmit:(e:FormEvent, giftId:number)=>void,
    nameRef:React.MutableRefObject<HTMLInputElement|null>,
    descriptionRef:React.MutableRefObject<HTMLTextAreaElement|null>,
    costRef:React.MutableRefObject<HTMLInputElement|null>,
    isAvailableRef:React.MutableRefObject<HTMLInputElement|null>,
    isAddForm:boolean,
    gift?: giftDto
}) {

    return (
        <div>
            <form onSubmit={(e)=>props.onSubmit(e, props.gift? props.gift?.id: 0)} className="flex flex-col border-2 p-3 bg-gray-200 my-2 rounded border-sky-600">
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="name" className='w-36'>Name</label>
                    <input type="text" id="name" name="name" required
                           ref={props.nameRef}
                           minLength={2}
                           placeholder={props.isAddForm ? 'Name...' : ''}
                           defaultValue={props.isAddForm ? '' : props.gift?.name}
                           className="h-10 focus:outline-none p-1 border-gray-300 border-b-2 w-full text-xl"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="description" className='w-36'>Description</label>
                    <textarea id="description" name="description" required
                              placeholder={props.isAddForm ? 'Description...' : ''}
                              defaultValue={props.isAddForm ? '' : props.gift?.description}
                              ref={props.descriptionRef}
                              minLength={6}
                              className="focus:outline-none p-1 border-gray-300 border-b-2 w-full"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="cost" className='w-36'>Cost (amount of bonuses)</label>
                    <input type="number" id="cost" name="cost" required
                           placeholder={props.isAddForm ? 'Cost...' : ''}
                           defaultValue={props.isAddForm ? '' : props.gift?.requiredAmountOfBonuses}
                           ref={props.costRef}
                           className="focus:outline-none p-1 border-gray-300 border-b-2 w-full"/>
                </div>
                <div className='flex items-start gap-4 mb-2'>
                    <label htmlFor="isAvailable" className='w-36'>Is Available</label>
                    <input type="checkbox" id="isAvailable" name="isAvailable"
                           defaultChecked={props.isAddForm ? true : props.gift?.isAvailable}
                           ref={props.isAvailableRef}
                           className="focus:outline-none p-1 border-gray-300 border-b-2"/>
                </div>
                <div className='flex gap-4'>
                    <button type='reset' className={grayButton}>Reset</button>
                    <button type="submit" className={darkGrayButton}>Save</button>
                </div>
            </form>
        </div>
    );
}