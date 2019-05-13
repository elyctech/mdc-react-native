import MdcTypographyStylizer from "../stylizer/index.type";

import MdcTypographyOptions from "../options/index.type";

interface MdcTypographyService
{
  getTypographyStylizer(
    typographyOptions ?: MdcTypographyOptions
  ) : MdcTypographyStylizer;
}

export default MdcTypographyService;
