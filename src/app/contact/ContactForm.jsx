import Container from '@/components/Container'
import React from 'react'

const ContactForm = () => {
    return (
        <section>
            <Container className='lg:flex justify-between'>
                {/* left section */}
                <div className='mb-20'>
                    <h6 className=" relative inline z-10 font-extrabold tracking-[3px] text-[18px] line w-1/2"
                    >GET IN TOUCH</h6>
                    <h2 className="w-full block mb-0 text-[36px] lg:text-[47px]"
                    >Quality &amp; Passion With<br />
                        Contact Form</h2>
                </div>
                {/* right side form */}
                <div className=" block p-[50px] bg-white relative z-10 mb-[-80%] shadow-[0_0_30px_rgba(0,0,0,0.1)] lg:w-1/2 h-[750px]"
                >
                    <div className='mb-4'>
                        <p className="mt-0 mb-4"
                        ><span>Full Name</span><br />
                            <input type="text" className="w-full h-[68px] border-2 border-[#e8e8e8] px-[30px]  rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-50 "
                            />
                        </p>
                    </div>
                    <div className='mb-4'>
                        <p className="mt-0 mb-4"
                        ><span>Your Email</span><br />
                            <input type="email" className="w-full h-[68px] border-2 border-[#e8e8e8] px-[30px] rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-50"
                            />
                        </p>
                    </div>
                    <div className='mb-4'>
                        <p className="mt-0 mb-4"
                        ><span>Subject</span><br />
                            <input type="text" className="w-full h-[68px] border-2 border-[#e8e8e8] px-[30px] rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-50"
                            />
                        </p>
                    </div>
                    <div className='mb-4'>
                        <p className="mt-0 mb-4"
                        ><span>Your Message</span><br />
                            <textarea type="text" className="w-full h-[187px] border-2 border-[#e8e8e8] px-[30px] py-[30px] rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-50"
                            ></textarea>
                        </p>
                    </div>
                    <div className='mb-4'>
                        <p className="mt-0 mb-4"
                        >
                            <input type="submit" value='Send Now' className="h-[68px] border-0 bg-[#feed01] text-black font-extrabold text-[13px] px-[50px] tracking-[1px]"

                            />
                        </p>
                    </div>

                </div>
            </Container>
            {/* Map Section */}
            <div>
                <iframe
                    className="w-full h-[600px] border-none"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002868262!2d-74.14431109082612!3d40.69728463468588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1740555343963!5m2!1sen!2s"></iframe>
            </div>
        </section>
    )
}

export default ContactForm