import './App.css';
import { lazy, Suspense } from 'react';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from './components/Contact/Contact';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Profile from './components/Profile/Profile';
import Shimmer from './components/Shimmer/Shimmer';


const Instamart = lazy(() => import('./components/Instamart/Instamart'))

const About = lazy(() => import('./components/About/About'))

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* all children moved to outlet */}

    </div>
  );
}
export const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>,
        errorElement: <Error />,
        children: [
          {
            path: "/about/profile",
            element: <Profile />,
            errorElement: <Error />
          }
        ],

      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />
      },
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />} >
          <Instamart />
        </Suspense>,
        errorElement: <Error />
      }
    ]
  }
])

export default App;

//JSX ?? want to write HTML Using JS.
//it is not HTML inside JS. HTML like syntax
// adv: readability, less code, maintainability,developer friendly. 