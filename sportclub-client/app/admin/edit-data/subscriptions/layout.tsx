import React from 'react';

export const metadata = {
    title: 'Sport Club | Admin | Subscriptions',
    description: 'Bonuses page of sport club app',
}

export default function SubscriptionsLayout({
                                          children,
                                      }: {
    children: React.ReactNode
}) {
    return (
        <div className='container mx-auto xl:px-10 lg:px-5'>{children}</div>
    )
}

