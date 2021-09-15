import React from 'react';

export default function Form(props){
    const {
        values,
        change,
        disabled,
    } = props;

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, value);
    }

    return(
        <form>
            <div>
                <label>{'Name '}
                    <input type='text' name='name' value= {values.name}  onChange={onChange}/>
                </label>

                <label>{'Email '}
                    <input type='text' name='email' value={values.email}  onChange={onChange}/>
                </label>

                <label>{'Password '}
                    <input type='password' name='password' value={values.password}  onChange={onChange}/>
                </label>
                <label>{'Password Confirmation '}
                    <input type='password' name='password confirmation' value={values.passwordConfirmation}  onChange={onChange}/>
                </label>

                <label>{'Terms of Service '}
                    <input type='checkbox' name='tos' checked={values.tos} onChange={onChange}/>
                </label>

                <div className='submitButton'>
                <button disabled={disabled}>submit</button>
                </div>
            </div>
        </form>
    );
}