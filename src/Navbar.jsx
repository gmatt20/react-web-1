const Navbar = () =>{
  return(
    <nav className = "grid grid-flow-col items-center">
      <h1 className="text-rose-500 font-semibold text-3xl">Luna Blog</h1>
      <div className="grid grid-flow-col justify-end gap-5 ">
        <a href="/" className="hover:text-rose-500 transition ease-in-out delay-100">Home</a>
        <a href="/create" className="hover:text-rose-500 transition ease-in-out delay-100">New Blog</a>
      </div>
    </nav>
  );
}
export default Navbar;