import React from 'react';

function TImeSlotList() {
    // Returns date in DD-Month-YYYY format
    const getTodayDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    // Hard coded timeslot array
    const timeSlots = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
    
    return (
        <div>
            <h1>{getTodayDate()}</h1>
        </div>
    )
}

export default TImeSlotList;
