import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const HomeSearch = () => {
  return (
    <div className="bg-[#100E0F] w-full p-3 flex rounded-lg gap-6">
      <MagnifyingGlassIcon className="text-grey-400 w-6 h-6 cursor-pointer" />
      <input
        className="w-full bg-transparent text-grey-25 outline-none"
        placeholder="Начните вводить здесь"
      />
      <XMarkIcon className="text-grey-400 w-6 h-6 cursor-pointer" />
    </div>
  );
};

export default HomeSearch;
