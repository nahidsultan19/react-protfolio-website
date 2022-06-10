import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiLocationMarker, HiPhoneMissedCall } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_lpbksue", "template_221pg6k", form.current, "y0PokTnfCZ3bxxHHH")
            .then((result) => {
                console.log(result.text);
                console.log('Message sent')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='min-h-screen bg-base-200' id='contact'>
            <div className="lg:flex items-center lg:px-20">
                <div className='card w-full lg:max-w-lg lg:mt-5 shadow-2xl bg-base-100' data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                    <h2 className='text-orange-500 text-center text-3xl font-bold py-8'>Contact Me</h2>
                    <div className='card-body'>
                        <form ref={form} onSubmit={sendEmail} className='form-control max-w-lg'>
                            <div className='form-control'>
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder='Your Name' className='input input-bordered w-full max-w-lg' required />
                            </div>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" name="user_email" placeholder='Your Name' className='input input-bordered w-full max-w-lg' required />
                            <label class="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="message" className='textarea textarea-bordered' placeholder='Your Message' required />
                            <button className='btn mt-2'>Send Message</button>
                        </form>
                    </div>
                </div>
                <div class="lg:text-left lg:max-w-lg px-12">
                    <h1 className="lg:text-5xl font-bold py-4 text-center">Contact Info</h1>
                    <p className="py-4 mt-8 flex justify-start items-center">
                        <HiLocationMarker className='text-2xl' />
                        Rajshahi, Bangladesh
                    </p>
                    <p className='pb-4 flex justify-start items-center'>
                        <HiPhoneMissedCall className='text-2xl' />
                        Phone:+889019999
                    </p>
                    <p className='flex justify-start items-center'>
                        <MdEmail className='text-2xl' />
                        sultannahid38@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
