import React from 'react';

export default function Form(props){
    const {
        values,
        change,
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
                    <input type='text' name='name' value= {values.name} checked='' onChange={onChange}/>
                </label>

                <label>{'Email '}
                    <input type='text' name='email' value={values.email} checked='' onChange={onChange}/>
                </label>

                <label>{'Password '}
                    <input type='password' name='password' value={values.password} checked='' onChange={onChange}/>
                </label>

                <label>{'Terms of Service '}
                    <input type='checkbox' name='tos' checked={values.tos} onChange={onChange}/>
                </label>

                <div className='submitButton'>
                <button disabled={true}>submit</button>
                </div>
            </div>
        </form>
    );
}