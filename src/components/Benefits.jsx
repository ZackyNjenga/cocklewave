import React from 'react'
import Section from "./Section.jsx";
import Heading from "./design/Heading.jsx";
import {benefits} from "../constants/index.jsx";

const Benefits = () => {
    return (
        <Section id="features">
            <div className="container relative">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Chat smarter not Harder with cocklewave"/>

                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item) => (
                        <div key={item.id}>
                            <div>
                                <h5>{item.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
export default Benefits
