import MdcShapeServiceFactory  from "./factory.type";

import MdcShapeService         from "./index.type";
import StandardMdcShapeService from "./index.class";

import MdcShapeStylizerFactory from "../stylizer/factory.type";

class StandardMdcShapeServiceFactory implements MdcShapeServiceFactory
{
  public construct(
    shapeStylizerFactory  : MdcShapeStylizerFactory
  ) : MdcShapeService
  {
    return new StandardMdcShapeService(
      shapeStylizerFactory,
    );
  }
}

export default StandardMdcShapeServiceFactory;
