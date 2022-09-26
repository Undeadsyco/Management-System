import { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'

import { mainActions } from '../../utils/clients/actions/bmsSystem';

// username should match rexex pattern to have period between first and last name
// password should match regex pattern to be at least 8 characters long include a number and uppercase letter
const validation = Yup.object({
  username: Yup.string().required('Please enter your username').matches(/^[a-zA-Z]+(\.[a-zA-Z]+)?$/, 'Your first and last name must be separated by a period'),
  password: Yup.string().required('Please enter your password').matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must be at least 8 characters long and include a number and uppercase letter'),
})

export default function Login() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  // initualize formik and pass in the validation schema
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values, actions) => {
      // console.log(values);
      mainActions.login(values).then((employee) => {
        if (employee?.['_id']) {
          alert('Login Successful');
          actions.resetForm();
          router.push('/bms_system');
        }
      });
    }
  });

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <label htmlFor="username">
          <h3>Username:</h3>
          <input type="text" id="username" name="username" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} />
          {formik.errors.username && formik.touched.username && <p className='error'>{formik.errors.username}</p>}
        </label>

        <label htmlFor="password">
          <h3>Password</h3>
          <div className='relative'>
            <input type={isVisible ? "text" : "password"} id="password" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} ></input>
            {isVisible
              ? <EyeOffIcon className='w-6 h-6 absolute right-1 top-1' onClick={() => setIsVisible(false)} />
              : <EyeIcon className='w-6 h-6 absolute right-1 top-1' onClick={() => setIsVisible(true)}/>
            }
          </div>
          {formik.errors.password && formik.touched.password && <p className='error'>{formik.errors.password}</p>}
        </label>
        <div>
          <button type="reset">Clear</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}