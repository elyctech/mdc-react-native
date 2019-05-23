import MdcThemeStylizer from "./index.type";

import MdcThemeFunctions from "../functions/index.type";

interface MdcThemeStylizerFactory
{
  construct(
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
  ) : MdcThemeStylizer;
}

export default MdcThemeStylizerFactory;
