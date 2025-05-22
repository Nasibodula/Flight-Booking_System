import React from "react";
import { socialMediaItem } from "../../../data/socialMediaData";


const SocialMedia = () => {
  return (
    <div className="footer-socialmedia">
      {socialMediaItem.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.icon}
            alt={social.name}
            width={40}
            height={40}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
