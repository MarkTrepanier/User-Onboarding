 import * as yup from 'yup';

 const schema = yup.object().shape({
     
    name: yup.string().trim().required('Name is required!').min(2,'name must be 2 or more characters!'),
    email: yup.string().trim().email('must be a valid email!').required('email is required'),
    password: yup.string()
    .required('must include password!')
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,//regex ishard
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    tos: yup.boolean().oneOf([true],'must be cool'),
})

export default schema;