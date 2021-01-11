import { call, put, takeEvery, all } from 'redux-saga/effects';
import { fetchData,postData,deleteData } from "../api/api";


//const delay = (ms) => new Promise(res => setTimeout(res , ms));



 export function* getApiData(action) {
    try {
        console.log('GET URLS has been called!!');
      // do api call
      const data = yield call(fetchData);
      console.log(data);
      yield put({
          type : 'POPULATE_URLS',
          payload : data
      });
    } catch (e) {
      console.log(e);
    }
  }

  export function* postApiData(action) {
    try {
        console.log('POST URLS has been called!!');
      // do api call
      yield call(postData,action.payload);

      const data = yield call(fetchData);
      console.log(data);
      yield put({
          type : 'POPULATE_URLS',
          payload : data
      });
    
    
      
    } catch (e) {
      console.log(e);
    }
  }


  export function* deleteApiData(action) {
    try {
       
        
      // do api call

      console.log(action.payload);
      yield call(deleteData,action.payload.id);

      const data = yield call(fetchData);
      console.log(data);
      yield put({
          type : 'POPULATE_URLS',
          payload : data
      });
    
      
    } catch (e) {
      console.log(e);
    }
  }
  
 
  export function* watchGetUrls() {
      
    yield takeEvery('GET_URLS', getApiData);
    
  }

  export function* watchAddUrl() {
    yield takeEvery('ADD_URLS', postApiData);
    
  }

  
  export function* watchDeleteUrl() {
    yield takeEvery('DELETE_URLS', deleteApiData);
    
  }

export default function* rootSaga() {
    yield all([
      watchGetUrls(),
      watchAddUrl(),
      watchDeleteUrl()
    ])
  }