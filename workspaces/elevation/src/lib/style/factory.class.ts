import ElevationStyleFactory from "./factory.type";

import {
  Platform
} from "react-native";

import MdcElevationStyle from "./index.type";

class StandardElevationStyleFactory implements ElevationStyleFactory
{
  construct(
    elevation : number
  ) : MdcElevationStyle
  {
    return Platform.select(
      {
        "android" : {
          "elevation" : elevation
        },

        "ios" : {

        }
      }
    )
  }
}

export default StandardElevationStyleFactory;
