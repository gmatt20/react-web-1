import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div className="flex items-center flex-col justify-center">
      <h2 h2 className="text-2xl font-semibold my-10">Sorry</h2>
      <p h2 className="mb-10">That page cannot be found</p>
      <Link className="text-blue-600" to="/">Back to the homepage...</Link>
    </div>
  );
}

export default NotFound;