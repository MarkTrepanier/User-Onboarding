 import * as yup from 'yup';

 const schema = yup.object().shape({
    name: yup.string().trim().required('Name is required!').min(2,'name must be 2 or more characters!'),
    email: yup.string().email('must be a valid email!').required('email is required'),
    password: yup.string().required('must include password!'),
    passwordConfirmation: yup.string()
 .oneOf([yup.ref('password'),/*null*/], 'passwords must match'),
    tos:false,
})

export default schema;