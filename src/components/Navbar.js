import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link class="navbar-brand">JOB LIST</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
