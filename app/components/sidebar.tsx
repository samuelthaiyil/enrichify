import { useState } from "react";

const sections: Section[] = [
    {
        name: "Home",
        icon: ""
    }
]

export const Sidebar = () => {
    const [activeSection, setSectionTab] = useState<Section>();

    return (
        <>
            {
                sections.map((section, index) => {
                        return <>
                })
            }
        </>
    )
}

const Section = () = {

}