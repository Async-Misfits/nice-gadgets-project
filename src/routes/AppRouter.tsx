import { createHashRouter } from 'react-router';
import App from '../app/App';
import { HomePage } from '../pages/HomePage/HomePage';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { ItemPage } from '../pages/ItemPage';
import CatalogPage from '../components/base/CatalogPage/CatalogPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'phones',
        element: (
          <CatalogPage
            key="phones"
            category="phones"
          />
        ),
      },
      { path: 'phones/:itemId', element: <ItemPage /> },
      {
        path: 'tablets',
        element: (
          <CatalogPage
            key="tablets"
            category="tablets"
          />
        ),
      },
      { path: 'tablets/:itemId', element: <ItemPage /> },
      {
        path: 'accessories',
        element: (
          <CatalogPage
            key="accessories"
            category="accessories"
          />
        ),
      },
      { path: 'accessories/:itemId', element: <ItemPage /> },
      { path: 'cart', element: <div>cart</div> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: '*', element: <div>not found</div> },
    ],
  },
]);
