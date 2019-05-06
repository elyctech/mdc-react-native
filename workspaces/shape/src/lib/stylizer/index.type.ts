import MdcShapeStyle from "../style/index.type";

interface MdcShapeStylizer
{
  getShapeStyle(
    size  : "large" | "medium" | "small"
  ) : MdcShapeStyle;
}

export default MdcShapeStylizer;
