import { checkPropTypes, func, object } from 'prop-types';

import ToppingComponent from './ToppingComponent';

function FormSection3({ formik, toppings, setFormSection }) {
  return (
    <div className="formSection_3">
      <label htmlFor="toppings">
        <h3>Toppings:</h3>
        <div className="toppingContainer">
          <ToppingComponent formik={formik} list={toppings?.sauce} toppingGroup="Sauce:" />
          <ToppingComponent formik={formik} list={toppings?.seasoning} toppingGroup="Seasoning:" />
          <ToppingComponent formik={formik} list={toppings?.cheese} toppingGroup="Cheese:" />
          <ToppingComponent formik={formik} list={toppings?.meat} toppingGroup="Meats:" />
          <ToppingComponent formik={formik} list={toppings?.produce} toppingGroup="Produce:" />
        </div>
      </label>
      <div>
        <button type="button" onClick={() => setFormSection(2)}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

FormSection3.defaultProps = {
  formik: checkPropTypes(),
  setFormSection: checkPropTypes(),
  toppings: {},
};

FormSection3.propTypes = {
  formik: object,
  setFormSection: func,
  toppings: object,
};

export default FormSection3;
