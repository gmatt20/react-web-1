import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ author, setAuthor ] = useState('');
  const [ isPending, setIsPending ] = useState(false);
  const history = useHistory(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      // history.go(-1);
      history.push('/');
    });
  }

  return (
    <div className="mt-20 text-center max-w-full">
      <h2 className="font-semibold text-2xl">Add a New blog</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-lg text-left block mb-2">Blog title:</label>
        <input
          className="w-full p-3 border border-slate-300  box-border block mb-5"  
          type="text" 
          required
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="text-lg text-left block mb-2">Blog body:</label>
        <textarea
        className="w-full p-3 border border-slate-300 box-border block mb-5"
        required
        value={ body }
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="text-lg text-left block mb-2">Blog author:</label>
        <select
        className="w-full p-3 border border-slate-300  box-border block mb-5"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button
        className="bg-rose-500 text-white border-0 p-2 rounded-md cursor-pointer"
        >Add blog</button>}
        { isPending && <button
        className="bg-rose-500 text-white border-0 p-2 rounded-md cursor-pointer" disabled 
        >Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;