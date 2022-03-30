import React, { useState } from "react";
import {
    List,
    Paragraph,
    SpecialText,
    ListItem,
    StyledLink,
    IconButton,
    IconRemoveButton
} from "./styled";
import { ReportIcon } from "./ReportIcon/styled";
import { BinIcon } from "./BinIcon/styled";
import removeModel from "./removeModel";
import Popup from "../../../../../common/Popup";

export default ({ models }) => {
    const [popupVisible, setPopupVisible] = useState(false);
    /* popupText is in variable because 
    I use one Popup component to display two different text*/
    const [popupText, setPopupText] = useState("");

    // this arrow function is required to close the popup
    const togglePopup = () => {
        setPopupVisible(previous => !previous);
    }

    const remove = async (modelName) => {
        const removeResult = await removeModel(modelName);
        setPopupText(removeResult.description);
        setPopupVisible(true);
    };

    const loadReport = (modelName) => {
    };

    return (
        <>
            <List>
                {
                    models.map(model =>
                        <ListItem key={model.name}>
                            <Paragraph>
                                <SpecialText>
                                    name
                                </SpecialText>
                                <StyledLink>
                                    {model.name}
                                </StyledLink>
                            </Paragraph>
                            <Paragraph>
                                <SpecialText>
                                    state
                                </SpecialText>
                                {model.state}
                            </Paragraph>
                            <IconButton
                                onClick={() => loadReport(model.name)}
                            >
                                <ReportIcon />
                                &nbsp;report
                            </IconButton>
                            <IconRemoveButton
                                onClick={() => remove(model.name)}
                            >
                                <BinIcon />
                                &nbsp;remove
                            </IconRemoveButton>
                        </ListItem>
                    )
                }
            </List>
            <Popup
                title={"remove model"}
                text={popupText}
                isVisible={popupVisible}
                onClose={togglePopup}
            />
        </>
    );
};