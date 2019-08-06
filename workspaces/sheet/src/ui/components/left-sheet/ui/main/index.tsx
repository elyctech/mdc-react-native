import React, {
  ReactElement,
  ReactNode,

  useEffect,
  useRef,
  useMemo
} from "react";

import {
  Animated,
  Dimensions,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from "react-native";

import {
  MdcThemeStylizer
}  from "@mdc-react-native/theme";

import elevationService from "@mdc-react-native/elevation";

interface MdcLeftSheetMainProps
{
  children      ?: ReactNode;
  closeDuration ?: number;
  modal         ?: boolean;
  openDuration  ?: number;
  scrimOpacity  ?: number;
  width         ?: number;

  open  : boolean;
  theme : MdcThemeStylizer;

  onClose ?: () => void;
}

const defaultProps  = {
  "closeDuration" : 200,
  "modal"         : false,
  "onClose"       : ()  : void => {},
  "openDuration"  : 250,
  "scrimOpacity"  : 0.32,
  "width"         : 256
};

export default function MdcLeftSheetMain(
  props : MdcLeftSheetMainProps
) : ReactElement
{
  const {
    children,
    closeDuration,
    modal,
    onClose,
    open,
    openDuration,
    scrimOpacity,
    theme,
    width
  } = {
    ...defaultProps,
    ...props
  };

  // Open / shut

  // TODO Swipe to close
  // TODO "elevated" : modal without the scrim

  const animatedScrimOpacity  = useRef(
    new Animated.Value(
      0
    )
  ).current;

  const containerWidth  = useRef(
    new Animated.Value(
      0
    )
  ).current;

  const translateX  = useRef(
    new Animated.Value(
      -width
    )
  ).current;

  const closeTranslationAnimation = useMemo(
    ()  : Animated.CompositeAnimation =>
    {
      return Animated.timing(
        translateX,
        {
          "duration"  : closeDuration,
          "toValue"   : -width
        }
      );
    },
    [
      closeDuration,
      translateX,
      width
    ]
  );

  const closeSheet = useMemo(
    ()  : () => void =>
    {
      let closeSheetAnimation : () => void;

      if (modal)
      {
        closeSheetAnimation = ()  : void =>
        {
          Animated.parallel(
            [
              closeTranslationAnimation,
              Animated.timing(
                animatedScrimOpacity,
                {
                  "duration"  : closeDuration,
                  "toValue"   : 0
                }
              )
            ]
          ).start(
            () : void =>
            {
              containerWidth.setValue(
                0
              );
            }
          );
        };
      }
      else
      {
        closeSheetAnimation = ()  : void =>
        {
          Animated.parallel(
            [
              closeTranslationAnimation,
              Animated.timing(
                containerWidth,
                {
                  "duration"  : closeDuration,
                  "toValue"   : 0
                },
              )
            ]
          ).start();
        };
      }

      return closeSheetAnimation;
    },
    [
      animatedScrimOpacity,
      closeTranslationAnimation,
      closeDuration,
      containerWidth,
      modal
    ]
  );

  const openTranslationAnimation  = useMemo(
    ()  : Animated.CompositeAnimation =>
    {
      return Animated.timing(
        translateX,
        {
          "duration"  : closeDuration,
          "toValue"   : 0
        }
      );
    },
    [
      closeDuration,
      translateX
    ]
  );

  const openSheet = useMemo(
    ()  : () => void =>
    {
      let openSheetAnimation : () => void;

      if (modal)
      {
        openSheetAnimation  = ()  : void =>
        {
          // Ensure the entire screen is covered, even as the sheet is sliding in and out
          const {
            height  : screenHeight,
            width   : screenWidth
          } = Dimensions.get(
            "screen"
          );

          containerWidth.setValue(
            Math.max(screenHeight, screenWidth) + width
          );

          Animated.parallel(
            [
              openTranslationAnimation,
              Animated.timing(
                animatedScrimOpacity,
                {
                  "duration"  : openDuration,
                  "toValue"   : scrimOpacity
                }
              )
            ]
          ).start();
        };
      }
      else
      {
        openSheetAnimation  = ()  : void =>
        {
          Animated.parallel(
            [
              openTranslationAnimation,
              Animated.timing(
                containerWidth,
                {
                  "duration"  : openDuration,
                  "toValue"   : width
                },
              )
            ]
          ).start();
        };
      }

      return openSheetAnimation;
    },
    [
      animatedScrimOpacity,
      containerWidth,
      openTranslationAnimation,
      openDuration,
      modal,
      scrimOpacity,
      width
    ]
  );

  useEffect(
    ()  : void =>
    {
      if (open)
      {
        openSheet();
      }
      else
      {
        closeSheet();
      }
    },
    [
      closeSheet,
      open,
      openSheet
    ]
  );

  // Style

  // Animated.View "style" property is defined as "any", so we cannot take advantage of
  // strong typing here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerBaseStyle  : any = {
    "flex"          : 1,
    "flexDirection" : "row",
    "width"         : containerWidth,
    "zIndex"        : 6,

    "transform" : [
      {
        translateX
      }
    ]
  };

  // Animated.View "style" property is defined as "any", so we cannot take advantage of
  // strong typing here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerStyle : any = [
    containerBaseStyle
  ];

  // Animated.View "style" property is defined as "any", so we cannot take advantage of
  // strong typing here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let scrimStyle  : any;

  const sheetBaseStyle  : StyleProp<ViewStyle> = {
    width,

    "backgroundColor" : theme.getSurface(),
    "zIndex"          : 6
  };

  const sheetStyle : StyleProp<ViewStyle> = [
    sheetBaseStyle
  ];

  if (modal)
  {
    containerStyle.push(
      StyleSheet.absoluteFill
    );

    scrimStyle  = {
      "backgroundColor" : theme.getOnSurface(),
      "flex"            : 1,
      "opacity"         : animatedScrimOpacity,
      "zIndex"          : 5
    };

    sheetStyle.push(
      StyleSheet.absoluteFill
    );

    sheetStyle.push(
      elevationService.getElevationStylizer().getElevationStyle(16)
    );
  }

  return (
    <Animated.View
      style = {containerStyle}
    >
      { modal &&
        <TouchableWithoutFeedback
          onPress = {onClose}
        >
          <Animated.View
            style = {scrimStyle}
          />
        </TouchableWithoutFeedback>
      }
      <View
        style = {sheetStyle}
      >
        {children}
      </View>
    </Animated.View>
  );
}
