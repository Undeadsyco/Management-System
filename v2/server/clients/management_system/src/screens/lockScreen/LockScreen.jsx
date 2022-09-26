import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Container from './styles';

const validation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

function LockScreen({ submit }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      submit(values).then((res) => {
        if (!res) alert('something went wrong');
        else {
          alert(res.message);
          dispatch({ type: 'LOGIN', data: res.user });
          navigate('/');
        }
      });
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <h2>Please Enter Your Username And Password To Login</h2>
        <label htmlFor="username">
          <div>Username:</div>
          <input
            id="username"
            name="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username && <div className="errMessage">{formik.errors.username}</div>}
        </label>
        <label htmlFor="password">
          <div>Password:</div>
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && <div className="errMessage">{formik.errors.password}</div>}
        </label>
        <button type="submit">Login</button>
      </form>
    </Container>
  );
}

LockScreen.defaultProps = { submit: checkPropTypes() };

LockScreen.propTypes = { submit: PropTypes.func };

export default LockScreen;
