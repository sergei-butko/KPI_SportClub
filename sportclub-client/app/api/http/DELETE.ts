import {apiBaseURL} from "@/consts";
import {signOut} from "next-auth/react";

export async function DELETE(endpoint: string, token?: string) {
    return await fetch(`${apiBaseURL}/${endpoint}`, {
        method: 'Delete',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then(response => {
        if (!response.ok) {
            if (response.status === 401) signOut({redirect: true, callbackUrl: '/auth/login'});
        } else {
            return response.json();
        }
    })
}