import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import { profile_main } from "../../assets";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `
const developer = {
  firstName:"Elvis",
  lastName:"Fabian",
  aka:"Creative Force",
  hobby: repeat = () =>{
  //eat();
  //sleep();
  //code();
  //repeat();
  }=
}`;

const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section_wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="profile">
            <img src={profile_main} className="profile__photo" alt="profile" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              I blend clean code, scalable architecture, and creativity to
              engineer next-generation digital platforms.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
