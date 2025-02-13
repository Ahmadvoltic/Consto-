// import Container from "@/components/Container";
// import React from "react";
// import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"; // Social media icons

// const newsArticles = [
//   {
//     image: "/slide01-500x323.jpg", // External image URL
//     title: "Result of a challenge I participated in as a guest on The Futuristic",
//     date: "24th June, 2020",
//     author: "Jennifer O'neil",
//     profileImage: "/author03.jpg",
//   },
//   {
//     image: "/slide02-500x323.jpg", // External image URL
//     title: "Challenge I participated in as a guest on all font",
//     date: "24th June, 2020",
//     author: "Christina Eden",
//     profileImage: "/author02.jpg",
//   },
//   {
//     image: "/slide03-500x323.jpg", // External image URL
//     title: "Participated challenge in as a guest on The Future",
//     date: "24th June, 2020",
//     author: "Eric Clark",
//     profileImage: "/author01.jpg",
//   },
// ];

// const NewsSection = () => {
//   return (
//     <Container>

    
//     <div className=" py-20 px-10">
//       <h2 className="text-4xl font-bold text-center mb-10">
//         Reach Updates
//       </h2>
//       <h3 className="text-2xl font-semibold text-center text-gray-700 mb-16">
//         Recent News
//       </h3>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {newsArticles.map((article, index) => (
//           <div
//             key={index}
//             className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-[#feed01] hover:shadow-xl"
//           >
//             {/* Image */}
//             <div className="w-full h-56 bg-gray-300 relative">
//               <img
//                 src={article.image}
//                 alt={article.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Card Content */}
//             <div className="p-6">
//               <p className="text-xl font-semibold text-black group-hover:underline">
//                 {article.title}
//               </p>
//               <p className="text-sm text-gray-500">{article.date}</p>

//               {/* Author and Profile */}
//               <div className="flex items-center mt-4">
//                 <img
//                   src={article.profileImage}
//                   alt={article.author}
//                   className="w-10 h-10 rounded-full mr-3"
//                 />
//                 <span className="font-semibold">{article.author}</span>
//               </div>

//               {/* Social Media Icons */}
//               <div className="flex justify-start gap-4 mt-4 text-gray-600">
//                 <a href="#" className="hover:text-blue-500">
//                   <FaFacebookF />
//                 </a>
//                 <a href="#" className="hover:text-pink-500">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" className="hover:text-blue-400">
//                   <FaTwitter />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </Container>
//   );
// };

// export default NewsSection;

// _________________________ Responsive ___________________________
import Container from "@/components/Container";
import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"; // Social media icons

const newsArticles = [
  {
    image: "/slide01-500x323.jpg", // External image URL
    title: "Result of a challenge I participated in as a guest on The Futuristic",
    date: "24th June, 2020",
    author: "Jennifer O'neil",
    profileImage: "/author03.jpg",
  },
  {
    image: "/slide02-500x323.jpg", // External image URL
    title: "Challenge I participated in as a guest on all font",
    date: "24th June, 2020",
    author: "Christina Eden",
    profileImage: "/author02.jpg",
  },
  {
    image: "/slide03-500x323.jpg", // External image URL
    title: "Participated challenge in as a guest on The Future",
    date: "24th June, 2020",
    author: "Eric Clark",
    profileImage: "/author01.jpg",
  },
];

const NewsSection = () => {
  return (
    <Container>
      <div className="py-16 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
          Reach Updates
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-10 md:mb-16">
          Recent News
        </h3>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-[#feed01] hover:shadow-xl mx-auto w-full max-w-[400px]"
            >
              {/* Image */}
              <div className="w-full h-56 bg-gray-300 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-lg md:text-xl font-semibold text-black group-hover:underline">
                  {article.title}
                </p>
                <p className="text-sm text-gray-500">{article.date}</p>

                {/* Author and Profile */}
                <div className="flex items-center mt-4">
                  <img
                    src={article.profileImage}
                    alt={article.author}
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full mr-3"
                  />
                  <span className="font-semibold">{article.author}</span>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-start gap-4 mt-4 text-gray-600">
                  <a href="#" className="hover:text-blue-500">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-pink-500">
                    <FaInstagram />
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewsSection;
