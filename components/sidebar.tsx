"use client"

import { useState } from "react";
import { Section } from "./section";
import { Section as SectionType } from "../app/types/section";
import { SearchBar } from "./searchbar";

const sections: SectionType[] = [
    {
        name: "Home",
        icon: "HomeIcon"
    },
    {
        name: "Workbooks",
        icon: "BookOpenIcon"
    }
]

export const Sidebar = () => {
    const [activeSection, setSectionTab] = useState<SectionType>(sections[0]);

    return (
        <div className="w-1/5 h-screen">
            <h1 className="text-2xl font-bold p-5">Enrichify</h1>
            <SearchBar query={""} />
            {
                sections.map((section, index) => (
                    <Section key={index} name={section.name} icon={section.icon} />
                ))
            }
        </div>
    )
}