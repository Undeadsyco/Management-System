/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes, { checkPropTypes } from 'prop-types';

import FormSection1 from './FormSection1';
import FormSection2 from './FormSection2';
import FormSection3 from './FormSection3';
import { PizzaFormContainer } from './styles';

const validation = yup.object({
  name: yup.string().required(),
  section: yup.string().required(),
  toppings: yup.array().test('length', 'please select at least one topping', (list) => list.length > 0),
  sizes: yup.array().of(
    yup.object({
      size: yup.string(),
      dough: yup.string(),
      price: yup.number(),
    }),
  ).required().test('length', 'please select at least one size for the pizza', (list) => list.length > 0),
});

function AddPizzaForm(props) {
  const {
    doughList, sectionList, toppingsList, onAddPizza,
  } = props;

  const [formSection, setFormSection] = useState(1);

  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: '',
      section: '',
      toppings: [],
      sizes: [],
      size: '',
      dough: '',
      price: 0,
    },
    onSubmit: (values) => {
      const {
        name, section, sizes, toppings,
      } = values;

      onAddPizza({
        name, section, toppings, sizes,
      });

      navigate('/pizzas/manage_pizza');
    },
  });

  return (
    <PizzaFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <h2>Enter Pizza Information</h2>
        {formSection === 1 && (
          <FormSection1 formik={formik} setFormSection={setFormSection} sectionList={sectionList} />
        )}
        {formSection === 2 && (
          <FormSection2 formik={formik} setFormSection={setFormSection} doughList={doughList} />
        )}
        {formSection === 3 && (
          <FormSection3 formik={formik} setFormSection={setFormSection} toppings={toppingsList} />
        )}
      </form>
    </PizzaFormContainer>
  );
}

AddPizzaForm.defaultProps = {
  sectionList: [],
  doughList: [],
  toppingsList: {},
  onAddPizza: checkPropTypes(),
};

AddPizzaForm.propTypes = {
  sectionList: PropTypes.array,
  doughList: PropTypes.array,
  toppingsList: PropTypes.object,
  onAddPizza: PropTypes.func,
};

export default AddPizzaForm;
