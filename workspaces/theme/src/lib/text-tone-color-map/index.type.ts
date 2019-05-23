import MdcThemeTextTone from "../text-tone/index.type";
import MdcThemeTextStyle from "../text-style/index.type";

interface MdcThemeTextToneColorMap
{
  // TODO Should there be a guarantee that a value exists for each tone/style combo?
  getTextColor(
    tone  : MdcThemeTextTone,
    style : MdcThemeTextStyle
  ) : string | undefined;
}

export default MdcThemeTextToneColorMap;
