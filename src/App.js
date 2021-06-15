import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AboutUs from "./components/about-us/AboutUs.jsx";
import ContactUs from "./components/contact-us/ContactUs.jsx";
import CovidHome from "./components/covid/index.js";
import Donation from "./components/donation/Donation.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from './components/header/Header.jsx';
import Home from "./components/home/index.js";
import Price from "./components/price/Price.jsx";
import Service from "./components/service/Service.jsx";
import Volunteer from "./components/volunteers/Volunteer.jsx";

const Container = styled.div`
  margin-top: 120px;
  @media(max-width: 500px){
    margin-top: 150px;    
  }
`;

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about-us"> <AboutUs /> </Route>
          <Route exact path="/services"> <Service /> </Route>
          <Route exact path="/price-list"> <Price /> </Route>
          <Route exact path="/donation"> <Donation /> </Route>
          <Route exact path="/contact-us"> <ContactUs /> </Route>
          <Route exact path="/covid-19"><CovidHome /></Route>
          <Route exact path="/volunteers"><Volunteer /></Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
