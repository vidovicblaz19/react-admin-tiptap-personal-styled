import { createTheme, ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';

const themeDefault = createTheme();

const themeInvariants: ThemeOptions = createTheme({
    ...themeDefault,
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    shape: {
        borderRadius: 0,
    },
    components: {
    },
})


export const lightTheme: ThemeOptions = deepmerge(
    themeInvariants,
    {
        palette: {
            background: {
                default: '#fafafb',
            },
            secondary: {
                light: '#6ec6ff',
                main: '#2196f3',
                dark: '#0069c0',
                contrastText: '#fff',
            },
        },
    }
);

export const darkTheme: ThemeOptions = deepmerge(
    themeInvariants,
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#90caf9',
            },
            background: {
                default: '#313131',
            },
        },
    }
);
