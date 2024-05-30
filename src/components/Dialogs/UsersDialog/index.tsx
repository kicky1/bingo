import { Copy } from "lucide-react";
import { UsersTable } from "~/components/Tables/UsersTable";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

export function UsersDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ranking bingowców</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Tabela</DialogTitle>
          <DialogDescription>
            Top użytkoników biorących udział w bingo
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <UsersTable />
          </div>
        </div>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Zamknij
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
