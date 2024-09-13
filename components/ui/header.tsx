"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          {/* Website Name 若是移动设备则隐藏 */}
          <div className="hidden md:flex items-center text-lg font-semibold text-gray-800">
            心纪元 Xin Era
          </div>

          {/* Some Buttons */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link 
                href="https://blog.mcxin.top"
                target="_blank"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                资讯
              </Link>
            </li>
            <li>
              <Link
                href="https://status.mcxin.top"
                target="_blank"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                状态
              </Link>
            </li>
            <li>
              <Link
                href="https://map.mcxin.top"
                target="_blank"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                地图
              </Link>
            </li>
            <li>
              <Link
                href="https://accounts.mcxin.top"
                target="_blank"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                用户
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
