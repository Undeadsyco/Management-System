import { useFormik } from "formik";
import * as Yup from 'yup';

import { Button } from "../globalComponents";

import { employeeActions } from '../../utils/clients/actions/bmsSystem'

// username should match regex pattern where first and last name are seperated by a period
// password should be at least 8 characters long and contain at least one number and one uppercase letter
const bmsValidation = Yup.object({
  username: Yup
    .string()
    .required('Please enter employee\'s username')
    .matches(/^[a-zA-Z]+\.[a-zA-Z]+$/, 'First and last name should be seperated by a period'),
  password: Yup
    .string()
    .required('Please enter employee\'s password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
      'Password should be at least 8 characters long and contain at least one number and one uppercase letter',
    ),
});

// pos validation schema
// username should be 4 characters long and contain only numbers
// password should be 4 to 6 characters long and contain only numbers
const posValidation = Yup.object({
  username: Yup.string().required().matches(/^[0-9]{4}$/, 'Username should be 4 characters long and contain only numbers'),
  password: Yup.string().required().matches(/^[0-9]{4,6}$/, 'Password should be 4 to 6 characters long and contain only numbers'),
});

export default function AccountModal({ accountType, accountModal, setAccountModal, employeeId }) {
  // init formik
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: accountType === 'bms' ? bmsValidation : posValidation,
    onSubmit: values => {
      const body = {
        key: accountType,
        value: values,
      }
      console.log(body);
      employeeActions.addEmployeeAccount(employeeId, body).then((date) => {
        if (date) {
          alert('Account successfully added to employee');
          setAccountModal(false);
        }
      });
    },
  });

  return (
    <div className={`${accountModal ? 'flex' : 'hidden'} abslolute flex-col items-center justify-center p-4 top-0 right-0 w-full h-full z-10`}>
      <h1 className='text-2xl font-bold my-4'>{accountType === 'bms' ? 'Business Management System' : 'Point of Sale'}</h1>
      <form onSubmit={formik.handleSubmit} className="account-modal-form">
        <label htmlFor="username">
          <h3>Username</h3>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            placeholder="Username"
          />
          {formik.touched.username && formik.errors.username && ( 
            <div className="text-red-500">{formik.errors.username}</div>
          )}
        </label>
        <label htmlFor="password">
          <h3>Password</h3>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
        </label>
        <div>
          {/* create submit and clear buttons */}
          <Button
            className='space-x-4 h-4/5 border-2 border-black py-2 px-4 rounded-full'
            label="Submit"
            type="submit"
          />
          <Button
            className='space-x-4 h-4/5 border-2 border-black py-2 px-4 rounded-full'
            label="Close"
            type="Button"
            onClick={() => {
              formik.resetForm();
              setAccountModal(false);
            }}
          />
        </div>
      </form>
    </div>
  );
}