import React from 'react';

function TImeSlotList() {
    const getTodayDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    return (
        <div>
            <h1>{getTodayDate()}</h1>
        </div>
    )
}

export default TImeSlotList;
