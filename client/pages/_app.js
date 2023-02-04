import "bootstrap/dist/css/bootstrap.css";
import { Andika } from "@next/font/google";
import buildClient from "../api/build-client";
import Header from "../components/header";

const andika = Andika({
  weight: "400",
  subsets: ["latin"],
});

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <main className={andika.className}>
      <div>
        <Header currentUser={currentUser} />
        <Component {...pageProps} />
      </div>
    </main>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
