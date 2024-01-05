import {GET} from "@/app/api/http";

export async function getUserGifts(userId: number, token: string){
    return await GET(`user-gifts/${userId}`, token);
}