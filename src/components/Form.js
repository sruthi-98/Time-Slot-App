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
            <h1 className="text-4xl text-white font-black text-center mt-4 mb-8 tracking-wide">{slot}</h1>
            <form onSubmit={submit} className="mx-auto w-6/12 my-20">
                <div className="flex text-white font-semibold my-6">
                    <label className="flex-1 py-4">First Name</label>
                    <input 
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        id="firstName"
                        className="flex-1 rounded-md px-4"
                    />
                </div>

                <div className="flex text-white font-semibold my-6">
                    <label className="flex-1 py-4">Last Name</label>
                    <input 
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        id="lastName"
                        className="flex-1 rounded-md px-4"
                    />
                </div>

                <div className="flex text-white font-semibold my-6">
                    <label className="flex-1 py-4">Phone Number</label>
                    <input 
                        type="text"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        id="phoneNumber"
                        className="flex-1 rounded-md px-4"
                    />
                </div>

                <div className="grid gap-10 grid-cols-2 text-white font-semibold my-20">
                    <button 
                        type="reset" onClick={() => history.push('/')}
                        className="py-4 font-semibold bg-red-500 rounded-md"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="py-4 font-semibold bg-green-700 rounded-md"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;
