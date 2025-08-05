import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-full py-10 md:w-[300px] space-y-8">
      {/* Search */}
      <div className="border-b pb-2 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pr-10 border-none focus:outline-none"
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
          🔍
        </span>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul className="space-y-1 text-gray-700 text-sm">
          <li>○ Travel and Aviation</li>
          <li>○ Business Services</li>
          <li>○ Consumer Products</li>
          <li>○ Financial Services</li>
          <li>○ Software Research</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
        <ul className="space-y-6">
          {/* Post 1 */}
          <li className="flex items-start gap-3">
            <Image
              src="/images/thumb1.jpg"
              alt="thumb"
              width={65}
              height={60}
              className="rounded bg-gray-200 object-cover"
            />
            <div>
              <p className="text-sm font-medium leading-tight">
                World don&apos;t move to beat of just one drum.
              </p>
              <p className="text-xs text-gray-500 mt-1 italic">5 minutes ago</p>
            </div>
          </li>
          <hr />

          {/* Post 2 */}
          <li className="flex items-start gap-3">
            <Image
              src="/images/thumb2.jpg"
              alt="thumb"
              width={65}
              height={60}
              className="rounded bg-gray-200 object-cover"
            />
            <div>
              <p className="text-sm font-medium leading-tight">
                Be right for you may not be right for some.
              </p>
              <p className="text-xs text-gray-500 mt-1 italic">2 days ago</p>
            </div>
          </li>
          <hr />

          {/* Post 3 */}
          <li className="flex items-start gap-3">
            <Image
              src="/images/thumb3.jpg"
              alt="thumb"
              width={65}
              height={60}
              className="rounded bg-gray-200 object-cover"
            />
            <div>
              <p className="text-sm font-medium leading-tight">
                World don&apos;t move to beat of just one drum.
              </p>
              <p className="text-xs text-gray-500 mt-1 italic">1 month ago</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
