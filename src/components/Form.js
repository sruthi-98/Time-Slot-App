import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { slot } = useParams();
    const history = useHistory();

    return (
        <div>
            <h1>{slot}</h1>
            <form>
                <div>
                    <label>First Name</label>
                    <input 
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input 
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Phone Number</label>
                    <input 
                        type="text"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
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
