import MdcElevationStylizer from "./index.type";

import MdcElevationStyleFactory from "../style/factory.type";
import MdcElevationStyle        from "../style/index.type";

class StandardMdcElevationStylizer implements MdcElevationStylizer
{
  public constructor(
    private elevationStyleFactory : MdcElevationStyleFactory
  ) {

  }

  public getElevationStyle(
    elevation : number
  ) : MdcElevationStyle
  {
    return this.elevationStyleFactory.construct(
      elevation
    );
  }
}

export default StandardMdcElevationStylizer;
