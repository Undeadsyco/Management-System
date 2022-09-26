import { useNavigate } from 'react-router-dom';
import { checkPropTypes, func, array } from 'prop-types';

import { ListContainer as Container } from './styles';

function PizzaList({ list, onDeleteSection }) {
  const navigate = useNavigate();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Section</th>
            <th>Actions</th>
            <th>Expand</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? list.map((item) => (
            <tr key={item._id}>
              <td colSpan="3">{item.name}</td>
              <td>
                <button
                  type="button"
                  onClick={() => navigate('/pizzas/manage_section/edit_section', { state: { section: item } })}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDeleteSection(item._id)}
                >
                  Delete
                </button>
              </td>
              <td>V</td>
            </tr>
          )) : <tr><td>...Loading</td></tr>}
        </tbody>
      </table>
    </Container>
  );
}

PizzaList.defaultProps = {
  list: [],
  onDeleteSection: checkPropTypes,
};

PizzaList.propTypes = {
  list: array,
  onDeleteSection: func,
};

export default PizzaList;
