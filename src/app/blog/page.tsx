import BlogBanner from "./components/BlogBanner";
import BlogList from "./components/BlogList";
import Sidebar from "./components/Sidebar";

export default function BlogListPage() {
  return (
    <main>
      <BlogBanner />
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        <div className="grid md:grid-cols-[minmax(0,1fr)_280px] gap-12 items-start">
          <BlogList />
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
