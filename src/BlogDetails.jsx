import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  return(
    <div className="mt-20">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2 className="text-2xl font-semibold mt-10 text-rose-500 mb-1">{ blog.title }</h2>
          <p className="mb-5 font-semibold">Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails