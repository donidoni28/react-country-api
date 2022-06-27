import React from "react";

export const themes = {
    light: {
        element:{
            background:'hsl(0, 0%, 100%)'
        },
        background:{
            background:'hsl(0, 0%, 98%)',
            minHeight: `${window.innerHeight}px`
        },
        text:{
            color:'hsl(200, 15%, 8%)'
        },
        input:{
            background:'hsl(0, 0%, 52%)'
        },
        button:{
            background:'hsl(209, 23%, 22%)',
            border:'none'
        },
    },
    dark: {
        element:{
            background:'hsl(209, 23%, 22%)'
        },
        background:{
            background:'hsl(207, 26%, 17%)',
            minHeight: `${window.innerHeight}px`
        },
        text:{
            color:'hsl(0, 0%, 100%)'
        },
        input:{

        },
        button:{
            background:'hsl(209, 23%, 22%)',
            border:'none'
        },
    },
};

export const ThemeContext = React.createContext({
    themes: themes.dark,

})