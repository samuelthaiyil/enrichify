"use client"

import { useState } from "react";
import { Section } from "./section";
import { Section as SectionType } from "../app/types/section";
import { SearchBar } from "./searchbar";

const sections: SectionType[] = [
    {
        name: "Home",
        icon: "BsHouse"
    },
    {
        name: "Workbooks",
        icon: "BsBook"
    }
]

export const Sidebar = () => {
    const [activeSection, setSectionTab] = useState<SectionType>(sections[0]);

    return (
        <div className="w-1/5 h-screen">
            <img src="/logo.svg" alt="logo" className="w-60 p-3 pt-5" />
            <SearchBar query={""} />
            {
                sections.map((section, index) => (
                    <Section key={index} name={section.name} icon={section.icon} isActive={activeSection.name === section.name} />
                ))
            }
        </div>
    )
}