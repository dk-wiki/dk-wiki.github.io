import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaDiscord, FaTwitter, FaHandHoldingDollar, FaCircleNodes } from 'react-icons/fa6';

const socialMedia = [
    { name: 'Discord', icon: FaDiscord, color: '#7289DA', url: 'https://discord.gg/wrwXDJWbDy' },
    { name: 'Twitter', icon: FaTwitter, color: '#1DA1F2', url: 'https://x.com/321dk123' },
    { name: "Ko-Fi", icon: FaHandHoldingDollar, color: "#FF5A16", url: "https://ko-fi.com/321dk123" },
    { name: "More", icon: FaCircleNodes, color: "#0F907C", url: "https://linktr.ee/321dk123" }
];

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin: 0;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.3s ease;
    opacity: ${({ active, inactive }) => (active ? 1 : inactive ? 0.5 : 0.7)};
    transform: ${({ active, inactive }) =>
        active ? 'scale(1.2)' : inactive ? 'scale(0.8)' : 'scale(1)'};
    background-color: ${({ active, color }) => (active ? color : 'transparent')};
`;

const Icon = styled.div`
    font-size: 45px;
    color: ${({ active }) => (active ? '#fff' : '#000')};
    transition: color 0.3s ease;
`;

const SocialMediaButtons = () => {
    const [activeButton, setActiveButton] = useState(null);

    return (
        <Container>
            {socialMedia.map((media, index) => {
                const IconComponent = media.icon;
                const isActive = activeButton === index;
                const isInactive = activeButton !== null && activeButton !== index;

                return (
                    <a
                        key={media.name}
                        href={media.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setActiveButton(index)}
                        onMouseLeave={() => setActiveButton(null)}
                        aria-label={`Follow on ${media.name}`}
                    >
                        <Button
                            color={media.color}
                            active={isActive}
                            inactive={isInactive}
                        >
                            <Icon active={isActive}>
                                <IconComponent />
                            </Icon>
                        </Button>
                    </a>
                );
            })}
        </Container>
    );
};

const About = () => {
    return (
        <div className="flex flex-col items-center pb-10">
            <div className="max-w-6xl w-full mb-10">
                <h1 className="text-4xl my-7">About</h1>
                <p className="text-left">
                    Greetings, welcome to the Encyclopedia of Hunger! This place is a small collection of my discoveries working as an archivist for a strange type of entity present throughout history. These
                    people are known as <i>Anthropophagorum Voracitas</i>, or Gluttonites informally. They are a predatory human subspecies or humanoid species with the ability to swallow large quantities whole, including live creatures.
                    My goal is to document as much as I can about them, their abilities, and their history. I hope you find this information as fascinating as I do.
                </p>
                <p className="text-left mt-5">
                    I aim to add more information to this site, including more details about the Gluttonites, as well as their stories and notable events involving them. If you wish to contact me or contribute, please feel free to
                    reach out using the social media links below.
                </p>
                <p className="text-right mt-5">- D. K.</p>
            </div>
            <div className="max-w-xl w-full">
                <SocialMediaButtons />
            </div>
        </div>
    );
};

export default About;
