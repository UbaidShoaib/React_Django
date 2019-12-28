import axios from "axios";
import {GET_LEADS,DELETE_LEAD,ADD_LEAD,GET_ERRORS} from "./types";
import {createMessage, returnErrors} from "./messages";

export const getLeads =() => dispach => {
    axios.get('/api/leads/')
        .then(res =>{
            dispach({
                type:GET_LEADS,
                payload:res.data
            });
        })
        .catch(err => returnErrors(dispach(err.response.data, err.response.status)));
};

export const deleteLead = id => dispach => {
    axios.delete(`/api/leads/${id}/`)
        .then(res =>{
            dispach(createMessage({deleteLead:"Lead Deleted"
            }));
            dispach({
                type:DELETE_LEAD,
                payload:id
            });
        })
        .catch(err =>console.log(err));

};

export const addLead = lead => dispach => {
    axios.post('/api/leads/',lead)
        .then(res =>{
            dispach(createMessage({addLead:"Lead Added"
            }));
            dispach({
                type:ADD_LEAD,
                payload:res.data
            });
        })
        .catch(err =>dispach(returnErrors(err.response.data, err.response.status)));
};
