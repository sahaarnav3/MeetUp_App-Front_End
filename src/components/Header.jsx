import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
      <nav className="navbar bg-body-secondary py-0">
        <div className="container container-fluid pt-2 pb-3 border-bottom border-secondary-subtle border-2">
          <NavLink className="navbar-brand" to="/"><h1 className="text-danger"><i>Meetup</i></h1></NavLink>
          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="🔍 Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Header;
