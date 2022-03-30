import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchReport, selectReport, selectReportLoadingStatus } from "../modelsSlice";
import Content from "./Content";
import { StyledMain } from "../../../common/StyledMain/styled";

export default () => {
    const dispatch = useDispatch();
    const { name } = useParams();
    const reportLoadingStatus = useSelector(selectReportLoadingStatus);
    const report = useSelector(selectReport);

    useEffect(() => {
        dispatch(fetchReport(name));
    }, [dispatch]);

    return (
        <StyledMain>
            <Content
                reportLoadingStatus={reportLoadingStatus}
                report={report}
            />
        </StyledMain>
    );
};