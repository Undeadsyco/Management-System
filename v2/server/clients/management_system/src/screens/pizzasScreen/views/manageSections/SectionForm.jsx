import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes, { checkPropTypes } from 'prop-types';

import { FormContainer } from './styles';

function SectionForm({ submit }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: yup.object({
      name: yup.string().required('Please Enter The Name Of The New Section'),
    }),
    initialValues: {
      name: state ? state.section.name : '',
    },
    onSubmit: (values, actions) => {
      if (state) submit({ id: state.section._id, ...values });
      else submit(values);

      navigate('/pizzas/manage_section');
      actions.resetForm();
    },
  });

  console.log(state);

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <h2>New Section</h2>
        <label htmlFor="name">
          <h3>Name:</h3>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && <div className="errMessage">{formik.errors.name}</div>}
        </label>
        <div>
          <button type="button" onClick={() => navigate('/pizzas/manage_section')}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </FormContainer>
  );
}

SectionForm.defaultProps = {
  submit: checkPropTypes(),
};

SectionForm.propTypes = {
  submit: PropTypes.func,
};

export default SectionForm;
