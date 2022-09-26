/* eslint-disable no-return-assign */
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes, { checkPropTypes } from 'prop-types';

const valitation = yup.object({
  employee: yup.string().required(),
  username: yup.string().matches(
    '[A-Za-z]+\\.[A-Za-z]+',
    'Username must be in the format of <firstname>.<lastname>',
  ).required(),
  password: yup.string().required(),
});

function AddUser({ employees, onAddNewUser }) {
  const formik = useFormik({
    validationSchema: valitation,
    initialValues: {
      employee: '',
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      onAddNewUser(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Please Select An Employee and Enter Their Credentials</h2>
      <label htmlFor="employee">
        <div>employee</div>
        <select
          id="employee"
          name="employee"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Employee</option>
          {employees.map((item) => (
            <option value={item._id} key={item._id}>{item.employee_name}</option>
          ))}
        </select>
        {formik.errors.employee && formik.touched.employee && <div className="errMessage">{formik.errors.employee}</div>}
      </label>
      <label htmlFor="username">
        <div>Username</div>
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
        <div>Password</div>
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
      <button type="submit">Submit</button>
    </form>
  );
}

AddUser.defaultProps = {
  employees: [],
  onAddNewUser: checkPropTypes(),
};

AddUser.propTypes = {
  employees: PropTypes.array,
  onAddNewUser: PropTypes.func,
};

export default AddUser;
