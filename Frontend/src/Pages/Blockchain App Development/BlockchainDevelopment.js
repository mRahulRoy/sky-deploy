import React, { Fragment } from "react";

import Styles from "./blockchain.module.css";

// image imports
import Blockchain from "../../img/blockchain app development service _vector_img.svg";
import mobile from "../../img/getafixapp.png";
// component imports
import Industries_We_Work from "../../components/Industries We Work With/IndustriesWeWork.js";
const BlockChainDevelopment = () => {
  return (
    <Fragment>
      
      {/*top page header starts here */}
      <section className={Styles.page_header_container}>
        <div className={Styles.page_header}>
          <div className={Styles.main_heading}>
            <h1>Top Blockchain App Development Company</h1>

            <p className={Styles.lead}>
              SkyWalk is a top Blockchain app development company that offers
              scalable Blockchain apps like hyper ledgers, multichain,
              cryptocurrency wallets, and accelerate ICO’s to market. We
              withhold impeccable expertise in the Blockchain domain and has
              churned out some of the best Blockchain apps for our clients
              across the globe. We are always up to deliver secure and
              centralized applications.
            </p>
          </div>
        </div>
      </section>

      {/* feature section  */}
      <section className={Styles.blockchain_feature_section}>
        <div className={Styles.blockchain_feature_wrapper}>
          <div className={Styles.blockchain_feature_heading}>
            <h2>Blockchain App Development Service Provider</h2>
          </div>
          <div className={Styles.blockchain_feature_content}>
            <div className={Styles.left}>
              <img src={Blockchain} alt="web design image" />
            </div>
            <div className={Styles.right}>
              <p>
                We are the leading Blockchain App Development Company that has a
                dedicated team of blockchain developers who are experienced in
                multiple verticals of Blockchain technologies. Blockchain
                Technology maintains a distributed digital ledger designated to
                record transactions in a database that is completely
                decentralized and that’s where we draw our strength.
                <br />
                As the new technologies are popping up every now and then, we,
                at SkyWalk, has carved a niche in the field of blockchain
                development by creating and deploying custom decentralized
                blockchain application.
              </p>

              <strong
                style={{ color: "#071c4d" }}
                className={Styles.our_services}
              >
                Notable Blockchain Technology App Features:
              </strong>
              <ul>
                <li>Software Hacking & Security</li>
                <li>Back-end Systems & API Development</li>
                <li>Business & Enterprise Solutions</li>
                <li>User Experience & Interface Design</li>
                <li>App Development Consultations</li>
                <li>App Security Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* blockchain development service section */}
      <section className={Styles.blockchain_section}>
        <div className={Styles.blockchain_development_wrapper}>
          <div className={Styles.blockchain_service_heading}>
            <h2>
              With Our Blockchain App Development Services, We Make <br /> Apps
              That Becomes A Part Of Your Business
            </h2>
          </div>

          <div className={Styles.blockchain_content_wrapper}>
            <div className={Styles.content1}>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className={Styles.box}
              >
                <div className={Styles.sequence}>1</div>
                <h3>MVP (Minimal Viable Product) Creation</h3>
                <p>
                  We test the waters before the launch of a full-fledged dApp
                  with the development and launch of the MVP.
                </p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className={Styles.box}
              >
                <div className={Styles.sequence}>2</div>
                <h3>End-To-End Development</h3>
                <p>
                  From ideation to design and coding to finally launch, we
                  handle all your complete dApp development process covered from
                  start to finish.
                </p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className={Styles.box}
              >
                <div className={Styles.sequence}>3</div>
                <h3>Permissioned (Private) Blockchain Development</h3>
                <p>
                  We develop enterprise grade distributed ledger and codebase
                  which restricts the participation in the open source
                  distributed ledger.
                </p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className={Styles.box}
              >
                <div className={Styles.sequence}>4</div>
                <h3>ICO (Initial Coin Offering) Services</h3>
                <p>
                  Our all round ICO services include preparing your idea for
                  Investors, generation of cryptocurrency for distribution,
                </p>
              </div>
            </div>

            <div className={Styles.content2}>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className={Styles.box}
              >
                <div className={Styles.sequence}>5</div>
                <h3>Custom Blockchain Solutions</h3>
                <p>
                  We offer customized Blockchain solutions to integrate in your
                  existing mobile apps, making them Apps.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className={Styles.box}
              >
                <div className={Styles.sequence}>6</div>
                <h3>Crypto Wallet Development</h3>
                <p>
                  We create Crypto wallet dApps that hold hundreds of
                  cryptocurrencies, while carrying information related to your
                  wallet balance and purchase history.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className={Styles.box}
              >
                <div className={Styles.sequence}>7</div>
                <h3>Finance & Payment Solution</h3>
                <p>
                  We integrate the decentralization element of Blockchain in
                  your payment app to maintain an immutable record and eliminate
                  the instances of fraud.
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className={Styles.box}
              >
                <div className={Styles.sequence}>8</div>
                <h3>Blockchain In Healthcare Solutions</h3>
                <p>
                  Our Blockchain Healthcare solutions are known to eradicate
                  several real-world healthcare issues including fragments of
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best iphone apps by skywalk */}
      <div className={Styles.apps_container}>
        <div className={Styles.apps_content_wrapper}>
          <div className={Styles.apps_content_cont}>
            <div className={Styles.left_cont}>
              <img src={mobile} alt="mobile" />
            </div>
            <div className={Styles.right_cont}>

              <div className={Styles.marketing_content}>
                <h2>Why Skywalk for Blockchain Development?</h2>
                <ul>
                  <li>
                    <strong>Cost-effective Development: </strong>Don’t break the
                    bank with a blockchain app. Hire a cost-sensitive blockchain
                    software development company.
                  </li>
                  <li>
                    <strong>Agile Development Process: </strong>Stay in the loop
                    throughout the development cycle with the sophisticated
                    Agile development process.
                  </li>
                  <li>
                    <strong>Dependable Experts : </strong>Count on a team of
                    blockchain experts who’ve worked with 400+ startups, done
                    and delivered 1500+ complex applications fulfilling the
                    needs of a varied set of markets and business needs.
                  </li>
                  <li>
                    <strong>Round-the-clock Support : </strong>If there is a
                    problem, you have us. Utilize support and upkeep services
                    available around-the-clock after delivery and deployment.
                  </li>
                  <li>
                    <strong>
                      Quality Assurance and Comprehensive Testing:{" "}
                    </strong>
                    Reliably manage data and digital identity through carefully
                    and comprehensively tested blockchain applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Industries_We_Work />
    </Fragment>
  );
};

export default BlockChainDevelopment;
