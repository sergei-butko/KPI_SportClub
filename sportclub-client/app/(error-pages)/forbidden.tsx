import React from 'react';

export default function ForbiddenPage() {
    return (
        <div className='flex flex-col items-center mt-20'>
            <p className='text-3xl font-bold text-red-600'>Forbidden</p>
            <p>You don`t have access to this page</p>
        </div>
    );
}

