import {Session} from "next-auth";
import {RoleEnum} from "@/enums";

export function checkAccessRights(session: Session, allowedRoles: RoleEnum[]){
    let isAllowed = false;
    allowedRoles.forEach(allowedRole =>{
        if(session.user.roleId === allowedRole) isAllowed = true;
    })
    return isAllowed;
}