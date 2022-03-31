import React from "react";
import { useHistory } from "react-router-dom";
import { toModelDetails, toReport } from "../../../../../routes";
import {
    List,
    Paragraph,
    SpecialText,
    ListItem,
    StyledLink,
    IconButton
} from "./styled";
import { ReportIcon } from "./ReportIcon/styled";
import RemoveModelButton from "./RemoveModelButton";

export default ({ models }) => {
    const history = useHistory();

    const loadReport = (modelName) => {
        history.push(toReport({ name: modelName }));
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
                                <StyledLink to={toModelDetails(model.name)}>
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
                            <RemoveModelButton modelName={model.name} />
                        </ListItem>
                    )
                }
            </List>
        </>
    );
};