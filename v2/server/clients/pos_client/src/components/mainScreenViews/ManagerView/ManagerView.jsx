// dependencies
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkPropTypes, func, object } from 'prop-types';
// components
import Button from '../../globalComponents/button';
import Container from './styles';

function ManagerView({ currentUser, onGetEmployeeTimes }) {
  const navigate = useNavigate();

  const [isManager, setIsManager] = useState(false);
  useEffect(() => {
    if (currentUser?.position === 'Assistant Manager' || currentUser?.position === 'Manager') {
      setIsManager(true);
    }
  }, [currentUser]);

  const handleClick = (action) => {
    // eslint-disable-next-line no-alert
    if (!isManager) alert('Access Denied! Must be a manager to access this.');
    else if (action) action();
  };

  return (
    <Container>
      <div>
        <Button className="" btnText="Delete CheckOut" btnAction={() => handleClick()} />
        <Button
          className=""
          btnText="Edit Time"
          btnAction={() => handleClick(() => {
            onGetEmployeeTimes();
            navigate('/menu/manager/time_view');
          })}
        />
        <Button className="" btnText="Change My Password" btnAction={() => navigate('/menu/manager/change_password')} />
        <Button className="" btnText="Allow ClockIn" btnAction={() => handleClick()} />
        <Button className="" btnText="Delete ClockOut" btnAction={() => handleClick()} />
        <Button className="" btnText="Calibrate Screen" />
      </div>
      <div>
        <Button className="" btnText="Print Checkout" />
        <Button
          className=""
          btnText="Edit Break"
          btnAction={() => handleClick(() => {
            onGetEmployeeTimes();
            navigate('/menu/manager/break_view');
          })}
        />
        <Button className="" btnText="Clear Password" btnAction={() => handleClick()} />
        <Button className="" btnText="Disable Punctuality" btnAction={() => handleClick()} />
        <Button className="" btnText="" />
        <Button className="" btnText="Reroute Printer" />
      </div>
      <div>
        <Button className="" btnText="Get Open Check" />
        <Button className="" btnText="Recall Open" />
        <Button className="" btnText="CC Tip Report" />
        <Button className="" btnText="CheckOut" />
        <Button className="" btnText="Clock Out" />
        <Button className="" btnText="Resend To Makeline" />
      </div>
      <div>
        <Button className="" btnText="Close Check" />
        <Button className="" btnText="Recall Closed" />
        <Button className="" btnText="Print Check" />
        <Button className="" btnText="Break" />
        <Button className="" btnText="" />
        <Button className="" btnText="GC Cash Out" />
      </div>
      <div>
        <Button className="" btnText="Record Tips/Manage Drawer" />
        <Button className="" btnText="Refund" />
        <Button className="" btnText="Daliy Summa Report" btnAction={() => handleClick()} />
        <Button className="" btnText="PMIX Report" btnAction={() => handleClick()} />
        <Button className="" btnText="Employee Breaks Report" btnAction={() => handleClick()} />
        <Button className="" btnText="Flash Report" btnAction={() => handleClick()} />
      </div>
      <div>
        <Button className="" btnText="Open Drawer" />
        <Button className="" btnText="Reassign Drawer" btnAction={() => handleClick()} />
        <Button className="" btnText="Sales Report" btnAction={() => handleClick()} />
        <Button className="" btnText="Labor Report" btnAction={() => handleClick()} />
        <Button className="" btnText="Break Alert Report" btnAction={() => handleClick()} />
        <Link to="/menu"><Button className="" btnText="Back To Menu" /></Link>
      </div>
    </Container>
  );
}

ManagerView.defaultProps = {
  currentUser: {},
  onGetEmployeeTimes: checkPropTypes(),
};

ManagerView.propTypes = {
  currentUser: object,
  onGetEmployeeTimes: func,
};

export default ManagerView;
