/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "../blogData";
import BlogBanner from "../components/BlogBanner";

interface PageProps {
  params: Promise<{ id: string }>; // ⬅️ хамгийн чухал өөрчлөлт!
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; // ⬅️ Vercel дээр зөвхөн ингэж await хийвэл ажилладаг

  const postId = Number(id);
  if (isNaN(postId)) notFound();

  const post = posts.find((p) => p.id === postId);
  if (!post) notFound();

  return (
    <div>
      <BlogBanner />
      <section className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <div className="relative overflow-hidden rounded-md group">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-lg w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="text-sm text-gray-500">{post.date}</span>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-lg text-gray-700">{post.excerpt}</p>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
