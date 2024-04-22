"use client"

import { useUser } from "@clerk/nextjs";
import BingoCards from "~/components/BingoCards";
import { UsersDialog } from "~/components/Dialogs/UsersDialog";
export const dynamic ="force-dynamic";

export default  function HomePage() {
  const { user, isLoaded } = useUser();
  console.log(user?.id)
  return (
    <>
      <main>
        <article className="flex flex-col items-center mt-4">
          <section className="h-fit w-fit">
            <UsersDialog/>
          </section>
          <section className="h-fit w-fit p-4 mt-8 border-2 border-slate-200 bg-slate-50 rounded m-4">
            { isLoaded &&
              <BingoCards clerkId={(user as any).id}/>   
            }
          </section>
        </article>
      </main>
    </>
  );
}
