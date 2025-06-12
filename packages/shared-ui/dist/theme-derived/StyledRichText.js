"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledRichText = void 0;
const StyledRichText = (theme) => ({
    // Headers with responsive sizing and spacing
    '& h1': {
        ...theme.typography.h1,
        fontSize: '1.875rem', // text-3xl base
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem', // equivalent to text-5xl
        },
    },
    '& h2': {
        ...theme.typography.h2,
        fontSize: '1.5rem', // text-2xl base
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.up('md')]: {
            fontSize: '2.25rem', // equivalent to text-4xl
        },
    },
    '& h3': {
        ...theme.typography.h3,
        fontSize: '1.25rem', // text-xl base
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.875rem', // equivalent to text-3xl
        },
    },
    '& h4': {
        ...theme.typography.h4,
        fontSize: '1.125rem', // text-lg base
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // equivalent to text-2xl
        },
    },
    '& h5': {
        ...theme.typography.h5,
        fontSize: '1.125rem', // text-lg base
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // equivalent to text-xl
        },
    },
    // Paragraphs with conditional top margin
    '& p': {
        ...theme.typography.body1,
        fontSize: '1rem',
        fontWeight: theme.typography.fontWeightLight,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem', // equivalent to text-lg
        },
        '&:not(:first-child)': {
            marginTop: theme.spacing(3),
        },
    },
    // Lead text variant
    // '& .lead-text p': {
    //   ...theme.typography.body1,
    //   fontWeight: theme.typography.fontWeightRegular,
    //   fontSize: '1rem',
    //   [theme.breakpoints.up('md')]: {
    //     fontSize: '1.125rem',
    //   },
    //   '&:not(:first-child)': {
    //     marginTop: theme.spacing(6),
    //   },
    // },
    // Small text variant
    // '& .small-text p': {
    //   ...theme.typography.body2,
    //   fontWeight: theme.typography.fontWeightLight,
    //   fontSize: '0.875rem', // equivalent to text-sm
    //   '&:not(:first-child)': {
    //     marginTop: theme.spacing(6),
    //   },
    // },
    // Blockquotes
    '& blockquote': {
        borderLeft: `4px solid ${theme.palette.divider}`,
        paddingLeft: theme.spacing(2),
        fontStyle: 'italic',
        fontWeight: theme.typography.fontWeightLight,
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        },
    },
    // Lists
    '& ul': {
        fontWeight: theme.typography.fontWeightLight,
        listStyleType: 'disc',
        '& li': {
            '& p': {
                ...theme.typography.body1,
                fontSize: '1rem',
                fontWeight: theme.typography.fontWeightLight,
                [theme.breakpoints.up('md')]: {
                    fontSize: '1.125rem', // equivalent to text-lg
                },
                '&:not(:first-child)': {
                    marginTop: theme.spacing(3),
                },
            },
        },
    },
    '& ol': {
        fontWeight: theme.typography.fontWeightLight,
        listStyleType: 'decimal',
        '& li': {},
    },
    // Links
    '& a': {
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.primary.main,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        '&:hover': {
            color: theme.palette.primary.dark,
        },
    },
    // Tables
    '& table': {
        width: '100%',
        borderCollapse: 'collapse',
    },
    '& thead': {
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        },
    },
    '& tbody': {
        fontWeight: theme.typography.fontWeightLight,
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        },
    },
    '& tr:nth-of-type(even)': {
        backgroundColor: theme.palette.action.focus, // equivalent to bg-muted
    },
    '& td': {
        border: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
        '&[align="center"]': {
            textAlign: 'center',
        },
        '&[align="right"]': {
            textAlign: 'right',
        },
    },
    // Code
    '& code': {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.action.hover, // equivalent to bg-muted
        padding: theme.spacing(0.2, 0.3),
        // fontFamily: theme.typography.fontFamily, // or use a monospace font
        fontSize: '0.875rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        },
    },
});
exports.StyledRichText = StyledRichText;
//# sourceMappingURL=StyledRichText.js.map