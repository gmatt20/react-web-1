const BlogList = ({blogs, title, handleDelete}) => {

  return(
    <>
    <h2 className="text-2xl font-semibold my-10">{ title }</h2>
    {
        blogs.map((blog) => (
          <div key={blog.id} className="mb-5 p-5 rounded-md shadow-md ml-3">
            <h2 className="text-x2l font-semibold mb-2">{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))
      }
      </>
  );
}

export default BlogList;