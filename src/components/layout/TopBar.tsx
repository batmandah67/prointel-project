import Image from "next/image";

const TopBar = () => {
  return (
    <div className="bg-white w-full px-4 lg:px-20 py-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </div>

        {/* Address and Email */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-10 text-gray-700 text-sm text-center md:text-left">
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
        <div className="w-full sm:w-auto flex justify-center md:justify-end">
          <button className="border border-blue-900 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-blue-900 hover:text-white transition-all w-full sm:w-auto">
            GET A QUOTES
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
