import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <div className='hero min-h-screen'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:px-20">
                    <h1 class="text-5xl font-bold">Address</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className='card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
                    <div className='card-body'>
                        <form ref={form} onSubmit={sendEmail} className='form-control max-w-lg'>
                            <div className='form-control'>
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder='Your Name' className='input input-bordered w-full max-w-lg' />
                            </div>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" name="user_email" placeholder='Your Name' className='input input-bordered w-full max-w-lg' />
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea name="message" className='textarea textarea-bordered' placeholder='Your Message' />
                            <button className='btn mt-2'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
