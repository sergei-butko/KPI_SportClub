import {GET} from "@/app/api/http";

export async function getUserActiveSubscriptions(userId: number, token: string){
    return await GET(`user-subscription/active/${userId}`, token);
}