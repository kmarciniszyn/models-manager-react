import React, { useRef, useState } from "react";
import { defaultModelData } from "./defaultModelData";
import createYMLFile from "./createYMLFile";
import addModel from "./addModel";
import { useDispatch } from "react-redux";
import { fetchModels } from "../../modelsSlice";
import { Form, Label } from "./styled";
import { StyledSubmit } from "../../../../common/StyledSubmit/styled";
import { StyledInput } from "../../../../common/StyledInput/styled";
import Popup from "../../../../common/Popup";

export default () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    /* popupTitle and popupText are in variables because 
    I use one Popup component to display two different information*/
    const [popupTitle, setPopupTitle] = useState("");
    const [popupText, setPopupText] = useState("");
    const nameRef = useRef(null);

    const togglePopup = () => {
        setPopupVisible(previous => !previous);
    }

    // I use 'async await' because of Promise in addModel
    const onFormSubmit = async (event) => {
        event.preventDefault();

        const nameString = name.trim();

        if (nameString !== "") {
            let data = { ...defaultModelData };
            data.nazwa = nameString;

            const ymlFile = createYMLFile(data);
            const resultData = await addModel(ymlFile);
            /* if the code for adding a model using api 
            (in addModel function) is uncommented then 
            await is necessary */

            if (resultData.isAdding) {
                dispatch(fetchModels);
            }

            setPopupTitle("add model");
            setPopupText(resultData.description);
            setPopupVisible(true);

        } else {
            setPopupTitle("Attention!");
            setPopupText("Fill in the fild before adding a model");
            setPopupVisible(true);
        }

        setName("");
        nameRef.current.focus();
    };

    return (
        <>
            <Form
                onSubmit={onFormSubmit}
            >
                <Label>
                    name:
                </Label>
                <StyledInput
                    ref={nameRef}
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    required
                />
                <StyledSubmit
                    value="submit"
                    round
                />
            </Form>
            <Popup
                title={popupTitle}
                text={popupText}
                isVisible={popupVisible}
                onClose={togglePopup}
            />
        </>
    );
}