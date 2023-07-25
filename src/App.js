import logo from './logo.svg';
import './App.css';
import CreateBlog from './components/CreateBlog';
import { Provider } from 'react-redux';
import blogStore from './components/reduxfiles/blogStore';
function App() {
  return (
    <Provider store={blogStore} >
      <div className="App">
      <CreateBlog/>
    </div>
    </Provider>
  );
}

export default App;
