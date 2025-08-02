import Image from "next/image";

const TopBar = () => {
  return (
    <div className="bg-white w-full flex items-center justify-between px-4 lg:px-20 py-2">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </div>

      {/* Address and Email */}
      <div className="hidden md:flex gap-10 text-gray-700 text-sm">
        <div className="flex items-center gap-2">
          <Image src="/globe.svg" alt="location" width={20} height={20} />
          <div>
            <span className="font-semibold">Address:</span> Ulaanbaatar, MNG
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/file.svg" alt="email" width={20} height={20} />
          <div>
            <span className="font-semibold">Mail us:</span> info@prointel.tech
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="border border-blue-900 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition-all">
        GET A QUOTES
      </button>
    </div>
  );
};

export default TopBar;
