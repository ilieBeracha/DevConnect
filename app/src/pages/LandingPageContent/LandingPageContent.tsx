// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./LandingPageContent.css";
import { useRef } from "react";
// import landingPageWelcomeImg from '../../assets/images/landingPageWelcomeImg.svg'

function LandingPageContent(): JSX.Element {
//   const parallaxRef: any = useRef();
  return (
    <div className="LandingPageContent">
      {/* <Parallax pages={3} ref={parallaxRef} style={{ top: 0, left: 0 }}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          onClick={() => parallaxRef.current.scrollTo(1)}
        >
          <div className="LandingPageWelcome">
            <h1>Welcome to our thriving community</h1>

            <img src={landingPageWelcomeImg} alt="" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={1}
          onClick={() => parallaxRef.current.scrollTo(2)}
        >
          <div className="LandingPageContentSection1">
            <h2>Section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          factor={1}
          onClick={() => parallaxRef.current.scrollTo(0)}
        >
          <div className="LandingPageContentSection2">
            <h2>Section 2</h2>
            <p>Nullam accumsan felis sit amet quam accumsan congue.</p>
          </div>
        </ParallaxLayer>
      </Parallax> */}
    </div>
  );
}

export default LandingPageContent;
