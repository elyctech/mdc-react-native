import MdcElevationService from "./index.type";

import MdcElevationStyleFactory     from "../style/factory.type";
import MdcElevationStylizerFactory  from "../stylizer/factory.type";
import MdcElevationStylizer         from "../stylizer/index.type";

class StandardMdcElevationService implements MdcElevationService
{
  public constructor(
    private elevationStyleFactory     : MdcElevationStyleFactory,
    private elevationStylizerFactory  : MdcElevationStylizerFactory
  ) {

  }

  public getElevationStylizer() : MdcElevationStylizer
  {
    return this.elevationStylizerFactory.construct(
      this.elevationStyleFactory
    );
  }
}

export default StandardMdcElevationService;
