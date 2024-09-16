import React from 'react'
import '../../CSS/Footer/Footer.css'

function Footer() {
    return (
        <>
            <footer>

                <div id="footer-main">

                    <div id="contact-container">

                        <div id="contact">
                            <h3>Ready to get started? Get in touch with us</h3>
                            <a href="mailto:surajpujari8383@gmail.com">Contact</a>
                        </div>

                        <div id="about-container">

                            <div id='footer-social-media'>
                                <a href="tel:+918382038383"><i className="ri-phone-line"></i></a>
                                <a href="mailto:surajpujari8383@gmail.com"><i className="ri-mail-line"></i></a>
                                <a href="https://wa.me/+918382038383?text=Hi"><i className="ri-whatsapp-line"></i></a>
                                <a href="https://www.linkedin.com/in/suraj-pujari8383/"><i className="ri-linkedin-fill"></i></a>
                                <a href="https://x.com/_suraj_pujari"><i className="ri-twitter-x-fill"></i></a>
                            </div>


                            <div id='footer-menu'>

                                <div className='footer-menu-info'>
                                    <h4>About Us</h4>
                                    <p>Company</p>
                                    <p>Our team</p>
                                    <p>life at adsa.com</p>
                                </div>

                                <div className=' footer-menu-info'>
                                    <h4>Terms Conditions</h4>
                                    <p>Company policy</p>
                                    <p>Terms of Service</p>
                                    <p>Terms for Service Provider</p>
                                </div>

                                <div className=' footer-menu-info'>
                                    <h4>Support</h4>
                                    <p>Sito Map</p>
                                    <p> Rase a support ticket</p>
                                </div>
                            </div>


                        </div>
                        <div className='mob-contact-main'>

                            <div id="mob-contact">
                                <h4>Ready to get started? Get in touch with us</h4>
                            </div>

                            <div className='mob-footer-social-media'>
                                <a href="tel:+918382038383"><i className="ri-phone-line"></i></a>
                                <a href="mailto:surajpujari8383@gmail.com"><i className="ri-mail-line"></i></a>
                                <a href="https://wa.me/+918382038383?text=Hi"><i className="ri-whatsapp-line"></i></a>
                                <a href="https://www.linkedin.com/in/suraj-pujari8383/"><i className="ri-linkedin-fill"></i></a>
                                <a href="https://x.com/_suraj_pujari"><i className="ri-twitter-x-fill"></i></a>
                            </div>

                        </div>

                        <div className='copyright'>
                            <p>&#169;Copyright adsa.com</p>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
