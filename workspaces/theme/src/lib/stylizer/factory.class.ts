import MdcThemeStylizerFactory  from "./factory.type";

import MdcThemeStylizer         from "./index.type";
import StandardMdcThemeStylizer from "./index.class";

import MdcThemeFunctions from "../functions/index.type";

class StandardMdcThemeStylizerFactory implements MdcThemeStylizerFactory
{
  public construct(
    background                : string,
    disabledTextOnBackground  : string,
    disabledTextOnDark        : string,
    disabledTextOnLight       : string,
    error                     : string,
    hintTextOnBackground      : string,
    hintTextOnDark            : string,
    hintTextOnLight           : string,
    iconTextOnBackground      : string,
    iconTextOnDark            : string,
    iconTextOnLight           : string,
    onError                   : string,
    onPrimary                 : string,
    onSecondary               : string,
    onSurface                 : string,
    primary                   : string,
    primaryTextOnBackground   : string,
    primaryTextOnDark         : string,
    primaryTextOnLight        : string,
    secondary                 : string,
    secondaryTextOnBackground : string,
    secondaryTextOnDark       : string,
    secondaryTextOnLight      : string,
    surface                   : string,
    themeFunctions            : MdcThemeFunctions
  ) : MdcThemeStylizer
  {
    return new StandardMdcThemeStylizer(
      background,
      disabledTextOnBackground,
      disabledTextOnDark,
      disabledTextOnLight,
      error,
      hintTextOnBackground,
      hintTextOnDark,
      hintTextOnLight,
      iconTextOnBackground,
      iconTextOnDark,
      iconTextOnLight,
      onError,
      onPrimary,
      onSecondary,
      onSurface,
      primary,
      primaryTextOnBackground,
      primaryTextOnDark,
      primaryTextOnLight,
      secondary,
      secondaryTextOnBackground,
      secondaryTextOnDark,
      secondaryTextOnLight,
      surface,
      themeFunctions
    );
  }
}

export default StandardMdcThemeStylizerFactory;
