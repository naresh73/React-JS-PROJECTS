import './footer.css';

export default function Footer() {
    return (
        <div className='footer'>

            <footer className="footer-distributed">

                <div class="footer-left">

                    <h3>World<span> Physiotherapy</span></h3>

                    <p class="footer-links">
                        <a href="sdsd" class="link-1" >Home</a>

                        <a href="sdsd">About us</a>

                        <a href="sdsd">FAQ</a>

                        <a href="sdsd">Contact</a>
                    </p>

                    <p class="footer-company-name">CB-Physiotherapy©2022</p>
                    <br/>
                    
                </div>

                <div class="footer-center">
                <section id="lab_social_icon_footer">
                        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                            <div class="container">
                                <div class="textcenter">
                                    <a href="https://www.facebook.com"><i id="social-fb" class="fa fa-facebook-square fa-2x social"></i></a>
                                    <a href="https://twitter.com"><i id="social-tw" class="fa fa-twitter-square fa-2x social"></i></a>
                                    <a href="https://google.com"><i id="social-gp" class="fa fa-google-plus-square fa-2x social"></i></a>
                                    <a href="mailto:"><i id="social-em" class="fa fa-envelope-square fa-2x social"></i></a>
                                </div>
                            </div>
                    </section>
                    <br/>
                    <br/>
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>44 S. Street</span> Solani Nagar, Banglore</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+91 455-5656-790</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">help@cbphysiotherapy.in</a></p>
                    </div>
                    

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        CB Physiotherapy is India's fastest growing Delivery Network for Physiotherapy & Chiropractors services. At CB Physiotherapy, we are committed to increase access to quality physio care through ultra-modern clinics and high-skilled practitioners. Our integrated / multi-therapy approach helps keep a strong focus on patient needs and deliver the highest level of patient centric care with better outcomes.
                    </p>

                    {/* <div class="footer-icons">

                        <a href="https://www.facebook.com/bootsnipp"><i id='social-fb'  class="fa fa-facebook-square fa-3x social" ></i></a>
                        <a href="sd"><i class="fa fa-twitter"></i></a>
                        <a href="sd"><i class="fa fa-linkedin"></i></a>
                        <a href="sd"><i class="fa fa-github"></i></a>
                        
                    </div> */}
                </div>

            </footer>
        </div>
    );
}