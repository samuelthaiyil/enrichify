"use client"

import { Section as SectionType } from "../app/types/section";
import { BootstrapIcon } from "./ui/bootstrap-icon";

type SectionProps = SectionType & {
    isActive: boolean;
};

export const Section = ({ name, icon, isActive }: SectionProps) => (
    <div className={`hover:bg-grey-200 flex items-center gap-3 pl-4 pr-2 py-2 rounded-lg bg-card ${isActive ? "bg-primary" : ""}`}>
        <BootstrapIcon name={icon} />
        <span className="text-md">{name}</span>
    </div>
)