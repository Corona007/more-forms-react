import React, { useState } from 'react';
import App from '../../../more-forms/src/App';
const MoreFormComp = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        // fName: false
    })
    const onChangeHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
        setFormState({
            // ...formState,
            // fName: true
        })
    }
    // let message = "";
    // if(formState.firstName.length < 2 && formState.firstName.length != 0){
    //     message = "Name needs to be at least 2 characters";
    // }
    return(
        <div>
            {/* <h1>{message}</h1> */}
            
            
            
            
            
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>
                <input type="submit"/>
            </form>
            <h3>First Name:{formState.firstName}</h3><h4>{formState.firstName.length < 2 && formState.firstName.length !=0 ? "First Name needs to be at least 2 characters" : ''}</h4>
            <h3>Last Name:{formState.lastName}</h3><h4>{formState.lastName.length < 2 && formState.lastName.length !=0 ? "Last Name needs to be at least 2 characters" : ''}</h4>
            <h3>Email:{formState.email}</h3><h4>{formState.email.length < 5 && formState.email.length !=0 ? "First Name needs to be at least 5 characters" : ''}</h4>
            <h3>Password:{formState.password}</h3><h4>{formState.password.length < 8 && formState.password.length !=0 ? "First Name needs to be at least 8 characters" : ''}</h4>
            <h3>Confirm Password:{formState.confirmPassword}</h3><h4>{formState.password != formState.confirmPassword && formState.confirmPassword.length !=0 ? "Passwords need to match" : ''}</h4>
        </div>
    )
}

export default MoreFormComp;