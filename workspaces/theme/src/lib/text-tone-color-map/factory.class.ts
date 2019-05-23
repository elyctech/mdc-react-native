import MdcThemeTextToneColorMapFactory  from "./factory.type";

import MdcThemeTextToneColorMap         from "./index.type";
import StandardMdcThemeTextToneColorMap from "./index.class";

import MdcThemeTextStyle  from "../text-style/index.type";
import MdcThemeTextTone   from "../text-tone/index.type";

class StandardMdcThemeTextToneColorMapFactory implements MdcThemeTextToneColorMapFactory
{
  public construct(
    toneMap : Map<MdcThemeTextTone, Map<MdcThemeTextStyle, string>>
  ) : MdcThemeTextToneColorMap
  {
    return new StandardMdcThemeTextToneColorMap(
      toneMap
    );
  }
}

export default StandardMdcThemeTextToneColorMapFactory;
