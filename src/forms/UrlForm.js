import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, reset} from 'redux-form';
import * as ReactBootStrap from 'react-bootstrap';
import {withRouter} from 'react-router';




class UrlForm extends React.Component{

    afterSubmit = (result, dispatch) =>
    dispatch(reset('ordersTradesSearchForm'));


    renderError({error, touched}){
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }


    onSubmit = (formValues) => {
        
      console.log('Inside submit form'+formValues);
        this.props.dispatch({ 
            type: 'ADD_URLS',
            payload : {
                name : formValues.name,
                url : formValues.url
            }
        })
       this.props.reset();
       this.props.history.push('/');
    }
    renderInput = ({ input, label, meta }) => {

        const className = `field ${meta.error && meta.touched ? 'error' : '' }`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                <div>
                    {this.renderError(meta)}
                </div>
            </div>
        )

    }

    render(){
        return(
                    <div>
                       
                {/* <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                    <Field name='name' component={this.renderInput} label='Name:'/>   
                    <Field name='url' component={this.renderInput} label='Url:'/>   
                    <button className='ui button primary'>Submit</button>
                </form> */}

                    <ReactBootStrap.Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <ReactBootStrap.Form.Group>
                            <Field name='name' component={this.renderInput} label='Name:' />   
                            <Field name='url' component={this.renderInput} label='Url:'/>  
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Button variant="primary" type="submit">
                            Submit
                        </ReactBootStrap.Button>
                </ReactBootStrap.Form>

                    </div>
            
        )
    }
}

const validate = (formValues) => {

    const errors = {};


    if(!formValues.name){
        //If the user has not entered a title
        errors.title = 'Please enter a name!';
    }
    if(!formValues.url){
        //If the user has not entered a duration
        errors.duration = 'Please enter a url!'
    }


    return errors;
};


const formWrapped =  reduxForm({
    form : 'urlForm',
    validate : validate,
    
})(UrlForm);

export default withRouter(connect(null)(formWrapped));

 