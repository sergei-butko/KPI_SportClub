import {GET} from "@/app/api/http";

export async function getUserSubscriptions(userId: number, token: string){
    return await GET(`user-subscription/history/${userId}`, token);
}