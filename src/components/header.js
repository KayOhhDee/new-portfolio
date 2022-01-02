import React, { useEffect, useState } from "react"
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Button from "./Button";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLocation } from '@reach/router';

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    position: fixed;
    left: 0;
    right: 0;
    background: var(--color-primary-alt);
    z-index: 10;
    transition: top 0.3s;
    backdrop-filter: blur(10px);
    filter: none;

    @media (max-width: 768px) {
        padding: 1rem 25px;
    }

    .menu-container {
        outline: none;
        background: transparent;
        border: none;
        cursor: pointer;
        height: 40px;
        position: relative;
        width: 30px;
        display: none;

        @media (max-width: 768px) {
            display: block;
        }
    }


    .nav-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        z-index: 9;
    }

    .logo {
        width: 35px;
    }


    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;

        li {
            margin-left: 2rem;
            font-size: var(--font-size-xxsmall);

            a {
                color: var(--text-color-primary);
                font-family: var(--font-secondary);
                text-decoration: none;
                transition: color 0.2s;

                &:hover {
                    color: var(--color-secondary);
                }
            }
        }

    }

    @media (max-width: 768px) {
        .sidenav {
            height: 100vh;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            width: 0vw;
            background: var(--color-primary-light-alt);
            transition: all .2s;

            &.open {
                display: block;
                width: 100vw;

                ul {
                    display: flex;

                    li {
                        font-size: var(--font-size-large);
                        margin: .5rem 0;
                        padding: 1rem;

                        a {
                            padding: 1rem;
                        }
                    }
                }
            }

            ul {
                display: none;
                flex-direction: column;
                padding: 50px 10px;
                list-style: none;
                margin: 0;
                height: 100%;
                width: 100%;
                justify-content: center;
                align-items: center;
            }
        }
    }

`;

const Hamburger = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 37px;
    cursor: pointer;

    .menu {
        top: 50%;
        left: 0;
        width: 30px;
        height: 4px;
        border-radius: 10px;
        background: var(--color-secondary);
        position: absolute;
        transition: 0.5s;

        &::after, &::before {
            content: '';
            position:absolute;
            width: 20px;
            height: 4px;
            border-radius: 10px;
            background: var(--color-secondary);
            transition: 0.5s;
            left: 5px;
        }
        &::after {
            top: 10px;
            bottom: -10px;
        }
        &::before {
            top: -10px;
            bottom: 10px;
        }

        &.open {
            background: transparent;

            &:before {
                top: 0;
                transform:rotate(135deg);
            }

            &:after {
                top: 0;
                transform:rotate(225deg);
            }
        }
    }
`

const container = {
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
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0 }
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    const toggleMenu = (e, value) => {
        if (value === undefined) setIsOpen(!isOpen);
        else setIsOpen(value);

        if(!isOpen) {
            document.getElementById("main").style.filter = "blur(5px) brightness(0.7)";
            document.getElementById("main").style.transitionDelay= ".10s";
            document.body.style.overflow = "hidden";
        } else {
            document.getElementById("main").style.filter = "none";
            document.getElementById("main").style.transitionDelay = "0s";
            document.body.style.overflow = "visible";
        }
    }

    useEffect(() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos || currentScrollPos <= 50) {
                document.getElementById("navbar").style.top = "0";
                if (currentScrollPos <= 50) {
                    document.getElementById("navbar").style.boxShadow = "none";
                    document.getElementById("navbar").style.height = "95px";
                } else {
                    document.getElementById("navbar").style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.2)";
                    document.getElementById("navbar").style.height = "70px";
                }
            } else {
                document.getElementById("navbar").style.top = "-95px";
            }
            prevScrollpos = currentScrollPos;
        }
    }, []);

    useEffect(() => {
        if(isOpen) toggleMenu(false)
    }, [location]);

    return (
        <Wrapper id="navbar">
            <div className="nav-menu">
                <StaticImage
                    src="../assets/images/logo.png"
                    alt="Logo"
                    className="logo"
                    placeholder="tracedSVG"
                />
                <button onClick={toggleMenu} className="menu-container">
                    <Hamburger>
                        <div className={isOpen ? "menu open" : "menu"}></div>
                    </Hamburger>
                </button>
            </div>
            <nav className={isOpen ? "sidenav open" : "sidenav"}>
                <InView triggerOnce={!isOpen}>
                    {({ inView, ref, entry }) => (
                        <motion.ul
                            ref={ref}
                            variants={container}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                        >
                            <motion.li variants={item}>
                                <a href="#about">About</a>
                            </motion.li>
                            <motion.li variants={item}>
                                <a href="#experience">Experience</a>
                            </motion.li>
                            <motion.li variants={item}>
                                <a href="#portfolio">Portfolio</a>
                            </motion.li>
                            <motion.li variants={item}>
                                <a href="#contact">Contact</a>
                            </motion.li>
                            <motion.li variants={item}>
                                <Button size={isOpen ? "" : "small"}>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Resume</a>
                                </Button>
                            </motion.li>
                        </motion.ul>
                    )}
                </InView>
            </nav>
        </Wrapper>
    )
}

export default Header
