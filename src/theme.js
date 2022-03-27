const colors = {
    cyan: "#2BFFEA",
    lightBlue: "##A3D3FF",
    mediumBlue: "#45C2FF",
    darkBlue: "#0261C7",
    claret: "#a30000",
    white: "#fff",
    black: "#252525",
    lightGray: "#f7f7f7",
    mediumGray: "#c7c7c7",
    darkGray: "#777777",
    transparentBlack: "rgba(0,0,0,.2)",
};

const common = {
    breakpoints: {
        maxMobileWidth: 767,
    },
    boxShadow: {
        section: `0px 8px 18px -10px ${colors.transparentBlack}`,
        button: {
            hover: `0 5px 10px ${colors.transparentBlack}`,
            active: `0 2px 5px ${colors.transparentBlack}`,
        },
        input: {
            focus: `0 2px 5px ${colors.transparentBlack}`,
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
        input: {
            borderBottom: colors.mediumGray,
            placeholder: colors.darkGray,
            invalid: colors.claret,
        },
        icon: {
            login: {
                text: colors.mediumGray,
            },
        },
    }
};
