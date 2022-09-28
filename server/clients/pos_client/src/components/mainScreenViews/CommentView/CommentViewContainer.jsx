import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import KeyBoard from '../../globalComponents/KeyBoard';
import CommentView from './CommentView';

function CommentViewContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const commentKeyboardCancelAction = () => {
    navigate('/menu/comment');
  };

  const commentKeyboardSubmitAction = (data) => {
    dispatch({ type: 'ADD_COMMENT_TO_ORDER', data });
    navigate('/menu/comment');
  };
  return (
    <Routes>
      <Route path='/' element={<CommentView />} />
      <Route
        path='/keyboard'
        element={<KeyBoard
          className="commentKeyBoard"
          cancelAction={commentKeyboardCancelAction}
          submitAction={commentKeyboardSubmitAction}
        />}
      />
    </Routes>
  );
}

export default CommentViewContainer;
