"use client"

import { useUser } from "@clerk/nextjs";
import { useGetUser } from "~/actions/get-user";
import BingoCards from "~/components/BingoCards";
import { UsersDialog } from "~/components/Dialogs/UsersDialog";
export const dynamic ="force-dynamic";

export default  function HomePage() {
  const { user, isLoaded } = useUser();



  return (
    <>
      <main>
        <article className="flex flex-col items-center mt-4">
          <section className="h-fit w-fit">
            <UsersDialog/>
          </section>
          <section>
            { isLoaded &&
              <BingoCards clerkId={(user as any).id}/>   
            }
          </section>
        </article>
      </main>
    </>
  );
}
