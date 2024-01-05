import React, {useState} from 'react';
import {giftDto} from "@/types/dto/giftDto";
import EditGift from "@/app/admin/edit-data/gifts/edit-gift";

export default function EditGiftList(props: { giftsData: giftDto[], access_token: string, callback: () => void }) {
    const [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <div>
            <input className='border-b-2 focus:outline-none my-3' type='text' placeholder='Search gift name...'
                   onInput={(e) => setSearchQuery(e.currentTarget.value)}/>
            {props.giftsData
                .filter(gift => gift.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .sort((a, b) => {
                    return b.isAvailable ? 1 : -1
                })
                .map(gift => {
                    return (
                        <EditGift gift={gift} access_token={props.access_token} key={gift.id}
                                  callback={props.callback}/>
                    )
                })
            }
        </div>
    );
}