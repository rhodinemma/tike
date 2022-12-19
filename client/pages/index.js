const LandingPage = () => {
  console.log("I am in the component");
  return <h1>Landing Pages</h1>;
};

LandingPage.getInitialProps = () => {
  console.log("I am on the server!");
  return {};
};

export default LandingPage;
