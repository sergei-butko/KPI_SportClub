import React, {FormEvent} from 'react';
import {subscriptionDto} from "@/types/dto/subscriptionDto";

export default function SubscriptionForm(props: {
    onSubmit:(e:FormEvent, subscriptionId:number)=>void,
    nameRef:React.MutableRefObject<HTMLInputElement|null>,
    descriptionRef:React.MutableRefObject<HTMLTextAreaElement|null>,
    priceRef:React.MutableRefObject<HTMLInputElement|null>,
    durationRef:React.MutableRefObject<HTMLInputElement|null>,
    entryTimeRef:React.MutableRefObject<HTMLInputElement|null>,
    exitTimeRef:React.MutableRefObject<HTMLInputElement|null>,
    isAvailableRef:React.MutableRefObject<HTMLInputElement|null>,
    isAddForm:boolean,
    subscription?: subscriptionDto
}) {
    return (
        <div className='flex flex-col border-2 p-3 bg-gray-200 my-2 rounded border-sky-600'>
            <form onSubmit={(e)=>props.onSubmit(e, props.subscription? props.subscription.id: 0)} className="flex flex-col">
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="name" className='w-36'>Name</label>
                    <input type="text" id="name" name="name" required
                           placeholder={props.isAddForm ? 'Name...' : ''}
                           defaultValue={props.isAddForm ? '' : props.subscription?.name}
                           ref={props.nameRef}
                           minLength={2}
                           className="h-10 focus:outline-none p-1 border-gray-300 border-2 mb-2 w-full text-xl"/>
                </div>
                <div className='flex gap-4 mb-2'>
                    <label htmlFor="description" className='w-36'>Description</label>
                    <textarea id="description" name="description" required
                              placeholder={props.isAddForm ? 'Description...' : ''}
                              defaultValue={props.isAddForm ? '' : props.subscription?.description}
                              ref={props.descriptionRef}
                              minLength={6}
                              className="focus:outline-none p-1 border-gray-300 border-2 mb-2 h-32 w-full"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="price" className='w-36'>Price</label>
                    <input type="number" id="price" name="price" required
                           placeholder={props.isAddForm ? 'Price...' : ''}
                           defaultValue={props.isAddForm ? '' : props.subscription?.price}
                           ref={props.priceRef}
                           className="focus:outline-none p-1 border-gray-300 border-b-2 mb-2 w-full"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="duration" className='w-36'>Duration</label>
                    <input type="number" id="duration" name="duration" required
                           placeholder={props.isAddForm ? 'Duration...' : ''}
                           defaultValue={props.isAddForm ? '' : props.subscription?.duration}
                           ref={props.durationRef}
                           className="focus:outline-none p-1 border-gray-300 border-b-2 mb-2 w-full"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="entry_time" className='w-36'>Entry Time</label>
                    <input type="time" id="entry_time" name="entry_time" required
                           defaultValue={props.isAddForm ? '' : props.subscription?.entry_time}
                           ref={props.entryTimeRef}
                           className="focus:outline-none p-1 border-gray-300 border-b-2 mb-2 w-full"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="exit_time" className='w-36'>Exit Time</label>
                    <input type="time" id="exit_time" name="exit_time" required
                           defaultValue={props.isAddForm ? '' : props.subscription?.exit_time}
                           ref={props.exitTimeRef}
                           className="focus:outline-none p-1 border-gray-300 border-b-2 mb-2 w-full"/>
                </div>
                <div className='flex items-start gap-4 mb-2'>
                    <label htmlFor="isAvailable" className='w-36'>Is Available</label>
                    <input type="checkbox" id="isAvailable" name="isAvailable"
                           defaultChecked={props.isAddForm ?true: props.subscription?.isAvailable}
                           ref={props.isAvailableRef}
                           className="focus:outline-none p-1 border-gray-300 border-b-2"/>
                </div>
                <div className='flex gap-4'>
                    <button type='reset' className="rounded-md bg-slate-300 py-1 text-black text-lg w-20">Reset</button>
                    <button type="submit" className="rounded-md bg-cyan-950 py-1 text-white text-lg w-20">Save</button>
                </div>
            </form>
        </div>
    );
}