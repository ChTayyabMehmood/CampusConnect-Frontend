import logo from "../../assets/campusConnect.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-10 justify-between px-20 py-16 text-[#6B7280] text-sm font-normal">
        <div className="flex flex-col gap-4">
          <img className="h-10" src={logo} alt="Logo" />
          <p>
            Bridging the gap between talented <br /> students and opportunities
            across
            <br /> colleges worldwide.
          </p>
        </div>

        <div className="flex gap-20">
          {/* Platform */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black">Platform</h3>
            <ul className="flex flex-col gap-2">
              <li>Feed</li>
              <li>Teams</li>
              <li>Clubs</li>
              <li>Events</li>
              <li>Mentor</li>
            </ul>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black">Account</h3>
            <ul className="flex flex-col gap-2">
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Pricing</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E5E7EB]"></div>
      <div className="bg-[#F9FAFB] text-[#6B7280] text-sm font-normal py-4 text-center flex gap-2 justify-between p-8 items-between">
        <p>© 2026 CampusConnect. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://www.facebook.com/CampusConnect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://twitter.com/CampusConnect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={18} />
          </a>

          <a
            href="https://www.linkedin.com/company/campusconnect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://www.instagram.com/CampusConnect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
