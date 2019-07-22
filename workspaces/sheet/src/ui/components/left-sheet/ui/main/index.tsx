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

  const sheetWidth  = useRef(
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
              sheetWidth.setValue(
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
                sheetWidth,
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
      modal,
      sheetWidth
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
          sheetWidth.setValue(
            Dimensions.get("screen").width + width
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
                sheetWidth,
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
      openTranslationAnimation,
      openDuration,
      modal,
      scrimOpacity,
      sheetWidth,
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

  const containerStyle : StyleProp<ViewStyle> = [
    {
      width,

      "backgroundColor" : theme.getSurface(),
      "zIndex"          : 6
    }
  ];

  // Animated.View "style" property is defined as "any", so we cannot take advantage of
  // strong typing here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let scrimStyle  : any;

  // Animated.View "style" property is defined as "any", so we cannot take advantage of
  // strong typing here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sheetStyle : any = {
    "flexDirection" : "row",
    "left"          : translateX,
    "width"         : sheetWidth
  };

  if (modal)
  {
    containerStyle.push(
      elevationService.getElevationStylizer().getElevationStyle(16)
    );

    scrimStyle  = {
      "backgroundColor" : theme.getOnSurface(),
      "flex"            : 1,
      "opacity"         : animatedScrimOpacity
    };

    sheetStyle.bottom   = 0;
    sheetStyle.position = "absolute";
    sheetStyle.top      = 0;
  }
  else
  {
    sheetStyle.flex = 1;
  }

  return (
    <Animated.View
      style = {sheetStyle}
    >
      <View
        style = {containerStyle}
      >
        {children}
      </View>
      { modal &&
        <TouchableWithoutFeedback
          onPress = {onClose}
        >
          <Animated.View
            style = {scrimStyle}
          />
        </TouchableWithoutFeedback>
      }
    </Animated.View>
  );
}
