// import styles from "./HomePage.module.css";
import {
  CategoriesListing,
  NewProductListing,
  SpeakerOneListing,
  SpeakerTwoListing,
  EarphoneListing,
} from "../../components";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <NewProductListing />
      <CategoriesListing onClick={null} />
      <SpeakerOneListing />
      <SpeakerTwoListing />
      <EarphoneListing />
    </Fragment>
  );
};
export default HomePage;
