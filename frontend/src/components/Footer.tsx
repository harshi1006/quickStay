import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const Footer = () => {
  return (
  <div className="bg-brown text-xl p-5 mt-7.5">
    <div className="flex flex-row p-7 text-lightBrown justify-around">
            <div className="flex flex-col col-3">
                <h3 className="text-lightBrown pb-3 font-semibold text-2xl">Quick Links</h3>
                <a href=""><FontAwesomeIcon icon={faAngleRight} /> Home</a>
                <a href=""><FontAwesomeIcon icon={faAngleRight} /> About</a>
                <a href=""><FontAwesomeIcon icon={faAngleRight} /> Hotels</a>
                <a href=""><FontAwesomeIcon icon={faAngleRight} /> Book</a>
            </div>

            <div className="flex flex-col col-3">
                <h3 className="text-lightBrown pb-3 font-semibold text-2xl">Extra Links</h3>
                <a href="#"> <FontAwesomeIcon icon={faAngleRight} /> Ask Questions</a>
                <a href="#"> <FontAwesomeIcon icon={faAngleRight} /> About Us</a>
                <a href="#"> <FontAwesomeIcon icon={faAngleRight} /> Privacy Policy</a>
                <a href="#"> <FontAwesomeIcon icon={faAngleRight} /> Terms of Use</a>
            </div>

            <div className="flex flex-col col-3">
                <h3 className="text-lightBrown pb-3 font-semibold text-2xl">Contact Info</h3>
                <a href="#"> <FontAwesomeIcon icon={faEnvelope} /> abc@gmail.com </a>
                <a href="#"> <FontAwesomeIcon icon={faMap} /> Sagar[M.P], India </a>
            </div>

            <div className="flex flex-col col-3">
                <h3 className="text-lightBrown pb-3 font-semibold text-2xl">Follow Us</h3>
                <a href="#"> <FontAwesomeIcon icon={faFacebookF} /> Facebook </a>
                <a href="#"> <FontAwesomeIcon icon={faTwitter} /> Twitter </a>
                <a href="#"> <FontAwesomeIcon icon={faInstagram} /> Instagram </a>
                <a href="#"> <FontAwesomeIcon icon={faLinkedin} /> Linkedin </a>
            </div>

        </div>

        <div className="text-center text-lightBrown p-3 border-t-2 border-lightBrown"> copyright © 2023 | all rights reserved</div>
        </div>
  );
};

export default Footer;
