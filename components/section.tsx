import { Section as SectionType } from "../app/types/section";
import { Heroicon } from "./ui/heroicon";

type SectionProps = SectionType & {
    isActive: boolean;
};

export const Section = ({ name, icon, isActive }: SectionProps) => (
    <div className={`hover:bg-grey-200 flex items-center gap-3 pl-4 pr-2 py-2 rounded-lg bg-card ${isActive ? "bg-primary" : ""}`}>
        <Heroicon name={icon} size="md" className="text-primary" />
        <span className="text-md">{name}</span>
    </div>
)