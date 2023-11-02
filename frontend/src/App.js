import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  // ProductsPage,
  // BestSellingPage,
  // EventsPage,
  // FAQPage,
  // CheckoutPage,
  // PaymentPage,
  // OrderSuccessPage,
  // ProductDetailsPage,
  // ProfilePage,
  // ShopCreatePage,
  // SellerActivationPage,
  // ShopLoginPage,
  // OrderDetailsPage,
  // TrackOrderPage,
  // UserInbox,
} from "./routes/Routes.js";

const App = () => {
  // const [stripeApikey, setStripeApiKey] = useState("");

  // async function getStripeApikey() {
  //   const { data } = await axios.get(`${server}/payment/stripeapikey`);
  //   setStripeApiKey(data.stripeApikey);
  // }
  // useEffect(() => {
  //   Store.dispatch(loadUser());
  //   Store.dispatch(loadSeller());
  //   Store.dispatch(getAllProducts());
  //   Store.dispatch(getAllEvents());
  //   getStripeApikey();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;