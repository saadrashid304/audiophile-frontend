import { Fragment } from "react";
import { NavigationBar, AboutAudiophile, Footer } from "../../components";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <Fragment>
      <NavigationBar setCloseIcon={false} />
      <main>
        <Outlet />
      </main>
      <AboutAudiophile />
      <Footer />
    </Fragment>
  );
};
export default RootPage;
