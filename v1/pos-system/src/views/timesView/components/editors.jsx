import EditTime from '../../../components/editTime';

const calculateDif = (time1, time2) => {
  let diff = (time1.getTime() - time2.getTime()) / 1000;
  diff /= (60 * 60);
  return diff.toFixed(2);
};

export const setEditors = (props) => {
  const { employee, timesType } = props;
  switch (timesType) {
    case 'clockin/clockout':
      return (
        <>
          <EditTime
            {...props}
            heading="Clock In Time"
            empId={employee?.Employee_Id}
            timeId={employee?.clock_in_times[0].Id}
            time={employee?.clock_in_times ? employee.clock_in_times[0].Time_In : null}
          />
          <EditTime
            {...props}
            heading="Clock Out Time"
            empId={employee?.Employee_Id}
            timeId={employee?.clock_out_times ? employee?.clock_out_times[0].Id : null}
            time={employee?.clock_out_times ? employee?.clock_out_times[0]?.Time_Out : null}
          />
        </>
      );
    case 'breakout/breakin':
      return (
        <>
          <EditTime
            {...props}
            heading="Break Out Time"
            empId={employee?.Employee_Id}
            timeId={employee?.break_out_times[0].Id}
            time={employee?.break_out_times ? employee.break_out_times[0].Break_Time_Out : null}
          />
          <EditTime
            {...props}
            heading="Break In Time"
            empId={employee?.Employee_Id}
            timeId={employee?.break_in_times ? employee?.break_in_times[0].Id : null}
            time={employee?.break_in_times ? employee?.break_in_times[0]?.Break_Time_In : null}
          />
        </>
      );
    default:
      return null;
  }
};

export const setBtns = (props) => {
  const { item, timesType } = props;
  switch (timesType) {
    case 'clockin/clockout':
      return (
        <>
          <div>
            {item.Employee_name}
          </div>
          <div>
            Time In:
            <br />
            {new Date(item.clock_in_times[0].Time_In).toLocaleTimeString()}
          </div>
          <div style={item.clock_out_times ? { display: 'block' } : { display: 'none' }}>
            Time Out:
            <br />
            {
              item.clock_out_times
                ? new Date(item.clock_out_times[0].Time_Out).toLocaleTimeString()
                : null
            }
          </div>
          <div style={item.clock_out_times ? { display: 'block' } : { display: 'none' }}>
            Hours Worked: &nbsp;
            {
              item.clock_out_times
                ? calculateDif(
                  new Date(item.clock_out_times[0].Time_Out),
                  new Date(item.clock_in_times[0].Time_In),
                ) : null
            }
          </div>
        </>
      );
    case 'breakout/breakin':
      return (
        <>
          <div>
            {item.Employee_name}
          </div>
          <div>
            Break Out:
            <br />
            {new Date(item.break_out_times[0].Break_Time_Out).toLocaleTimeString()}
          </div>
          <div style={item.break_in_times ? { display: 'block' } : { display: 'none' }}>
            Break In:
            <br />
            {new Date(item.break_in_times[0].Break_Time_In).toLocaleTimeString()}
          </div>
          <div style={item.break_in_times ? { display: 'block' } : { display: 'none' }}>
            Break length:
            <br />
            {
              item.break_in_times
                ? calculateDif(
                  new Date(item.break_in_times[0].Break_Time_In),
                  new Date(item.break_out_times[0].Break_Time_Out),
                ) : null
            }
          </div>
        </>
      );
    default:
      return null;
  }
};
