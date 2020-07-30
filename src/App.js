import React, {Component} from 'react';

import './App.css';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';




class App extends Component{

  state = {
    services: [],
    name:'',
    url:''
  }

  componentDidMount(){
    axios.get('http://localhost:8080/service').then(response =>{
      this.setState({services:response.data});

      //console.log(response);
    });
    setInterval(this.poller, 4000);
  }

  //This is poller method that makes calls to the service to update the status
  poller = () =>{
    //console.log('Inside Poller');
      axios.get('http://localhost:8080/service').then(response =>{
      this.setState({services:response.data});

      //console.log(response);
    });
   
  }

  //Method to add a service based
  addUrl = () =>{
    
    
    axios.post(`http://localhost:8080/service`, { name: this.state.name,
    url: this.state.url })
    .then(res => {
      
      axios.get('http://localhost:8080/service').then(response =>{
      this.setState({services:response.data});

      //console.log(response);
    });

     
    })
  }
  

  //Method to delete a service based on the service name
  deleteUrl = (name) =>{
   
   
    axios.delete(`http://localhost:8080/service/${name}`)
    .then(res => {
      
      axios.get('http://localhost:8080/service').then(response =>{
      this.setState({services:response.data});

      //console.log(response);
    });

     
    })
}

//Handle Name change method
handleNameChange = (e) =>{
  this.setState({
    name: e.target.value
  })
}

//Handle Name change method
handleUrlChange = (e) =>{
  this.setState({
    url: e.target.value
  })
}

  render(){

    const renderServices = this.state.services.map(
      service =>{
        return(
          <tr key={service.name}>
            <td>{service.name}</td>
            <td>{service.value.url}</td>
            <td>{service.value.status}</td>
            <td>{service.value.date}</td>
            <td>
              <ReactBootStrap.Button button variant="danger" onClick={() => {if(window.confirm('Delete the '+service.name+' service?')){this.deleteUrl(service.name)};}} >Delete</ReactBootStrap.Button>
            </td>
          </tr>
  )
      }
    );  
    
    
   
    
    return(
      <div>
        <ReactBootStrap.Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderServices}
          </tbody>
        </ReactBootStrap.Table>
        
        <br />
        <h2 style={{color:"white",textAlign:"center",background:"black"}}>Add Service</h2>
        <br />
        <div style={{textAlign:"center",display: "inline-block",marginLeft:"38%"}}>
        <ReactBootStrap.Form onSubmit={this.addUrl}>
          <ReactBootStrap.Form.Group>
              <ReactBootStrap.Form.Label>Service Name</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control style={{width: "370px"}} type="text" placeholder="Name" value={this.state.name} onChange = {this.handleNameChange} />
              <br />
              <ReactBootStrap.Form.Label>Service URL</ReactBootStrap.Form.Label>
              <ReactBootStrap.Form.Control style={{width: "370px"}} type="text" placeholder="URL" value={this.state.url} onChange = {this.handleUrlChange} />
          </ReactBootStrap.Form.Group>
          <ReactBootStrap.Button variant="primary" type="submit">
            Submit
          </ReactBootStrap.Button>
        </ReactBootStrap.Form>
        </div>
        
        </div>
        
    );
}


}

export default App;
