import React from 'react'
import styled from 'styled-components'

import { FiGithub, FiLinkedin, FiFacebook, FiCodepen, FiTwitter } from 'react-icons/fi'

import { motion } from 'framer-motion'

const Wrapper = styled.div`
.social-icons {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .icon-line {
        width: 2rem;
        height: 2px;
        background-color: var(--text-color-secondary);
        margin: 1.3rem 0;
        position: relative;
        text-decoration: none;
        transition: all .2s;

        &:hover {
            background-color: var(--color-secondary);
            width: 2.4rem;

            svg {
                color: var(--color-secondary);
                /* right: calc(-48px - .4rem); */
            }
        }

        svg {
            position: relative;
            width: 40px;
            right: -40px;
            height: 40px;
            padding: 10px 0;
            top: -19px;
            color: var(--text-color-secondary);
            transition: all .2s;
        }
    }
}

@media (max-width: 768px) {
    .social-icons {
        display: none;
    }
}
`

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const item = {
    hidden: { opacity: 0, x: '-100%' },
    show: { opacity: 1, x: 0 }
};

const FixedSocialIcons = () => {
    return (
        <Wrapper>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="social-icons"
            >
                <motion.a
                    variants={item}
                    href="https://github.com/KayOhhDee"
                    className="icon-line"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiGithub size={20} />
                </motion.a>
                <motion.a
                    variants={item}
                    href="https://www.linkedin.com/in/kod790/"
                    className="icon-line"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                    variants={item}
                    href="https://facebook.com/kay.ohhdee.790"
                    className="icon-line"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiFacebook size={20} />
                </motion.a>
                <motion.a
                    variants={item}
                    href="#x"
                    className="icon-line"
                >
                    <FiTwitter size={20} />
                </motion.a>
                <motion.a
                    variants={item}
                    href="https://codepen.io/kayohhdee"
                    className="icon-line"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiCodepen size={20} />
                </motion.a>
            </motion.div>
        </Wrapper>
    )
}

export default FixedSocialIcons
