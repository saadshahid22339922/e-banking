import * as React from "react";
import { Header, Sidebar,SignIn ,SignUp,Withdraw,Deposit} from "./pages";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>

      <Routes>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
