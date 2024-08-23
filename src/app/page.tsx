import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/3c87253e-6e28-4bac-9942-2fa07358ab68-i8aoco.webp"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))
        }
      </div>
    </main>
  );
}
