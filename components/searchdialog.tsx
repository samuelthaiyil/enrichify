import { BootstrapIcon } from "./ui/bootstrap-icon";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"

type SearchDialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const SearchDialog = ({ open, setOpen }: SearchDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                <DialogHeader className="hidden">
                    <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <input 
                    className="border-none focus:border-none focus:ring-0 focus:outline-none p-3 text-xl animate-caret" 
                    placeholder="Search anything" 
                />
            </DialogContent>
        </Dialog>
    )
}