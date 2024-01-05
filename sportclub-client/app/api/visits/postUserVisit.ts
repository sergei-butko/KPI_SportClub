import {POST} from "@/app/api/http";

export async function postUserVisit(userId: number, access_token: string, body:{ date: string }){
    return await POST(`visits/${userId}`, access_token, body);
}