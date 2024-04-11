import Section from "./Section.jsx";
import Heading from "./design/Heading.jsx";
import {check, service1, service2, service3} from "../assets/index.js";
import {brainwaveServices, brainwaveServicesIcons} from "../constants/index.jsx";
import Generating from "./Generating.jsx";
import {Gradient, PhotoChatMessage, VideoBar, VideoChatMessage} from "./design/Services.jsx";

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
                            <h4 className="h4 mb-4"> Smartest AI Around</h4>
                            <p className="body-3"> Cocklewave AI unlocks the Potential of AI
                                powered applications
                            </p>
                            <ul className="body-2">
                                {brainwaveServices.
                                map((item, index) => (
                                    <li className="items-start flex py-4 border-t border-n-6"
                                        key={index}>
                                        <img
                                            height={24}
                                            width={24}
                                            src={check}/>
                                        <p>{item}</p>
                                    </li>

                                ))}
                            </ul>
                        </div>
                        <Generating className="absolute left-4 right-4 bottom-4
                         border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2"/>
                    </div>
                    <div className="relative z-1 grid grid-cols-2">
                        <div
                            className="relative min-h-[39rem] border border-n-1/10
                            rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={service2}
                                    className="h-full w-full object-cover"
                                    width={630}
                                    height={750}
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end
                             p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4"> Photo Editing</h4>
                                <p className="body-3"> Automatically enhance your
                                    photos using your AI app&apos;s photo editing feature. Try it now
                                </p>
                                <PhotoChatMessage/>
                            </div>

                        </div>
                        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="ppy12 px4 xl:px8 ">
                                <h4 className="h4 mb-4">
                                    Video generation
                                </h4 >
                                <p className="body-2 mb-[2em] text-n-3">
                                    This is one of the worlds most powerful AI photo
                                    and video art generation let&apos;s see what can
                                    you do with it
                                </p>
                                <ul className="flex items-center justify-between">
                                    {brainwaveServicesIcons.map((item, index) => (
                                        <li key={index}
                                            className={` flex items-center justify-center 
                                            ${index === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient " +
                                                "rounded-2xl md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10" +
                                                " bg-n-6 md:w-15 md:h-15"}`}>
                                            <div className={index === 2  ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]" : ""}>
                                                <img
                                                    width={24} height={24} alt={item}
                                                    src={item}/>
                                            </div>
                                        </li>
                                        ))}
                                </ul>

                            </div>
                            <div className="relative h-[20rem] pt-5 bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img src={service3}
                                     className="w-full h-full object-cover"
                                     height={520}
                                     width={400}
                                     alt="scary robot"
                                />
                                <VideoChatMessage/>
                                <VideoBar/>
                            </div>
                        </div>
                    </div>
                    <Gradient/>
                </div>
            </div>
        </Section>
    )
}
export default Services
