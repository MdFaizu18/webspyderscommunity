import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import LandingPage from './pages/LandingPage';
import NewUpdates from './pages/NewUpdates';
import TechCrunch from './pages/tech-crunch/TechCrunch';
import Error from './pages/Error';
import WebDev from './pages/web-dev/WebDev';
import AiAvenue from './pages/ai-avenue/AiAvenue';
import CloudDevops from './pages/cloud-devops/CloudDevops';
import CyberBytes from './pages/cyber/CyberBytes';
import JavaDSA from './pages/java-dsa/JavaDSA';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path:'/new-updates',
        element:<NewUpdates/>
        
      },
      {
        path:'/tech-crunch',
        element:<TechCrunch/> 
      },
      {
        path:'/web-dev',
        element:<WebDev/> 
      },
      {
        path:'/ai-avenue',
        element:<AiAvenue/> 
      },
      {
        path:'/cloud-devops',
        element:<CloudDevops/> 
      },
      {
        path:'/cyber-bytes',
        element:<CyberBytes/> 
      },
      {
        path:'/java-dsa',
        element:<JavaDSA/> 
      },
      {
        path:'/about',
        element:<About/> 
      },
    
    ],
  }
]);


const App = () => {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
};
export default App;
