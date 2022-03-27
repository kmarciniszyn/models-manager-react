import React from "react";
import backgroundVideo from "./background_login.mp4";
import backgroundVideoWebm from "./background_login.webm";
import Form from "./Form";
import { StyledSection, VideoContent, VideoWrapper, Wrapper } from "./styled";
import MainHeader from "../../../common/MainHeader";

export default () => (
    <Wrapper>
        <VideoWrapper>
            <VideoContent autoPlay muted loop>
                <source src={backgroundVideo} type="video/mp4" />
                <source src={backgroundVideoWebm} type="video/webm" />
                Your browser does not support video. This is where the video should be displayed.
            </VideoContent>
        </VideoWrapper>

        <StyledSection>
            <MainHeader title={"Login"} />
            <Form />
        </StyledSection>
    </Wrapper>
);
