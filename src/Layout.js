import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [dummy, setDummy] = useState("Dummy");
  return (
    <>
      <header>Header</header>
      <div>
        <Outlet context={dummy} />
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default Layout;
