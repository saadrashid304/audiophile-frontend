import { Routes, Route } from "react-router-dom";
import {
  ErrorPage,
  HomePage,
  HeadphonePage,
  SpeakerPage,
  EarphonePage,
  RootPage,
  ProductDetailsPage,
  CheckoutPage,
} from "./pages";
import ScrollToTop from "./utilities/ScrollToTop";
import { Fragment } from "react";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootPage />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//     ],
//   },
// ]);

const App = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route index element={<HomePage />} />
          <Route path="headphones" element={<HeadphonePage />} />
          <Route path="speakers" element={<SpeakerPage />} />
          <Route path="earphones" element={<EarphonePage />} />
          <Route
            path="productDetails/:productId"
            element={<ProductDetailsPage />}
          />
        </Route>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
