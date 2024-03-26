// import React from "react";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Layout from "../layout/layout";

// const Home = React.lazy(() => import("../pages/home/home"));
// const Transaction = React.lazy(
//   () => import("../pages/transactions/transaction")
// );
// const Settlements = React.lazy(
//   () => import("../pages/settlements/settlements")
// );
// const Refund = React.lazy(() => import("../pages/refund/refund"));
// const CreateInvoice = React.lazy(
//   () => import("../pages/createInvoice/createInvoice")
// );
// const CreateLink = React.lazy(() => import("../pages/createLink/createLink"));
// const SendMoney = React.lazy(() => import("../pages/sendMoney/sendMoney"));
// const Api = React.lazy(() => import("../pages/api/api"));
// const Settings = React.lazy(() => import("../pages/settings/settings"));
// const Profile = React.lazy(() => import("../pages/profile/profile"));

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="transaction" element={<Transaction />} />
//       <Route path="settlements" element={<Settlements />} />
//       <Route path="refund" element={<Refund />} />
//       <Route path="create-invoice" element={<CreateInvoice />} />
//       <Route path="create-link" element={<CreateLink />} />
//       <Route path="send-money" element={<SendMoney />} />
//       <Route path="api" element={<Api />} />
//       <Route path="settings" element={<Settings />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="*" element={<h1>Error Page</h1>} />
//     </Route>
//   )
// );

// const Router = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default Router;

import React, { startTransition } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layout/layout";

const Home = React.lazy(() => import("../pages/home/home"));
const Transaction = React.lazy(
  () => import("../pages/transactions/transaction")
);
const Settlements = React.lazy(
  () => import("../pages/settlements/settlements")
);
const Refund = React.lazy(() => import("../pages/refund/refund"));
const CreateInvoice = React.lazy(
  () => import("../pages/createInvoice/createInvoice")
);
const CreateLink = React.lazy(() => import("../pages/createLink/createLink"));
const SendMoney = React.lazy(() => import("../pages/sendMoney/sendMoney"));
const Api = React.lazy(() => import("../pages/api/api"));
const Settings = React.lazy(() => import("../pages/settings/settings"));
const Profile = React.lazy(() => import("../pages/profile/profile"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="transaction"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Transaction />
          </React.Suspense>
        }
      />
      <Route
        path="settlements"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Settlements />
          </React.Suspense>
        }
      />
      <Route
        path="refund"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Refund />
          </React.Suspense>
        }
      />
      <Route
        path="create-invoice"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <CreateInvoice />
          </React.Suspense>
        }
      />
      <Route
        path="create-link"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <CreateLink />
          </React.Suspense>
        }
      />
      <Route
        path="send-money"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <SendMoney />
          </React.Suspense>
        }
      />
      <Route
        path="api"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Api />
          </React.Suspense>
        }
      />
      <Route
        path="settings"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Settings />
          </React.Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </React.Suspense>
        }
      />
      <Route path="*" element={<h1>Error Page</h1>} />
    </Route>
  )
);

const Router = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
