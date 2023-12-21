import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import HeaderHome from './components/HeaderHome';
import Resume from './components/Resume';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<HeaderHome/>}  >
      <Route path='resume' element={<Resume/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='about' element={<About/>}/>

    </Route>
  ));
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
