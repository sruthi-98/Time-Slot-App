import React from 'react';
import { useHistory } from 'react-router-dom';

function TimeSlotList() {
    const history = useHistory();

    // Hard coded timeslot array
    const timeSlots = ['9 am - 10 am', '10 am - 11 am', '11 am - 12 pm', '12 pm - 1 pm', '1 pm - 2 pm', '2 pm - 3 pm', '3 pm - 4 pm', '4 pm - 5 pm'];

    // Returns date in DD-Month-YYYY format
    const getTodayDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    const date = getTodayDate();

    const generateSlots = (timeSlots) => {
        const slots = timeSlots.map(slot => {
            const key = date + slot;
            const savedBG = localStorage.getItem(`${key}-firstName`) !== null ? "bg-red-600" : "";
            return (
                <li 
                    onClick={() => history.push(`/form/${date}/${slot}`)}
                    className={`text-white font-semibold uppercase p-5 m-6 rounded-lg cursor-pointer tracking-wider ${savedBG}`}
                >
                    {slot}
                </li>
            )
        });
        return slots;
    }
    
    return (
        <div className="p-8 container">
            <h1 className="heading">{date}</h1>
            <ul>{generateSlots(timeSlots)}</ul>
        </div>
    )
}

export default TimeSlotList;
