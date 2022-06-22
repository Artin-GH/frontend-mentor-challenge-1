import { useState } from "react";
import styles from "../../../styles/layouts/global/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="py-[1.3rem] xl:px-4">
      <div className="container flex items-center">
        <div className="md:mr-10 sm:mr-[1.4375rem] text-[2rem] text-veryDarkViolet">
          <h3>
            <a href="#!">Shortly</a>
          </h3>
        </div>
        <div
          className={`${
            !isOpen ? "hidden" : ""
          } w-full sm:static absolute top-[5.3rem] sm:block
            left-0 flex items-center sm:px-0 px-2`}
        >
          <ul className={styles.itemCon}>
            {["features", "pricing", "resources"].map((item, i) => (
              <li key={i} className={styles.item}>
                <a href={`#${item}`} className={styles.itemLink}>
                  {item[0].toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <hr className="border-lightViolet border-t-2 my-2" />
            <div className="sm:flex sm:space-x-5 sm:items-center ml-auto flex-grow justify-end">
              <li className={styles.item}>
                <a className={styles.itemLink} href="#!">
                  Login
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={`btn btnCyan sm:btnSm btnMd sm:w-max
                              w-full font-size-inherit h-12 sm:h-auto`}
                  href="#!"
                >
                  Sign Up
                </a>
              </li>
            </div>
          </ul>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className={isOpen ? 'translate-y-[0.625rem] rotate-45' : ''}></div>
          <div className={isOpen ? 'opacity-0' : ''}></div>
          <div className={isOpen ? '-translate-y-[0.625rem] -rotate-45' : ''}></div>
        </button>
      </div>
    </nav>
  );
}
