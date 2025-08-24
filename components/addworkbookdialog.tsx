import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { createWorkbook } from "@/convex/workbook";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";

type AddWorkbookDialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const AddWorkbookDialog = ({ open, setOpen }: AddWorkbookDialogProps) => {
    const [form, setForm] = useState({
        name: "",
    });

    const createWorkbook = useMutation(api.workbook.createWorkbook);

    const handleCreate = async () => {
        await createWorkbook({
            name: form.name,
            createdBy: "jn77n3064fsrc05t7gtpe7tyj17p9qe9" as Id<"Users">
        });
        setOpen(false);
        setForm({ name: "" });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Add Workbook</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2 my-4">
                    <Label>Name*</Label>
                    <Input 
                        className="border-gray-300" 
                        placeholder="Workbook Name" 
                        value={form.name} 
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && form.name.length > 0) {
                                handleCreate();
                            }
                        }}
                    />
                </div>
                <DialogFooter>
                    <Button className="bg-red-500 text-white" onClick={handleCreate} disabled={form.name.length === 0}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
