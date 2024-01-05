import React from 'react';

export const metadata = {
    title: 'Sport Club | Login',
    description: 'Login page of sport club app',
}

function LoginLayout({
                          children,
                      }: {
    children: React.ReactNode
}) {
    return (
        <>{children}</>
    )
}


export default LoginLayout;