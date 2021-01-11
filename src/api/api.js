

import axios from 'axios';



export const fetchData = async () => {
    try {
      console.log('Inside Fetch Data');
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };



 
  export const postData = async (payload) => {
    

   await axios.post(`http://localhost:8080/addService`, { name: payload.name,
    url: payload.url })
    .then(res => {
  
  
  
});


  }


  export const deleteData = async (deleteService) => {
   


   console.log('INSIDE deleteData()' + deleteService);

    const res = await axios.delete('http://localhost:8080/deleteService', { data: { id: deleteService } });


    //const res = await axios.delete('http://localhost:8080/deleteService', { data: { service} });

    console.log(res);


    
    
      }