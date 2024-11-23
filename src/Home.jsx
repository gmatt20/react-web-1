import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () =>{
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

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