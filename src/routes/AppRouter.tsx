import { createHashRouter } from 'react-router';
import App from '../app/App';
import { HomePage } from '../pages/HomePage/HomePage';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { ItemPage } from '../pages/ItemPage';
import CatalogPage from '../components/base/CatalogPage/CatalogPage';
import { CartPage } from '../pages/CardPage/CartPage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { RightsPage } from '../pages/RightsPage/RightsPage';
import { Page404 } from '../pages/Page404/Page404';
import { OrderSuccessPage } from '../pages/OrderSuccessPage/OrderSuccessPage';

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
      { path: 'cart', element: <CartPage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: '*', element: <Page404 /> },
      { path: 'contacts', element: <ContactsPage /> },
      { path: 'rights', element: <RightsPage /> },
      { path: 'success', element: <OrderSuccessPage /> },
    ],
  },
]);
