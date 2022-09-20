import React, { Fragment } from "react";

import Styles from "./mobile_game_development.module.css";
// image imports
import mobileGame from "../../img/Mobile game app development _vector_img.svg";
import { BiShareAlt } from "react-icons/bi";
import { AiFillFileText } from "react-icons/ai";
import { FaSyncAlt } from "react-icons/fa";
import { MdSpellcheck } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import backendGame from "../../img/backend_game.png";
import frontendGame from "../../img/frontend_game.png";
import actionGame from "../../img/action_game.png";
import casinoGame from "../../img/casino_game_ICON.png";
import boardGame from "../../img/boards_game_ICON.png";
import educationalGame from "../../img/educational_game_ICON.png";
import racingGame from "../../img/racing_and_shooting_game_ICON.png";
import sportsGame from "../../img/sports_game_ICON.png";
// components Imports
import IndustriesWeWork from "../../components/Industries We Work With/IndustriesWeWork";
// icons imports

const MobileGameDevelopment = () => {
  return (
    <Fragment>
      
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Mobile Game Development Service Provider</h1>

            <p
              data-aos="fade-zoom-in"
              data-aos-delay="100"
              className={Styles.lead}
            >
              SkyWalk Technology is a top mobile game development company known
              to provide highly engaging intuitional game development services
              for Windows, Mac, Native, iOS, Android, and other common
              platforms. During the design and development of your gaming app,
              we concentrate on the inclusion of stunning graphics, elegant
              design, and an easy to use interface that hooks players for hours.
              We often ensure your concept and story is communicated clearly to
              your target audience for your gaming app.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.game_feature_section}>
        <div className={Styles.game_feature_wrapper}>
          <div className={Styles.game_feature_content}>
            <div className={Styles.left}>
              <img src={mobileGame} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <h2>Why Mobile Game Being Developed?</h2>
              <p>
                Being a leading and most ambitious mobile game development
                company, we use the latest tool combined with revolutionary
                technologies to deliver excellent games with impressive graphics
                and gameplay. We trust in developing such mobile games that take
                advantage of advanced and modern functions, including
                interconnection devices and gyroscopes, accelerometers, etc.
                Together with our team of the best mobile game developers, we
                understand and nurture your gaming concept as a perfect app with
                attractive graphics, spirited gameplay, striking interface, and
                many more attractive features. As the leading mobile game
                development company, we have taken great care to deliver
                efficient game development services for the evolving gaming
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Second feature section starts */}
      <section className={Styles.our_features}>
        <div className={Styles.our_feature_wrapper}>
          <div className={Styles.our_feature_heading}>
            <h3>Our Services Regarding Mobile Game Development</h3>
          </div>
          <div className={Styles.our_feature_cards}>
            {/* card-1 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#175cff" }}
              >
                <BiShareAlt className={Styles.icon} />
              </div>
              <h3>Mobile Game Development</h3>
              <p>
                Being a leading Android game development company, we leverage
                the best game engines for uplifting your mobile game
                development.
              </p>
            </div>

            {/* card-2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#f25767" }}
              >
                <AiFillFileText className={Styles.icon} />
              </div>
              <h3>2D & 3D Game Development</h3>
              <p>
                Being the leading mobile game development agency, we provide
                your unique audience with an unforgettable 2D & 3D gaming
                experience.
              </p>
            </div>

            {/* card-2 */}

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#0b163f" }}
              >
                <FaSyncAlt className={Styles.icon} />
              </div>
              <h3>Web Game Development</h3>
              <p>
                Being the leading game app development company, we design and
                build top-class web gaming apps in different styles and at a low
                cost.
              </p>
            </div>

            {/* card-4 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#5cc9a7" }}
              >
                <MdSpellcheck className={Styles.icon} />
              </div>
              <h3>AR/VR Game Development</h3>
              <p>
                Choose the leading 3D game development company powered by robust
                technology to make your AR/VR dreams come true.
              </p>
            </div>

            {/* card-5 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#175cff" }}
              >
                <FaChartPie className={Styles.icon} />
              </div>
              <h3>HTML5 Game Development</h3>
              <p>
                Get attractive and intuitive gaming apps by instantly selecting
                our game development services using HTML5.
              </p>
            </div>

            {/* card-6 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#ffb116" }}
              >
                <FiFilter className={Styles.icon} />
              </div>
              <h3>Unreal Game Developmen</h3>
              <p>
                With our unreal development services, we provide practical and
                immersive Android game development.
              </p>
            </div>

            {/* card-7 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#5cc9a7" }}
              >
                <MdSpellcheck className={Styles.icon} />
              </div>
              <h3>Social Media Game Development</h3>
              <p>
                Want a gaming app that works smoothly on social media platforms?
                Choose our social media game app development services right
                away!
              </p>
            </div>

            {/* card-8 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#175cff" }}
              >
                <FaChartPie className={Styles.icon} />
              </div>
              <h3>Game Testing & Analysis</h3>
              <p>
                Want to fix the bugs in your mobile game development? Use our
                highly experienced game testers for a brief analysis of testing.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.card}
            >
              <div
                className={Styles.icon_box}
                style={{ background: "#ffb116" }}
              >
                <FiFilter className={Styles.icon} />
              </div>
              <h3>frontend_game Game Development</h3>
              <p>
                Join the community of millions approaching this highly secured
                technology and enhance your gaming experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Third feature section starts */}
      <section className={Styles.game_features}>
        <div className={Styles.game_feature_wrapper}>
          <div className={Styles.game_feature_heading}>
            <h3>Why Choose Skywalk for Mobile Game Development Services?</h3>
            <p>
              Skywalk creates and distributes gaming programmes that are
              cross-platform and have advanced graphics for practically all the
              main platforms. To ensure that we only deliver the best gaming
              applications, we only work with mobile game developers who have
              years of experience and technical expertise. In addition to this,
              there are many more factors that make us a top choice for anyone
              looking for a dependable and reasonably priced mobile game app
              development firm.
            </p>
            <h3 className={Styles.sub_heading}>
              Wide Variety Of Mobile Game Development We Serve
            </h3>
          </div>
          <div className={Styles.game_feature_cards}>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <img src={actionGame} alt="action game" />
              <h3>Action Games</h3>
              <p>
                Deliver your users an immersive gaming experience by choosing
                our action game development services. We understand that action
                games on mobile platforms are more of an emotion than a game.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <img src={casinoGame} alt="action game" />
              <h3>Casino Games</h3>
              <p>
                Being a top mobile game development company, we offer highly
                intuitive casino gaming applications with popular game
                variations, consisting of Slot, Blackjack, Bingo, etc.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <img src={boardGame} alt="action game" />
              <h3>Board Games</h3>
              <p>
                We provide highly engaging board games to fulfill the
                requirements and meet the expectations of your targeted
                audience.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <img src={educationalGame} alt="action game" />
              <h3>Educational Games</h3>
              <p>
                Cutting-edge educational game development services with
                world-class user interface and stunning graphics for giving an
                ultimate experience to the audience.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
           
              <img src={racingGame} alt="action game" />
              <h3>Racing and Shooting Games</h3>
              <p>
                Deliver your audience an ultimate and real-time gaming
                experience with our racing & shooting game applications.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className={Styles.game_card}
            >
              <img src={sportsGame} alt="action game" />
            
              <h3>Sports Game Apps</h3>
              <p>
                Feel that adrenaline rush in your veins with our sports game
                applications, developed by the best game developers and curated
                with jaw-dropping graphics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* fourth feature section  */}
      <section className={Styles.frontend_feature_section}>
        <div className={Styles.frontend_feature_wrapper}>
          <div className={Styles.frontend_feature_heading}>
            <h2>FRONT-END DEVELOPMENT FOR GAMING APP</h2>
          </div>
          <div className={Styles.frontend_feature_content}>
            <div className={Styles.left}>
              <img src={frontendGame} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <p>
                Front-end development in gaming is mainly focused on design and
                user interface that provide quality:
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                Notable iOS app development services Include:
              </strong>
              <ul>
                <li>UI Design Tools</li>
                <li>SDKs to Access the Device Features</li>
                <li>Cross-Platform Accommodations/Support</li>
                <li>Firebase Cloud Messaging (FCM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* backend feature section */}

      {/* fourth feature section  */}
      <section className={Styles.backend_feature_section}>
        <div className={Styles.backend_feature_wrapper}>
          <div className={Styles.backend_feature_heading}>
            <h2>BACK-END DEVELOPMENT FOR GAMING APP</h2>
          </div>
          <div className={Styles.backend_feature_content}>
            <div className={Styles.left}>
              <img src={backendGame} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <p>
                Back-end game development keeps all the services in sync and
                maintains all the controls:
              </p>

              <ul>
                <li>App Engine Standard Environment</li>
                <li>Endpoints Frameworks</li>
                <li>Cloud Security Scanner</li>
                <li>Firebase Cloud Messaging (FCM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* why choose skywalk section starts here */}

      <section className={Styles.why_skywalk_feature}>
        <div className={Styles.skywalk_container}>
          <div className={Styles.why_skywalk_heading_wrapper}>
            <h2>
              WHY CHOOSE SkyWalk Technology FOR MOBILE GAME DEVELOPMENT SERVICES
            </h2>
          </div>

          <div className={Styles.sky_walk_content_wrapper}>
            <div className={Styles.left_content}>
              <div className={Styles.content_box}>
                <h5>Elegant Graphics</h5>
                <p>
                  Businesses employ our game developers because we hold the same
                  standards and quality control
                </p>
              </div>

              <div className={Styles.content_box}>
                <h5>Seamless Customer Support</h5>
                <p>
                  When you work with us, you get a dedicated project manager to
                  report on your progress,
                </p>
              </div>
            </div>

            <div className={Styles.right_content}>
              <div className={Styles.content_box}>
                <h5>Cross-Platform Support</h5>
                <p>
                  All of the games developed by our deep expertise team of game
                  developers are cross-functionally supported, so your players
                  can keep playing the game
                </p>
              </div>

              <div className={Styles.content_box}>
                <h5>Exquisite Game Development Strategy</h5>
                <p>Our team will help you to create the right price plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* industries we work with section */}
      <IndustriesWeWork />
    </Fragment>
  );
};

export default MobileGameDevelopment;
