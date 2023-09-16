import * as React from "react";
import {
  Header,
  Sidebar,
  SignIn,
  SignUp,
  Withdraw,
  Deposit,
  Transfer,
  Profile,
  Transaction,
  User,
} from "./pages";
import STORAGE from "./utils/local.storage";
import { Route, Routes, Navigate } from "react-router-dom";

function PrivateOutlet() {
  const auth = STORAGE.getStorage();

  return auth ? (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/withdraw" element={<Withdraw />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </React.Fragment>
  ) : (
    <Navigate to="/" />
  );
}

function App() {
  const auth = STORAGE.getStorage();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={!auth ? <SignIn /> : <Navigate to="/auth/user" />}
        ></Route>

        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/auth/*" element={<PrivateOutlet />}></Route>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
