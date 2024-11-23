import Navbar from './components/Navbar';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="grid grid-rows-[auto,1fr,auto]  h-screen">
      <Navbar/>
    </div>
  )
}

export default App
