import Footer from "./components/Footer";
import Form from "./components/Form";
import LoadingBar from "./components/LoadingBar";
import LoadingSpinner from "./components/LoadingSpinner";
import ProgressBar from "./components/ProgressBar";
import SubmittedForm from "./components/SubmittedForm";
import Container from "./Container";
import { useGlobalContext } from "./contextAPI/globalContext";

const Wrapper = ({ children }) => {
  return <div className="container container-wrapper">{children}</div>;
};

const Header = ({ children }) => {
  return (
    <header>
      <div className="container d-flex justify-content-center p-3 ">
        {children}
      </div>
    </header>
  );
};

function App() {
  const { redirect } = useGlobalContext();
  return (
    <>
      <LoadingBar />
      <Wrapper>
        <Header>
          <img
            style={{ maxWidth: "100%" }}
            src="https://www.smartsolarsavings.com/v4/assets/images/solar-saving-logo.png"
            alt="header"
          />
        </Header>
        {redirect ? (
          <SubmittedForm />
        ) : (
          <Container>
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <p className="h4 text-center no-m-bottom">
                Get Your Free Solar Quotes
              </p>
              <p className="fs-2 text-center p-text">
                Take this survey to find out if you qualify. Only takes 60
                seconds!
              </p>
            </div>
            <ProgressBar />
            <LoadingSpinner />
            <Form />
          </Container>
        )}

        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
