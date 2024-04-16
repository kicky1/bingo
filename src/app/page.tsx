import { db } from "~/server/db";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts)

  return (
    <main className="flex min-h-screen flex-col items-center mt-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-lg">
          <h2>{post.name}</h2>
          <p>{post.createdAt.toString()}</p>
        </div>
      ))}
    </main>
  );
}
