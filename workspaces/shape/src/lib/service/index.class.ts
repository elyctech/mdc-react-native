import MdcShapeService from "./index.type";

import MdcShapeStylizerFactory  from "../stylizer/factory.type";
import MdcShapeStylizer         from "../stylizer/index.type";

class StandardMdcShapeService implements MdcShapeService
{
  public constructor(
    private shapeStylizerFactory  : MdcShapeStylizerFactory
  ) {

  }

  public createShapeStylizer(
    largeComponentRadius  : number  = 0,
    mediumComponentRadius : number  = 4,
    smallComponentRadius  : number  = 4
  )  : MdcShapeStylizer
  {
    return this.shapeStylizerFactory.construct(
      largeComponentRadius,
      mediumComponentRadius,
      smallComponentRadius
    );
  }
}

export default StandardMdcShapeService;
