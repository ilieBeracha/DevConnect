import "./LandingPageContent.css";
import SocialWelcome from "../../assets/images/SocialWelcome.png";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import collab from "../../assets/images/Collab.png";
import community from "../../assets/images/Community.png";
import learn from "../../assets/images/learnImage.png";

function LandingPageContent(): JSX.Element {
  const [featureNum, setFeatureNum] = useState(0);

  return (
    <div className="LandingPageContent">
      <div className="LandingPageWelcome">
        <div className="LandingPageWelcomeHeader">
          <h1>
            Find your coding tribe and gain real-world experience with
            DevConnect.
          </h1>
          <p>
            Join a community of passionate developers who are building amazing
            open-source projects together.
          </p>
        </div>

        <div className="LandingPageWelcomeHeaderImg">
          <img src={SocialWelcome} alt="" />
        </div>
      </div>

      <div className="LandingPageFeatures">
        {featureNum === 0 ? (
          <div className="FeatureSection">
                        <button onClick={() => setFeatureNum(1)}> next </button>

            <div className="FeatureSectionMain">
              
              <h2>Collaborate and Learn</h2>
              <p>
                Connect with other developers and collaborate on real-world
                coding projects. Learn new skills and gain experience while
                working on open-source projects.
              </p>
            </div>
            <div className="FeatureSectionImage">

              <img src={learn} alt="" />
            </div>
          </div>
        ) : featureNum === 1 ? (
          <div className="FeatureSection">
            <button onClick={() => setFeatureNum(2)}> next </button>
            <div className="FeatureSectionMain">
              <h2>Find Your Next Job</h2>
              <p>
                Browse job postings or project opportunities and find your next
                coding gig. Apply for jobs or offer your services as a
                developer.
              </p>
            </div>
            <div className="FeatureSectionImage">
              <img src={collab} alt="" />
            </div>
          </div>
        ) : featureNum === 2 ? (
          <div className="FeatureSection">
            <button onClick={() => setFeatureNum(0)}> next </button>
            <div className="FeatureSectionMain">
              <h2>Connect With Your Community</h2>
              <p>
                Join a supportive community of developers who share your passion
                for coding. Discuss coding challenges, ask for advice, and make
                lasting connections.
              </p>
            </div>

            <div className="FeatureSectionImage">
              <img src={community} alt="" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="LandingPageTestimonials">
        <h2>What Our Users Say</h2>
        <div className="TestimonialSection">
          <p>
            "I've been using DevConnect for a few months now and I've already
            learned so much. It's amazing to be able to collaborate with other
            developers and work on real-world projects together."
          </p>
          <p>- John Doe, Full Stack Developer</p>
        </div>

        <div className="TestimonialSection">
          <p>
            "As a beginner coder, I was hesitant to start working on real-world
            projects. But with DevConnect, I was able to find a supportive
            community and gain valuable experience in no time."
          </p>
          <p>- Jane Smith, Front-End Developer</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPageContent;
