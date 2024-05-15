import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const contents = [
    {
        title: "Early Life",
        id: "early-life"
    },
    {
        title: "Death",
        id: "death"
    },
    {
        title: "Legacy",
        id: "legacy"
    }
]

const Ajax = () => {
    return (
        <div>
            <EntryTitle>Ajax</EntryTitle>
            <EntryNTBC href="https://en.wikipedia.org/wiki/Ajax_the_Great">Ajax the Great</EntryNTBC>
            <EntryIntroduction imgSrc="Ajax.png" imgDesc="Ajax posing.">
                <b>Ajax</b> was a Spartan warrior and commander of something to do with war and shit. I don't know, I'm just working on the website, man.
                Here's a <EA href="google.com">link</EA>, just to test things I suppose. I don't really know what I'm doing.
                <EBr />
                Did you know that the Spartans used to only eat this weird soup with pigs blood and vinegar in it? It was called Melas Zomos, or black soup, and looked like the equivalent of eating poison. It made them strong, sure, but
                I think Ajax's decision to eat only plants was more than justified if they were feeding that crap to him.
            </EntryIntroduction>
            <TableOfContents items={contents}/>
            <EntrySubTitle jid="early-life">Early Life</EntrySubTitle>
            <EntryParagraph>
                Ajax was born to a woman, and that's all we know. He was probably breastfed which I think would look quite funny. Anyways, so he's Spartan, but some of you people are still calling him a gladiator for some stupid reason.
                Gladiators were from ancient <i>Rome</i>, not Sparta, you uncultured morons. Varius quam quisque id diam vel quam elementum pulvinar. Curabitur gravida arcu ac tortor dignissim. Eu sem integer vitae justo eget magna. Aliquet risus feugiat in ante. Etiam tempor orci eu lobortis elementum nibh tellus. Condimentum vitae sapien pellentesque habitant morbi. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Neque volutpat ac tincidunt vitae semper quis lectus. Tortor id aliquet lectus proin nibh nisl condimentum. Consequat mauris nunc congue nisi.
            </EntryParagraph>
            <EntryParagraph>
            Feugiat sed lectus vestibulum mattis. Non arcu risus quis varius quam quisque id. Facilisis volutpat est velit egestas dui id ornare arcu. Faucibus scelerisque eleifend donec pretium vulputate sapien. Metus vulputate eu scelerisque felis. Non sodales neque sodales ut. Vitae et leo duis ut. Lacus laoreet non curabitur gravida arcu ac tortor. Varius sit amet mattis vulputate. Congue nisi vitae suscipit tellus mauris a diam. Sed cras ornare arcu dui vivamus. Duis ultricies lacus sed turpis tincidunt id. Nec ullamcorper sit amet risus nullam. Venenatis urna cursus eget nunc scelerisque viverra. Convallis tellus id interdum velit. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Mi proin sed libero enim sed faucibus turpis.
            <EBr />
            Interdum consectetur libero id faucibus nisl. Mauris in aliquam sem fringilla ut morbi tincidunt. Viverra nam libero justo laoreet sit amet cursus. Nibh tellus molestie nunc non blandit massa enim nec dui. Egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt praesent semper feugiat nibh sed pulvinar. Ipsum dolor sit amet consectetur adipiscing elit duis. Nunc sed velit dignissim sodales ut eu. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Aliquet sagittis id consectetur purus ut faucibus. Interdum consectetur libero id faucibus nisl. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Proin fermentum leo vel orci porta non.
            </EntryParagraph>
            <EntryQuote attr="Ajax, 2024">
                I'm going to eat and murder you
            </EntryQuote>
            <EHr />
            <EntrySubTitle jid="death">Death</EntrySubTitle>
            <EntryParagraph>
                Ajax died heroically in battle after he was betrayed by his own men or something. I don't know, I haven't made this lore yet. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Scelerisque varius morbi enim nunc. Amet justo donec enim diam vulputate ut pharetra. Tellus molestie nunc non blandit. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Neque gravida in fermentum et sollicitudin. Id cursus metus aliquam eleifend. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Cursus risus at ultrices mi tempus imperdiet nulla. Felis donec et odio pellentesque diam volutpat. Quis eleifend quam adipiscing vitae proin. Convallis tellus id interdum velit. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Urna porttitor rhoncus dolor purus. Eu non diam phasellus vestibulum lorem sed risus. Lacinia quis vel eros donec ac odio tempor orci dapibus. Vulputate odio ut enim blandit volutpat. Accumsan lacus vel facilisis volutpat est velit egestas.
            </EntryParagraph>
            <EHr />
            <EntrySubTitle jid="legacy">Legacy</EntrySubTitle>
            <EntryParagraph>
                Because of his efforts for the Spartan army, he was remembered as a small plushie in the Spartan gift shop. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at quis. Duis convallis convallis tellus id interdum velit. Sociis natoque penatibus et magnis dis parturient montes nascetur. Ante metus dictum at tempor commodo ullamcorper. Magna sit amet purus gravida quis blandit turpis. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Arcu non sodales neque sodales ut etiam sit amet. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Rhoncus aenean vel elit scelerisque. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Proin fermentum leo vel orci porta non pulvinar.
            </EntryParagraph>
        </div>
    );
}

export default Ajax;