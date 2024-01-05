import {GET} from "@/app/api/http";

export async function getUserByPhoneNumber(phoneNumber: string, token: string){
    return await GET(`users/phone/${phoneNumber}`, token)
}