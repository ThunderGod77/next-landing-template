import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  return (
    <nav className="container flex items-center py-4 mt-4 sm:mt-12">
      <div className="py-1">
        <img src="./logo-bookmark.svg" alt="logo" />
      </div>
      <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-blue-300 uppercase text-xs">
        <li className="cursor-pointer ">Features</li>
        <li className="cursor-pointer ">Pricing</li>
        <li className="cursor-pointer ">Contact</li>
        <li className="cursor-pointer ">FAQ</li>
      </ul>
      <div className="flex sm:hidden flex-1 justify-end items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}
