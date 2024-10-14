import React, { useState } from 'react'
import styled from 'styled-components'

import { AnimatePresence, motion } from 'framer-motion';

const Wrapper = styled.div`
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }

    @media (min-width: 700px) {
        min-height: 340px;
    }

    .tabs {
        float: left;
        position: relative;
        height: max-content;

        @media (max-width: 600px) {
            border-left: none;
            display: flex;
            width: 100%;
            margin-bottom: 2.5rem;
            overflow: auto;
            height: auto;
        }

        &-container {
            border-right: 2px solid var(--text-color-octonary);

            @media (max-width: 600px) {
                max-width: 600px;
                display: flex;
                position: relative;
                border: none;
                border-bottom: 2px solid var(--text-color-octonary);
            }
        }

    }

    .tabs button {
        display: block;
        background-color: inherit;
        padding: 0.8rem 1.2rem;
        width: 100%;
        border: none;
        outline: none;
        text-align: right;
        cursor: pointer;
        transition: 0.2s;
        font-size: var(--font-size-xxsmall);
        font-family: var(--font-secondary);
        color: var(--text-color-tertiary);
        height: 40px;

        @media (max-width: 600px) {
            width: 100px;
            text-align: center;
        }

        &:hover {
            background-color: var(--color-tertiary);
            color: var(--color-secondary);
        }

        &.active {
            background-color: var(--color-tertiary);
            color: var(--color-secondary);
        }
    }

    .tabcontent {
        float: left;
        padding-left: 1.8rem;

        @media (max-width: 600px) {
            padding-left: 0;
        }

        h3 {
            margin-top: 0;
            margin-bottom: .5rem;
            font-weight: var(--font-500);
            font-size: var(--font-size-large);

            a {
                text-decoration: none;
                color: var(--color-secondary);
            }

            span {
                color: var(--color-secondary);
            }
        }
        &-period {
            font-size: var(--font-size-xxsmall);
            font-family: var(--font-secondary);
            margin: 0;
            margin-bottom: 1.5rem;
        }

        ul {
            padding-left: 18px;
            line-height: normal;
            font-size: var(--font-size-xsmall);
            list-style: none;
            position: relative;

            li {
                margin-bottom: .8rem;
                padding-left: .4rem;

                &:before {
                    content: "• ";
                    color: var(--color-secondary);
                    position: absolute;
                    left: 0;
                }
            }
        }
    }
`
const SelectionBar = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0;
    transform-origin: left center;
    transition: transform;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    height: 40px;
    border-left: 2px solid var(--color-secondary) ;
    width: 2px;
    transform: ${props => 'translateY(' + ( - (props.tabsLength - (props.selected + 1)) * 40) + 'px)'};

    @media (max-width: 600px) {
        left: 0;
        height: 2px;
        bottom: -2px;
        width: 100px;
        border-bottom: 2px solid var(--color-secondary) ;
        transform: ${props => 'translateX(' + (props.selected * 100) + 'px)'};
    }
`

const Tabs = () => {
    const [selected, setSelected] = useState(0)
    const [tabs] = useState([
        {
            id: 0,
            title: 'Hubtel',
            position: 'Software Engineer',
            content: 'First content',
            link: "https://hubtel.com/",
            period: 'Sep 2022 - Present',
            location: 'WFH',
            description: [
                'Deliver and maintain a high-quality merchant portal serving a variety of businesses and organizations, including Pizzaman-Chickenman, Pharmacy Council Ghana, SportyBet, TV3, Synlab Ghana, Acacia Health Insurance and more.',
                'Collaborate with designers, project managers, and engineers to turn creative concepts into tangible solutions for clients and stakeholders.',
                'Mentor junior engineers and national service personnel, providing guidance and support to enhance their skills and professional development.',
            ]
        },
        {
            id: 1,
            title: 'W3MSYS',
            position: 'Software Developer',
            content: 'Second content',
            link: "https://www.w3msys.com/",
            period: 'Jun 2020 - May 2022',
            location: 'Remote',
            description: [
                'Designed and implemented a video chat feature within a health-related project using WebRTC technology to enhance user interaction and support.',
                'Developed and maintained client websites with HTML, CSS, Sass, JavaScript, Vue, React and jQuery, ensuring responsive design and seamless cross-browser functionality.',
                "Collaborated with designers and developers to ensure a cohesive and consistent user experience across W3MSYS's web applications."
            ]
        },
        {
            id: 2,
            title: 'GetRooms',
            position: 'Frontend Developer',
            content: 'Third content',
            link: "https://getrooms.co/",
            period: 'January - December 2019',
            location: 'Remote',
            description: [
                'Contributed to the design phases of the project eg. wireframe and mock stage.',
                'Conducted Quality Assurance tests on site to verify cross-browser compatibility and ensure mobile responsiveness across devices.',
                'Created an engaging user onboarding journey page to enhance the initial experience for new users.'
            ]
        },
    ])

    const handleClick = (selected) => {
        setSelected(selected)
    }

    return (
        <Wrapper>
            <div className="tabs">
                {/* <SelectionBar position={(tabs.length - 1 - selected)}></SelectionBar> */}
                <div className="tabs-container">
                <SelectionBar selected={selected} tabsLength={tabs.length}></SelectionBar>
                    {tabs.map((button, i) => (
                        <button
                            key={button.title}
                            className={i === selected ? 'active' : ''}
                            onClick={() => handleClick(i)}
                        >{button.title}</button>
                    ))}
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected ? selected : "empty"}
                    className="tabcontent"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.1 }}
                >
                    {selected !== -1 &&
                        <>
                            <h3>
                                {tabs[selected].position}
                                {" "}
                                <span>@</span>
                                {" "}
                                <a
                                    href={tabs[selected].link}
                                    target="_blank"
                                    rel="noreferrer"
                                >{tabs[selected].title}</a>
                            </h3>
                            <p className="tabcontent-period">{tabs[selected].location} • {tabs[selected].period}</p>
                            <ul>
                                {tabs[selected].description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </>
                    }
                </motion.div>
            </AnimatePresence>
        </Wrapper>
    )
}

export default Tabs
