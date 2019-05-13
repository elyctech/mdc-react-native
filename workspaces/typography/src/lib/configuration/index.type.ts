import MdcTypographyFontWeightConfiguration from "./font-weights/index.type";
import MdcTypographyComponentConfiguration  from "./components/index.type";

interface MdcTypographyConfiguration
{
  baseFontSize    : number;
  componentStyles : MdcTypographyComponentConfiguration;
  fontFamily      : string;
  fontWeights     : MdcTypographyFontWeightConfiguration;
}

export default MdcTypographyConfiguration;
