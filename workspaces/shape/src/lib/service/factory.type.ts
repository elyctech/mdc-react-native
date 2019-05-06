import MdcShapeService from "./index.type";

import MdcShapeStylizerFactory from "../stylizer/factory.type";

interface MdcShapeServiceFactory
{
  construct(
    shapeStylizerFactory  : MdcShapeStylizerFactory
  ) : MdcShapeService;
}

export default MdcShapeServiceFactory;
