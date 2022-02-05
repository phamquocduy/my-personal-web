import cls from "classnames";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

import Button from "../bricks/button";

const projects = [
  {
    name: "App 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores fuga?",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "App 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores fuga?",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "App 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores fuga?",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "App 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores fuga?",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];

const Navigation = () => {
  return (
    <header>
      <Popover className="z-100 relative bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img src="/favicon/main-logo.png" className="relative h-24 w-auto" alt="logo" />
            </a>
          </div>

          {/* Mobile - open menu button */}
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Navigation */}
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={cls(
                      open ? "text-black" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-black focus:outline-none"
                    )}
                  >
                    <span>Recent works</span>
                    <ChevronDownIcon
                      className={cls(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {projects.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-100"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-violet-600 text-white sm:h-12 sm:w-12">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-black">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          {/* Button - Download my CV */}
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 lg:pr-12">
            <Button>Download my CV</Button>
          </div>
        </div>

        {/* Mobile - menu */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 py-5">
                <div className="flex items-center justify-between">
                  <img src="/favicon/main-logo.png" className="relative h-24 w-auto" alt="logo" />

                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500">
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>

              <div className="px-5 pt-4 pb-2">
                <div className="mb-6 text-base font-medium text-gray-900 hover:text-gray-700">Recent works</div>
                <nav className="grid gap-6">
                  {projects.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-100"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-violet-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="px-5 py-2">
                <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-violet-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-violet-700">
                  Download my CV
                </button>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Navigation;
