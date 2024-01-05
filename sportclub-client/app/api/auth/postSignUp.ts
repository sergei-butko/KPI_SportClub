import {POST} from "@/app/api/http";

export async function postSignUp(body: {
    birthday: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    password?: string | undefined;
    phone: string | undefined;
    email: string | undefined
}){
    return await POST(`auth/signup`, '', body);
}