import React, {
  ReactElement,
  ReactNode,

  useEffect,
  useRef,
  useCallback
} from "react";

import {
  Animated,
  Dimensions,
  StyleProp,
  View,
  ViewStyle,
  TouchableWithoutFeedback
} from "react-native";

import {
  MdcThemeStylizer
}  from "@mdc-react-native/theme";

import elevationService from "@mdc-react-native/elevation";

interface MdcLeftSheetMainProps
{
  children  ?: ReactNode;
  modal     ?: boolean;
  width     ?: number;

  open  : boolean;
  theme : MdcThemeStylizer;

  setOpen : (
    open  : boolean
  ) => void;
}

const defaultProps  = {
  "modal" : false,
  "width" : 256
};

export default function MdcLeftSheetMain(
  props : MdcLeftSheetMainProps
) : ReactElement
{
  const {
    children,
    modal,
    open,
    setOpen,
    theme,
    width
  } = {
    ...defaultProps,
    ...props
  };

  // Open / shut

  const scrimOpacity  = useRef(
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

  useEffect(
    ()  : void =>
    {
      // TODO Memoize animation objects?
      // TODO Make hard-coded numbers configurable
      if (open)
      {
        const translationAnimation = Animated.timing(
          translateX,
          {
            "duration"  : 250,
            "toValue"   : 0
          }
        );

        if (modal)
        {
          // Ensure the entire screen is covered, even as the sheet is sliding in and out
          sheetWidth.setValue(
            Dimensions.get("screen").width + width
          );

          Animated.parallel(
            [
              translationAnimation,
              Animated.timing(
                scrimOpacity,
                {
                  "duration"  : 250,
                  "toValue"   : 0.32
                }
              )
            ]
          ).start();
        }
        else
        {
          Animated.parallel(
            [
              translationAnimation,
              Animated.timing(
                sheetWidth,
                {
                  "duration"  : 250,
                  "toValue"   : width
                },
              )
            ]
          ).start();
        }
      }
      else
      {
        const translationAnimation = Animated.timing(
          translateX,
          {
            "duration"  : 200,
            "toValue"   : -width
          }
        );

        if (modal)
        {
          Animated.parallel(
            [
              translationAnimation,
              Animated.timing(
                scrimOpacity,
                {
                  "duration"  : 200,
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
        }
        else
        {
          Animated.parallel(
            [
              translationAnimation,
              Animated.timing(
                sheetWidth,
                {
                  "duration"  : 200,
                  "toValue"   : 0
                },
              )
            ]
          ).start();
        }
      }
    },
    [
      modal,
      open,
      scrimOpacity,
      sheetWidth,
      translateX,
      width
    ]
  );

  const closeModal  = useCallback(
    ()  : void =>
    {
      setOpen(
        false
      );
    },
    [
      setOpen
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
    "bottom"        : 0,
    "flexDirection" : "row",
    "left"          : translateX,
    "top"           : 0,
    "width"         : sheetWidth
  };

  if (modal)
  {
    containerStyle.push(
      elevationService.getElevationStylizer().getElevationStyle(16)
    );

    scrimStyle  = {
      // TODO @mdc-react-native/theme is broken. Whoops
      "backgroundColor" : "#000",
      // "backgroundColor" : theme.getOnSurface(),
      "flex"            : 1,
      "opacity"         : scrimOpacity,
      "zIndex"          : 7
    };

    sheetStyle.position  = "absolute";
    sheetStyle.zIndex    = 6;
  }

  return (
    <Animated.View
      pointerEvents = "box-none"
      style         = {sheetStyle}
    >
      <View
        style = {containerStyle}
      >
        {children}
      </View>
      { modal &&
        <TouchableWithoutFeedback
          onPress = {closeModal}
        >
          <View
            style = {{
              "flex"  : 1
            }}
          >
            <Animated.View
              style = {scrimStyle}
            />
          </View>
        </TouchableWithoutFeedback>
      }
    </Animated.View>
  );
}
