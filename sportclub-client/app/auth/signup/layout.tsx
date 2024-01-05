import React from 'react';

export const metadata = {
    title: 'Sport Club | SignUp',
    description: 'SingUp page of sport club app',
}

function SignupLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>{children}</>
    )
}


export default SignupLayout;