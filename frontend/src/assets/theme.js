import { createTheme } from "@mui/material";

const primaryColor = '#2607dc'
const secondaryColor = '#00f59a'

const themeOptions = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
    components: {
      MuiFab: {
        styleOverrides: {
          root: {
            backgroundColor: secondaryColor,
            color: primaryColor,
            '&:hover': {
                backgroundColor: primaryColor,
                color: secondaryColor
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            marginBottom: 100,
          },
        },
      },
    },
  })

export default themeOptions