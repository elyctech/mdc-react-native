import MdcThemeTextToneColorMap from "./index.type";

import MdcThemeTextStyle  from "../text-style/index.type";
import MdcThemeTextTone   from "../text-tone/index.type";

interface MdcThemeTextToneColorMapFactory
{
  construct(
    toneMap : Map<MdcThemeTextTone, Map<MdcThemeTextStyle, string>>
  ) : MdcThemeTextToneColorMap;
}

export default MdcThemeTextToneColorMapFactory;
