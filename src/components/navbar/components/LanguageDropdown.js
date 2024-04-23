import React from "react";
import RoundedUkFlag from "../../../atoms/icons/colored/Uk";

import UkFlag from "../../../atoms/icons/colored/UkFlag";
import FranceFlag from "../../../atoms/icons/colored/FrFlag";
import GermanyFlag from "../../../atoms/icons/colored/GrFlag";

import { Menu, Transition } from "@headlessui/react";

const LanguageDropdown = () => {
    return (
        <Menu>
            <Menu.Button>
                <RoundedUkFlag />
            </Menu.Button>

            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute mt-[160px] w-[110px] origin-top-right divide-y-[1px] divide-grey-300 rounded-md bg-white shadow-lg ring-[1px] ring-grey-300 ring-opacity-1 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${
                                    active ? "bg-grey-200" : ""
                                } group flex gap-2 w-full items-center rounded-t-md px-2 py-2 text-sm font-normal text-grey-500`}
                            >
                                <UkFlag /> USA
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${
                                    active ? "bg-grey-200" : ""
                                } group flex gap-2 w-full items-center px-2 py-2 text-sm font-normal text-grey-500`}
                            >
                                <FranceFlag /> France
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${
                                    active ? "bg-grey-200" : ""
                                } group flex gap-2 w-full items-center rounded-b-md px-2 py-2 text-sm font-normal text-grey-500`}
                            >
                                <GermanyFlag /> Germany
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default LanguageDropdown;
