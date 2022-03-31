import React, { useState } from "react";
import removeModel from "./removeModel";
import { IconRemoveButton } from "./styled";
import { BinIcon } from "./BinIcon/styled";
import RemovePopup from "./RemovePopup";
import Popup from "../../../../../../common/Popup";

export default ({ modelName }) => {
    const [popupRemoveVisible, setPopupRemoveVisible] = useState(false);

    const [popupVisible, setPopupVisible] = useState(false);
    /* popupText is in variable because 
    I use one Popup component to display two different text*/
    const [popupText, setPopupText] = useState("");

    // this arrow function is required to close the popup
    const togglePopup = () => {
        setPopupVisible(previous => !previous);
    };

    const onOk = async () => {
        setPopupRemoveVisible(false);
        const removeResult = await removeModel(modelName);
        setPopupText(removeResult.description);
        setPopupVisible(true);
    };

    const onCancel = () => {
        setPopupRemoveVisible(false);
    };

    return (
        <>
            <IconRemoveButton
                onClick={() => setPopupRemoveVisible(true)}
            >
                <BinIcon />
                &nbsp;remove
            </IconRemoveButton>

            <RemovePopup
                title={"Are you sure?"}
                text={`Do you want to remove the model ${modelName}?`}
                isVisible={popupRemoveVisible}
                onCancel={onCancel}
                onOk={onOk}
            />

            <Popup
                title={"remove model"}
                text={popupText}
                isVisible={popupVisible}
                onClose={togglePopup}
            />
        </>
    );
};