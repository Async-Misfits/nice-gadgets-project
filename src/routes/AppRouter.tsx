import { createBrowserRouter } from 'react-router';
import App from '../app/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <div>Home</div> },
      { path: 'phones', element: <div>phones</div> },
      { path: 'tablets', element: <div>tablets</div> },
      { path: 'accessories', element: <div>accessories</div> },
      { path: 'cart', element: <div>cart</div> },
      { path: 'favorites', element: <div>favorites</div> },
      { path: '*', element: <div>not found</div> },
    ],
  },
]);
