import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  const navigation = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Restaurant",
      path: "/restaurant",
    },
    {
      title: "Accommodation",
      path: "/Accommodation",
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

  return (
    <div className="lg:pb-12">
      <div className="mx-auto max-w-screen-xl">
        <header className="flex items-center justify-between">
          <Link to="/" aria-label="logo">
            <img src={Logo} className="w-[166px]" alt="" />
          </Link>

          <nav className="hidden gap-12 lg:flex py-3">
            {navigation.map((link, id) => (
              <Link
                to={link.path}
                key={id}
                className="font-sans text-lg font-semibold leading-[50px] tracking-[0.14em] text-left text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="-ml-8 hidden flex-col sm:flex-row sm:justify-center lg:flex lg:justify-start border border-white">
            <a
              to=""
              className=" p-[10px] font-sans text-lg font-normal leading-[30px] tracking-[0.14em] text-left text-white"
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

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold text-white ring-indigo-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
