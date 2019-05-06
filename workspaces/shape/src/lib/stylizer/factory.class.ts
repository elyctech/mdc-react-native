import MdcShapeStylizerFactory  from "./factory.type";

import StandardMdcShapeStylizer from "./index.class";
import MdcShapeStylizer         from "./index.type";

class StandardMdcShapeStylizerFactory implements MdcShapeStylizerFactory
{
  public construct(
    largeRadius   : number,
    mediumRadius  : number,
    smallRadius   : number
  ) : MdcShapeStylizer
  {
    return new StandardMdcShapeStylizer(
      largeRadius,
      mediumRadius,
      smallRadius
    );
  }
}

export default StandardMdcShapeStylizerFactory;
