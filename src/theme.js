const colors = {
    cyan: "#2BFFEA",
    lightBlue: "#A3D3FF",
    mediumBlue: "#45C2FF",
    darkBlue: "#0261C7",
    claret: "#a30000",
    white: "#fff",
    black: "#252525",
    lightGray: "#f7f7f7",
    mediumGray: "#c7c7c7",
    darkGray: "#777777",
    shadow: "rgba(0,0,0,.2)",
    transparentBlack: "rgba(0,0,0,.8)",
    transparentCyan: "rgba(43,255,234,0.5)",
    transparentDarkBlue: "rgba(2,97,199,0.5)",
};

const common = {
    breakpoints: {
        maxMobileWidth: 767,
    },
    boxShadow: {
        section: `0px 8px 18px -10px ${colors.shadow}`,
        button: {
            hover: `0 5px 10px ${colors.shadow}`,
            active: `0 2px 5px ${colors.shadow}`,
        },
        input: {
            focus: `0 2px 5px ${colors.shadow}`,
        },
    }
};

export const theme = {
    ...common,
    colors: {
        primary: colors.mediumBlue,
        textPrimary: colors.black,
        site: {
            background: colors.lightGray,
        },
        section: {
            background: colors.white,
            borderBottom: colors.mediumGray,
        },
        listItem: {
            borderBottom: colors.mediumGray,
        },
        button: {
            background: colors.lightGray,
            text: colors.darkBlue,
            textSpecial: colors.claret,
        },
        submit: {
            gradient: `linear-gradient(to right,
                ${colors.darkBlue},
                ${colors.cyan})`,
            text: colors.lightGray,
        },
        popup: {
            background: colors.transparentBlack,
            boxBackground: colors.white,
            button: {
                background: `linear-gradient(to right,
                    ${colors.darkBlue},
                    ${colors.cyan})`,
                text: colors.white,
            },
        },
        input: {
            borderBottom: colors.mediumGray,
            placeholder: colors.darkGray,
            invalid: colors.claret,
            radio: {
                background: colors.mediumGray,
                backgroundHover: colors.lightBlue,
            },
        },
        icon: {
            login: {
                text: colors.mediumGray,
            },
            error: colors.claret,
        },
        header: {
            gradientStart: colors.transparentDarkBlue,
            gradientEnd: colors.transparentCyan,
            text: colors.white,
        },
        navigation: {
            background: colors.black,
            text: colors.white,
        },
    }
};
