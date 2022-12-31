import "bootstrap/dist/css/bootstrap.css";
import { Andika } from "@next/font/google";

const andika = Andika({
  weight: "400",
  subsets: ["latin"],
});

export default ({ Component, pageProps }) => {
  return (
    <main className={andika.className}>
      <Component {...pageProps} />
    </main>
  );
};
