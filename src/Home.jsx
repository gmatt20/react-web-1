import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () =>{
  // Update state
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Fetches data when component renders
  useEffect(() => {
    setTimeout(() =>{
      fetch('http://localhost:8000/blogs').then(res => {
        if(!res.ok){
          throw Error('could not fetch the date for that resource');
        }
      return res.json();
    }).then((data) => {
      setBlogs(data);
      setIsPending(false);
      setError(null);
    }).catch((err) => {
      setIsPending(false);
      setError(err.message);
    })
    }, 1000)
  }, []);

  return(
    <div className="mt-20">
      <h2 className="text-2xl font-semibold my-10">Homepage</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}

export default Home;