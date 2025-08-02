import Image from "next/image";
import Link from "next/link";
import { posts } from "@/app/blog/blogData";

export default function BlogList() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      {posts.map((post) => (
        <div key={post.id}>
          <div className="relative overflow-hidden rounded-md group">
            <Image
              src={post.image}
              alt={post.title}
              width={690}
              height={357}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 bg-blue-900 text-white text-sm px-3 py-1 rounded">
              {post.date}
            </span>
          </div>
          <h2 className="text-2xl font-semibold mt-6">{post.title}</h2>
          <p className="mt-2 text-gray-600">{post.excerpt}</p>
          <Link
            href={`/blog/${post.id}`}
            className="mt-4 inline-block text-sm font-semibold text-blue-900 hover:underline"
          >
            READ MORE
          </Link>
        </div>
      ))}
    </section>
  );
}
