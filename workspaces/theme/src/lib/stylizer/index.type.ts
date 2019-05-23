import MdcThemeTextEmphasisLevel from "../text-emphasis/index.type";
import MdcThemeTextStyle    from "../text-style/index.type";
import MdcThemeTextTone     from "../text-tone/index.type";

interface MdcThemeStylizer
{
  getAccessibleInkColor(
    fillColor : string,
    textStyle ?: MdcThemeTextStyle
  ) : string;

  getBackground() : string;

  getContrast(
    backColor   : string,
    frontColor  : string
  ) : number;

  getContrastTone(
    color : string
  ) : MdcThemeTextTone;

  getDisabledTextOnBackground() : string;

  getDisabledTextOnDark() : string;

  getDisabledTextOnLight() : string;

  getError()  : string;

  getHintTextOnBackground() : string;

  getHintTextOnDark() : string;

  getHintTextOnLight() : string;

  getIconTextOnBackground() : string;

  getIconTextOnDark() : string;

  getIconTextOnLight() : string;

  getLuminance(
    color : string
  )  : number;

  getOnError()  : string;

  getOnPrimary()  : string;

  getOnSecondary()  : string;

  getOnSurface()  : string;

  getPrimary()  : string;

  getPrimaryTextOnBackground() : string;

  getPrimaryTextOnDark() : string;

  getPrimaryTextOnLight() : string;

  getSecondary()  : string;

  getSecondaryTextOnBackground() : string;

  getSecondaryTextOnDark() : string;

  getSecondaryTextOnLight() : string;

  getSurface()  : string;

  getTextEmphasis(
    emphasis  : MdcThemeTextEmphasisLevel
  ) : number;

  getTone(
    color : string
  ) : MdcThemeTextTone;
}

export default MdcThemeStylizer;
