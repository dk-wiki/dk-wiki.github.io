import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const socialMedia = [
    { name: 'Discord', icon: FaDiscord, color: '#7289DA', url: 'https://discord.gg/wQ44NaDZj3' },
    { name: 'Twitter', icon: FaXTwitter, color: '#000000', url: 'https://x.com/321dk123' },
];

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin: 0 10px;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.3s ease;
    opacity: 0.7;

    ${({ active, color }) =>
        active &&
        css`
        background-color: ${color};
        transform: scale(1.2);
        opacity: 1;
        `}

    ${({ inactive }) =>
        inactive &&
        css`
        transform: scale(0.8);
        opacity: 0.5;
        `}
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
                I aim to add more information to this site, including more information about the Gluttonites, as well as their stories and notable events involving them. If you wish to contact me or contribute, please feel free to
                reach out using the social media links below.
            </p>
            <p className="text-right mt-5">
                - D. K.
            </p>
        </div>
        <div className="max-w-xl w-full">
            <SocialMediaButtons />
        </div>
    </div>
    );
}

export default About;
