import React from "react";
import '../../scss/main.scss';
import PrimaryButton from "./PrimaryButton";
import { Col, Row } from "reactstrap"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-dark-1">
                <Row md={1} className="Row">
                    <Col lg={2}>
                        <p className="title-content">Who We Are<br/></p>
                        <p className="subtitle-content">Hellowork is a platform to provide internship, Part-time and<br/></p>
                        <p className="subtitle-content">Freelance job information. Our Vision is Make more choice and<br/></p>
                        <p className="subtitle-content">oportunity for Life and Job Style, also Education trough<br/></p>
                        <p className="subtitle-content">working<br/></p>
                    </Col>
                    <Col lg={2}>
                        <p className="title-content">Information<br/></p>
                        <ul className="list-content">
                            <li className="subtitle-content">- Term & Conditions</li>
                            <li className="subtitle-content">- Privacy Policy</li>
                            <li className="subtitle-content">- Contact Us</li>
                            <li className="subtitle-content">- FAQs</li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <p className="title-content">Find Jobs</p>
                        <ul className="subtitle-content">
                            <li className="subtitle-content">- Part Time</li>
                            <li className="subtitle-content">- Freelance</li>
                            <li className="subtitle-content">- Internship</li>
                            <li className="subtitle-content">- Working Abroad</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                    <iframe className="maps"
                        width={"100%"}
                        height={100}
                        style={{ border: 0, borderRadius: 0 }}
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3245.555361020147!2d139.713493!3d35.564682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60186042dac5b367%3A0xae95db7cdda6426c!2z5pel5pys44CB44CSMTQ0LTAwNTEg5p2x5Lqs6YO95aSn55Sw5Yy66KW_6JKy55Sw77yV5LiB55uu77yS77yX4oiS77yR77yYIOiSsueUsOODk-ODqw!5e0!3m2!1sja!2sid!4v1673888460356!5m2!1sja!2sid"
                    ></iframe>
                    <p className="subtitle-content">Ruko The Savoy Blok B1 No. 25. Jl. Jkt Garden City Boulevard</p>
                    <p className="subtitle-content">Rw.7, Cakung Tim., Kec. Cakung, Kota Jakarta Timur, Daerah</p>
                    <p className="subtitle-content">Khusus Ibukota Jakarta 13910</p>
                    <p className="subtitle-content">(021)8060-7551</p>
                    <p className="subtitle-content">cs@hellowork-asia.com</p>
                    </Col>
                </Row>
            </div>
            <div className="footer-dark-2">
                <div className="copyright-section">
                    2021, Copyrights Hellowork. All Rights Reserved.
                </div>
            </div>
        </div>

    );
};

export default Footer;
