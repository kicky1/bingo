import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "~/components/ui/table"
  
  const invoices = [
    {
        avatar: "1",
        username: "Kicky",
        bingoAmount: "2",
    },
    {
        avatar: "2",
        username: "Micky",
        bingoAmount: "1",
    },
    {
        avatar: "3",
        username: "Dicky",
        bingoAmount: "3",
    },
    {
        avatar: "4",
        username: "Ricky",
        bingoAmount: "4",
    },
    {
        avatar: "5",
        username: "Nicky",
        bingoAmount: "5",
    },
  ]
  
  export function UsersTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Nazwa użytkownika</TableHead>
            <TableHead>Ilość bingo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.username}>
                <TableHead>{invoice.avatar}</TableHead>
                <TableCell className="font-medium">{invoice.username}</TableCell>
                <TableCell>{invoice.bingoAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  