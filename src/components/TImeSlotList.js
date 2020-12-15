import React from 'react';

function TImeSlotList() {
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

    const generateSlots = (timeSlots) => {
        const slots = timeSlots.map(slot => {
            return (
                <li>{slot}</li>
            )
        });
        return slots;
    }
    
    return (
        <div>
            <h1>{getTodayDate()}</h1>
            <ul>{generateSlots(timeSlots)}</ul>
        </div>
    )
}

export default TImeSlotList;
