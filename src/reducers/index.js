import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';


const initialState = [
    
];

//URL is an object which should have the following
/*

*/

const urlReducer = (urls = initialState, action) => {
    switch(action.type){

        case 'POPULATE_URLS' : urls = action.payload; return urls;
        
        default : return urls;
         
        
            
            
    }

}
const combinedReducers =  combineReducers(
    {
        urlReducer : urlReducer,
        form : formReducer
       
    }
);

export default combinedReducers;