import BingoCards from "~/components/BingoCards";
import { UsersDialog } from "~/components/Dialogs/UsersDialog";
export const dynamic ="force-dynamic";

export default async function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center mt-4">
        <UsersDialog/>
        <div className="h-fit w-fit p-4 mt-8 border-2 border-slate-200 bg-slate-50 rounded m-4">
          <BingoCards/>
        </div>
      </main>
    </>
  );
}
