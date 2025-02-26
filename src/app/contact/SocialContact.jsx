
import Container from '@/components/Container'
import React from 'react'

const SocialContact = () => {
    const contactData = [
        {
            imageSrc: "/icon-global.png",
            title: "Head Office",
            description: "228 Cardigan Road, Leeds",
            description2: "Geneva Switzerland",
        },
        {
            imageSrc: "/icon-phone.png", // Replace with another image source if needed
            title: "Phones",
            description: "+1 (850) 344 0 66 ",
            description2: "Dial #20",
        },
        {
            imageSrc: "/icon-email.png", // Replace with another image source if needed
            title: "Write Us",
            description: "info@consto.co.uk",
            description2: "for all purpose",
        }
    ];

    return (
        <section className='py-[80px]'>
            <Container>
                {/* Social icons */}
                <div className=' lg:flex  '>
                    {contactData.map((item, index) => (
                        <div
                            key={index}
                            className='relative triangle lg:w-1/3 mx-[15px] my-[15px] lg:my-0 border border-[#e8e8e8]  p-[30px] hover:transform hover:-translate-y-[20px] hover:shadow-[0_30px_30px_#eee]  transition-all duration-250 ease-in-out '
                        >
                            <figure className='mb-[20px]'>
                                <img src={item.imageSrc} className='w-[80px] h-[80px]' alt="" />
                            </figure>
                            <h6 className="inline-block font-extrabold tracking-[2px] relative line mb-[10px]">
                                {item.title}
                            </h6>
                            <p className="text-[20px] pr-[5%] text-[#0b0b0b]">
                                {item.description} <br />  {item.description2}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default SocialContact;
