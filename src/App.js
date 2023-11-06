import './App.css';
import { lazy, Suspense, useState } from 'react';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from './components/Contact/Contact';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Shimmer from './components/Shimmer/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux'
import store from './utils/store';

const Instamart = lazy(() => import('./components/Instamart/Instamart'))

const About = lazy(() => import('./components/About/About'))

function App() {
  const [user, setUser] = useState({
    name: 'Lopamudra Mallick',
    email: 'lopamudramallick369@gmail.com'
  })
  return (
    <Provider store={store}>
      <UserContext.Provider
        //this will override the default value
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <div className="App">
          <Header />
          <Outlet />
          {/* all children moved to outlet */}
        </div>
      </UserContext.Provider>
    </Provider>

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
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />
      }

    ]
  }
])

export default App;

//JSX ?? want to write HTML Using JS.
//it is not HTML inside JS. HTML like syntax
// adv: readability, less code, maintainability,developer friendly. 