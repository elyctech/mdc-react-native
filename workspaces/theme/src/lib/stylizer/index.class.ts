import MdcThemeStylizer from "./index.type";

import MdcThemeFunctions    from "../functions/index.type";
import MdcThemeTextEmphasisLevel from "../text-emphasis/index.type";
import MdcThemeTextStyle    from "../text-style/index.type";
import MdcThemeTextTone     from "../text-tone/index.type";

class StandardMdcThemeStylizer implements MdcThemeStylizer
{
  public constructor(
    private background                : string,
    private disabledTextOnBackground  : string,
    private disabledTextOnDark        : string,
    private disabledTextOnLight       : string,
    private error                     : string,
    private hintTextOnBackground      : string,
    private hintTextOnDark            : string,
    private hintTextOnLight           : string,
    private iconTextOnBackground      : string,
    private iconTextOnDark            : string,
    private iconTextOnLight           : string,
    private onError                   : string,
    private onPrimary                 : string,
    private onSecondary               : string,
    private onSurface                 : string,
    private primary                   : string,
    private primaryTextOnBackground   : string,
    private primaryTextOnDark         : string,
    private primaryTextOnLight        : string,
    private secondary                 : string,
    private secondaryTextOnBackground : string,
    private secondaryTextOnDark       : string,
    private secondaryTextOnLight      : string,
    private surface                   : string,
    private themeFunctions            : MdcThemeFunctions
  ) {

  }

  public getAccessibleInkColor(
    fillColor : string,
    textStyle ?: MdcThemeTextStyle
  ) : string
  {
    return this.themeFunctions.getAccessibleInkColor(
      fillColor,
      textStyle
    );
  }

  public getBackground() : string
  {
    return this.background;
  }

  public getContrast(
    backColor   : string,
    frontColor  : string
  ) : number
  {
    return this.themeFunctions.getContrast(
      backColor,
      frontColor
    );
  }

  public getContrastTone(
    color : string
  ) : MdcThemeTextTone
  {
    return this.themeFunctions.getContrastTone(
      color
    );
  }

  public getDisabledTextOnBackground() : string
  {
    return this.disabledTextOnBackground;
  }

  public getDisabledTextOnDark() : string
  {
     return this.disabledTextOnDark;
  }

  public getDisabledTextOnLight() : string
  {
    return this.disabledTextOnLight;
  }

  public getError()  : string
  {
    return this.error;
  }

  public getHintTextOnBackground() : string
  {
    return this.hintTextOnBackground;
  }

  public getHintTextOnDark() : string
  {
    return this.hintTextOnDark;
  }

  public getHintTextOnLight() : string
  {
    return this.hintTextOnLight;
  }

  public getIconTextOnBackground() : string
  {
    return this.iconTextOnBackground;
  }

  public getIconTextOnDark() : string
  {
    return this.iconTextOnDark;
  }

  public getIconTextOnLight() : string
  {
    return this.iconTextOnLight;
  }

  public getLuminance(
    color : string
  )  : number
  {
    return this.themeFunctions.getLuminance(
      color
    );
  }

  public getOnError()  : string
  {
    return this.onError;
  }

  public getOnPrimary()  : string
  {
    return this.onPrimary;
  }

  public getOnSecondary()  : string
  {
    return this.onSecondary;
  }

  public getOnSurface()  : string
  {
    return this.onSurface;
  }

  public getPrimary()  : string
  {
    return this.primary;
  }

  public getPrimaryTextOnBackground() : string
  {
    return this.primaryTextOnBackground;
  }

  public getPrimaryTextOnDark() : string
  {
    return this.primaryTextOnDark;
  }

  public getPrimaryTextOnLight() : string
  {
    return this.primaryTextOnLight;
  }

  public getSecondary()  : string
  {
    return this.secondary;
  }

  public getSecondaryTextOnBackground() : string
  {
    return this.secondaryTextOnBackground;
  }

  public getSecondaryTextOnDark() : string
  {
    return this.secondaryTextOnDark;
  }

  public getSecondaryTextOnLight() : string
  {
    return this.secondaryTextOnLight;
  }

  public getSurface()  : string
  {
    return this.surface;
  }

  public getTextEmphasis(
    emphasis  : MdcThemeTextEmphasisLevel
  ) : number
  {
    return this.themeFunctions.getTextEmphasis(
      emphasis
    );
  }

  public getTone(
    color : string
  ) : MdcThemeTextTone
  {
    return this.themeFunctions.getTone(
      color
    );
  }
}

export default StandardMdcThemeStylizer;
