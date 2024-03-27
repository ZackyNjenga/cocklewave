import React from 'react'
import Section from "./Section.jsx";
import Heading from "./design/Heading.jsx";
import {benefits} from "../constants/index.jsx";

const Benefits = () => {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading
                    className=" md:max-w-md lg:max-w-2xl"
                    title="Chat smarter Not Harder with cocklewave"
                />
                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item) =>(
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%]
                            md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item},
                                backgroundUrl
                                    
                            }
                            key={item.id}>
                            <div>
                                <h5>
                                    {item.title}
                                </h5>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>
        </Section>
    )
}
export default Benefits
