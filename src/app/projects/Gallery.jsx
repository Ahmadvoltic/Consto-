// import Container from '@/components/Container'
// import React from 'react'

// const Gallery = () => {
//   return (
//     <section className='py-[80px]'>
//         <Container className="flex gap-[120px] flex-wrap">
//             <div className='border1 w-[44.5%] relative group card2'>
//                 <figure className='grayscale group-hover:grayscale-0'>
//                     <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/slide01.jpg" alt="" />
//                 </figure>
//                 <div className='bg-black text-white border1 w-[408px] h-[96px] absolute bottom-[-30px]  left-[25px] group-hover:bg-[#feed01] z-10 group-hover:text-black transition-all duration-300 ease-in-out transform group-hover:scale-105'>
//                 <h5 className='p-[30px] text-2xl font-extrabold '>River Life Residence</h5>
//                 </div>
//             </div>
//             <div className='border1 w-[44.5%] relative group card2'>
//                 <figure className='grayscale group-hover:grayscale-0'>
//                     <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/slide01.jpg" alt="" />
//                 </figure>
//                 <div className='bg-black text-white border1 w-[408px] h-[96px] absolute bottom-[-30px]  left-[25px] group-hover:bg-[#feed01] z-10 group-hover:text-black transition-all duration-300 ease-in-out transform group-hover:scale-105'>
//                 <h5 className='p-[30px] text-2xl font-extrabold '>River Life Residence</h5>
//                 </div>
//             </div>
          
          
//         </Container>
//     </section>
//   )
// }

// export default Gallery



import Container from '@/components/Container';
import React from 'react';


const Gallery = () => {
  const galleryItems = [
    {
      imgSrc: "/slide01.jpg",
      title: "River Life Residence"
    },
    {
      imgSrc: "/slide02.jpg",
      title: "Mountain View Villas"
    },
    {
      imgSrc: "/slide08.jpg",
      title: "Beachfront Oasis"
    },
    {
      imgSrc: "/slide04.jpg",
      title: "Forest Retreat"
    },
    {
      imgSrc: "/slide05.jpg",
      title: "Luxury Apartments"
    },
    {
      imgSrc: "/slide03.jpg",
      title: "Modern Loft"
    },
    {
      imgSrc: "/slide06.jpg",
      title: "River View Residences"
    },
    {
      imgSrc: "/slide08.jpg",
      title: "City Tower Condos"
    }
  ];

  return (
    <section className='py-[80px]'>
      <Container className="flex gap-[120px] lg:gap-[60px] flex-wrap  ">
        {galleryItems.map((item, index) => (
          <div key={index} className=' lg:w-[44.5%] relative group card2'>
            <figure className='grayscale group-hover:grayscale-0'>
              <img src={item.imgSrc} alt={item.title} />
            </figure>
            <div className='bg-black text-white w-[341px] md:w-[408px] h-[70px] md:h-[96px] absolute bottom-[-30px]  left-[25px]   group-hover:bg-[#feed01] z-10 group-hover:text-black transition-all duration-300 ease-in-out transform group-hover:scale-105'>
              <h5 className='p-[20px] md:p-[30px] text-2xl font-extrabold'>{item.title}</h5>
            </div>
          </div>
        ))}
      </Container>
      
    </section>
  );
};

export default Gallery;
