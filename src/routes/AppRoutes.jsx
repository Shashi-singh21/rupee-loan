import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/Authenticate/SignIn";
import SignUp from "../pages/Authenticate/SignUp";
import ForgotPassword from "../pages/Authenticate/Forgotpassword";

import Dashboard from "../pages/User/Dashboard";
{/*import ActiveUser from "../pages/User/ActiveUser";*/}
import UserDetails from "../pages/User/UserDetails";




const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/dashboard" element={<Dashboard />} />
      {/*<Route path="/users/active" element={<ActiveUser />} />*/}
      <Route path="/users/:userId" element={<UserDetails />} />

      
    </Routes>
  );
};

export default AppRoutes;