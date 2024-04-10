import Section from "./Section.jsx";
import Heading from "./design/Heading.jsx";
import {check, service1} from "../assets/index.js";
import {brainwaveServices} from "../constants/index.jsx";

const Services = () => {
    return (
        <Section id="hoe-to-use">
            <div className="container">
                <Heading
                    title=" Generative AI made for creatives"
                    text="Cocklewave unlocks the potential of AI-powered applications"
                />
                <div className="relative">
                    <div className=" relative z-1 flex items-center h-[39rem] mb-5 p-8
                     border border-n-1/10 rounded-3xl overflow-hidden lg:p-20
                     xl:h-[46rem]">
                        <div className="absolute top-0 left-0 h-full w-full
                        pointer-events-none md:w-3/5">
                            <img
                                className="w-full h-full object-cover md:object-right"
                                src={service1}
                                height={730}
                                width={800}
                            />
                        </div>
                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4> Smartest AI Around</h4>
                            <p> Cocklewave AI unlocks the Potential of AI
                                powered applications
                            </p>
                            <ul className="body-2">
                                {brainwaveServices.
                                map((item, index) => (
                                    <li key={index}>
                                        <img src={check}/>
                                        <p>{item}</p>
                                    </li>

                                ))}
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </Section>
    )
}
export default Services
