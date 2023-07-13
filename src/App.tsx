import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import GPG from "./views/GPG";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Projects from "./views/Projects";
import Social from "./views/Social";
import ThemeSwitch from "./views/ThemeSwitch";
import {
  AcademicCapIcon,
  ExternalLinkIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const App = () => {
  const currentYear: number = new Date().getFullYear();
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  // TO-DO: this should be refactored
  const menuRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);

  const closeMenu = () => {
    setShowMenu(false);
  };
  const handleToggleMenu = (e: MouseEvent) => {
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      return;
    }
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleToggleMenu);
    return () => {
      document.removeEventListener("click", handleToggleMenu);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col ${
          theme === "dark" ? "dark:bg-gray-900 dark:text-white" : ""
        }`}
      >
        <div className="container mx-auto px-6 flex-grow max-w-5xl">
          <nav className="mt-4 flex flex-row justify-between">
            <Link
              className={`flex lg:p-2 py-2 rounded items-center lg:hover:bg-gray-100 hover:bg-blue-50 lg:dark:hover:bg-gray-800 ${
                theme === "dark" ? "dark:text-yellow-400" : "text-yellow-500"
              }`}
              to="/"
            >
              <AcademicCapIcon className="mr-4 w-5 h-5" />
              <span
                className={
                  theme === "dark" ? "dark:text-white" : "text-yellow-500"
                }
              >
                Home
              </span>
            </Link>

            {/* Navigation on desktop devices */}
            <div className="hidden md:flex">
              <Link
                className={`text-blue-700 ${
                  theme === "dark" ? "dark:text-yellow-400" : ""
                } p-2 mr-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800`}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className={`text-blue-700 ${
                  theme === "dark" ? "dark:text-yellow-400" : ""
                } p-2 mr-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800`}
                to="/social"
              >
                Blogs
              </Link>
              <Link
                className={`text-blue-700 ${
                  theme === "dark" ? "dark:text-yellow-400" : ""
                } p-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800`}
                to="/gpg"
              >
                Contact
              </Link>
            </div>
            <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
            <a
              className={`bg-pink-100 p-2 rounded bg-opacity-40 hover:bg-opacity-80 dark:bg-opacity-10 dark:hover:bg-opacity-20 hidden md:block ${
                theme === "dark" ? "dark:text-white" : "text-yellow-500"
              } hover:text-yellow-600`}
              href="mailto:suman.mukhiya@hotmail.com"
            >
              Get in touch
            </a>

            {/* Navigation on mobile devices (dropdown menu) */}
            <button
              className="md:hidden p-2"
              ref={buttonRef}
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <MenuIcon className="w-5 h-5" />
            </button>
            <CSSTransition
              in={showMenu}
              timeout={300}
              classNames="menu"
              unmountOnExit
              nodeRef={menuRef}
            >
              <div className="absolute top-0 right-0" ref={menuRef}>
                <div className="flex flex-col space-y-4 m-3 p-4 rounded bg-white dark:bg-gray-800 shadow-xl">
                  <Link to="/projects" onClick={closeMenu}>
                    Projects
                  </Link>
                  <Link to="/social" onClick={closeMenu}>
                    Blogs
                  </Link>
                  <Link to="/gpg" onClick={closeMenu}>
                    Contact
                  </Link>
                  <a
                    className="flex items-center"
                    href="mailto:suman.mukhiya@hotmail.com"
                    onClick={closeMenu}
                  >
                    <span className="mr-2">Get in touch</span>
                    <ExternalLinkIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CSSTransition>
          </nav>

          <div className="my-16">
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/social">
                <Social />
              </Route>
              <Route path="/gpg">
                <GPG />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>

        <footer
          className={`w-full text-center ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white-200 text-gray-900"
          } p-4`}
        >
          <div className="container mx-auto">
            <div>
              Powered by{" "}
              <a className="hover:text-black" href="https://reactjs.org/">
                React
              </a>
              ,{" "}
              <a className="hover:text-black" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>
              ,{" "}
              <a className="hover:text-black" href="https://vitejs.dev/">
                Vite
              </a>{" "}
              and{" "}
              <a
                className="hover:text-black"
                href="https://www.typescriptlang.org/"
              >
                TypeScript.
              </a>
            </div>
            <div>Suman Mukiya © 2021-{currentYear}</div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
