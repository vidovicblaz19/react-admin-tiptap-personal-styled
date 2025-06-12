import { Theme, SxProps } from '@mui/material/styles';

export const StyledRichText = (theme: Theme): SxProps<Theme> => ({
  // Headers with responsive sizing and spacing
  '& h1': {
    ...theme.typography.h1,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 'var(--text-4xl)',
    lineHeight: 'var(--text-4xl--line-height)',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-6xl)',
      lineHeight: 'var(--text-6xl--line-height)',
    },
  },
  '& h2': {
    ...theme.typography.h2,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 'var(--text-2xl)',
    lineHeight: 'var(--text-2xl--line-height)',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--text-4xl--line-height)',
    },
  },
  '& h3': {
    ...theme.typography.h3,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 'var(--text-xl)',
    lineHeight: 'var(--text-xl--line-height)',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--text-3xl--line-height)',
    },
  },
  '& h4': {
    ...theme.typography.h4,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 'var(--text-lg)',
    lineHeight: 'var(--text-lg--line-height)',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--text-2xl--line-height)',
    },
  },
  '& h5': {
    ...theme.typography.h5,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 'var(--text-lg)',
    lineHeight: 'var(--text-lg--line-height)',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--text-xl--line-height)',
    },
  },

  // Paragraphs with conditional top margin
  '& p': {
    ...theme.typography.body1,
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 'var(--text-base)',
    lineHeight: 'var(--text-base--line-height)',
    marginY: "0.5rem",
    '&:not(:first-child)': {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--text-lg--line-height)',
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
    fontSize: 'var(--text-base)',
    lineHeight: 'var(--text-base--line-height)',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--text-lg--line-height)',
    },
  },

  // Lists
  '& ul': {
    fontWeight: theme.typography.fontWeightLight,
    listStyleType: 'disc',
    '& li': {
      // '& p': {
      //   ...theme.typography.body1,
      //   fontWeight: theme.typography.fontWeightLight,
      // },
    },
  },
  '& ol': {
    fontWeight: theme.typography.fontWeightLight,
    listStyleType: 'decimal',
    '& li': {
    },
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
    fontSize: 'var(--text-base)',
    lineHeight: '1.125rem',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-lg)',
      lineHeight: '1.125rem',
    },
  },
  '& tbody': {
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 'var(--text-base)',
    lineHeight: '1.125rem',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-lg)',
      lineHeight: '1.125rem',
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
    fontSize: 'var(--text-sm)',
    lineHeight: '1.125rem',
    [theme.breakpoints.up('md')]: {
      fontSize: 'var(--text-base)',
      lineHeight: '1.125rem',
    },
  },
});