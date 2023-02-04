import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  // axios.get("/api/users/currentuser").catch((err) => {
  //   console.log(err.message);
  // });
  return <h1>Landing Pages</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // we are on the server
    // requests should be made to a namespace
    const { data } = await axios.get(
      "http://SERVICENAME.NAMESPACE.svc.cluster.local"
    );
  } else {
    // we are on the browser
    // requests can be made with a base url of ''
    const { data } = await axios.get("/api/users/currentuser");
    // { currentuser: {}}
    return data;
  }
};

export default LandingPage;
