import React from 'react';
import {connect} from 'react-redux';
import * as ReactBootStrap from 'react-bootstrap';

class UrlList extends React.Component{

    componentDidMount(){

        this.dispatchActionGet();

        setInterval(this.dispatchActionGet, 4000);

        
      }

      dispatchActionGet = () =>{
        this.props.dispatch({ type: 'GET_URLS' })
      }

      dispatchActionDelete = (id) =>{
        this.props.dispatch({ type: 'DELETE_URLS', payload : {
            id
        } })
      }

      


    renderList = () => {

        
        
        return this.props.urlReducer.map(
            (url) => {return (

                <tr key={url.id}>
                        <td>{url.name}</td>
                        <td>{url.url}</td>
                        <td>{url.status}</td>
                        <td>
                        <ReactBootStrap.Button variant="danger" onClick={() => this.dispatchActionDelete(url.id)}>Delete</ReactBootStrap.Button>
                        </td>
                </tr>
                
            )
                
            }
        )
    }
   

    render()
        {

            
            return(

                        <div>
                            
                        <ReactBootStrap.Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>URL</th>
                                <th>Status</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.renderList()}
                            </tbody>
                        </ReactBootStrap.Table>
                        </div>

                        
                
            )
        }
    
    
}

const mapStateToProps = (completeStoreState) => {


    return{
        urlReducer : completeStoreState.urlReducer
        
    };

};

//selectSong is an action from the actions folder
export default connect(mapStateToProps)(UrlList);