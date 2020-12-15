import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { date, slot } = useParams();
    const history = useHistory();
    const key = date + slot;

    useEffect(() => {
        setFirstName(localStorage.getItem(`${key}-firstName`));
        setLastName(localStorage.getItem(`${key}-lastName`));
        setPhoneNumber(localStorage.getItem(`${key}-phoneNumber`));
    }, [key]);
   
    const submit = () => {
        localStorage.setItem(`${key}-firstName`, firstName);
        localStorage.setItem(`${key}-lastName`, lastName);
        localStorage.setItem(`${key}-phoneNumber`, phoneNumber);
        history.push('/');
    }

    return (
        <div className="p-8">
            <h1 className="heading">{slot}</h1>
            <form onSubmit={submit} className="container my-10 sm:my-20">
                <div className="fieldGroup">
                    <label className="fieldLabel">First Name</label>
                    <input 
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        id="firstName"
                        required
                        className="fieldInput"
                    />
                </div>

                <div className="fieldGroup">
                    <label className="fieldLabel">Last Name</label>
                    <input 
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        id="lastName"
                        className="fieldInput"
                    />
                </div>

                <div className="fieldGroup">
                    <label className="fieldLabel">Phone Number</label>
                    <input 
                        type="text"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        id="phoneNumber"
                        required
                        className="fieldInput"
                    />
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 text-white font-semibold my-10 sm:my-20">
                    <button 
                        type="reset" onClick={() => history.push('/')}
                        className="btn bg-red-600"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="btn bg-green-700"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;
