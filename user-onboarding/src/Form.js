import React from 'react';

export default function Form(props){
    const {
        values,
        change,
        disabled,
        errors,
        submit

    } = props;

    const onSubmit = evt =>{
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return(
        <form onSubmit={onSubmit}>
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

                <label>{'Terms of Service '}
                    <input type='checkbox' name='tos' checked={values.tos} onChange={onChange}/>
                </label>

                <div className='submitButton'>
                <button disabled={disabled} type='submit'>submit</button>
                </div>
            </div>

            {errors.length <= 0 ? <></> :
                <div className='errors'style={{color: 'red'}}>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.passwordConfirmation}</div>
                <div>{errors.tos}</div>
            </div>}
        </form>
    );
}