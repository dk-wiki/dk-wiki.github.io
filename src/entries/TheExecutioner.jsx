import React from "react";
import { EntryNTBC, EntryTitle, EntrySubTitle, EntryParagraph, EntryIntroduction, EA, EBr, EntryQuote, EHr, TableOfContents } from "./EntryObjects";

const TheExecutioner = () => {
    return (
        <div>
            <EntryTitle>The Executioner</EntryTitle>
            <EntryIntroduction imgSrc="TheExecutioner.png" imgDesc="The Executioner, depicted in his natural size and state.">
                <b>The Executioner</b> of some kingdom was a ruthless government official responsible for the execution of criminals. He was known for his unique method of execution, which involved the consumption of the criminal by the Executioner himself. This method was chosen by the Executioner as a way to ensure that the criminal would not escape justice, as well as to provide a spectacle for the public. The Executioner was feared and respected by the people of the kingdom, and his name became synonymous with death and punishment.
            </EntryIntroduction>
        </div>
    );
}

export default TheExecutioner;