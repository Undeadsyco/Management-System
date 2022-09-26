import { useNavigate } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import { DoughListContainer as Container } from './styles';

function DoughList({ doughList, onDeleteDough }) {
  const navigate = useNavigate();

  const editAction = (dough) => {
    navigate(`/pizzas/manage_dough/edit/${dough._id}`, { state: { dough } });
  };

  return (
    <Container className="doughList">
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Weight</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doughList.length > 0 ? doughList.map((dough) => (
            <tr key={dough._id}>
              <td>{dough.size}</td>
              <td>{dough.weight}</td>
              <td><button type="button" onClick={() => editAction(dough)}>Edit</button></td>
              <td><button type="button" onClick={() => onDeleteDough(dough._id)}>Delete</button></td>
            </tr>
          )) : <tr><td colSpan={4} style={{ textAlign: 'center' }}>...loading</td></tr>}
        </tbody>
      </table>
    </Container>
  );
}

DoughList.defaultProps = {
  doughList: [],
  onDeleteDough: checkPropTypes(),
};

DoughList.propTypes = {
  doughList: PropTypes.array,
  onDeleteDough: PropTypes.func,
};

export default DoughList;
