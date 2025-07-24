"use client";

import { User } from "@/lib/definitions";
import { useState } from "react";
import { EyeIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

interface UserDetailsProps {
    id: number;
    users: User[]
}

export function UserDetails({ id, users }: UserDetailsProps) {
    const [user, setUser] = useState<User | undefined>(undefined);
    const handleClick = () => {
        setUser(users.find(u => u.id === id));
    }

    const renderModal = () => {
        return (user &&
            <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative z-10">
                <div aria-hidden="true" className="fixed inset-0 bg-gray-700/75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 sm:flex">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                            <div className="bg-gray-50 px-4 py-3 flex flex-row justify-between items-center">
                                <h3 id="dialog-title" className="text-base font-semibold text-gray-700">User details</h3>
                                <button onClick={() => setUser(undefined)} type="button" className="bg-inherit w-auto">
                                    <XMarkIcon className="w-5 text-gray-700"/>
                                </button>
                            </div>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <table className="w-full [&_td]:p-1">
                                    <tbody>
                                        <tr>
                                            <td rowSpan={6} className="align-top font-semibold text-gray-700">
                                                <div className="flex gap-2 text-center">
                                                    <HomeIcon className="w-5"/>
                                                    <span className="sr-only sm:not-sr-only">Full address</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{user.address.street}</td>
                                        </tr>
                                        <tr>
                                            <td>{user.address.suite}</td>
                                        </tr>
                                        <tr>
                                            <td>{user.address.city}</td>
                                        </tr>
                                        <tr>
                                            <td>{user.address.zipcode}</td>
                                        </tr>
                                        <tr>
                                            <td>[{user.address.geo.lat},{user.address.geo.lng}]</td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold">
                                                <div className="flex gap-2 text-center text-gray-700">
                                                    <PhoneIcon className="w-5"/>
                                                    <span className="sr-only sm:not-sr-only">Phone</span>
                                                </div>
                                            </td>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold text-gray-700">
                                                <div className="flex gap-2 text-center">
                                                    <GlobeAltIcon className="w-5"/>
                                                    <span className="sr-only sm:not-sr-only">Website</span>
                                                </div>
                                            </td>
                                            <td><Link href={user.website} className="text-blue-500 hover:text-blue-600">{user.website}</Link></td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={4} className="align-top font-semibold text-gray-700">
                                                <div className="flex gap-2 text-center">
                                                    <BuildingOffice2Icon className="w-5"/>
                                                    <span className="sr-only sm:not-sr-only">Company details</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{user.company.name}</td>
                                        </tr>
                                        <tr>
                                            <td>{user.company.catchPhrase}</td>
                                        </tr>
                                        <tr>
                                            <td>{user.company.bs}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <button
                className="rounded-md p-2 bg-blue-700 hover:bg-blue-600 flex gap-x-2"
                onClick={handleClick}
            >
                <EyeIcon className="w-5 text-gray-100"/>
                <span className="text-gray-100 sr-only lg:not-sr-only">View details</span>
            </button>
            { renderModal() }
        </div>
    );

}