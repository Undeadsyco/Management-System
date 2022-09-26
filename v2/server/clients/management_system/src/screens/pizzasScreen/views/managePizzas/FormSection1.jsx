import {
  array, checkPropTypes, func, object,
} from 'prop-types';
import { useNavigate } from 'react-router-dom';

function FormSection1({ formik, sectionList, setFormSection }) {
  const navigate = useNavigate();

  return (
    <div className="formSection_1">
      <label htmlFor="name">
        <div>Pizza Name:</div>
        <input
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name && <div className="errMessage">{formik.errors.name}</div>}
      </label>
      <label htmlFor="section">
        <div>Pizza Section:</div>
        <select
          id="section"
          name="section"
          value={formik.values.section}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Section</option>
          {sectionList?.map(({ _id, name }) => (
            <option key={_id} value={_id}>{name}</option>
          ))}
        </select>
      </label>
      <div>
        <button type="button" onClick={() => navigate('/pizzas/manage_pizza')}>Cancel</button>
        <button type="button" onClick={() => setFormSection(2)}>Next</button>
      </div>
    </div>
  );
}

FormSection1.defaultProps = {
  formik: checkPropTypes(),
  setFormSection: checkPropTypes(),
  sectionList: [],
};

FormSection1.propTypes = {
  formik: object,
  setFormSection: func,
  sectionList: array,
};

export default FormSection1;
