import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types'
import { Contact } from '../components/array.js';
import { STATUS } from '../components/connects_status'

const UserForm = ({add}) => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');
    const isConnectRef = useRef(false);

    
    
    function addUsers(e){
        e.preventDefault();
        const newUser = new Contact(
            nameRef.current.value,
            emailRef.current.value,
            numberRef.current.value,
            true
            //levelRef.current.value
        )
        add(newUser)
        }
    


    return (
        <div>
            <form onSubmit={addUsers}>
                <div>
                    <input ref={nameRef} type='text' placeholder='User Name'/>
                    <input ref={emailRef} type='text' placeholder='User email'/>
                    <input ref={numberRef} type='text' placeholder='User number'/>
                </div>
                <button type='submit'>add</button>
            </form>
        </div>
    );
}


UserForm.prototype = {
    add: PropTypes.func.isRequired
}
export default UserForm;

