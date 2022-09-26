import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import PropTypes, { checkPropTypes } from 'prop-types';
import * as yup from 'yup';

import { DoughFormContainer as Container } from './styles';

const validation = yup.object({
  size: yup.string(),
  weight: yup.number(),
});

function DoughForm({ submit }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      size: state ? state.dough.size : '',
      weight: state ? state.dough.weight : 0,
    },
    onSubmit: (values, actions) => {
      if (state) {
        submit({
          id: state.dough._id,
          ...values,
        });
      } else {
        submit(values);
      }
      actions.resetForm();
      navigate('/pizzas/manage_dough');
    },
  });

  const cancelAction = () => {
    navigate('/pizzas/manage_dough');
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <h2>Insert Size &amp; Weight Of Dough</h2>
        <label htmlFor="size">
          <div>Size:</div>
          <input
            id="size"
            name="size"
            type="text"
            value={formik.values.size}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.size && formik.touched.size && <div className="errMessage">{formik.errors.size}</div>}
        </label>
        <label htmlFor="weight">
          <div>Weight:</div>
          <input
            id="weight"
            name="weight"
            type="number"
            value={formik.values.weight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.weight && formik.touched.weight && <div className="errMessage">{formik.errors.weight}</div>}
        </label>
        <div>
          <button type="button" onClick={cancelAction}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Container>
  );
}

DoughForm.defaultProps = {
  submit: checkPropTypes(),
};

DoughForm.propTypes = {
  submit: PropTypes.func,
};

export default DoughForm;
