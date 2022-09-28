import { useState } from 'react';
import {
  array, checkPropTypes, object, string,
} from 'prop-types';

function ToppingComponent({ formik, list, toppingGroup }) {
  const [views, setViews] = useState(false);
  return (
    <div>
      <h4>
        <button
          type="button"
          onClick={() => setViews(!views)}
        >
          {toppingGroup}
        </button>
      </h4>
      {views && list?.map((item) => (
        <label key={item._id} htmlFor={item._id}>
          <input
            name="toppings"
            id={item._id}
            value={item._id}
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>{item.topping}</div>
        </label>
      ))}
    </div>
  );
}

ToppingComponent.defaultProps = {
  formik: checkPropTypes(),
  toppingGroup: '',
  list: [],
};

ToppingComponent.propTypes = {
  formik: object,
  toppingGroup: string,
  list: array,
};

export default ToppingComponent;
