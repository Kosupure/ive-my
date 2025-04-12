import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col md:flex-row justify-between w-full text-white py-2 px-6 bottom-0">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mt-2 md:mt-0 space-x-0 md:space-x-10 md:items-center">
        <p>Find us on</p>
        <a href="https://www.facebook.com/profile.php?id=100075730425033" className="flex">
          <FontAwesomeIcon icon={faFacebook} className="w-4 mr-2" />
          IVE马来西亚粉丝团
        </a>
        <a href="https://x.com/IVE_MYFanbase" className="flex">
          <FontAwesomeIcon icon={faTwitter} className="w-4 mr-2" />
          IVE MALAYSIA FANBASE
        </a>
        <a href="mailto:ivemyfanbase@gmail.com" className="flex">
          <FontAwesomeIcon icon={faEnvelope} className="w-4 mr-2" />
          ivemyfanbase@gmail.com
        </a>
      </div>
      <div className="h-[1px] w-full bg-white my-4 md:hidden"></div>
      <div className="flex flex-row space-x-4 justify-between md:justify-normal">
        <a href="/terms-conditions">Terms & Conditions</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
}
