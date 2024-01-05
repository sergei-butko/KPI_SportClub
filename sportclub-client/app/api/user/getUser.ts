import {GET} from "@/app/api/http";

export async function getUser(userId: number, token: string){
    return await GET(`users/${userId}`, token);
}