import MdcShapeStylizer from "../stylizer/index.type";

interface MdcShapeService
{
  createShapeStylizer(
    largeRadius   ?: number,
    mediumRadius  ?: number,
    smallRadius   ?: number
  )  : MdcShapeStylizer;
}

export default MdcShapeService;
