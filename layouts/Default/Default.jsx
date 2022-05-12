import Head from "components/Head";
import Preloader from "components/Preloader";

const Default = ({ children }) => (
    <>
        <Head>Richard Jachnik</Head>
        {children}
        <Preloader />
    </>
);

export default Default;
