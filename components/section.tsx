"use client"

import Link from "next/link";
import { Section as SectionType } from "../app/types/section";
import { BootstrapIcon } from "./ui/bootstrap-icon";

type SectionProps = SectionType & {
    isActive: boolean;
    onClick: () => void;
};

export const Section = ({ name, icon, route, isActive, onClick }: SectionProps) => (
    <Link href={route}>
        <div onClick={onClick} className={`${isActive ? "border-l-3 border-l-black pl-3 relative" : "pl-3 border-l-3 border-l-white"}`}>
            <div className={`hover:bg-gray-200 flex items-center gap-3 pl-3 pr-4 py-3 rounded-lg bg-card group`}>
                <div className={`opacity-50 group-hover:opacity-100 ${isActive ? "opacity-100" : ""}`}>
                    <BootstrapIcon name={icon} />
                </div>
                <span className="text-md">{name}</span>
            </div>
        </div>
    </Link>
)