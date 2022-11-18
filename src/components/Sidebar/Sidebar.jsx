import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import {
  MdMessage,
  MdHomeRepairService,
  MdNotifications,
} from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import {
  AiFillHeart,
  AiTwotoneFileExclamation,
  AiOutlineHistory,
} from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Link from "next/link";

// import "./style.css";

const userRoutes = [
  {
    path: "/inquiries#",
    name: "Inquiries",
    icon: <FaHome />,
    modal: true,
  },
  {
    path: "/settings/profile",
    name: "Setting",
    icon: <FaUser />,
    modal: true,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((state) => !state);
  };
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.3,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                ></motion.h1>
              )}
            </AnimatePresence>

            <div
              className="bars"
              style={{ fontSize: "22px", cursor: "pointer" }}
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {userRoutes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <div className="ml-2">
                  <Link
                    href={route.path}
                    className="flex gap-x-8"
                    style={{ padding: "10px 5px", cursor: "pointer" }}
                  >
                    <div style={{ fontSize: "22px" }}>{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <>
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </Link>
                </div>
              );
            })}
          </section>
        </motion.div>

        <main style={{ margin: "7px", width: "100%" }}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
