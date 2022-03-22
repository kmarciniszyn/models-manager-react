const colors = {
    lightBlue: "##A3D3FF",
    mediumBlue: "#319CFF",
    darkBlue: "##004F99",
    white: "#fff",
    black: "#252525",
    lightGray: "#f7f7f7",
    darkGray: "#777777",
};

const common = {
    breakpoints: {
        maxMobileWidth: 767,
    },
};

export const theme = {
    ...common,
    colors: {
        primary: colors.mediumBlue,
        textPrimary: colors.black,
        site: {
            background: colors.lightGray,
        },
    }
};
