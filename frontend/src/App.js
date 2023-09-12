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
  User
} from "./pages";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />

      <Routes>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
