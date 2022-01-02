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
                border-top: 2px solid var(--text-color-octonary);
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
        top: -2px;
        width: 100px;
        border-top: 2px solid var(--color-secondary) ;
        transform: ${props => 'translateX(' + (props.selected * 100) + 'px)'};
    }
`

const Tabs = () => {
    const [selected, setSelected] = useState(0)
    const [tabs] = useState([
        {
            id: 0,
            title: 'W3MSYS',
            position: 'Frontend Developer',
            content: 'First content',
            link: "https://www.w3msys.com/",
            period: 'May 2020 - Present',
            location: 'Remote',
            description: [
                'Develop frontend applications to meet customers’ expectations.',
                'Work with a team of developers to create robust and scalable applications.',
                'Closely work with designer to create visually appealing applications.',
                'Integrate backend functionalities into the frontend.',
                'Keep frontends up to date with latest technological trends.'
            ]
        },
        {
            id: 1,
            title: 'GetRooms',
            position: 'Frontend Developer',
            content: 'Second content',
            link: "https://getrooms.co/",
            period: 'January - December 2019',
            location: 'Remote',
            description: [
                'Contributed to the design phases of the project eg. wireframe and mock stage',
                'Researched functionality and added value to the project.',
                'Carried out tasks and communicated effectively with team.',
                'Updated the application with relevant plugins and code.'
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
            <AnimatePresence exitBeforeEnter>
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
