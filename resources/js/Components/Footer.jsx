import React from "react";
import '../../scss/main.scss';
import { Facebook, Instagram, Twitter } from "react-feather";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-dark-1">
                <div className="row">
                    <div className="col-2-of-4">
                        <p className="title-content">Who We Are<br/></p>
                        <span className="subtitle-content">Hellowork is a platform to provide internship, Part-time and<br/></span>
                        <span className="subtitle-content">Freelance job information. Our Vision is Make more choice and<br/></span>
                        <span className="subtitle-content">opportunity for Life and Job Style, also Education through<br/></span>
                        <span className="subtitle-content">Working<br/></span>

                        <div className="media">
                            <a href="">
                                <Facebook/>
                            </a>

                            <a href="">
                                <Twitter/>
                            </a>

                            <a href="">
                                <Instagram/>
                            </a>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <p className="title-content">Information<br/></p>
                        <ul className="list-content">
                            <li className="subtitle-content">- Term & Conditions</li>
                            <li className="subtitle-content">- Privacy Policy</li>
                            <li className="subtitle-content">- Contact Us</li>
                            <li className="subtitle-content">- FAQs</li>
                        </ul>
                    </div>
                    <div className="col-1-of-4">
                        <p className="title-content">Find Jobs</p>
                        <ul className="subtitle-content">
                            <li className="subtitle-content">- Part Time</li>
                            <li className="subtitle-content">- Freelance</li>
                            <li className="subtitle-content">- Internship</li>
                            <li className="subtitle-content">- Working Abroad</li>
                        </ul>
                    </div>
                    <div className="col-2-of-4">
                    <iframe className="maps"
                        style={{ border: 0, borderRadius: 0 }}
                        width={"100%"}
                        height={120}
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.156150033768!2d106.9659691!3d-6.1590027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1da92ce87484c923!2sPT.%20Aun%20Wahana%20Jaya!5e0!3m2!1sen!2sid!4v1652946598630!5m2!1sen!2sid"
                    ></iframe>
                    <span className="subtitle-content">Ruko The Savoy Blok B1 No. 25. Jl. Jkt Garden City Boulevard,</span>
                    <span className="subtitle-content">RW.7, Cakung Tim., Kec. Cakung, Kota Jakarta Timur, Daerah</span>
                    <span className="subtitle-content">Khusus Ibukota Jakarta 13910</span>
                    <span className="subtitle-content">(021)8060-7551</span>
                    <span className="subtitle-content">cs@hellowork-asia.com</span>
                    </div>
                </div>
            </div>
            <div className="footer-dark-2">
                <div className="copyright-section">
                    © 2021, Copyrights Hellowork. All Rights Reserved.
                </div>
            </div>
        </div>

    );
};

export default Footer;
