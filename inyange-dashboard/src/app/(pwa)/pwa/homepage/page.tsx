"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiBell } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useGetMaterials } from "../hooks/useGetMaterials";
import Link from "next/link";

interface DealItem {
  id: number;
  material_name: string;
  price: number;
  image?: string;
}

const HeroSection = () => {
  const { materials: hotDeals, loading, error } = useGetMaterials();

  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [] = useState<DealItem[]>([]);

  const [filteredMaterials, setFilteredMaterials] = useState([
    { name: "Building Materials", image: "/images/build.png" },
    { name: "Finishing Materials", image: "/images/Tiles.png" },
    { name: "Hardware and Tools", image: "/images/hardwaretools.png" },
  ]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const results = filteredMaterials.filter((material) =>
        material.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMaterials(results);
    } else {
      setFilteredMaterials([
        { name: "Building Materials", image: "/images/build.png" },
        { name: "Finishing Materials", image: "/images/Tiles.png" },
        { name: "Hardware and Tools", image: "/images/hardwaretools.png" },
      ]);
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const limitedHotDeals = hotDeals.slice(0, 6);

  return (
    <div className="flex flex-col bg-white py-4 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 w-full">
      <div className="flex items-center w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center lg:ml-[-18%] xl:ml-[-330px]"></div>
      </div>

      <div className="flex items-center justify-between w-full mb-4 ">
        <div className="flex items-center space-x-2 mx-auto md:mx-0">
          <Image
            src="/images/bmLogo.png"
            alt="Logo"
            width={160}
            height={60}
            className="w-40 sm:w-48 lg:w-[100%] xl:w-[103%] xl:ml-[-5px]"
          />
        </div>

        <div className="relative flex items-center space-x-10 sm:space-x-8 md:space-x-10 mx-auto md:mx-0 xl:mt-[20px]  xl:justify-evenly">
          <FiBell
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-600 cursor-pointer xl:ml-[-288%] xl:mt-[-0px] xl:text-[30px] lg:mt-[20px]"
            onClick={handleNotificationClick}
          />
          <Link
            href="/pwa/components/Pages"
            className="relative mt-6 ml-auto sm:ml-6 lg:ml-[100%] xl:ml-[100%] md:ml-[70%]"
          >
            <MdOutlineShoppingCart
              size={36}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 cursor-pointer ml-custom-spacing xl:mt-[-20px]"
            />
          </Link>
          {showNotifications && (
            <div className="absolute top-10 right-0 bg-white border border-gray-200 shadow-lg rounded-lg p-3 sm:p-4 w-36 sm:w-48 md:w-56 lg:w-64">
              <p className="font-bold">Notifications</p>
              <ul>
                <li className="py-1 sm:py-2 border-b">New order received</li>
                <li className="py-1 sm:py-2 border-b">Price drop on Cement</li>
                <li className="py-1 sm:py-2">Stock alert: Iron rods</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center border border-[#F8B612] rounded-full overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[35%] mx-auto mt-2 sm:mt-4 md:mt-6 xl:mt-[-20px]">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="outline-none px-2 sm:px-3 py-1 sm:py-2 w-full text-xs sm:text-sm md:text-base lg:text-lg bg-transparent"
        />
        <button
          onClick={handleSearch}
          className="bg-[#F8B612] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full transition duration-300 ease-in-out hover:opacity-90 xl:py-[16px] xl:px-[40px]"
        >
          Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg mt-6 md:mt-8 text-center md:text-left">
        <div className="md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-[#263C5A] text-[#F8B612] shadow-lg mb-6 md:mb-0 h-160">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-[40px] font-bold mb-4 md:mb-6 leading-tight  xl:leading-[1.1] xl:w-[55%]">
            Everything You Need For Your Building, All in One Place
          </h1>
          <Link href="/pwa/components/Steel">
            <button className="bg-transparent text-white border-2 border-[#F8B612] px-4 sm:px-4 md:px-6 lg:px-9 py-1 sm:py-2 md:py-6 font-bold rounded-full transition duration-300 ease-in-out hover:bg-[#F8B612] hover:text-[#263C5A] mt-2 sm:mt-4 xl:text-[20px] xl:mt-[20px] xl:px-[20px] xl:py-[13px]">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/images/image (7).png"
            alt="Building Materials"
            width={700}
            height={280}
            className="rounded-lg w-full md:w-auto mx-auto md:mx-0"
          />
        </div>
      </div>

      <div className="w-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-14 text-center md:text-left">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 text-black xl:text-[30px]">
          Top Categories
        </h2>
        <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          {filteredMaterials.map((material, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#263C5A] text-white border border-[#F8B612] rounded-lg shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 w-full md:w-1/3 mx-auto md:mx-0 min-h-[400px] h-auto" // Ensure all cards have equal height
            >
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 xl:text-[22px]">
                {material.name}
              </h3>
              <Image
                src={material.image}
                alt={material.name}
                width={180}
                height={120}
                className="rounded-lg mb-3 sm:mb-4 xl:w-[45%]"
              />
              <div className="mt-auto">
                <Link href="/pwa/steel">
                  <button className="bg-transparent text-white border-2 border-[#F8B612] px-3 sm:px-4 py-1 sm:py-2 font-bold rounded-full transition duration-300 ease-in-out hover:bg-[#F8B612] hover:text-[#263C5A] xl:text-[18px] xl:px-[23px] xl:py-[14px]">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 text-center md:text-left">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 text-black xl:text-[30px]">
          Hot Deals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {loading ? (
            <p>Loading hot deals...</p>
          ) : error ? (
            <p>{error}</p>
          ) : limitedHotDeals.length > 0 ? (
            limitedHotDeals.map((deal) => (
              <div
                key={deal.id}
                className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow-lg p-4"
              >
                {/* <Image
            src={placeholderImage}
            alt={deal.material_name} 
            width={150} 
            height={150}
            className="rounded-lg mb-3"
          /> */}

                <Image
                  src={(() => {
                    const name = deal.material_name.toLowerCase();
                    if (name.includes("paint")) {
                      return "/images/paint.jpg";
                    } else if (name.includes("cement")) {
                      return "/images/duracem.jpg";
                    } else {
                      return (
                        (typeof deal.image === "string" && deal.image) ||
                        "/images/placeholder-image.png"
                      );
                    }
                  })()}
                  alt={deal.material_name}
                  width={150}
                  height={150}
                  className="rounded-lg mb-3"
                />
                <h3 className="text-sm sm:text-base font-bold mb-2 xl:text-[17px]">
                  {deal.material_name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 xl:text-[16px]">
                  Sale price
                </p>
                <p className="text-base sm:text-lg font-semibold mb-3 xl:text-[16px]">
                  KES {deal.price}
                </p>
                <Link href="/pwa/pages">
                  <button className="bg-[#F8B612] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold transition duration-300 ease-in-out hover:bg-[#263C5A] hover:text-[#F8B612] xl:text-[16px]">
                    Buy Now
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p>No hot deals available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { FiBell } from "react-icons/fi";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { useGetMaterials } from "../../hooks/useGetMaterials";
// import Link from "next/link";
// interface DealItem {
//   id: number;
//   material_name: string;
//   price: number;
//   image?: string;
// }
// const HeroSection = () => {
//   const { materials: hotDeals, loading, error } = useGetMaterials();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredHotDeals, setFilteredHotDeals] = useState<DealItem[]>([]);
//   const [showNotifications, setShowNotifications] = useState(false);
//   // Update filteredHotDeals when hotDeals or searchQuery changes
//   useEffect(() => {
//     if (searchQuery.trim() !== "") {
//       const results = hotDeals.filter((material) =>
//         material.material_name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredHotDeals(results);
//     } else {
//       setFilteredHotDeals(hotDeals); // Show all hot deals if search query is empty
//     }
//   }, [searchQuery, hotDeals]);
//   const handleNotificationClick = () => {
//     setShowNotifications(!showNotifications);
//   };
//   return (
//     <div className="flex flex-col bg-white py-4 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 w-full">
//       <div className="flex items-center w-full px-4 sm:px-8 lg:px-16 xl:px-24">
//         <div className="flex items-center lg:ml-[-18%] xl:ml-[-330px]"></div>
//       </div>
//       <div className="flex items-center justify-between w-full mb-4 ">
//         <div className="flex items-center space-x-2 mx-auto md:mx-0">
//           <Image
//             src="/images/bmLogo.png"
//             alt="Logo"
//             width={160}
//             height={60}
//             className="w-40 sm:w-48 lg:w-[100%] xl:w-[103%] xl:ml-[-5px]"
//           />
//         </div>
//         <div className="relative flex items-center space-x-10 sm:space-x-8 md:space-x-10 mx-auto md:mx-0 xl:mt-[20px] xl:justify-evenly">
//           <FiBell
//             className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-600 cursor-pointer xl:ml-[-288%] xl:mt-[-0px] xl:text-[30px] lg:mt-[20px]"
//             onClick={handleNotificationClick}
//           />
//           <Link
//             href="/pwa/components/Pages"
//             className="relative mt-6 ml-auto sm:ml-6 lg:ml-[100%] xl:ml-[100%] md:ml-[70%]"
//           >
//             <MdOutlineShoppingCart
//               size={36}
//               className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 cursor-pointer ml-custom-spacing xl:mt-[-20px]"
//             />
//           </Link>
//         </div>
//       </div>
//       {/* Search bar */}
//       <div className="flex items-center justify-center border border-[#F8B612] rounded-full overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[35%] mx-auto mt-2 sm:mt-4 md:mt-6 xl:mt-[-20px]">
//         <input
//           type="text"
//           placeholder="Search Hot Deals"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="outline-none px-2 sm:px-3 py-1 sm:py-2 w-full text-xs sm:text-sm md:text-base lg:text-lg bg-transparent"
//         />
//         <button
//           className="bg-[#F8B612] text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full transition duration-300 ease-in-out hover:opacity-90 xl:py-[16px] xl:px-[40px]"
//         >
//           Search
//         </button>
//       </div>
//       {/* Static Categories */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg mt-6 md:mt-8 text-center md:text-left">
//         <div className="md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-[#263C5A] text-[#F8B612] shadow-lg mb-6 md:mb-0 h-160">
//           <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-[40px] font-bold mb-4 md:mb-6 leading-tight xl:leading-[1.1] xl:w-[55%]">
//             Everything You Need For Your Building, All in One Place
//           </h1>
//           <Link href="/pwa/components/Steel">
//             <button className="bg-transparent text-white border-2 border-[#F8B612] px-4 sm:px-4 md:px-6 lg:px-9 py-1 sm:py-2 md:py-6 font-bold rounded-full transition duration-300 ease-in-out hover:bg-[#F8B612] hover:text-[#263C5A] mt-2 sm:mt-4 xl:text-[20px] xl:mt-[20px] xl:px-[20px] xl:py-[13px]">
//               Shop Now
//             </button>
//           </Link>
//         </div>
//         <div className="md:w-1/2 mt-4 md:mt-0">
//           <Image
//             src="/images/image (7).png"
//             alt="Building Materials"
//             width={700}
//             height={280}
//             className="rounded-lg w-full md:w-auto mx-auto md:mx-0"
//           />
//         </div>
//       </div>
//       <div className="w-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-14 text-center md:text-left">
//         <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 text-black xl:text-[30px]">
//           Top Categories
//         </h2>
//         <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
//           <div className="flex flex-col items-center bg-[#263C5A] text-white border border-[#F8B612] rounded-lg shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 w-full md:w-1/3 mx-auto md:mx-0 min-h-[400px] h-auto">
//             <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 xl:text-[22px]">
//               Building Materials
//             </h3>
//             <Image
//               src="/images/build.png"
//               alt="Building Materials"
//               width={180}
//               height={120}
//               className="rounded-lg mb-3 sm:mb-4 xl:w-[45%]"
//             />
//             <div className="mt-auto">
//               <Link href="/pwa/components/Steel">
//                 <button className="bg-transparent text-white border-2 border-[#F8B612] px-3 sm:px-4 py-1 sm:py-2 font-bold rounded-full transition duration-300 ease-in-out hover:bg-[#F8B612] hover:text-[#263C5A] xl:text-[18px] xl:px-[23px] xl:py-[14px]">
//                   Shop Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="flex flex-col items-center bg-[#263C5A] text-white border border-[#F8B612] rounded-lg shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 w-full md:w-1/3 mx-auto md:mx-0 min-h-[400px] h-auto">
//             <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 xl:text-[22px]">
//               Finishing Materials
//             </h3>
//             <Image
//               src="/images/Tiles.png"
//               alt="Finishing Materials"
//               width={180}
//               height={120}
//               className="rounded-lg mb-3 sm:mb-4 xl:w-[45%]"
//             />
//             <div className="mt-auto">
//               <Link href="/pwa/components/Tiles">
//                 <button className="bg-transparent text-white border-2 border-[#F8B612] px-3 sm:px-4 py-1 sm:py-2 font-bold rounded-full transition duration-300 ease-in-out hover:bg-[#F8B612] hover:text-[#263C5A] xl:text-[18px] xl:px-[23px] xl:py-[14px]">
//                   Shop Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="flex flex-col items-center bg-[#263C5A] text-white border border-[#F8B612] rounded-lg shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 w-full md:w-1/3 mx-auto md:mx-0 min-h-[400px] h-auto">
//             <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 xl:text-[22px]">
//               Hardware and Tools
//             </h3>
//             <Image
//               src="/images/hardwaretools.png"
//               alt="Hardware and Tools"
//               width={180}
//               height={120}
//               className="rounded-lg mb-3 sm:mb-4 xl:w-[45%]"
//             />
//             <div className="mt-auto">
//               <Link href="/pwa/components/Carpentry">
//                 <button className="bg-transparent text-white border-2 border-[#F8B612] px-3 sm:px-4 py-1 sm:py-2 font-bold rounded-full transition duration-300 ease-in-out hover:bg-[#F8B612] hover:text-[#263C5A] xl:text-[18px] xl:px-[23px] xl:py-[14px]">
//                   Shop Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Hot Deals */}
//       <div className="w-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 text-center md:text-left">
//         <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 text-black xl:text-[30px]">
//           Hot Deals
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {loading ? (
//             <p>Loading hot deals...</p>
//           ) : error ? (
//             <p>{error}</p>
//           ) : filteredHotDeals.length > 0 ? (
//             filteredHotDeals.map((deal) => (
//               <div
//                 key={deal.id}
//                 className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow-lg p-4"
//               >
//                 <Image
//                   src={deal.image || "/images/placeholder-image.png"}
//                   alt={deal.material_name}
//                   width={150}
//                   height={150}
//                   className="rounded-lg mb-3"
//                 />
//                 <h3 className="text-sm sm:text-base font-bold mb-2 xl:text-[17px]">
//                   {deal.material_name}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-600 mb-2 xl:text-[16px]">
//                   Sale price
//                 </p>
//                 <p className="text-base sm:text-lg font-semibold mb-3 xl:text-[16px]">
//                   KES {deal.price}
//                 </p>
//                 <Link href="/pwa/components/Pages">
//                   <button className="bg-[#F8B612] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold transition duration-300 ease-in-out hover:bg-[#263C5A] hover:text-[#F8B612] xl:text-[16px]">
//                     Buy Now
//                   </button>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p>No hot deals available at the moment.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HeroSection;
