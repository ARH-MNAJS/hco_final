// Navbar.tsx
"use client";

import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

import MobileDrawer from '@/components/app/MobileDrawer';
import { ThemeSwitcher } from '@/components/app/ThemeSwitcher';
import Timeline from '@/components/app/Timeline'; // Ensure correct path

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-20 w-full h-22 md:h-16 flex items-center border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-secondaryBlack px-5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        {/* Mobile Drawer */}
        <MobileDrawer />

        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl md:text-xl font-heading">
            Hawking*
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/prepare" className="text-lg lg:text-base font-medium">
              Prepare
            </Link>
            <Link href="/announcements" className="text-lg lg:text-base font-medium">
              Announcements
            </Link>
          </div>
        </div>

        {/* Actions: Timeline and Theme Switcher */}
        <div className="flex items-center gap-5">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                className="hidden lg:flex items-center justify-center rounded-base border-2 border-border shadow-nav dark:shadow-navDark dark:border-darkBorder p-2 transition-transform transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="mr-2 fill-current text-black dark:text-white"
                  viewBox="0 0 512 512"
                >
                  <circle cx="184.166" cy="256.166" r="24"></circle>
                  <circle cx="256.166" cy="256.166" r="24"></circle>
                  <circle cx="328.166" cy="256.166" r="24"></circle>
                  <path d="M168 392a23.929 23.929 0 0 1-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569 0-33.941l112-112c9.373-9.372 24.568-9.372 33.941 0 9.371 9.372 9.371 24.568 0 33.941L89.941 256l95.029 95.029c9.371 9.372 9.371 24.568 0 33.941A23.925 23.925 0 0 1 168 392zM344 392a23.929 23.929 0 0 0 16.971-7.029l112-112c9.373-9.373 9.373-24.569 0-33.941l-112-112c-9.373-9.372-24.568-9.372-33.941 0-9.371 9.372-9.371 24.568 0 33.941L422.059 256l-95.029 95.029c-9.371 9.372-9.371 24.568 0 33.941A23.925 23.925 0 0 0 344 392z"></path>
                </svg>
                <span className="text-base text-text dark:text-darkText">Timeline</span>
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
              <Dialog.Content
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           bg-white dark:bg-[#212121] p-6 rounded-lg shadow-lg
                           w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden mt-16"
              >
                <Dialog.Close className="absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black dark:text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Dialog.Close>

                {/* Timeline Component */}
                <Timeline />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
