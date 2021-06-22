import React from "react";
import AfterFormCard from "../AfterFormCard";

const Container = ({ children }) => {
  return (
    <div className="container max-w">
      <div className="row">{children}</div>
    </div>
  );
};

const SubmittedForm = () => {
  return (
    <>
      <Container>
        <h3 className="fw-bolder submitted-h3">
          Your Info has been submitted!
        </h3>
        <h4 className="submitted-h4">Here are your next steps:</h4>
      </Container>
      <Container>
        <AfterFormCard
          img="https://www.smartsolarsavings.com/v4/assets/images/thank-icon-1.png"
          alt="thumbs up"
          h3="Congratulations!"
          p="You are one step closer to getting solar panels installed on
                your home. One of our courteous experts will confirm your
                information and review your eligibility."
        />
        <AfterFormCard
          img="https://www.smartsolarsavings.com/v4/assets/images/thank-icon-2.png"
          alt="phone"
          h3="Answer Your Phone!"
          p="www.smartsolarsavings.com does not make high-pressure sales calls - our main goal is to help you lower your electric bill. We've matched you with several local installers, so get ready."
        />
        <AfterFormCard
          img="https://www.smartsolarsavings.com/v4/assets/images/thank-icon-3.png"
          alt="notes"
          h3="Grab A Pen!"
          p="You're moments away from a complete savings & cost breakdown. When our professionals call, make sure to write down their quotes and ask any questions you may have."
        />
      </Container>
    </>
  );
};

export default SubmittedForm;
