// dependency imports
import { useState, useEffect, useCallback } from 'react';
import { useFormik } from "formik";
import { useRecoilValue } from "recoil";
import * as Yup from 'yup';
import { DateTime } from "luxon";
// component imports
import { Button } from "../globalComponents";
//util imports
import { employeeState } from "../../utils/clients/atoms/bmsSystem";
import { employeeActions } from '../../utils/clients/actions/bmsSystem';
import AccountModal from './AccountModal';

// validation schema for employee form
// birthday should pass a check to insure age is greater than 16
// phone number should pass a check to insure its length is 10
const validation = Yup.object({
  name: Yup.string().required('Please enter employee\'s name'),
  birthday: Yup
    .date()
    .required('Please enter employee\'s birthday')
    .test('birthday', 'Employee must be 16 years or older', (value) => {
      const birthday = DateTime.fromISO(value);
      const today = DateTime.local();
      const age = today.diff(birthday, 'years');
      return age >= 16;
    }),
  email: Yup.string().email().required('Please enter employee\'s email'),
  phone_number: Yup
    .string()
    .required('Please enter employee\'s phone number')
    .test('phone_number', 'Phone number must be 10 digits', (value) => {
      const length = String(value).length === 10;
      return length;
    }),
  address: Yup.object({
    street: Yup.string().required('Please enter employee\'s street address'),
    city: Yup.string().required('Please enter the city employee lives in'),
    state: Yup.string().required('Please enter the state employee lives in'),
  }),
  position: Yup.string().required('please select employee\'s initial position'),
  pay_type: Yup.string().required('please select employee\'s pay type'),
  pay_rate: Yup.number().required('please enter employee\'s initial pay rate'),
});

