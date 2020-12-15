import React from 'react';

function Form() {
    return (
        <div>
            <h1>{slot}</h1>
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" name="" id=""/>
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name="" id=""/>
                </div>

                <div>
                    <label>Phone Number</label>
                    <input type="number" name="" id=""/>
                </div>

                <div>
                    <button type="reset">Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
