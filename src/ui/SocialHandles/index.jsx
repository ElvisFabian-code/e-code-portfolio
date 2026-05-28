import { socialHandles } from "../../data";
import "./SocialHandles.css";

const SocialHandles = () => {
  return (
    <div className='social__handles__container'>
      {
        socialHandles.map((media, index) => (
          <a 
            href={media.link}
            target="_blank" 
            rel="noopener noreferrer" /* Added for security compliance when opening new tabs */
            className="social__handle"
            key={index}
          >
            {/* Tooltip sits absolutely positioned relative to the anchor tag */}
            <span className="tooltip">
              {media.icon} {media.name}
            </span>
            
            {/* This container remains the sole structural block layout within the flex anchor */}
            <div className="icon__container social__handles">
              {media.icon}
            </div>
          </a>
        ))
      }
    </div>
  );
}

export default SocialHandles;