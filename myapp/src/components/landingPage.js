import AddMenu from "../pages/addItems";
import Footer from "../pages/footer";
import Header from "../pages/header";
import SubHeader from "../pages/subHeader";

function LandingPage(params) {
  console.log(params,"dmcnkjdn cjks");
  return (
    <>
        <Header />
        <SubHeader/>
        <AddMenu/>
        <Footer/>
    </>
  );
}

export default LandingPage;
