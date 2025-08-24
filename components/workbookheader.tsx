"use client"

import { useState } from "react";
import { AddWorkbookDialog } from "./addworkbookdialog";
import { BootstrapIcon } from "./ui/bootstrap-icon";
import { Button } from "./ui/button";

export const WorkbookHeader = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="p-6 flex flex-row justify-between">
        <h1 className="text-2xl font-medium tracking-tighter">Workbooks</h1>
        <Button onClick={() => setOpen(true)}>
          <BootstrapIcon name="BsPlusLg" />
          Add
        </Button>
        <AddWorkbookDialog open={open} setOpen={setOpen} />
      </div>
    )
}