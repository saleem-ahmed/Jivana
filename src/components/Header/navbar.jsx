import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigation = [
    {
      title: "About",
      path: "/about",
      dropdown: [
        { title: "Our Story", path: "/about/our-story" },
      ],
    },
    {
      title: "Restaurant",
      path: "/restaurant",
    },
    {
      title: "Accommodation",
      path: "/accommodation",
    },
    {
      title: "Getaways",
      path: "/gateway",
    },
    {
      title: "Blogs",
      path: "/blog",
    },
    {
      title: "Find Us",
      path: "/find-us",
    },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setMenuOpen(false);
      if (!target.closest(".dropdown")) setDropdownOpen(false);
    };
  }, []);

  return (
    <nav
      className={`font-poppins md:text-sm ${
        menuOpen
          ? "shadow-lg rounded-xl bg-white border mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : "bg-transparent"
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-2 md:flex md:px-0">
        <div className="flex w-full items-center justify-between py-1 md:block">
          <Link to="/">
            <img src={Logo} className={`w-[166px] ${menuOpen ? "invert-css" : ""}`} alt="" />
          </Link>
          <div className="md:hidden">
            <button
              className={`menu-btn ${menuOpen ? "text-[#005AAB]" : "text-[white]"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <ul
          className={`justify-center items-center space-y-0 md:flex gap-5 md:space-y-0 ${
            menuOpen ? "block" : "bg-[transparent] hidden"
          }`}
        >
          {navigation.map((item, id) => (
            <li
              key={id}
              className={`text-[18px] text-nowrap font-[500] relative ${
                item.dropdown ? "dropdown" : ""
              }`}
              onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
            >
              <Link
                to={item.path}
                className={`block ${
                  menuOpen
                    ? "text-[#005AAB] hover:text-[#444]"
                    : "text-white hover:text-[#E1B524]"
                } font-sans font-semibold leading-[50px] tracking-[0.14em]`}
              >
                {item.title}
              </Link>
              {item.dropdown && dropdownOpen && (
                <ul className="absolute left-0 top-full  w-48 bg-white shadow-lg rounded-md z-10">
                  {item.dropdown.map((subItem, subId) => (
                    <li key={subId}>
                      <Link
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`flex flex-col w-full justify-flex-end items-end md:mt-0 md:flex ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="-ml-8 hidden flex-col sm:flex-row sm:justify-center lg:flex lg:justify-start border border-white">
            <a
              to=""
              className="p-[10px] font-sans text-lg font-normal leading-[30px] tracking-[0.14em] text-left text-white"
            >
              Summer
            </a>
            <span className="bg-[#CB9A6F] flex justify-center items-center px-2">
              <svg
                width="36"
                height="31"
                viewBox="0 0 36 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.12 10.5L18 16.6067L11.88 10.5L10 12.38L18 20.38L26 12.38L24.12 10.5Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
