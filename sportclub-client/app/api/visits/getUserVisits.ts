import {GET} from "@/app/api/http";

export async function getUserVisits(userId: number, token: string){
    return await GET(`visits/${userId}`, token);
}