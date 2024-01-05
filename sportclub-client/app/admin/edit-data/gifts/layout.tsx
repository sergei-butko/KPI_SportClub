import React from 'react';

export const metadata = {
    title: 'Sport Club | Admin | Gifts',
    description: 'Admin Gifts page of sport club app',
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
