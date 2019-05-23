import MdcThemeFunctions from "./index.type";

import MdcThemeTextToneColorMap from "../text-tone-color-map/index.type";
import MdcThemeTextEmphasisMap  from "../text-emphasis-map/index.type";

interface MdcThemeFunctionsFactory
{
  construct(
    textColors    : MdcThemeTextToneColorMap,
    textEmphasis  : MdcThemeTextEmphasisMap
  ) : MdcThemeFunctions;
}

export default MdcThemeFunctionsFactory;
