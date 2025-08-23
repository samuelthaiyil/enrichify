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
            icon: "BsHouse"
        },
        {
            name: "Favourites",
            icon: "BsStar"
        }
    ],
    [
        {
            name: "Workbooks",
            icon: "BsBook"
        },
        {
            name: "Settings",
            icon: "BsGear"
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
        <div className="w-60 h-screen">
            <img src="/logo.svg" alt="logo" className="w-50 p-3 pt-5" />
            <SearchBar query={""} />
            {
                sectionGroups.map((sectionGroup, index) => {
                    return (
                        <div key={index}>
                            {sectionGroup.map((section, index) => (
                                <Section key={index} onClick={() => handleSectionChange(section)} name={section.name} icon={section.icon} isActive={activeSection.name === section.name} />
                            ))}
                            {index !== sectionGroups.length - 1 && <Separator className="my-5" />}
                        </div>
                    )
                })
            }
        </div>
    )
}