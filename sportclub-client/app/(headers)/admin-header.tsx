import React from 'react';
import {activeLinkClassName} from "@/consts/tailwindClassSets";

function AdminHeader(props: { path: string }) {
    return (
        <div className='flex gap-8'>
            <a className={props.path === '/' ? activeLinkClassName : ''} href="/">Home</a>
            <a className={props.path.split('/')[2] === 'edit-data' ? activeLinkClassName : ''}
               href='/admin/edit-data/subscriptions#edit'>Edit data</a>
            <a className={props.path.split('/')[2] === 'manage-client' ? activeLinkClassName : ''}
               href="/admin/manage-client/edit-client">Manage client</a>
        </div>
    );
}

export default AdminHeader;