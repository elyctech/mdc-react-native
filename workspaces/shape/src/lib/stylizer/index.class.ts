import MdcShapeStylizer from "./index.type";

import MdcShapeStyle from "../style/index.type";

type ShapeSize = "large" | "medium" | "small";

class StandardMdcShapeStylizer implements MdcShapeStylizer
{
  private sizeValues : Map<string, number>;

  public constructor(
    largeRadius   : number,
    mediumRadius  : number,
    smallRadius   : number
  ) {
    this.sizeValues = new Map(
      [
        [
          "large",
          largeRadius
        ],
        [
          "medium",
          mediumRadius
        ],
        [
          "small",
          smallRadius
        ]
      ]
    );
  }

  public getShapeStyle(
    size  : ShapeSize | ShapeSize[]
  ) : MdcShapeStyle
  {
    let rawSizeArray : ShapeSize[];

    if (!Array.isArray(size))
    {
      rawSizeArray = [size];
    }
    else
    {
      rawSizeArray = size;
    }

    if (rawSizeArray.length > 4)
    {
      throw new Error("Too many elements supplied for MdcShape styling.");
    }

    const sizeArray : number[] = [];

    if (rawSizeArray.length === 1)
    {
      const realSize = this.sizeValues.get(
        rawSizeArray[0]
      );

      // Undefined-check for TypeScript. This should always be true.
      if (realSize)
      {
        sizeArray[0]  = realSize;
        sizeArray[1]  = realSize;
        sizeArray[2]  = realSize;
        sizeArray[3]  = realSize;
      }
    }
    else if (rawSizeArray.length === 2)
    {
      const topLeftAndBottomRight = this.sizeValues.get(
        rawSizeArray[0]
      );

      const topRightAndBottomLeft = this.sizeValues.get(
        rawSizeArray[1]
      );

      // Undefined-check for TypeScript. This should always be true.
      if (topLeftAndBottomRight && topRightAndBottomLeft)
      {
        sizeArray[0]  = topLeftAndBottomRight,
        sizeArray[1]  = topRightAndBottomLeft,
        sizeArray[2]  = topLeftAndBottomRight,
        sizeArray[3]  = topRightAndBottomLeft
      }
    }
    else if (rawSizeArray.length === 3)
    {
      const topLeft = this.sizeValues.get(
        rawSizeArray[0]
      );

      const topRightAndBottomLeft = this.sizeValues.get(
        rawSizeArray[1]
      );

      const bottomRight = this.sizeValues.get(
        rawSizeArray[2]
      );

      // Undefined-check for TypeScript. This should always be true.
      if (topLeft && topRightAndBottomLeft && bottomRight)
      {
        sizeArray[0]  = topLeft,
        sizeArray[1]  = topRightAndBottomLeft,
        sizeArray[2]  = bottomRight,
        sizeArray[3]  = topRightAndBottomLeft
      }
    }
    else
    {
      const topLeft = this.sizeValues.get(
        rawSizeArray[0]
      );

      const topRight = this.sizeValues.get(
        rawSizeArray[1]
      );

      const bottomRight = this.sizeValues.get(
        rawSizeArray[2]
      );

      const bottomLeft = this.sizeValues.get(
        rawSizeArray[1]
      );

      // Undefined-check for TypeScript. This should always be true.
      if (topLeft && topRight && bottomRight && bottomLeft)
      {
        sizeArray[0]  = topLeft,
        sizeArray[1]  = topRight,
        sizeArray[2]  = bottomRight,
        sizeArray[3]  = bottomLeft
      }
    }

    // Use "start" and "end" to support RTL
    const style : MdcShapeStyle = {
      borderTopEndRadius      : sizeArray[1],
      borderTopStartRadius    : sizeArray[0],
      borderBottomEndRadius   : sizeArray[2],
      borderBottomStartRadius : sizeArray[3]
    };

    return style;
  }
}

export default StandardMdcShapeStylizer;
