// Function to create a gradient
export function createGradient(color1: string, color2: string) {
    return `linear-gradient(90deg, ${color1} 10.76%, ${color2} 133.7%)`;
  }
  
  // Primary color palette
  const PRIMARY = {
    lighter: "#E3F2FD",
    light: "#90CAF9",
    main: "#FFFFFF",
    dark: "#0D47A1",
    darker: "#082D76",
  };
  
  // Secondary color palette
  const SECONDARY = {
    lighter: "#FCE4EC",
    light: "#F48FB1",
    main: "#005F73",
    dark: "#880E4F",
    darker: "#560026",
  };
  
  // Success color palette
  const SUCCESS = {
    lighter: "#E8F5E9",
    light: "#81C784",
    main: "#388E3C",
    dark: "#1B5E20",
    darker: "#104314",
  };
  
  // Warning color palette
  const WARNING = {
    lighter: "#FFF8E1",
    light: "#FFD54F",
    main: "#FFB300",
    dark: "#FF6F00",
    darker: "#E65100",
  };
  
  // Error color palette
  const ERROR = {
    lighter: "#FFEBEE",
    light: "#EF5350",
    main: "#D32F2F",
    dark: "#B71C1C",
    darker: "#7F0000",
  };
  
  // Info color palette
  const INFO = {
    lighter: "#E1F5FE",
    light: "#4FC3F7",
    main: "#0288D1",
    dark: "#01579B",
    darker: "#003C71",
  };
  
  // Grey color palette
  const GREY: any = {
    0: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  };
  
  // Gradient configurations
  const GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main),
    info: createGradient(INFO.light, INFO.main),
  };
  
  // Common color settings
  const COMMON = {
    common: { black: "#000", white: "#fff" },
    primary: { ...PRIMARY, contrastText: "#fff" },
    secondary: { ...SECONDARY, contrastText: "#fff" },
    success: { ...SUCCESS, contrastText: GREY[800] },
    warning: { ...WARNING, contrastText: GREY[800] },
    error: { ...ERROR, contrastText: GREY[800] },
    info: { ...INFO, contrastText: GREY[800] },
    grey: GREY,
    gradients: GRADIENTS,
    divider: GREY[300],
    action: {
      hover: GREY[100],
      selected: GREY[200],
      disabled: GREY[400],
      disabledBackground: GREY[300],
      focus: GREY[100],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  };
  
  // Palette configurations for light and dark modes
  const palette = {
    light: {
      ...COMMON,
      mode: "light",
      text: { primary: GREY[900], secondary: GREY[600], disabled: GREY[500] },
      background: { paper: "#fff", default: GREY[100], neutral: GREY[200] },
      action: { active: GREY[600], ...COMMON.action },
    },
    dark: {
      ...COMMON,
      mode: "dark",
      text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
      background: {
        paper: GREY[800],
        default: GREY[900],
        neutral: GREY[700],
      },
      action: { active: GREY[500], ...COMMON.action },
    },
  };
  
  export default palette;
  
  // Extending MUI theme interfaces
  declare module "@mui/material/styles" {
    interface Palette {
      custom: any;
      blue: any;
    }
  
    interface PaletteOptions {
      custom?: any;
      blue?: any;
    }
  }
  