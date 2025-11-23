import { createBrowserRouter } from 'react-router';
import App from '../app/App';

const routes = [
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
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.PROD ? '/nice-gadgets-project' : '/',
});
