"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = exports.lightTheme = void 0;
const utils_1 = require("@mui/utils");
// const themeDefault = createTheme();
const themeInvariants = {
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
        // Body styles
        body1: {
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--text-base--line-height)',
        },
        body2: {
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--text-sm--line-height)',
        },
        // Headings
        h1: {
            fontSize: 'var(--text-6xl)',
            lineHeight: 'var(--text-6xl--line-height)',
            fontWeight: 700,
        },
        h2: {
            fontSize: 'var(--text-5xl)',
            lineHeight: 'var(--text-5xl--line-height)',
            fontWeight: 700,
        },
        h3: {
            fontSize: 'var(--text-4xl)',
            lineHeight: 'var(--text-4xl--line-height)',
            fontWeight: 700,
        },
        h4: {
            fontSize: 'var(--text-3xl)',
            lineHeight: 'var(--text-3xl--line-height)',
            fontWeight: 600,
        },
        h5: {
            fontSize: 'var(--text-2xl)',
            lineHeight: 'var(--text-2xl--line-height)',
            fontWeight: 600,
        },
        h6: {
            fontSize: 'var(--text-xl)',
            lineHeight: 'var(--text-xl--line-height)',
            fontWeight: 600,
        },
        // Subtitles
        subtitle1: {
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--text-lg--line-height)',
        },
        subtitle2: {
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--text-base--line-height)',
        },
        // Captions and overline
        caption: {
            fontSize: 'var(--text-xs)',
            lineHeight: 'var(--text-xs--line-height)',
        },
        overline: {
            fontSize: 'var(--text-xs)',
            lineHeight: 'var(--text-xs--line-height)',
            textTransform: 'uppercase',
        },
        // Button text
        button: {
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--text-sm--line-height)',
            textTransform: 'uppercase',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 0,
    },
    components: {},
};
exports.lightTheme = (0, utils_1.deepmerge)(themeInvariants, {
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
});
exports.darkTheme = (0, utils_1.deepmerge)(themeInvariants, {
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        background: {
            default: '#313131',
        },
    },
});
//# sourceMappingURL=theme.js.map