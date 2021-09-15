import React from 'react';
export default function Form(props){
    return(
        <form>
            <div>
                <label>{'Name'}
                    <input type='text' name='name' /*value=''*/ checked='' onChange=''/>
                </label>

                <label>{'Email '}
                    <input type='text' name='email' /*value=''*/ checked='' onChange=''/>
                </label>

                <label>{'Password '}
                    <input type='password' name='password' /*value=''*/ checked='' onChange=''/>
                </label>
                <label>{'Terms of Service '}
                    <input type='checkbox' name='tos' /*checked=''*/ onChange=''/>
                </label>
                <div className='submitButton'>
                <button disabled={true}>submit</button>
                </div>
            </div>
        </form>
    );
}