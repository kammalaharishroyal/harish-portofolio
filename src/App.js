import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import HeaderHome from './components/HeaderHome';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<HeaderHome/>}  >
      <Route path='resume' element={<Resume/>}/>
      <Route index element={<Projects/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='contact' element={<Contact/>}/>
     

    </Route>
  ));
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
