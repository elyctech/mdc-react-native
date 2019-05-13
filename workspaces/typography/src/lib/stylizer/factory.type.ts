import MdcTypographyStylizer from "./index.type";

import MdcTypographyStyle from "../style/index.type";

interface MdcTypographyStylizerFactory
{
  construct(
    body1Style      : MdcTypographyStyle,
    body2Style      : MdcTypographyStyle,
    buttonTextStyle : MdcTypographyStyle,
    captionStyle    : MdcTypographyStyle,
    headline1Style  : MdcTypographyStyle,
    headline2Style  : MdcTypographyStyle,
    headline3Style  : MdcTypographyStyle,
    headline4Style  : MdcTypographyStyle,
    headline5Style  : MdcTypographyStyle,
    headline6Style  : MdcTypographyStyle,
    overlineStyle   : MdcTypographyStyle,
    subtitle1Style  : MdcTypographyStyle,
    subtitle2Style  : MdcTypographyStyle
  ) : MdcTypographyStylizer;
}

export default MdcTypographyStylizerFactory;
