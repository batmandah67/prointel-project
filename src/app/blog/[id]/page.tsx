import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "../blogData";
import BlogBanner from "../components/BlogBanner";

type Props = {
  params: {
    id: string;
  };
};

// ✅ АСИНХРОН БИШ БОЛГОСОН (async устгасан)
export default function BlogDetailPage({ params }: Props) {
  const postId = parseInt(params.id, 10);

  if (isNaN(postId)) return notFound();

  const post = posts.find((p) => p.id === postId);
  if (!post) return notFound();

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
