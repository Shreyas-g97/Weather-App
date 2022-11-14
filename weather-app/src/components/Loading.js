import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'

function Loading() {
  return (
    <Spinner animation="border" role="status" className='load'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;