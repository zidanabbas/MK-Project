import React from "react";
import Icon from "@mdi/react";
import Link from "next/link";
import {
  mdiHomeOutline,
  mdiSilverware,
  mdiBasketPlusOutline,
  mdiAccountCircleOutline,
  mdiCartCheck,
} from "@mdi/js";

export default function MobileNav() {
  return (
    <>
      <div className="flex items-center justify-center max-w-full fixed -bottom-10 z-[1000px] sm:hidden">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md px-7 py-10 mx-auto rounded-2xl shadow-xl">
            <div className="px-16 pt-2 bg-white shadow-lg rounded-3xl">
              <div className="flex flex-row space-x-3">
                <div className="flex group">
                  <Link
                    href={"/"}
                    className="p-3 text-gray-400 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      <Icon path={mdiHomeOutline} size={1} title="Home" />
                      <span className="text-xs mb-2 transition-all duration-200">
                        Home
                      </span>
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                      ></span>
                    </span>
                  </Link>
                </div>

                <div className="flex group">
                  <Link
                    href={"/menu"}
                    className="p-3 text-gray-400 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      <Icon path={mdiSilverware} size={1} title="menu" />

                      <span className="text-xs mb-2 transition-all duration-200">
                        Menu
                      </span>

                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                      ></span>
                    </span>
                  </Link>
                </div>
                {/* 
                <div className="flex group">
                  <a
                    href="#"
                    className="p-3 text-yellow-500 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      <Icon
                        path={mdiBasketPlusOutline}
                        size={1}
                        title="Feeds"
                      />

                      <span className="text-xs mb-2 transition-all duration-200">
                        Feeds
                      </span>

                      <span
                        className="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500
									hover:h-3 hover:w-3 transition-all duration-150 delay-100"
                      ></span>
                    </span>
                  </a>
                </div> */}

                <div className="flex group">
                  <Link
                    href={"/cart"}
                    className="p-3 text-gray-400 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      <Icon path={mdiCartCheck} size={1} title="Cart" />

                      <span className="text-xs mb-2 transition-all duration-200">
                        Cart
                      </span>

                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                      ></span>
                    </span>
                  </Link>
                </div>

                <div className="flex group">
                  <a
                    href="#"
                    className="p-3 text-gray-400 hover:text-yellow-500"
                  >
                    <span className="flex flex-col items-center">
                      <Icon
                        path={mdiAccountCircleOutline}
                        size={1}
                        title="Account"
                      />

                      <span className="text-xs mb-2 transition-all duration-200">
                        Account
                      </span>

                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"
                      ></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
