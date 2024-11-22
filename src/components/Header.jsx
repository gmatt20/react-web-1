export default function Header(){
  return(
    <header className="bg-slate-500 grid grid-cols-2 items-center p-10">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="grid">
        <ul className="grid grid-cols-4 text-right">
          <li><a>About</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Contacts</a></li>
        </ul>
      </div>
    </header>

  );
}