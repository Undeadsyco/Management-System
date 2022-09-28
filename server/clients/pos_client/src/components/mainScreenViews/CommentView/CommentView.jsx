import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../globalComponents/button';
import Container from './styles';

function CommentView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Button className="blueBtn" btnText="Promo 1" />
        <Button className="blueBtn" btnText="Promo 2" />
        <Link to="/menu">
          <Button className="" btnText="Back To Menu" />
        </Link>
      </div>
      <div>
        <Button className="yellowBtn" btnText="Drive Thru" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'Drive Thru' })} />
        <Button className="yellowBtn" btnText="Do Not Make" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'Do Not Make' })} />
        <Button className="yellowBtn" btnText="On The Size" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'On The Size' })} />
        <Button className="yellowBtn" btnText="Open Message" btnAction={() => navigate('/menu/comment/keyboard')} />
      </div>
      <div>
        <Button className="crimsonBtn" btnText="Make Now" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'Make Now' })} />
        <Button className="crimsonBtn" btnText="Ask Me" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'Ask Me' })} />
        <Button className="crimsonBtn" btnText="Allergy Alert" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'Allergy Alert' })} />
        <Button className="crimsonBtn" btnText="Cold Crust" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'Cold Crust' })} />
        <Button className="crimsonBtn" btnText="DBL Wrap" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'DBL Wrap' })} />
        <Button className="crimsonBtn" btnText="New Guest" btnAction={() => dispatch({ type: 'ADD_COMMENT_TO_ORDER', data: 'New Guest' })} />
      </div>
    </Container>
  );
}

export default CommentView;
