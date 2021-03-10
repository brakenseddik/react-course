import logo from './logo.svg';
import Navbar from './navbar'
import Home from './home'
import './index.css'

function App() {
 return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Home></Home>
    </div>
</div>
  );
}

export default App;
