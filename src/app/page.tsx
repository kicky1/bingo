import BingoCards from "~/components/BingoCards";

export default async function HomePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center mt-4">
        <div className="h-fit w-fit p-4 mt-8 border-2 border-slate-200 bg-slate-50 rounded">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
            <BingoCards/>
          </div>
        </div>
      </main>
    </>
  );
}
