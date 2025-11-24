import { createHashRouter } from 'react-router';
import App from '../app/App';
import { HomePage } from '../pages/HomePage/HomePage';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { ItemPage } from '../pages/ItemPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'phones', element: <div>phones</div> },
      { path: 'phones/:itemId', element: <ItemPage /> },
      { path: 'tablets', element: <div>tablets</div> },
      { path: 'tablets/:itemId', element: <ItemPage /> },
      { path: 'accessories', element: <div>accessories</div> },
      { path: 'accessories/:itemId', element: <ItemPage /> },
      { path: 'cart', element: <div>cart</div> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: '*', element: <div>not found</div> },
    ],
  },
]);
