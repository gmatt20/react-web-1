import { Link } from 'react-router-dom';

const Navbar = () =>{
  return(
    <nav className = "grid grid-flow-col items-center border-b-2 border-rose-200 pb-2">
      <h1 className="text-rose-500 font-semibold text-3xl">Luna Blog</h1>
      <div className="grid grid-flow-col justify-end gap-5 ">
        <Link to="/" className="hover:text-rose-500 transition ease-in-out delay-100">Home</Link>
        <Link to="/create" className="hover:text-rose-500 transition ease-in-out delay-100">New Blog</Link>
      </div>
    </nav>
  );
}
export default Navbar;