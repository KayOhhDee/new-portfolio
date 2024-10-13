import React from 'react'
import styled from 'styled-components'
import { FiGithub, FiLinkedin, FiFacebook, FiCodepen, FiTwitter } from 'react-icons/fi'

const Wrapper = styled.div`
    text-align: center;

    .footer {
        color: var(--text-color-secondary);
        margin-bottom: 2rem;

        p {
            font-family: var(--font-secondary);
            font-size: var(--font-size-xxxsmall);
        }
    }

    .footer-social-icons {
        margin-bottom: 1.5rem;
        display: none;

        @media (max-width: 768px) {
            display: block;
        }

        a {
            color: var(--text-color-secondary);
            margin: 0 1rem;
            transition: color .2s;

            &:hover {
                color: var(--color-secondary);
            }
        }
    }
`

const Footer = () => {
    return (
        <Wrapper>
            <footer className="footer">
                <div className="footer-social-icons">
                    <a
                        href="https://github.com/KayOhhDee"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kod790"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin size={20} />
                    </a>
                    <a
                        href="#f"
                    >
                        <FiFacebook size={20} />
                    </a>
                    <a
                        href="#x"
                    >
                        <FiTwitter size={20} />
                    </a>
                    <a
                        href="https://codepen.io/kayohhdee"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiCodepen size={20} />
                    </a>
                </div>
                <p>Built by Kwasi O.Donkor. Copyright &copy; {new Date().getFullYear()}</p>
            </footer>
        </Wrapper>
    )
}

export default Footer