function EmployeeForm({ formik, readOnly }) {
  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className="modal-form  z-0">
      <label htmlFor='name'>
        <h3>Name: *</h3>
        {/* create input for name */}
        <input
          id='name'
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          readOnly={readOnly}
          placeholder="Employee's First and Last Name"
        />
        {/* create error message for name */}
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}
      </label>
      <label htmlFor='birthday'>
        <h3>Birthday: *</h3>
        {/* create date input for birthday */}
        <input
          id='birthday'
          name="birthday"
          type="date"
          value={formik.values.birthday}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          readOnly={readOnly}
          placeholder="Employe's Birthday"
        />
        {/* create error message for birthday */}
        {formik.touched.birthday && formik.errors.birthday && (
          <div className="error">{formik.errors.birthday}</div>
        )}
      </label>
      <label htmlFor='email'>
        <h3>Email: *</h3>
        {/* create email input for email */}
        <input
          id='email'
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          readOnly={readOnly}
          placeholder="Employee's Email"
        />
        {/* create error message for email */}
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </label>
      <label htmlFor='phone_number'>
        <h3>Number: *</h3>
        {/* create telephone input for phone number */}
        <input
          id='phone_number'
          name="phone_number"
          type="tel"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          readOnly={readOnly}
          placeholder="Employee's Phone Number"
        />
        {/* create error message for phone number */}
        {formik.touched.phone_number && formik.errors.phone_number && (
          <div className="error">{formik.errors.phone_number}</div>
        )}
      </label>
      <label htmlFor='address'>
        <h3>Address:</h3>
        <label htmlFor='street'>
          <h3>Street: *</h3>
          {/* create input for street */}
          <input
            id='street'
            name="address.street"
            type="text"
            value={formik.values.address.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            readOnly={readOnly}
            placeholder="Employee's Street Address"
          />
          {/* create error message for street */}
          {formik.touched.address?.street && formik.errors.address?.street && (
            <div className="error">{formik.errors.address?.street}</div>
          )}
        </label>
        <label htmlFor='city'>
          <h3>City: *</h3>
          {/* create input for city */}
          <input
            id='city'
            name="address.city"
            type="text"
            value={formik.values.address.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            readOnly={readOnly}
            placeholder="City Employee Lives In"
          />
          {/* create error message for city */}
          {formik.touched.address?.city && formik.errors.address?.city && (
            <div className="error">{formik.errors.address?.city}</div>
          )}
        </label>
        <label htmlFor='state'>
          <h3>State: *</h3>
          {/* create input for state */}
          <input
            id='state'
            name="address.state"
            type="text"
            value={formik.values.address.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            readOnly={readOnly}
            placeholder="State Employee Lives In"
          />
          {/* create error message for state */}
          {formik.touched.address?.state && formik.errors.address?.state && (
            <div className="error">{formik.errors.address?.state}</div>
          )}
        </label>
      </label>
      <label htmlFor='position'>
        <h3>Position: *</h3>
        {/* create select for position */}
        <select name="position" id="position" value={formik.values.position} onChange={formik.handleChange} readOnly={readOnly}>
          <option value="">Select</option>
          <option value="district manager">District Manager</option>
          <option value="store manager">Store Manager</option>
          <option value="assisstant manager">Assisstant Manager</option>
          <option value="shift leader">Shift Leader</option>
          <option value="crew">Crew</option>
        </select>
        {/* create error message for position */}
        {formik.touched.position && formik.errors.position && (
          <div className="error">{formik.errors.position}</div>
        )}
      </label>
      <label htmlFor='pay_type'>
        <h3>Pay Type: *</h3>
        {/* create select for pay type with default, hourly, and salery values */}
        <select name="pay_type" id="pay_type" value={formik.values.pay_type} onChange={formik.handleChange} readOnly={readOnly}>
          <option value="">Select</option>
          <option value="hourly">Hourly</option>
          <option value="salery">Salery</option>
        </select>
        {/* create error message for pay type */}
        {formik.touched.pay_type && formik.errors.pay_type && (
          <div className="error">{formik.errors.pay_type}</div>
        )}
      </label>
      <label htmlFor='pay_rate'>
        <h3>Pay Rate: *</h3>
        {/* create number input for pay rate */}
        <input
          id='pay_rate'
          name="pay_rate"
          type="number"
          value={formik.values.pay_rate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          readOnly={readOnly}
          placeholder="Employee's Initial Pay Rate"
        />
        {/* create error message for pay rate */}
        {formik.touched.pay_rate && formik.errors.pay_rate && (
          <div className="error">{formik.errors.pay_rate}</div>
        )}
      </label>
      <div className='flex flex-grow items-center justify-center mt-3'>
        <Button label="Submit" type="submit" className="py-1 px-5 border-2 border-black rounded-full mr-[15px]" />
        <Button label="Reset" type="reset" className="py-1 px-5 border-2 border-black rounded-full ml-[15px]" />
      </div>
    </form>
  )
}

export default function EmployeeModal({ isOpen, setIsOpen }) {
  const employee = useRecoilValue(employeeState);
  const [readOnly, setReadOnly] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [accountModal, setAccountModal] = useState(false);

  // init formik with validation schema and initial values
  // if employee initial values are not null, set initial values to employee values
  // convert employees date of birth to date format using luxon
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: '',
      birthday: DateTime.now().toFormat('yyyy-MM-dd'),
      email: '',
      phone_number: '',
      address: {
        street: '',
        city: '',
        state: '',
      },
      position: '',
      pay_type: '',
      pay_rate: '',
    },
    onSubmit: (values, actions) => {
      employeeActions.createEmployee(values).then((data) => {
        if (data['_id']) {
          alert('Employee created successfully');
          actions.resetForm();
          setIsOpen(false);
        }
      });
    }
  });

  const onClose = () => {
    formik.resetForm();
    setIsOpen(false);
  }

  const loadEmployeeData = useCallback(() => {
    if (employee?.['_id']) {
      const birthday = DateTime.fromISO(new Date(new Date(employee.birthday).setDate(new Date(employee.birthday).getDate() + 1)).toISOString()).toFormat('yyyy-MM-dd');
      const values = {
        ...employee,
        birthday,
      };

      formik.setValues(values);
      setReadOnly(true);
    }
  }, [employee]);

  useEffect(() => {
    loadEmployeeData();
  }, [loadEmployeeData]);

  const posBtn = (
    <Button
      label="Give POS Access"
      className={`${employee?.accounts?.pos ? 'hidden' : ''} py-1 px-5 border-2 border-black rounded-full mr-[15px]`}
      onClick={() => {
        setAccountType('pos');
        setAccountModal(true);
      }}
    />
  );

  const bmsBtn = (
    <Button
      label="Give BMS Access"
      className={`${employee?.accounts?.bms ? 'hidden' : ''} py-1 px-5 border-2 border-black rounded-full ml-[15px]`}
      onClick={() => {
        setAccountType('bms');
        setAccountModal(true);
      }}
    />
  );

  const btnBox = (
    <div>
      {/* if employee has id show two more buttons */}
      {employee?.['_id'] && (
        <>
          {posBtn}
          {bmsBtn}
        </>
      )}
      <Button label="Back" onClick={onClose} className="py-1 px-5 border-2 border-black rounded-full ml-[15px]" />
    </div>
  );

  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'} absolute top-0 right-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center`}
    >
      <div className='bg-white w-[90%] h-[95%] opacity-100 overflow-y-scroll relative scrollbar-hide'>
        <AccountModal accountType={accountType} accountModal={accountModal} setAccountModal={setAccountModal} employeeId={employee?.["_id"]} />
        <div className='flex justify-between items-center px-5 py-2  z-0'>
          <h2>{employee?.name ? `${employee?.name}` : 'New Employee'}</h2>
          {btnBox}
        </div>
        <EmployeeForm formik={formik} readOnly={readOnly} />
      </div>
    </div>
  )
}