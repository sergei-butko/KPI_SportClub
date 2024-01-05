import React from 'react';

export const metadata = {
    title: 'Sport Club | Manage User',
    description: 'Subscriptions page of sport club app',
}

export default function ManageUserLayout({
                                                children,
                                            }: {
    children: React.ReactNode
}) {
    return (
        <div className='container mx-auto xl:px-10 lg:px-5'>{children}</div>
    )
}
