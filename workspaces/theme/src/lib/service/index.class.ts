import MdcThemeService from "./index.type";

import MdcThemeTextColorMapConfiguration  from "../configuration/text-color-map/index.type";
import MdcThemeFunctionsFactory           from "../functions/factory.type";
import MdcThemeOptions                    from "../options/index.type";
import MdcThemeStylizerFactory            from "../stylizer/factory.type";
import MdcThemeStylizer                   from "../stylizer/index.type";
import MdcThemeTextEmphasisMapFactory     from "../text-emphasis-map/factory.type";
import MdcThemeTextToneColorMapFactory    from "../text-tone-color-map/factory.type";

// Most of the implementation derived from:
//  - https://github.com/material-components/material-components-web/blob/master/packages/mdc-theme

class StandardMdcThemeService implements MdcThemeService
{
  public constructor(
    private themeFunctionsFactory         : MdcThemeFunctionsFactory,
    private themeStylizerFactory          : MdcThemeStylizerFactory,
    private themeTextEmphasisMapFactory   : MdcThemeTextEmphasisMapFactory,
    private themeTextToneColorMapFactory  : MdcThemeTextToneColorMapFactory
  ) {

  }

  public getThemeStylizer(
    themeOptions  : MdcThemeOptions = {}
  )  : MdcThemeStylizer
  {
    // TODO Find a way to guarantee no default option is missed

    // Basic theme options

    const theme = Object.assign(
      {
        "background"  : "#fff",
        "error"       : "#b00020",
        "primary"     : "#6200ee",
        "secondary"   : "#018786",
        "surface"     : "#fff"
      },
      themeOptions
    );

    // Theme functions

    const defaultTextColors = {
      "dark"  : {
        "disabled"  : "rgba(0, 0, 0, 0.38)",
        "hint"      : "rgba(0, 0, 0, 0.38)",
        "icon"      : "rgba(0, 0, 0, 0.38)",
        "primary"   : "rgba(0, 0, 0, 0.87)",
        "secondary" : "rgba(0, 0, 0, 0.54)"
      },
      "light" : {
        "disabled"  : "rgba(255, 255, 255, 0.5)",
        "hint"      : "rgba(255, 255, 255, 0.5)",
        "icon"      : "rgba(255, 255, 255, 0.5)",
        "primary"   : "#fff",
        "secondary" : "rgba(255, 255, 255, 0.7)"
      }
    };

    let configuredTextColors  : MdcThemeTextColorMapConfiguration;

    if (theme.textColors)
    {
      configuredTextColors  = {
        "dark"  : Object.assign(
          defaultTextColors.dark,
          theme.textColors.dark || {}
        ),

        "light" : Object.assign(
          defaultTextColors.light,
          theme.textColors.light || {}
        )
      };
    }
    else
    {
      configuredTextColors  = defaultTextColors;
    }

    const textColors  = this.themeTextToneColorMapFactory.construct(
      new Map(
        [
          [
            "dark",
            new Map(
              [
                [
                  "disabled",
                  configuredTextColors.dark.disabled
                ],
                [
                  "hint",
                  configuredTextColors.dark.hint
                ],
                [
                  "icon",
                  configuredTextColors.dark.icon
                ],
                [
                  "primary",
                  configuredTextColors.dark.primary
                ],
                [
                  "secondary",
                  configuredTextColors.dark.secondary
                ]
              ]
            )
          ],
          [
            "light",
            new Map(
              [
                [
                  "disabled",
                  configuredTextColors.light.disabled
                ],
                [
                  "hint",
                  configuredTextColors.light.hint
                ],
                [
                  "icon",
                  configuredTextColors.light.icon
                ],
                [
                  "primary",
                  configuredTextColors.light.primary
                ],
                [
                  "secondary",
                  configuredTextColors.light.secondary
                ]
              ]
            )
          ]
        ]
      )
    );

    const configuredTextEmphasis = Object.assign(
      {
        "disabled"  : 0.38,
        "high"      : 0.87,
        "medium"    : 0.6
      },
      theme.textEmphasis || {}
    );

    const textEmphasis  = this.themeTextEmphasisMapFactory.construct(
      new Map(
        [
          [
            "disabled",
            configuredTextEmphasis.disabled
          ],
          [
            "high",
            configuredTextEmphasis.high
          ],
          [
            "medium",
            configuredTextEmphasis.medium
          ]
        ]
      )
    );

    const themeFunctions  = this.themeFunctionsFactory.construct(
      textColors,
      textEmphasis
    );

    // Derived theme options

    // If the user skipped some options

    if (!theme.onError)
    {
      if (themeFunctions.getContrastTone(theme.error) === "dark")
      {
        theme.onError = "#000";
      }
      else
      {
        theme.onError = "#fff";
      }
    }

    if (!theme.onPrimary)
    {
      if (themeFunctions.getContrastTone(theme.primary) === "dark")
      {
        theme.onPrimary = "#000";
      }
      else
      {
        theme.onPrimary = "#fff";
      }
    }

    if (!theme.onSecondary)
    {
      if (themeFunctions.getContrastTone(theme.secondary) === "dark")
      {
        theme.onSecondary = "#000";
      }
      else
      {
        theme.onSecondary = "#fff";
      }
    }

    if (!theme.onSurface)
    {
      if (themeFunctions.getContrastTone(theme.surface) === "dark")
      {
        theme.onSurface = "#000";
      }
      else
      {
        theme.onSurface = "#fff";
      }
    }

    // Purely derived - not configurable

    const disabledTextOnBackground  = themeFunctions.getAccessibleInkColor(
      theme.background,
      "disabled"
    );

    const disabledTextOnDark  = themeFunctions.getAccessibleInkColor(
      "#000", // TODO Tone support - using black to denote "dark"
      "disabled"
    );

    const disabledTextOnLight = themeFunctions.getAccessibleInkColor(
      "#fff", // TODO Tone support - using white to denote "light"
      "disabled"
    );

    const hintTextOnBackground  = themeFunctions.getAccessibleInkColor(
      theme.background,
      "hint"
    );

    const hintTextOnDark  = themeFunctions.getAccessibleInkColor(
      "#000", // TODO Tone support - using black to denote "dark"
      "hint"
    );

    const hintTextOnLight = themeFunctions.getAccessibleInkColor(
      "#fff", // TODO Tone support - using white to denote "light"
      "hint"
    );

    const iconTextOnBackground  = themeFunctions.getAccessibleInkColor(
      theme.background,
      "icon"
    );

    const iconTextOnDark  = themeFunctions.getAccessibleInkColor(
      "#000", // TODO Tone support - using black to denote "dark"
      "icon"
    );

    const iconTextOnLight = themeFunctions.getAccessibleInkColor(
      "#fff", // TODO Tone support - using white to denote "light"
      "icon"
    );

    const primaryTextOnBackground  = themeFunctions.getAccessibleInkColor(
      theme.background,
      "primary"
    );

    const primaryTextOnDark  = themeFunctions.getAccessibleInkColor(
      "#000", // TODO Tone support - using black to denote "dark"
      "primary"
    );

    const primaryTextOnLight = themeFunctions.getAccessibleInkColor(
      "#fff", // TODO Tone support - using white to denote "light"
      "primary"
    );

    const secondaryTextOnBackground  = themeFunctions.getAccessibleInkColor(
      theme.background,
      "secondary"
    );

    const secondaryTextOnDark  = themeFunctions.getAccessibleInkColor(
      "#000", // TODO Tone support - using black to denote "dark"
      "secondary"
    );

    const secondaryTextOnLight = themeFunctions.getAccessibleInkColor(
      "#fff", // TODO Tone support - using white to denote "light"
      "secondary"
    );

    return this.themeStylizerFactory.construct(
      theme.background,
      disabledTextOnBackground,
      disabledTextOnDark,
      disabledTextOnLight,
      theme.error,
      hintTextOnBackground,
      hintTextOnDark,
      hintTextOnLight,
      iconTextOnBackground,
      iconTextOnDark,
      iconTextOnLight,
      theme.onError,
      theme.onPrimary,
      theme.onSecondary,
      theme.onSurface,
      theme.primary,
      primaryTextOnBackground,
      primaryTextOnDark,
      primaryTextOnLight,
      theme.secondary,
      secondaryTextOnBackground,
      secondaryTextOnDark,
      secondaryTextOnLight,
      theme.surface,
      themeFunctions
    );
  }
}

export default StandardMdcThemeService;
