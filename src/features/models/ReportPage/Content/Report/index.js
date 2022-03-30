import React from "react";
import { DownloadButton, Wrapper } from "./styled";
import { DownloadReportIcon } from "./DownloadReportIcon/styled";

export default ({ report, urlToDownload }) => {
    /* "setting HTML from code is risky because it’s easy to inadvertently expose your users 
    to a cross-site scripting (XSS) attack" https://en.reactjs.org/docs/dom-elements.html */
    // I used this method because I can't find different way to display html file with react
    return (
        <>
            <DownloadButton href={urlToDownload} download="report.html">
                <DownloadReportIcon />
                download report
            </DownloadButton>
            <Wrapper dangerouslySetInnerHTML={{ __html: report }}></Wrapper>
        </>
    )
};