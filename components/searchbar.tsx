"use client"

import { useState } from "react";
import { SearchDialog } from "./searchdialog";

type SearchBarProps = {
    query: string;
}

export const SearchBar = ({ query }: SearchBarProps) => {
    const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);

    return (
        <>
            <div className="rounded-md bg-red-800 p-2" onClick={() => setIsSearchDialogOpen(true)}>
                Search anything
            </div>
            <SearchDialog open={isSearchDialogOpen} setOpen={setIsSearchDialogOpen} />
        </>
    )
}