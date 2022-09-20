import React, { Fragment } from "react";
import  Styles from  "./certifications.module.css"

import aboutImg1 from "../../img/about-img-1.jpg";
import aboutImg2 from "../../img/about-img-2.jpg";
import aboutImg3 from "../../img/about-img-3.jpg";

// office images
import officeImage1 from "../../img/office-img-1.jpg"
import officeImage2 from "../../img/office-img-2.jpg"
import officeImage3 from "../../img/office-img-3.jpg"
import officeImage5 from "../../img/office-img-5.jpg"

const Certifications = () => {

    return (
        <Fragment>
            {/* certification section starts from here */}
            <div className={Styles.about_page_section}>
                <div className={Styles.main_wrapper}>
                    <div className={Styles.about_page_container}>
                        <div className={Styles.about_page_content}>
                            <div className={Styles.cont1}>
                                <h2>Certifications</h2>
                                <p>We live and breathe digital. The Internet is our home.</p>
                                <div className={Styles.btns}>
                                    <button  > View Portfolio </button>
                                </div>
                            </div>

                            <div className={Styles.cont2}>
                                <img src={aboutImg1} alt="about image" />
                            </div>
                        </div>
                        <div className={Styles.image}>
                            <img src={aboutImg2} alt="about image" />
                            <img src={aboutImg3} alt="about image" />
                        </div>
                    </div>
                </div>
                <div className={Styles.vacant}>
                    <div className={Styles.temp_image}>
                        <img src={aboutImg2} alt="about image" />
                        <img src={aboutImg3} alt="about image" />
                    </div>
                </div>
            </div>
            {/* certification section ends here */}


            {/* our office section */}
            <section className={Styles.our_office_section}>
                <div className={Styles.our_office}>
                    <div className={Styles.our_office_heading}>
                        <h3>Our Office</h3>
                        <h2>Visit Our Work Places</h2>
                    </div>
                    <div className={Styles.office} >

                        <figure className={Styles.snip0015}>
                            <img src={officeImage1} />
                            <figcaption>
                                <h2>Gurugram, India</h2>
                                <p>B_850, Spaze IT Park, Sec_49,
                                    Gurugram, Haryana, Indi</p>
                            </figcaption>
                        </figure>

                        <figure className={Styles.snip0015}>
                            <img src={officeImage2} alt="sample39" />
                            <figcaption>
                                <h2>Up, India</h2>
                                <p>Sec_63, Noida
                                    Utter Pradesh India</p>
                            </figcaption>
                        </figure>

                        <figure className={Styles.snip0015}>
                            <img src={officeImage3} />
                            <figcaption>
                                <h2>Philippines</h2>
                                <p>Philippines</p>

                            </figcaption>
                        </figure>
                        <figure className={Styles.snip0015}>
                            <img src={officeImage5} />
                            <figcaption>
                                <h2>Coming Soon</h2>
                                <p>starting soon</p>

                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>





        </Fragment>
    )
}

export default Certifications;