import { headerLogo } from "../assets/images";
import { hamburger, x } from "../assets/icons";
import { navLinks } from "../constants";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="padding-x py-8 sticky top-0 z-50 w-full backdrop-blur-xl shadow-md">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block"
          onClick={() => setMobileMenuOpen(true)}
        >
          <img src={hamburger} alt="Menu" width={25} height={25} />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 padding-x z-50 w-full overflow-y-auto py-8 sm:max-w-sm backdrop-blur-3xl">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Nike</span>
              <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <img src={x} alt="Logo" width={25} height={25} />
            </button>
          </div>

          <div className="padding-y flex flex-col gap-4">
            {navLinks.map((item) => (
              <div
                className="bg-coral-red text-white text-center px-7 py-4 rounded-full shadow-xl"
                key={item.label}
              >
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg font-semibold"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Nav;
