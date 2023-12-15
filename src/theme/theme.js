import {createTheme} from '@mui/material/styles';


const customThem =createTheme({
    pallete: {
        primary: {
            main: '#ff6e40' ,
        },
    },
    typography:{
        fontFamily:'Roboto, sans-serif',
        fontSize: 16,
    },
})
export const radiusOfComponents = '10px';

let customTheme;
export const theme = createTheme(customThem, {
    ...customThem,
    components: {
        // MuiCard: {
        //     styleOverrides: {
        //         root: {
        //             padding: '32px',
        //             boxShadow: '10px 10px 40px rgba(0, 0, 0.05)',
        //             height: '100%',
        //             borderRadius: radiusOfComponents,
        //             overflow: 'unset',
        //             boxSizing: 'border-box',
        //             [customTheme.breakpoints.down('md')]: {
        //                 padding: customTheme.spacing(3),
        //             },
        //         },
        //     },
        // },
        // MuiSvgIcon: {
        //     styleOverrides: {
        //         fontSizeSmall: {
        //             width: '20px',
        //             height: '20px',
        //         } ,
        //     },
        // },


    },
    typography: {
        h3:{
            fontSize: '18px',
            fontWeight: 'bolt',
        },
        p:{
            fontSize: '15px'
        }
    },
    palette: {
        primary: {
            main: '#f5c518',
            contrastText:'#fff',
        },
        secondary: {
            main: '#6999f0',
            contrastText:'#fff',
        },
    },
    breakpoints: {
        values: {
            xs: 600,
            md: 1024,
            lg: 1280,
            xl: 1920,
        },
    },

});
