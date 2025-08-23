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
        <div onClick={onClick} className={`${isActive ? "border-l-3 border-l-black pl-3 relative" : "pl-3"}`}>
            <div className={`hover:bg-gray-200 flex items-center gap-3 pl-4 pr-4 py-3 rounded-lg bg-card`}>
                <BootstrapIcon name={icon} />
                <span className="text-md">{name}</span>
            </div>
        </div>
    </Link>
)