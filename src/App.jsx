import Navbar from './components/Navbar';
import Home from './Home'

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="h-screen mx-28 my-5">
      <Navbar/>
      <div>
        <Home/>
      </div>
    </div>
  )
}

export default App
