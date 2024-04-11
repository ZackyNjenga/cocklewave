import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaborations from "./components/Collaborations.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>

            <div className="pt=[4.75 rem] lg:pt-[5.25rem] overflow-hidden">
                <Header/>
                <Hero/>
                <Benefits/>
                <Collaborations/>
                <Services/>
                <Pricing/>
                <Roadmap/>
                <Footer/>
            </div>
            <ButtonGradient/>
        </>

    );

};


export default App;
