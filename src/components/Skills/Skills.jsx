import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import '../Skills/skils.css'

const Experience = () => {
    return (
        <section id="skills">
            <h5>The Skills I Have</h5>
            <h2>Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-end Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>HTML</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>CSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>JavaScript</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>React</h4>
                        </article>
                    </div>
                </div> 
                <div className="experience__frontend">
                    <h3>Back-end Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>MongoDB</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>NodeJS</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>ExpressJS</h4>
                        </article>

                    </div>
                </div> 
            </div>
            
        </section>
    )
}

export default Experience