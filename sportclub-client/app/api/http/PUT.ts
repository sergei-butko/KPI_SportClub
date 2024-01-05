import {apiBaseURL} from "@/consts";
import {signOut} from "next-auth/react";

export async function PUT(endpoint: string, token: string, body?:object){
    return await fetch(`${apiBaseURL}/${endpoint}`,{
        method: 'PUT',
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',

        }, body: JSON.stringify(body)
    }).then(response=>{
        if(!response.ok) {
            if( response.status === 401) signOut({redirect: true, callbackUrl: '/auth/login'});
            throw new Error(response.statusText)
        }else{
            return response.json()
        }
    })
}