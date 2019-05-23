import MdcThemeTextColorMapConfiguration    from "./text-color-map/index.type";
import MdcThemeTextEmphasisMapConfiguration from "./text-emphasis-map/index.type";

interface MdcThemeConfiguration
{
  background    : string;
  error         : string;
  onError       : string;
  onPrimary     : string;
  onSecondary   : string;
  onSurface     : string;
  primary       : string;
  secondary     : string;
  surface       : string;
  textColors    : MdcThemeTextColorMapConfiguration;
  textEmphasis  : MdcThemeTextEmphasisMapConfiguration;
}

export default MdcThemeConfiguration;
