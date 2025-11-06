import React from "react";
import SocialButton from "./SocialButton";

// 1. Import các file SVG từ thư mục 'assets' của bạn
import { ReactComponent as FacebookIcon } from "../assets/facebook-svgrepo-com.svg";
import { ReactComponent as GithubIcon } from "../assets/github-142-svgrepo-com.svg";
import { ReactComponent as GmailIcon } from "../assets/gmail-old-svgrepo-com.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-svgrepo-com.svg";

const SocialButtonGroup: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* 2. Dùng các icon đã import như component bình thường */}

      <SocialButton
        icon={<GithubIcon />}
        href="https://github.com/DKhangggg"
        colorClass="white"
        rotation="-rotate-3"
      />
      <SocialButton
        icon={<LinkedinIcon />}
        href="https://www.linkedin.com/in/l%C3%AA-duy-khang-057765265/"
        colorClass="blue-500"
        rotation="rotate-2"
      />
      <SocialButton
        icon={<GmailIcon />}
        href="mailto:lekhangmc12@gmail.com"
        colorClass="red-500"
        rotation="-rotate-2"
      />
      <SocialButton
        icon={<FacebookIcon />}
        href="https://www.facebook.com/le.khang.207081/"
        colorClass="blue-700"
        rotation="rotate-3"
      />
    </div>
  );
};

export default SocialButtonGroup;
