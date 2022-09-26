import { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';

import SectionList from './SectionList';
import SectionForm from './SectionForm';
import { AddBtn } from './styles';

import { pizzaActions } from '../../../../actions';

function ManageSections(props) {
  const {
    onAddSection, onGetSections, sectionList, onDeleteSection, onUpdateSection,
  } = props;

  useEffect(() => {
    onGetSections();
  }, []);

  return (
    <>
      <AddBtn>
        <Link to="/pizzas/manage_section/add_section">Add Section</Link>
      </AddBtn>
      <SectionList list={sectionList} onDeleteSection={onDeleteSection} />
      <Routes>
        <Route path="/add_section" element={<SectionForm submit={onAddSection} />} />
        <Route path="/edit_section" element={<SectionForm submit={onUpdateSection} />} />
      </Routes>
    </>
  );
}

ManageSections.defaultProps = {
  sectionList: [],
  onAddSection: checkPropTypes(),
  onGetSections: checkPropTypes(),
  onDeleteSection: checkPropTypes(),
  onUpdateSection: checkPropTypes(),
};

ManageSections.propTypes = {
  sectionList: PropTypes.array,
  onAddSection: PropTypes.func,
  onGetSections: PropTypes.func,
  onDeleteSection: PropTypes.func,
  onUpdateSection: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sectionList: state.menu.sectionList,
});

const mapDispatchToProps = (dispatch) => {
  const {
    addSection, getSections, deleteSection, updateSection,
  } = pizzaActions.sectionActions;
  return ({
    onAddSection: (body) => addSection(body).then((data) => dispatch({ type: 'ADD_NEW_SECTION', data })),
    onGetSections: () => getSections().then((data) => dispatch({ type: 'GET_SECTION_LIST', data })),
    onUpdateSection: (body) => updateSection(body).then((data) => dispatch({ type: 'GET_SECTION_LIST', data })),
    onDeleteSection: (id) => deleteSection(id).then((data) => dispatch({ type: 'GET_SECTION_LIST', data })),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSections);
