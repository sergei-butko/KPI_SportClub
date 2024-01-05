import React, {FormEvent} from 'react';
import {deleteUserVisit} from "@/app/api/visits/deleteUserVisit";

function DeleteVisit(props:{updateCallback:()=>void, userId: number, access_token:string, targetDate: string}) {
        const deleteVisit = async (e: FormEvent) => {
        e.preventDefault();
        if (props.targetDate) {
            const visitToDelete = {
                date: props.targetDate
            }
            const response = await deleteUserVisit(props.userId, props.access_token, visitToDelete);
            if (response.status === 200) {
                alert('Visit was successfully deleted')
                props.updateCallback();
            }else if(response.status === 404){
                alert('No visits on this date. Cannot delete');
            }else{
                alert(response.statusText)
            }
        } else {
            alert('Visit date field is empty')
        }
    }

    return (
        <button className='bg-red-500 rounded p-2' onClick={deleteVisit}>Delete visit</button>
    );
}

export default DeleteVisit;