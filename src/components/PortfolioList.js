import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FiGithub, FiExternalLink } from 'react-icons/fi'

import { motion } from 'framer-motion'
import { InView } from "react-intersection-observer";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 5rem;
    flex-direction: ${props => props.index % 2 !== 0 ? "row-reverse" : "row"};
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        margin-bottom: 3.5rem;
    }

    @media (max-width: 480px) {
        margin-bottom: 2rem;
    }

    .project-content {
        max-width: 50%;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: ${props => props.index % 2 !== 0 ? "left" : "right"};
        z-index: 2;

        @media (max-width: 900px) {
            margin-right: ${props => props.index % 2 !== 0 ? "auto" : "0"};
            margin-left: ${props => props.index % 2 === 0 ? "auto" : "0"};
            max-width: 75%;
            width: 75%;
        }

        @media (max-width: 768px) {
            max-width: 100%;
            width: 100%;
            margin: 2.5rem;
            text-align: left;
        }

        @media (max-width: 480px) {
            margin: 30px 25px;
        }
    }

    .project-image {
        mix-blend-mode: soft-light;
        transition: all .5s;
        filter: grayscale(100%) contrast(1) brightness(100%);
        border-radius: 4px;

        @media (max-width: 768px) {
            filter: grayscale(100%) contrast(1) brightness(50%);
            mix-blend-mode: multiply;
            height: 100%;
            width: auto;
        }
    }

    .project-image-container {
        text-decoration: none;
        max-width: 50%;
        width: 50%;
        height: auto;
        background-color: var(--color-primary);
        margin-left: ${props => props.index % 2 !== 0 ? "2rem" : ""};
        margin-right: ${props => props.index % 2 === 0 ? "2rem" : ""};
        display: flex;
        align-items: center;
        position: relative;
        transition: all .5s;
        backdrop-filter: opacity(1);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;

        @media (max-width: 900px) {
            position: absolute;
            max-width: 60%;
            width: 60%;
        }

        @media (max-width: 768px) {
            max-width: 100%;
            width: 100%;
            margin: 0;
            height: 100%;
        }

        &:hover {
            @media (min-width: 768px) {
                background-color: transparent;

                &:before {
                    background-color: transparent;
                    filter: none;
                }

                .project-image {
                    background-color: transparent;
                    filter: none;
                    mix-blend-mode: normal;
                }
            }
        }

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            z-index: 3;
            background-color: var(--color-primary-alt);
            mix-blend-mode: screen;
            transition: all .5s;
            border-radius: 4px;
        }
    }

    .project-label {
        font-size: var(--font-size-xxsmall);
        font-family: var(--font-secondary);
        color: var(--color-secondary);
        margin: 0;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-size: var(--font-size-xlarge);
        font-weight: var(--font-600);
        color: var(--text-color-primary);
        margin-top: 0;
        margin-bottom: .5rem;

        a {
           color: var(--text-color-primary);
           transition: color .2s;

           &:hover {
               color: var(--color-secondary)
           }
        }
    }

    .project-desc {
        font-size: var(--font-size-xsmall);
        line-height: normal;
    }

    .project-tag-container {
        margin-top: .7rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: ${props => props.index % 2 === 0 ? "flex-end" : "flex-start"};

        @media (max-width: 768px) {
            justify-content: flex-start;
        }
    }

    .project-tag {
        font-size: var(--font-size-xxxsmall);
        color: var(--color-secondary);
        background-color: var(--color-tertiary);
        font-family: var(--font-secondary);
        padding: 0.4rem .7rem;
        line-height: 1;
        margin-right: .3rem;
        margin-bottom: .3rem;
        height: 26px;

        &:last-child {
            margin: 0;
        }
    }

    .project-links {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: ${props => props.index % 2 === 0 ? "flex-end" : "flex-start"};
        gap: 1rem;

        a {
            text-decoration: none;
            color: var(--text-color-primary);
            transition: color .3s;

            &:hover {
                color: var(--color-secondary);
            }
        }
    }
`

const variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { delay: .5 } }
};

const PortfolioList = ({ projects = [] }) => {
    return (
        <>
            {
                projects.map((project, index) => {
                    const pathToImage = getImage(project.image)
                    return (
                        <InView as="div" key={index} triggerOnce threshold={0.3}>
                            {({ inView, ref, entry }) => (
                                <motion.div
                                    ref={ref}
                                    variants={variants}
                                    initial="hidden"
                                    animate={inView ? "show" : "hidden"}
                                    transition={{ duration: .2 }}
                                >
                                    <Wrapper index={index}>
                                        <a
                                            href={project.demoLink}
                                            className="project-image-container"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GatsbyImage
                                                image={pathToImage}
                                                className="project-image"
                                                alt={project.title}
                                            />
                                        </a>
                                        <div className="project-content">
                                            <p className="project-label">
                                                Portfolio Project
                                            </p>
                                            <h3>
                                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                            </h3>
                                            <p className="project-desc">
                                                {project.description.description}
                                            </p>
                                            <div className="project-tag-container">
                                                {
                                                    project.buildTools.map((tool, index) => (
                                                        <span className="project-tag" key={index}>
                                                            {tool}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                            <div className="project-links">
                                                {project.githubLink && (
                                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                        <FiGithub size={22} />
                                                    </a>
                                                )}
                                                {project.demoLink && (
                                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                                        <FiExternalLink size={22} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </Wrapper>
                                </motion.div>
                            )}
                        </InView>
                    )
                })
            }
        </>
    )
}

export default PortfolioList
