import React from 'react';

export const metadata = {
    title: 'Sport Club | Subscription',
    description: 'Subscriptions page of sport club app',
}

export default function SubscriptionsLayout({
                    children,
                }: {
    children: React.ReactNode
}) {
    return (
        <>{children}</>
    )
}
