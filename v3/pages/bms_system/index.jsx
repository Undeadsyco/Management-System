// dependencie imports
import { useRouter } from 'next/router';
// component imports
import { Button } from '../../components/globalComponents';

export default function BmsSystem() {
  // init router
  const router = useRouter();

  return (
    <div className='main-container'>
      <h1>Business Management System</h1>
      {/* on click of buttons they should appand label attribute to url */}
      <div className='btnBox'>
        <Button label="Employees" onClick={() => router.push('/bms_system/employees')} />
        <Button label="Inventory" onClick={() => router.push('bms_system/inventory')} />
        <Button label="Menu" onClick={() => router.push('bms_system/menu')} />
        <Button label="Sales" onClick={() => router.push('bms_system/sales')} />
        <Button label="Statisitcs" onClick={() => router.push('bms_system/Statistics')} />
        <Button label="" />
      </div>
    </div>
  );
}