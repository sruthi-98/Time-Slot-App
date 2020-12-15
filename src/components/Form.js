import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Form() {
    const { slot } = useParams();
    const history = useHistory();

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
                    <input type="tel" name="" id=""/>
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
