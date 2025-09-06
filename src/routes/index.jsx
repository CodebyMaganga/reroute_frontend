import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/LandingPage';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            
        ],
    },
]);
