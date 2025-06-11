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
            className="social__handle"
            key={index}
          >
            <span className="tooltip">
              {media.icon} {media.name}
            </span>
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
