// dependencies
import { useEffect, useState } from 'react';
import { array, checkPropTypes, func } from 'prop-types';
import { useNavigate } from 'react-router-dom';
// components
import Container from './styles';
import Button from '../../../globalComponents/button';

function ListContainer({ employeeTimes, ListItem }) {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(employeeTimes);
  }, [employeeTimes]);

  return (
    <Container rows={list.length > 8 ? Math.floor(list.length / 2) : 4}>
      <div className="listContainer">
        {list?.length > 0
          ? list?.map((employee) => (
            <ListItem
              key={employee?._id}
              employeeName={employee?.employeeName}
              employeeClockIn={employee?.clockedInAt}
              employeeClockOut={employee?.clockedOutAt}
              employeeBreakOut={employee?.breakOutAt}
              employeeBreakIn={employee?.breakInAt}
              employeeHoursWorked={employee?.hoursWorked}
            />
          ))
          : <p style={{ backgroundColor: 'white' }}>loading...</p>
        }
      </div>
      <div className="btnContainer">
        <Button btnText="Go Back" btnAction={() => navigate(-1)} />
      </div>
    </Container>
  );
}

ListContainer.defaultProps = {
  employeeTimes: [],
  ListItem: checkPropTypes(),
};

ListContainer.propTypes = {
  employeeTimes: array,
  ListItem: func,
};

export default ListContainer;
