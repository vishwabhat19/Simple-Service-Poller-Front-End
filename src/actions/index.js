//Payload in add url should contain the actual url and the name of the url
export const addUrl = (payload) => {
    return{
        type: 'ADD_URL',
        payload : payload
    }
};


export const deleteUrl = (id) => {

    return{
        type: 'DELETE_URL',
        payload : id
    }
};

