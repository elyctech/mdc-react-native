import MdcShapeStylizer from "./index.type";

interface MdcShapeStylizerFactory
{
  construct(
    smallRadius   : number,
    mediumRadius  : number,
    largeRadius   : number
  ) : MdcShapeStylizer;
}

export default MdcShapeStylizerFactory;
