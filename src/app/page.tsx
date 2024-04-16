import { currentUser } from "@clerk/nextjs";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { getBingoCards } from "~/server/queries";

export const dynamic ="force-dynamic";

export default async function HomePage() {
  const user = await currentUser()
  console.log(user)
  const bingoCards = await getBingoCards();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center mt-4">
      <div className="h-fit w-fit p-4 mt-8 border-2 border-slate-200 bg-slate-50 rounded">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {bingoCards.map((bingoCard) => (
          <Card key={bingoCard.id}>
            <CardHeader>
              {bingoCard.name}
            </CardHeader>
          </Card>
        ))}
        </div>
        </div>
      </main>
    </>
  );
}
