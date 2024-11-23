import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id,{
      method: 'DELETE'
    }).then(()=>{
      history.push('/');
    })
  }
  return(
    <div className="mt-20">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2 className="text-2xl font-semibold mt-10 text-rose-500 mb-1">{ blog.title }</h2>
          <p className="mb-5 font-semibold">Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button className="bg-rose-500 text-white border-0 my-5 p-2 rounded-md cursor-pointer" onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails