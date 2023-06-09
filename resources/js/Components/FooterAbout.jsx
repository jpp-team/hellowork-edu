import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const FooterAbout = () => {
    return (
        <div>
            <section className="bg-[#24324a] py-12 text-white">
                <div className="container mx-auto flex flex-col gap-12 md:grid md:grid-cols-12 md:gap-8 lg:gap-16 2xl:gap-32">
                    <div className="md:col-span-4 flex flex-col gap-8">
                        <h2>Who We Are</h2>
                        <p className="text-[#8a99b3] text-sm leading-8">
                            Hellowork is a platform to provide Internship,
                            Part-time and Freelance job information. Our Vision
                            is Make more choice and opportunity for Life and Job
                            Style, also Education through Working
                        </p>
                        <div className="flex gap-8 text-[#8a99b3]">
                            <a
                                href="https://www.facebook.com/helloworkasia.info/"
                                target="_blank"
                            >
                                <FaFacebookF size={24} />
                            </a>
                            <a
                                href="https://twitter.com/hellowork_asia"
                                target="_blank"
                            >
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/hellowork_asia/"
                                target="_blank"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://www.youtube.com/@helloworkasia7206"
                                target="_blank"
                            >
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-8">
                        <h2>Information</h2>
                        <ul className="text-[#8a99b3] leading-8 text-sm">
                            <li>
                                <a
                                    href="https://hellowork-asia.com/term"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://hellowork-asia.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://hellowork-asia.com/contact-us"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://hellowork-asia.com/faq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-8">
                        <h2>Find Jobs</h2>
                        <ul className="text-[#8a99b3] leading-8 text-sm">
                            <li>
                                <a
                                    href="https://hellowork-asia.com/job?q=&jt%5B%5D=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Part Time
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://hellowork-asia.com/job?q=&jt%5B%5D=2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Freelance
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://hellowork-asia.com/job?q=&jt%5B%5D=3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Internship
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://hellowork-asia.com/job?q=&jt%5B%5D=4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Working Abroad
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 flex flex-col gap-2">
                        <iframe
                            className="w-full h-32"
                            style={{ border: 0, borderRadius: 0 }}
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.156150033768!2d106.9659691!3d-6.1590027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1da92ce87484c923!2sPT.%20Aun%20Wahana%20Jaya!5e0!3m2!1sen!2sid!4v1652946598630!5m2!1sen!2sid"
                        ></iframe>
                        <div className="text-[#8a99b3] text-sm leading-8">
                            <p>
                                Ruko The Savoy Blok B1 No. 25. Jl. Jkt Garden
                                City Boulevard, RW.7, Cakung Tim., Kec. Cakung,
                                Kota Jakarta Timur, Daerah Khusus Ibukota
                                Jakarta 13910
                            </p>
                            <p>(021) 8060-7551</p>
                            <p>cs@hellowork-asia.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center py-8 bg-[#1d293e] text-[#8a99b3] text-sm">
                <p>© 2021, Copyrights Hellowork. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default FooterAbout;
