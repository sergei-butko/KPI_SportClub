import {DELETE} from "@/app/api/http/DELETE";

export async function deleteUserGift(userId: number, userGiftId: number, token: string){
    return await DELETE(`user-gifts/${userId}/${userGiftId}`, token);
}