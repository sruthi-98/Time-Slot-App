import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { date, slot } = useParams();
    const history = useHistory();

    useEffect(() => {
        setFirstName(localStorage.getItem(`${slot}-firstName`));
        setLastName(localStorage.getItem(`${slot}-lastName`));
        setPhoneNumber(localStorage.getItem(`${slot}-phoneNumber`));
    }, [slot]);
   
    const submit = () => {
        localStorage.setItem(`${slot}-firstName`, firstName);
        localStorage.setItem(`${slot}-lastName`, lastName);
        localStorage.setItem(`${slot}-phoneNumber`, phoneNumber);
        history.push('/');
    }

    return (
        <div>
            <h1>{slot}</h1>
            <form onSubmit={submit}>
                <div>
                    <label>First Name</label>
                    <input 
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        id="firstName"
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input 
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        id="lastName"
                    />
                </div>

                <div>
                    <label>Phone Number</label>
                    <input 
                        type="text"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        id="phoneNumber"
                    />
                </div>

                <div>
                    <button type="reset" onClick={() => history.push('/')}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
