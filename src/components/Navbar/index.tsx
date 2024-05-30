"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Badge } from "../ui/badge";
import { useGetUser } from "~/actions/get-user";

import { Flame } from "lucide-react";
import { useCountStreak } from "~/hooks/useCountStreak";

export default function Navbar() {
  const { user, isLoaded } = useUser();
  const userId = user?.id;
  const { data: userData } = userId ? useGetUser(userId) : { data: undefined };

  return (
    <nav className="fint-semibold flex w-full items-center justify-between p-4 text-xl ">
      <div>KITH Bingo</div>
      <div className="flex items-center space-x-4">
        <Badge className="h-8 bg-red-500 text-sm font-normal hover:bg-red-800">
          {`Streak: ${userData ? useCountStreak(userData?.wins) : 0}`}{" "}
          <Flame className="ml-1" height={18} />
        </Badge>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
