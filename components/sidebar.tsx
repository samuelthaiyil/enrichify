"use client"

import { useState } from "react";
import { Section } from "./section";
import { Section as SectionType, SectionGroup } from "../app/types/section";
import { SearchBar } from "./searchbar";
import { Separator } from "./ui/separator";

const sectionGroups: SectionGroup[] = [
    [
        {
            name: "Home",
            icon: "BsHouse",
            route: "/home"
        },
        {
            name: "Favourites",
            icon: "BsStar",
            route: "/favourites"
        }
    ],
    [
        {
            name: "Workbooks",
            icon: "BsBook",
            route: "/workbooks"
        },
        {
            name: "Settings",
            icon: "BsGear",
            route: "/settings"
        }
    ]
]

export const Sidebar = () => {
    const [activeSection, setSectionTab] = useState<SectionType>(sectionGroups[0][0]);

    const handleSectionChange = (section: SectionType) => {
        console.log(section);
        setSectionTab(section);
    }

    return (
        <div className="w-60 h-screen border border-r border-1 border-gray-200">
            <img src="/logo.svg" alt="logo" className="w-50 p-3 pt-5" />
            <SearchBar query={""} />
            {
                sectionGroups.map((sectionGroup, index) => {
                    return (
                        <div key={index}>
                            {sectionGroup.map((section, index) => (
                                <Section key={index} onClick={() => handleSectionChange(section)} name={section.name} icon={section.icon} route={section.route} isActive={activeSection.name === section.name} />
                            ))}
                            {index !== sectionGroups.length - 1 && <Separator className="my-5" />}
                        </div>
                    )
                })
            }
        </div>
    )
}