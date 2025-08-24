"use client"

import { useState, useEffect } from "react";
import { SearchDialog } from "./searchdialog";

type SearchBarProps = {
    query: string;
}

export const SearchBar = ({ query }: SearchBarProps) => {
    const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault();
                setIsSearchDialogOpen(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div className="rounded-full border-gray-800 p-2 px-8 my-4 mb-4 mx-auto w-50" onClick={() => setIsSearchDialogOpen(true)}>
                <span className="text-sm">Search anything</span>
            </div>
            <SearchDialog open={isSearchDialogOpen} setOpen={setIsSearchDialogOpen} />
        </>
    )
}