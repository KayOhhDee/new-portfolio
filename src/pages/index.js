import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import Tabs from "../components/Tabs"
import PortfolioList from "../components/PortfolioList"
import OtherProjectsList from "../components/OtherProjectsList"

import { AiOutlineHtml5 } from "react-icons/ai"
import { RiCss3Line } from "react-icons/ri"
import { DiJavascript1 } from "react-icons/di"
import { FaVuejs, FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { IoLogoFirebase } from "react-icons/io5";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const portfolioContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const query = graphql`
{
  allContentfulPortfolio (sort: {fields: createdAt}) {
    nodes {
      buildTools
      description {
        description
      }
      image {
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
      title
      githubLink
      demoLink
      isFeatured
    }
  }
}
`

const IndexPage = () => {
    const data = useStaticQuery(query)
    const portfolioProjects = data.allContentfulPortfolio.nodes.filter(project => project.isFeatured)
    const otherProjects = data.allContentfulPortfolio.nodes.filter(project => !project.isFeatured)


    return (
        <Layout>
            <Seo />
            <InView triggerOnce>
                {({ inView, ref, entry }) => (
                    <motion.section
                        ref={ref}
                        className="hero-container section-container"
                        variants={container}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        <motion.h1 variants={item}>Hello, I am</motion.h1>
                        <motion.h2 variants={item}>Kwasi O.Donkor.</motion.h2>
                        <motion.h3 variants={item}>Software Engineer.</motion.h3>
                        <motion.p variants={item} className="hero-text">I am a Software Engineer who endeavours to construct dynamic and beautiful web applications through code that is carefully crafted and user-centeric design.</motion.p>
                        <motion.div variants={item}>
                            <Button>
                                <a href="mailto:kod3180@gmail.com">Hire me!</a>
                            </Button>
                        </motion.div>
                    </motion.section>
                )
                }
            </InView>
            <InView triggerOnce threshold={0.4}>
                {({ inView, ref, entry }) => (
                    <motion.section
                        id="about"
                        className="about-container section-container"
                        ref={ref}
                        variants={item}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        <h4>About Me</h4>
                        <hr />
                        <div className="about-articles">
                            <article>
                                <p>
                                    Hello! <span className="emoji">👋🏽</span> I’m Dr. Kwasi Owusu-Donkor, a pharmacist turned software engineer. I develop robust, scalable web applications focused on usability and performance, utilizing both front-end and back-end technologies to create seamless solutions that enhance user experience.
                                </p>
                                <p>I've had the chance to work with an award-winning <a href="https://hubtel.com/" target="_blank" rel="noreferrer">Fintech company</a> (Fintech Company of the Year - Ghana Fintech Awards 2022), <a href="https://staging.cordtree.org" target="_blank" rel="noreferrer">a non-profit healthcare solution</a>, <a href="https://getrooms.co/" target="_blank" rel="noreferrer">a hostel booking service</a>, and other freelance projects.</p>
                                <p>My goal is to consistently produce clean, maintainable code that follows industry standards, contributing to the improved quality and reliability of projects.</p>
                                <p>Here are few technologies I have worked with{"   "}<span className="hand-md emoji">👉🏽</span><span className="hand-sm emoji">👇🏽</span></p>

                            </article>
                            <article>
                                <div className="skill-card-container">
                                    <div className="skill-card-wrapper">
                                        <a
                                            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                                            className="skill-card"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p>HTML</p>
                                            <AiOutlineHtml5 className="skill-card-icon" />
                                        </a>
                                        <a
                                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                            className="skill-card"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p>CSS</p>
                                            <RiCss3Line className="skill-card-icon" />
                                        </a>
                                    </div>
                                    <div className="skill-card-wrapper">
                                        <a
                                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="skill-card"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p>JavaScript</p>
                                            <DiJavascript1 className="skill-card-icon" />
                                        </a>
                                        <a
                                            href="https://reactjs.org/"
                                            className="skill-card"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p>React</p>
                                            <FaReact className="skill-card-icon" />
                                        </a>
                                        <a
                                            href="https://vuejs.org/"
                                            className="skill-card"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p>Vue</p>
                                            <FaVuejs className="skill-card-icon" />
                                        </a>
                                    </div>
                                    <div className="skill-card-wrapper">
                                        <a
                                            href="https://nodejs.org/"
                                            className="skill-card"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p>Node</p>
                                            <IoLogoNodejs className="skill-card-icon" />
                                        </a>
                                        <a
                                            href="https://firebase.com/"
                                            className="skill-card"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p>Firebase</p>
                                            <IoLogoFirebase className="skill-card-icon" />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </motion.section>
                )}
            </InView>
            <InView triggerOnce threshold={0.5}>
                {({ inView, ref, entry }) => (
                    <motion.section
                        id="experience"
                        className="experience-container section-container"
                        ref={ref}
                        variants={item}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        <h4>Experience</h4>
                        <hr />
                        <Tabs />
                    </motion.section>
                )}
            </InView>
            <InView triggerOnce threshold={0.1}>
                {({ inView, ref, entry }) => (
                    <motion.section
                        id="portfolio"
                        className="portfolio-container"
                        ref={ref}
                        variants={portfolioContainer}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        <motion.div variants={item}>
                            <h4>Portfolio</h4>
                            <hr />
                        </motion.div>
                        <PortfolioList projects={portfolioProjects} />
                    </motion.section>
                )}
            </InView>
            <InView triggerOnce threshold={0.1}>
                {({ inView, ref, entry }) => (
                    <motion.section
                        className="other-projects-container"
                        ref={ref}
                        variants={portfolioContainer}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        <motion.h4 variants={item}>Other Outstanding Projects</motion.h4>
                        <motion.p variants={item}>other works</motion.p>
                        <OtherProjectsList projects={otherProjects} />
                    </motion.section>
                )}
            </InView>
            <InView triggerOnce threshold={0.5}>
                {({ inView, ref, entry }) => (
                    <motion.section
                        id="contact"
                        className="connect-container"
                        ref={ref}
                        variants={item}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        <h4>Get In Touch</h4>
                        <p>I am currently looking for new opportunities. Kindly contact me if you want to hire me on a full-time, part-time or contract basis, I am ready to start working with you!</p>
                        <Button>
                            <a href="mailto:kod3180@gmail.com">Contact Me</a>
                        </Button>
                    </motion.section>
                )}
            </InView>
        </Layout>
    )
}

export default IndexPage
