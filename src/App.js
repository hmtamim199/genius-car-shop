
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router/Routes/Routes';

function App() {
  return (
    <div className=' mx-auto'>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
