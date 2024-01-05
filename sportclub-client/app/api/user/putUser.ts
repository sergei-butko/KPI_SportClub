import {PUT} from "@/app/api/http/PUT";

export async function putUser(userId: number, token: string, body: {
    firstName: string | undefined;
    lastName: string | undefined
}){
    return await PUT(`users/${userId}`, token, body)
}