import MdcTypographyService from "./index.type";

import MdcTypographyOptions         from "../options/index.type";
import MdcTypographyStyle           from "../style/index.type";
import MdcTypographyStylizerFactory from "../stylizer/factory.type";
import MdcTypographyStylizer        from "../stylizer/index.type";
import { Platform } from "react-native";

class StandardMdcTypographyService implements MdcTypographyService
{
  public constructor(
    private typographyStylizerFactory : MdcTypographyStylizerFactory
  ) {

  }

  public getTypographyStylizer(
    typographyOptions ?: MdcTypographyOptions
  ) : MdcTypographyStylizer
  {
    if (!typographyOptions)
    {
      typographyOptions = {};
    }

    const baseFontSize  = typographyOptions.baseFontSize  || 16;
    const fontFamily    = typographyOptions.fontFamily    || Platform.select(
      {
        "android" : "Roboto",
        "ios"     : "San Francisco"
      }
    );

    const fontWeights = Object.assign(
      {
        "black"   : "900",
        "bold"    : "700",
        "light"   : "300",
        "medium"  : "500",
        "regular" : "400",
        "thin"    : "100"
      },
      typographyOptions.fontWeights
    );

    const componentStyles = typographyOptions.componentStyles || {};

    const letterSpacing = (
      tracking  : number,
      fontSize  : number
    ) => {
      return tracking / (fontSize * 16) * baseFontSize;
    }

    const body1Style  : MdcTypographyStyle  = Object.assign(
      {
        "fontSize"      : baseFontSize,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.regular,
        "letterSpacing" : letterSpacing(0.5, 1),
        "lineHeight"    : baseFontSize * 1.5
      },
      componentStyles.body1Style
    );

    const body2Style  : MdcTypographyStyle  = Object.assign(
      {
        "fontSize"      : baseFontSize * 0.875,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.regular,
        "letterSpacing" : letterSpacing(0.25, 0.875),
        "lineHeight"    : baseFontSize * 1.25
      },
      componentStyles.body2Style
    );

    const buttonTextStyle  : MdcTypographyStyle  = Object.assign(
      {
        "fontSize"      : baseFontSize * 0.875,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.medium,
        "letterSpacing" : letterSpacing(1.25, 0.875),
        "lineHeight"    : baseFontSize * 2.25,
        "textTransform" : "uppercase"
      },
      componentStyles.buttonStyle
    );

    const captionStyle  : MdcTypographyStyle  = Object.assign(
      {
        "fontSize"      : baseFontSize * 0.75,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.regular,
        "letterSpacing" : letterSpacing(0.4, 0.75),
        "lineHeight"    : baseFontSize * 1.25
      },
      componentStyles.captionStyle
    );

    const headline1Style : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 6,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.light,
        "letterSpacing" : letterSpacing(-1.5, 6),
        "lineHeight"    : baseFontSize * 6
      },
      componentStyles.headline1Style
    );

    const headline2Style : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 3.75,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.light,
        "letterSpacing" : letterSpacing(-0.5, 3.75),
        "lineHeight"    : baseFontSize * 3.75
      },
      componentStyles.headline2Style
    );

    const headline3Style : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 3,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.regular,
        "lineHeight"    : baseFontSize * 3.125
      },
      componentStyles.headline3Style
    );

    const headline4Style : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 2.125,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.regular,
        "letterSpacing" : letterSpacing(0.25, 2.125),
        "lineHeight"    : baseFontSize * 2.5
      },
      componentStyles.headline4Style
    );

    const headline5Style : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 1.5,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.regular,
        "lineHeight"    : baseFontSize * 2
      },
      componentStyles.headline5Style
    );

    const headline6Style : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 1.25,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.medium,
        "letterSpacing" : letterSpacing(0.25, 1.25),
        "lineHeight"    : baseFontSize * 2
      },
      componentStyles.headline6Style
    );

    const overlineStyle : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 0.75,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.medium,
        "letterSpacing" : letterSpacing(2, 0.75),
        "lineHeight"    : baseFontSize * 2,
        "textTransform" : "uppercase"
      },
      componentStyles.overlineStyle
    );

    const subtitle1Style : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 1,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.regular,
        "letterSpacing" : letterSpacing(0.15, 1),
        "lineHeight"    : baseFontSize * 1.75
      },
      componentStyles.subtitle1Style
    );

    const subtitle2Style : MdcTypographyStyle = Object.assign(
      {
        "fontSize"      : baseFontSize * 0.875,
        "fontFamily"    : fontFamily,
        "fontWeight"    : fontWeights.medium,
        "letterSpacing" : letterSpacing(0.1, 0.875),
        "lineHeight"    : baseFontSize * 1.375
      },
      componentStyles.subtitle2Style
    );

    return this.typographyStylizerFactory.construct(
      body1Style,
      body2Style,
      buttonTextStyle,
      captionStyle,
      headline1Style,
      headline2Style,
      headline3Style,
      headline4Style,
      headline5Style,
      headline6Style,
      overlineStyle,
      subtitle1Style,
      subtitle2Style
    );
  }
}

export default StandardMdcTypographyService;
