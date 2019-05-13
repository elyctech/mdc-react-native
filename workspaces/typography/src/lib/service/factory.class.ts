import MdcTypographyServiceFactory  from "./factory.type";

import MdcTypographyService         from "./index.type";
import StandardMdcTypographyService from "./index.class";

import MdcTypographyStylizerFactory from "../stylizer/factory.type";

class StandardMdcTypographyServiceFactory implements MdcTypographyServiceFactory
{
  public construct(
    typographyStylizerFactory : MdcTypographyStylizerFactory
  ) : MdcTypographyService
  {
    return new StandardMdcTypographyService(
      typographyStylizerFactory
    );
  }
}

export default StandardMdcTypographyServiceFactory;
