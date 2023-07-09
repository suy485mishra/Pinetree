import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left_part */}
        <div className="flexColStart c-left">
          <span className="orangeText">Reach Us</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            For any enquiry you can contact us by the provided ways. We are just
            a call/text away
          </span>

          <div className="flexStart contactModes">
            {/* first_row */}
            {/* first_mode */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">21000-21000</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
            {/* second_mode */}

            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">21000-21000</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>
            </div>
          </div>
          <div className="flexStart contactModes">
            {/* first_row */}
            {/* first_mode */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">21000-21000</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
            {/* second_mode */}

            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">21000-21000</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>
            </div>
          </div>
        </div>
        {/* rightpart */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
