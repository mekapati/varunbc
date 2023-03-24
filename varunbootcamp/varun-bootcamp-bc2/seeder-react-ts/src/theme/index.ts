import { createTheme } from "@mui/material";
import type {} from '@mui/x-data-grid/themeAugmentation';

export const pxToRem = (fontSize: number) => {
  return `${fontSize / 16}rem`;
};

export interface ColorMap {
  [name: string]: string;
}

export const COLORS: ColorMap = {
  'aquablue': '#A0D7E7'
};



declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
    button: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title: React.CSSProperties;
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
    button: React.CSSProperties;
  }

  interface Palette {
    structural: Palette["primary"];
    greyColors: Palette["primary"];
    textColor: Palette["primary"];
    borders: Palette["primary"];
    icon: Palette["primary"];
  }

  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
    borders?: PaletteOptions["primary"];
    icon?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    main600?: string;
    main400?: string;
    main500?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    elevation0?: string;
    elevation1?: string;
    elevation2?: string;
  }

  interface SimplePaletteColorOptions {
    main600?: string;
    main400?: string;
    main500?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    elevation0?: string;
    elevation1?: string;
    elevation2?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    heading1: true;
    heading2: true;
    body1: true;
    body2: true;
    caption: true;
    button: true;
  }
}

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          '.MuiDataGrid-cell:focus': {
            outline: 'none'
          },
          '.MuiDataGrid-columnHeader:focus': {
            outline: 'none'
          },
          '.MuiDataGrid-cell:focus-within': {
            outline: 'none'
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none'
          },
          '.MuiDataGrid-cell': {
            border: 'none'
          },
          '.MuiDataGrid-columnHeaders': {
            border: 'none',
            outline: 'none',
            backgroundColor: '#262529',
            color: '#A5A5A6'
          },
          '.MuiDataGrid-footerContainer': {
            border: 'none',
            justifyContent: 'center'
          },
          '.MuiDataGrid-virtualScrollerContent': {
            width: 'auto !important',
            minHeight: '400px !important'
          }
        },
        row: {
          borderBottom: 'none',
          "&.Mui-selected": {
            outline: 'none',
            backgroundColor: '#393552',
            "&:hover": {
              backgroundColor: '#393552'
            }
          }
        }
      }
    }
  },
  spacing: 4,
  typography: {
    fontFamily: ['Gilroy-Regular', 'sans-serif'].join(','),
    title: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "42px",
      textTransform: "none",
    },
    heading1: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "29.4px",
      textTransform: "none",
    },

    heading2: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "27px",
      textTransform: "none",
    },

    body1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "22.4px",
      textTransform: "none",
    },

    body2: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "17.15px",
      textTransform: "none",
    },

    caption: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "14.56px",
      textTransform: "none",
    },

    button: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "19px",
      textTransform: "none",
    },
  },

  palette: {
    mode: "dark",
    primary: {
      main: "#E8E8E9",
      main600: "#393552",
      main500: "#6C5DD3",
      main400: "#B4A9FF",
    },

    textColor: {
      main: "#000000",
      highEmphasis: "#E8E7F0",
      mediumEmphasis: "#C9C8CC",
      lowEmphasis: "#A5A5A6",
    },

    greyColors: {
      main: "#262529",
    },

    structural: {
      main: "#FFFFFF",
      elevation0: "#19181C",
      elevation1: "#201F24",
      elevation2: "#2D2D30",
    },

    borders: {
      main: "#FFFFFF",
      highEmphasis: "#413F4D",
      lowEmphasis: "#28272B",
    },

    icon: {
      main: "#FFFFFF",
      highEmphasis: "#D4D2DE",
      lowEmphasis: "#727080",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
