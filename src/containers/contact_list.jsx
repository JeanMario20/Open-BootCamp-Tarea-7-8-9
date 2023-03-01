import React, {useState} from 'react';
import { Contact } from '../components/array.js';
import UserForm from '../forms/userForm';
import ContactStatus from '../pure/contact_status';

const ContactList = () => {

    
    const defaultContact = new Contact('jean','correo@gmail','909564',true)
    const defaultContact2 = new Contact('alex','correo@gmailalex','11111',false)
    

    const [contact, setContact] = useState([defaultContact,defaultContact2]);
    
    function ConnectUser(contacts){
        console.log('change this user', contacts);
        //agarramos el indice de la lista
        const index = contact.indexOf(contacts);
        //nos traemos todas las listas
        const tempTasks = [...contact];
        //cambiamos los valores que queramos en este caso la del valor 'connect' de las listas, se cambiaran mediante un button
        tempTasks[index].connect = !tempTasks[index].connect
        // We update the state of the component with the new listos of tasks and it will update the 
        // Iteration fo the tasks in order to show the task updated
        setContact(tempTasks);
    }

    function deleteUser(contacts) {
        console.log('deleted this user', contacts);
        const index = contact.indexOf(contacts);
        const tempUser = [...contact];
        tempUser.splice(index,1);
        setContact(tempUser)
    }

    function addUser(contacts){
        console.log('add this user', contacts);
        const tempUser = [...contact];
        tempUser.push(contacts)
        setContact(tempUser);
    }

    return (
        <div>
                {contact.map((contact,index) => {
                    return(
                        <ContactStatus
                        key={index}
                        contact={contact}
                        connect={ConnectUser}
                        remove={deleteUser}>
                        </ContactStatus>
                    )
                })}

                <UserForm add={addUser}></UserForm>
                
        </div>
        
        
    );
}

export default ContactList;
