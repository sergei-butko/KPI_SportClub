import {GET} from "@/app/api/http";

export async function getAllSubscriptions(){
    return await GET('subscriptions');
}