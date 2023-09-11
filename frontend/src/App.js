import * as React from "react";
import { Header, Sidebar } from "./pages";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>

      <Routes>
        {/* <Route path="/withdraw" element={<SignIn />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
