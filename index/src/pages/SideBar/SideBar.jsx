// src/Sidebar.js
import React, { useState } from "react";
import "./sidebar.css";
import Hamberger from "../../components/svg/Hamberger.svg";
const Sidebar = () => {
  const [hamberger, sethamberger] = useState(false);

  function handleHamberger() {
    sethamberger(!hamberger);
    console.log(hamberger);
  }
  //
  return (
    <div>
      <div
        class={`sidebar fixed md:h-[100vh] md:w-[280px] duration-200 h-[100vh] w-screen md:translate-x-[0] -translate-x-full ${
          hamberger ? "translate-x-[0.1rem]" : ""
        }`}
      >
        <div class="mt-4 flex gap-2 p-5 pt-0">
          <div class="btnHighlight h-4 w-4 rounded-full"></div>
          <div class="btnHighlight h-4 w-4 rounded-full"></div>
        </div>
        <div class="flex w-full justify-center">
          <aside class="side-bar h-[88vh] md:w-[230px] w-[20rem] rounded-[10px] bg-[#1c1b23]">
            <div class=" flex justify-center mr-9">
              <div class="mt-4 flex flex-col gap-2 Home">
                <a
                  class="flex items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-home"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>{" "}
                  Home
                </a>

                <a
                  class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-flame"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>{" "}
                  Trending
                </a>

                <a
                  class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-code"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>{" "}
                  Snippets
                </a>

                <a
                  class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                  href="/"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="0.8"
                      d="M15 4v3c0 .6-.4 1-1 1h-3m2 10v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-7.1c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H9m-1 4H4m16-7v10c0 .6-.4 1-1 1h-7a1 1 0 0 1-1-1V7.9c0-.3 0-.5.2-.7l2.5-2.9c.2-.2.5-.3.8-.3H19c.6 0 1 .4 1 1Z"
                    />
                  </svg>{" "}
                  Projects
                </a>
              </div>
            </div>
            <div class="mt-5 ml-4 social w-min">Socials</div>
            <div class="socialPlatforms w-min flex flex-col gap-2 md:ml-8 ml-[4.7rem]">
              <a
                target="www.google.com"
                class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                href="https://www.instagram.com/ezsnippet/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b5179e"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>{" "}
                Instagram
              </a>
              <a
                target="_blank"
                class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                href="https://www.linkedin.com/in/ezSnippet/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0277b5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>{" "}
                Linkedin
              </a>
              <a
                target="_blank"
                class="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                href="https://github.com/nwaliaez"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2a9d8f"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>{" "}
                Github
              </a>
            </div>
          </aside>
        </div>
      </div>

      <div className="w-[100%] h-[3.5rem] flex flex-row-reverse">
        <div class="hamberger absolute">
          <div className=" md:hidden  " onClick={handleHamberger}>
            <img src={Hamberger} alt="hamberger" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;

// https://play.tailwindcss.com/PCugMPVTlq

// transform transition-transform duration-700 hover:-translate-x-96

// https://play.tailwindcss.com/PCugMPVTlq
