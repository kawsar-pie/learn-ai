import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Toaster from './components/Toaster/Toaster';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Blogs></Blogs>
        <Toaster />
    </div>
  );
}

export default App;
