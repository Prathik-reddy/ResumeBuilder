import * as contactActions from "contactActions";

export const setContact = (contact)=>{
    return {
        type : contactActions.SET_CONTACT,
        payload : contact
    }
}

export const UpdateContact = (contact)=>{
    return {
        type : contactActions.UPDATE_CONTACT,
        payload : contact
    }
}