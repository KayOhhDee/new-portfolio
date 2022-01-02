import React from 'react'
import styled from 'styled-components'

import { FiGithub, FiExternalLink } from "react-icons/fi";

import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;

    .box {
        width: 30%;
        min-width: 260px;
        margin: 0.5rem;
        background-color: var(--color-primary-light);
        border-radius: 4px;
        padding: 2rem 1.8rem;
        display: flex;
        flex-direction: column;
        position: relative;
        flex-grow: 1;
        top: 0;
        transition: all .3s;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;

        &:hover {
            top: -7px;
        }

        .footer-section {
            display: flex;
            align-items: center;

            a {
                z-index: 2;

                svg {
                    transition: all .3s;
                }

                &:hover {
                    svg {
                        color: var(--color-secondary) !important;
                    }
                }
            }


            a:first-of-type {
                margin-right: .7rem;
            }
        }

        .top-section {
            h5 {
                margin-top: 0;
                margin-bottom: 0;
                font-size: var(--font-size-large);
                color: var(--text-color-secondary);
                font-weight: var(--font-600);
                line-height: normal;
                transition: all .3s;

                a {
                    color: var(--text-color-secondary);
                    transition: color .3s;

                    &:hover {
                      color: var(--color-secondary);
                    }
                }


                a::before {
                    color: var(--color-secondary);
                    content: "";
                    display: block;
                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                    top: 0px;
                    left: 0px;
              }
            }
        }

        .middle-section {
            display: flex;
            flex-direction: column;
            height: 100%;

            p {
                font-size: var(--font-size-xxsmall);
                color: var(--text-color-tertiary);
                line-height: normal;
                margin-bottom: auto;
            }

            .middle-section-tech {
              margin-top: 1.5rem;
              margin-bottom: 1.7rem;
            }

            span {
                font-size: var(--font-size-xxxsmall);
                color: var(--text-color-quinary);
                font-family: var(--font-secondary);
                margin-right: 1rem;
            }
        }
    }

`

const variants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 }
};

const OtherProjectsList = ({ projects }) => {
  return (
    <Wrapper>
      {
        projects.map((project, index) => {
          const { title, description, buildTools, demoLink, githubLink } = project
          return (
            <InView as="div" key={index} triggerOnce threshold={0.3}>
              {({ inView, ref, entry }) => (
                <motion.div
                  href={demoLink}
                  className="box"
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={ref}
                  variants={variants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  transition={{ duration: .2, delay: (index * .2) + .5 }}
                >
                  <div className="top-section">
                    <h5>
                      <a href={demoLink} target="_blank" rel="noopener noreferrer">
                        {title}
                      </a>
                    </h5>
                  </div>
                  <div className="middle-section">
                    <p>{description.description}</p>
                    <div className="middle-section-tech">
                      {
                        buildTools.map((tool, index) => {
                          return (
                            <span key={index}>{tool}</span>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="footer-section">
                    {
                      githubLink &&
                      <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FiGithub size={22} color="var(--text-color-tertiary)" />
                      </a>
                    }
                    {
                      demoLink &&
                      <a href={demoLink} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink size={22} color="var(--text-color-tertiary)" />
                      </a>
                    }
                  </div>
                </motion.div>
              )}
            </InView>
          )
        }
        )
      }
    </Wrapper>
  )
}

export default OtherProjectsList
