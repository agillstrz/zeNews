import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [name, setName] = useState("agil");
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setScroll(true) : setScroll(false);
    });
  });

  const HandleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${name}`);
  };

  return (
    <div className="">
      <nav
        className={`${
          scroll
            ? "fixed top-0 left-0 right-0 shadow-lg bg-white "
            : "bg-black text-white"
        }  flex justify-between navbar font-semibold py-2 px-[50px] fixed top-0 left-0 right-0 z-[9999] transition-all duration-300  ease-in`}
      >
        <Link
          className={`font-extrabold text-2xl text-transparent bg-clip-text  bg-gradient-to-r ${
            scroll ? "from-black to-hijau" : "from-white to-hijau"
          } `}
          to="/"
        >
          zenews
        </Link>
        <ul className="flex gap-x-12 uppercase ">
          <li className="btn-nav">
            <NavLink activeClassName="active" to="/news/entertainment">
              entertainment
            </NavLink>
          </li>
          <li className="btn-nav">
            <NavLink activeClassName="active" to="/news/sport">
              Sport
            </NavLink>
          </li>
          <li className="btn-nav">
            <NavLink activeClassName="active" to="/news/business">
              business
            </NavLink>
          </li>
          <li className="btn-nav">
            <NavLink activeClassName="active" to="/news/technology">
              technology
            </NavLink>
          </li>
          <li className="btn-nav">
            <NavLink activeClassName="active" to="/news/science">
              science
            </NavLink>
          </li>
          <li className="btn-nav">
            <NavLink activeClassName="active" to="/news/health">
              health
            </NavLink>
          </li>
          <div className=" text-black flex">
            <form onSubmit={HandleSearch}>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </form>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
