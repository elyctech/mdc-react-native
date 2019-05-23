import MdcThemeTextToneColorMap from "./index.type";

import MdcThemeTextStyle  from "../text-style/index.type";
import MdcThemeTextTone   from "../text-tone/index.type";

class StandardMdcThemeTextToneColorMap implements MdcThemeTextToneColorMap
{
  public constructor(
    private toneMap : Map<MdcThemeTextTone, Map<MdcThemeTextStyle, string>>
  ) {

  }

  public getTextColor(
    tone  : MdcThemeTextTone,
    style : MdcThemeTextStyle
  ) : string | undefined
  {
    let textColor : string | undefined;

    const styleColorMap = this.toneMap.get(
      tone
    );

    if (styleColorMap)
    {
      textColor = styleColorMap.get(
        style
      );
    }

    return textColor;
  }
}

export default StandardMdcThemeTextToneColorMap;
