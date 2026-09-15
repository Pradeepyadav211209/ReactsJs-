import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-10 sm:h-12"
              alt="Logo"
            />
          </Link>

          {/* Login + Get Started */}
          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-3 sm:px-4 py-2 mr-2"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-3 sm:px-4 py-2"
            >
              Get started
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
              aria-label="Open main menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="hidden w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 rounded ${
                      isActive
                        ? "text-orange-700 bg-gray-100"
                        : "text-gray-700 hover:text-orange-700 hover:bg-gray-50"
                    } lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 rounded ${
                      isActive
                        ? "text-orange-700 bg-gray-100"
                        : "text-gray-700 hover:text-orange-700 hover:bg-gray-50"
                    } lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  About
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
