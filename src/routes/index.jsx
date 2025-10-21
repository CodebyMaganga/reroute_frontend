import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/LoginPage';
import Homepage from '../pages/Homepage';
import { sampleRoutes } from '../../sampleroutes';



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
    {
        path: '/login',
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            
        ],
    },
    {
        path: "/home",
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage 
                routes={sampleRoutes}
                hasActiveAlerts={true}
                alertCount={2}
                onNavigateToAlerts={() => console.log("Navigating to alerts")}
                onNavigateToRoutes={() => console.log("Navigating to routes")}
                onStartNavigation={(id) => console.log("Starting navigation for route:", id)}
                />,
            },
            
        ]   
    }
]);
