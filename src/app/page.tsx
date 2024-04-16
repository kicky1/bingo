import { db } from "~/server/db";
import { auth, currentUser } from "@clerk/nextjs";

export const dynamic ="force-dynamic";

export default async function HomePage() {
  const { userId } = auth();
  const user = await currentUser()
  console.log(user)

  const bingoCards = await db.query.bingoCards.findMany();

  console.log(bingoCards)

  return (
    <>
      
      <main className="flex min-h-screen flex-col items-center mt-4">
        {bingoCards.map((bingoCard) => (
          <div key={bingoCard.id} className="p-4 border rounded-lg mt-2">
            <h2>{bingoCard.name}</h2>
          </div>
        ))}
      </main>

    </>

  );
}
