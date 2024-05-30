"use client";

import { useUser } from "@clerk/nextjs";
import BingoCards from "~/components/BingoCards";
import { UsersDialog } from "~/components/Dialogs/UsersDialog";
export const dynamic = "force-dynamic";

export default function HomePage() {
  const { user, isLoaded } = useUser();

  return (
    <>
      <main>
        <article className="mt-4 flex flex-col items-center">
          <section className="h-fit w-fit">
            <UsersDialog />
          </section>
          <section>
            {isLoaded && <BingoCards clerkId={(user as any).id} />}
          </section>
        </article>
      </main>
    </>
  );
}
