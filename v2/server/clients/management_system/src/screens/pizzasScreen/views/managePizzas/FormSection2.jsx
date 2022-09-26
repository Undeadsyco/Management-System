import {
  array, checkPropTypes, func, object,
} from 'prop-types';
import { v4 } from 'uuid';

function FormSection2({ formik, setFormSection, doughList }) {
  const addSize = () => {
    const {
      dough, size, price, sizes,
    } = formik.values;

    if (dough && size && price) {
      formik.setFieldValue('sizes', [...sizes, {
        size,
        dough,
        price,
      }]);
      formik.setFieldValue('size', '');
      formik.setFieldValue('dough', '');
      formik.setFieldValue('price', 0);
    } else {
      if (!size) formik.setFieldError('size', 'please select a size');
      if (!dough) formik.setFieldError('dough', 'please select the proper dough for the size');
      if (!price) formik.setFieldError('price', 'please enter a price greater than 0');
    }
  };

  const removeSize = (size) => {
    const sizeList = formik.values.sizes.filter((item) => item.size !== size);

    formik.setFieldValue('sizes', sizeList);
  };
  return (
    <>
      <div>
        <h3>Pizza Sizes</h3>
        {formik.values.sizes.map(({ size, price }) => (
          <div key={v4()}>
            <p>{size}</p>
            <p>{price}</p>
            <button type="button" onClick={() => removeSize(size)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="formSection_2">
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
          {formik.errors.size && <div className="errMessage">{formik.errors.size}</div>}
        </label>
        <label htmlFor="dough">
          <div>Dough:</div>
          <select
            id="dough"
            name="dough"
            value={formik.values.dough}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Dough</option>
            {doughList?.map(({ _id, size }) => (
              <option key={_id} value={_id}>{size}</option>
            ))}
          </select>
          {formik.errors.dough && <div className="errMessage">{formik.errors.dough}</div>}
        </label>
        <label htmlFor="price">
          <div>Price:</div>
          <input
            id="price"
            name="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.price && <div className="errMessage">{formik.errors.price}</div>}
        </label>
        <div>
          <button type="button" onClick={() => setFormSection(1)}>Back</button>
          <button type="button" onClick={() => addSize()}>Add</button>
          <button type="button" onClick={() => setFormSection(3)}>Next</button>
        </div>
      </div>
    </>
  );
}

FormSection2.defaultProps = {
  formik: checkPropTypes(),
  setFormSection: checkPropTypes(),
  doughList: [],
};

FormSection2.propTypes = {
  formik: object,
  setFormSection: func,
  doughList: array,
};

export default FormSection2;
