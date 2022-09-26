// dependencie imports
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
// component imports
import { EmployeeTable } from '../../components/bmsComponents'
// util imports
import { employeeListState, employeeState } from '../../utils/clients/atoms/bmsSystem';
import { employeeActions } from '../../utils/clients/actions/bmsSystem';
import { Button } from '../../components/globalComponents';
import EmployeeModal from '../../components/bmsComponents/EmployeeModal';


export default function Employees() {
  const router = useRouter()
  const [employees, setEmployees] = useRecoilState(employeeListState);
  const [employee, setEmployee] = useRecoilState(employeeState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const { getEmployeeList } = employeeActions;
    getEmployeeList().then((data) => {
      console.log('data', data);
      setEmployees(data);
    });
  }, [setEmployees]);

  const handleChange = (id) => {
    if (id === '') setEmployee({});
    const { getEmployee } = employeeActions;
    getEmployee(id).then((data) => {
      setEmployee(data);
    });
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center p-4'>
      <h1 className='text-2xl font-bold my-4'>Employees</h1>
      <div className='h-[10%] w-[80%] flex flex-row justify-between items-center'>
        <select className='border-2 border-black rounded-full px-4 h-4/5' onChange={(e) => handleChange(e.target.value)}>
          <option value="">Select Employee</option>
          {employees.map((employee) => (
            <option key={employee['_id']} value={employee['_id']}>{employee.name}</option>
          ))}
        </select>
        <div className='w-[30%] h-full flex justify-between items-center'>
          <Button
            className='space-x-4 h-4/5 border-2 border-black py-2 px-4 rounded-full'
            label={employee?.['_id'] ? "Update" : "New Employee" }
            onClick={() => setIsOpen(true)}
          />
          <Button 
            className='space-x-4 h-4/5 border-2 border-black py-2 px-4 rounded-full' 
            label="Back" 
            onClick={() =>  router.push('/bms_system')}
          />
        </div>
      </div>
      <EmployeeTable />
      <EmployeeModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
};