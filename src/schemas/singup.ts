import * as yup from 'yup';

export const userSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  contactNo: yup.string().required('Contact No is required'),
  gender: yup.string().required('Gender is required'),
  password: yup.string().required('Password is required'),

});
