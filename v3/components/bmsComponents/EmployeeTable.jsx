// dependencie imports
import { useRecoilValue } from 'recoil';
// util imports
import { employeeListState } from '../../utils/clients/atoms/bmsSystem';

function TableHead() {
  return (
    <div className='grid grid-rows-1 grid-cols-4 w-full h-[15%]'>
      <div className='col-span-1 row-span-1'>Name</div>
      <div className='col-span-1 row-span-1'>Position</div>
      <div className='col-span-1 row-span-1'>Pay Type</div>
      <div className='col-span-1 row-span-1'>Pay Rate</div>
    </div>
  );
}

function TableBody() {
  const employees = useRecoilValue(employeeListState);

  return (
    <div className={`grid grid-cols-1 grid-rows-8 w-full h-[85%]`}>
      {employees.length > 0
        ? employees.map((employee, index) => (
          <div key={employee['_id']} className='col-span-1 row-span-1 grid grid-rows-1 grid-cols-4' >
            <div className='col-span-1 row-span-1'>{employee.name}</div>
            <div className='col-span-1 row-span-1'>{employee.position}</div>
            <div className='col-span-1 row-span-1'>{employee.pay_type}</div>
            <div className='col-span-1 row-span-1'>{employee.pay_type === 'hourly' ? `${employee.pay_rate}/hr` : `${employee.pay_rate}/yr`}</div>
          </div>
        ))
        : <div className="row-span-1 col-span-1 text-center w-full">...Loading Employees</div>
      }
    </div>
  );
}

export default function employeeTable() {
  return (
    <div className='border-2 border-black w-[80%] h-3/4'>
      <TableHead />
      <TableBody />
    </div>
  )
}