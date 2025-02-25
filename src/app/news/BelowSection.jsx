

import Container from '@/components/Container'
import React from 'react'

const BelowSection = () => {
    // Data array to store the information for each part
    const data = [
        {
            date: "June 24, 2020",
            title: "Result of a challenge I participated in as a guest on The Futuristic",
            imageSrc: "/slide01.jpg",
            profileImage: "/author03.jpg",
            author: "Jennifer O'neil"
        },
        {
            date: "July 10, 2021",
            title: "Exploring new tech trends in the world of AI",
            imageSrc: "/slide02.jpg",
            profileImage: "/author02.jpg",
            author: "John Doe"
        },
        {
            date: "August 15, 2022",
            title: "The future of web development: what's next?",
            imageSrc: "/slide03.jpg",
            profileImage: "/author01.jpg",
            author: "Sarah Lee"
        }
    ];

    return (
        <section className='py-[80px]'>
            <Container className=''>
                <div className='flex gap-[60px]'>

                    {/* left Section */}
                    <div className='w-[70%] flex flex-col '>
                        {data.map((item, index) => (
                            <div key={index} className="mb-10">
                                <figure className='mb-5'>
                                    <img src={item.imageSrc} alt="" />
                                </figure>
                                <div>
                                    <small className="inline-block py-1 px-2 bg-[#feed01] mb-2 text-[#0b0b0b] text-[80%] font-normal">
                                        {item.date}
                                    </small><br />
                                    <h3 className="text-[3vw] font-normal mb-8 leading-[1.2] text-[#0b0b0b] break-words relative animation">
                                        {item.title}
                                    </h3>


                                    <div className='flex items-center mb-10'>
                                        <img src={item.profileImage} alt="" className='w-[60px] h-[60px] rounded-full' />
                                        <span className='ml-2'>by <b>{item.author}</b></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* right Section */}
                    <aside className='w-[30%] h-[200px]  rounded-sm'>

                        {/* input section */}

                        <div className="w-full block mb-12 bg-white p-10 pt-0 border border-[#e2e2e2] relative shadow-[6px_6px_0px_#f5f5f5]">
                            <form className='pt-10'>

                                <input type="text" placeholder='Search...' className='mb-3 px-4 border outline-none rounded py-3' />
                                <button class="h-[68px] border-0 bg-[#feed01] text-black font-extrabold text-[13px] px-[50px] tracking-[1px] rounded-sm"
                                >Search</button>
                            </form>

                        </div>

                        {/* second section */}

                        <div className="w-full block mb-12 bg-white p-10 pt-0 border border-[#e2e2e2] relative shadow-[6px_6px_0px_#f5f5f5]"
                        >
                            <h6 className="w-full block border-b-4 border-[#eee] leading-none text-[18px] font-bold uppercase py-[35px] mb-8 text-[#0b0b0b] relative  widget-title"
                            >Recent Post</h6>
                            <ul className="w-full block m-0 p-0 text-[16px]"
                            >
                                <li className="w-full block m-0 mb-2 py-[3px] list-none text-[#727479] hover:underline"
                                >Result of a challenge I participated in as a guest on The Futuristic
                                </li>
                                <li className="w-full block m-0 mb-2 py-[3px] list-none text-[#727479] hover:underline"
                                >Challenge I participated in as a guest on all font
                                </li>
                                <li className="w-full block m-0 mb-2 py-[3px] list-none text-[#727479] hover:underline"
                                >Participated challenge in as a guest on The Future
                                </li>
                            </ul>
                        </div>

                        {/* Third section */}
                        <div className="w-full block mb-12 bg-white p-10 pt-0 border border-[#e2e2e2] relative shadow-[6px_6px_0px_#f5f5f5]">
                            <h6 className="w-full block border-b-4 border-[#eee] leading-none text-[18px] font-bold uppercase py-[35px] mb-8 text-[#0b0b0b] relative widget-title"
                            >Recent Comments</h6>
                            <ul className="w-full block m-0 p-0 text-[16px]"
                            >

                            </ul>
                        </div>

                        {/* Fourth section */}
                        <div className="w-full block mb-12 bg-white p-10 pt-0 border border-[#e2e2e2] relative shadow-[6px_6px_0px_#f5f5f5]">
                            <h6 className="w-full block border-b-4 border-[#eee] leading-none text-[18px] font-bold uppercase py-[35px] mb-8 text-[#0b0b0b] relative widget-title"
                            >Archives</h6>
                            <ul className="w-full block m-0 p-0 text-[16px]">
                                <li className="w-full block m-0 py-[3px] list-none text-[#727479] hover:underline"
                                >
                                    June 2020
                                </li>
                            </ul>
                        </div>
                        {/* Fifth section */}
                        <div className="w-full block mb-12 bg-white p-10 pt-0 border border-[#e2e2e2] relative shadow-[6px_6px_0px_#f5f5f5]">
                            <h6 className="w-full block border-b-4 border-[#eee] leading-none text-[18px] font-bold uppercase py-[35px] mb-8 text-[#0b0b0b] relative widget-title"
                            >Categories</h6>
                            <ul className="w-full block m-0 p-0 text-[16px]">
                                <li className="w-full block m-0 py-[3px] list-none text-[#727479] hover:underline"
                                >
                                    Uncategorized
                                </li>
                            </ul>
                        </div>
                        {/* Sixth section */}
                        <div className="w-full block mb-12 bg-white p-10 pt-0 border border-[#e2e2e2] relative shadow-[6px_6px_0px_#f5f5f5]">
                            <h6 className="w-full block border-b-4 border-[#eee] leading-none text-[18px] font-bold uppercase py-[35px] mb-8 text-[#0b0b0b] relative widget-title"
                            >Meta</h6>
                            <ul className="w-full block m-0 p-0 text-[16px]">
                                <li className="w-full block m-0 py-[3px] list-none text-[#727479] hover:underline"
                                >
                                    Login
                                </li>
                                <li className="w-full block m-0 py-[3px] list-none text-[#727479] hover:underline"
                                >
                                    Entries feed
                                </li>
                                <li className="w-full block m-0 py-[3px] list-none text-[#727479] hover:underline"
                                >
                                    Comments feed
                                </li>
                                <li className="w-full block m-0 py-[3px] list-none text-[#727479] hover:underline"
                                >
                                    WordPress.org
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </Container>
        </section>
    )
}

export default BelowSection;
