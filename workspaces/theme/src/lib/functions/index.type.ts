import MdcThemeTextEmphasisLevel from "../text-emphasis/index.type";
import MdcThemeTextStyle    from "../text-style/index.type";
import MdcThemeTextTone     from "../text-tone/index.type";

interface MdcThemeFunctions
{
  getAccessibleInkColor(
    fillColor : string,
    textStyle ?: MdcThemeTextStyle
  ) : string;

  getContrast(
    backColor   : string,
    frontColor  : string
  ) : number;

  getContrastTone(
    color : string
  ) : MdcThemeTextTone;

  getLuminance(
    color : string
  )  : number;

  getTextEmphasis(
    emphasis  : MdcThemeTextEmphasisLevel
  ) : number;

  getTone(
    color : string
  ) : MdcThemeTextTone;
}

export default MdcThemeFunctions;
