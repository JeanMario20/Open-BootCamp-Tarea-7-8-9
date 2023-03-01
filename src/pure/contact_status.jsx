import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../components/array';
import UserForm from '../forms/userForm';


const ContactStatus = ({contact, connect, remove}) => {
    return (
        <div>
            <div>
            <table>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>number</th>
                        <th>status</th>
                    </tr>
                    <tr>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.number}</td>
                        <td>{contact.connect? 'Connect': 'Disconnect'}</td>
                        <td><button onClick={() => connect(contact)}>Disconnect</button></td>
                        <td><button onClick={() => remove(contact)}>Delete</button></td>
                    </tr>

                    <tr>
                        
                    </tr>
</table>
            </div>
            
        </div>
    );
}

ContactStatus.protoTypes ={
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.isRequired
}

export default ContactStatus;
