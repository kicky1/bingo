import { useGetUsers } from "~/actions/get-users";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useCountStreak } from "~/hooks/useCountStreak";

export function UsersTable() {
  const { data, isLoading } = useGetUsers();

  if (isLoading) return <>Loading...</>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Amout of bingos</TableHead>
          <TableHead>Streak</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((user) => (
          <TableRow key={user.id}>
            <TableHead>
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableHead>
            <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell>{user.wins.length}</TableCell>
            <TableHead>{useCountStreak(user.wins)}</TableHead>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
