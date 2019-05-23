import MdcThemeStylizer from "../stylizer/index.type";

import MdcThemeOptions from "../options/index.type";

interface MdcThemeService
{
  getThemeStylizer(
    themeOptions  ?: MdcThemeOptions
  )  : MdcThemeStylizer;
}

export default MdcThemeService;
