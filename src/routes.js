export const toModels = () => "/models";
export const toModelDetails = ({ name } = { name: ":name" }) => `/models/${name}`;
export const toReport = ({ name } = { name: ":name" }) => `/report/${name}`;
export const toLogin = () => "/login";
export const toLogout = () => "/logout";
export const toCalculateFrauds = () => "/calculateFrauds";