import MdcTypographyService from "./index.type";

import MdcTypographyStylizerFactory from "../stylizer/factory.type";

interface MdcTypographyServiceFactory
{
  construct(
    typographyStylizerFactory : MdcTypographyStylizerFactory
  ) : MdcTypographyService;
}

export default MdcTypographyServiceFactory;
