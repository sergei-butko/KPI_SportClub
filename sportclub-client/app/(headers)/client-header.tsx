import React from 'react';
import {activeLinkClassName} from "@/consts/tailwindClassSets";

export default function ClientHeader(props: { path: string }) {
    return (
        <div className='flex gap-7'>
            <a className={props.path === '/' ? activeLinkClassName : ''} href="/">Home</a>
            <a className={props.path === '/subscriptions' ? activeLinkClassName : ''} href="/subscriptions">
                Club Info</a>
            <a className={props.path.split('/')[2] === 'account' ? activeLinkClassName : ''}
               href="/client/account#profile">Profile</a>
            <a className={props.path.split('/')[2] === 'qr-code' ? activeLinkClassName : ''}
               href="/client/qr-code">QR</a>
        </div>
    );
}