import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%"
    },
    "body": {
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 15,
        "lineHeight": 1.5,
        "color": "#666666",
        "backgroundColor": "#ffffff"
    },
    "bodyfull-height": {
        "backgroundColor": "#fafafa",
        "minHeight": "100%"
    },
    "bodyfull-height page-wrapper": {
        "backgroundColor": "#fafafa",
        "minHeight": "100%"
    },
    "h1": {
        "color": "#343434",
        "lineHeight": 1.2,
        "fontSize": 38,
        "fontWeight": "700"
    },
    "h2": {
        "color": "#343434",
        "lineHeight": 1.2,
        "fontSize": 28,
        "marginBottom": 15
    },
    "h3": {
        "color": "#343434",
        "lineHeight": 1.2,
        "fontSize": 22
    },
    "h4": {
        "color": "#343434",
        "lineHeight": 1.2,
        "fontSize": 18,
        "fontWeight": "700"
    },
    "h5": {
        "color": "#343434",
        "lineHeight": 1.2,
        "fontSize": 16,
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h6": {
        "color": "#343434",
        "lineHeight": 1.2,
        "fontWeight": "700"
    },
    "h1 a": {
        "color": "#343434"
    },
    "h2 a": {
        "color": "#343434"
    },
    "h3 a": {
        "color": "#343434"
    },
    "h4 a": {
        "color": "#343434"
    },
    "h5 a": {
        "color": "#343434"
    },
    "h6 a": {
        "color": "#343434"
    },
    "copyrights": {
        "textIndent": -9999,
        "height": 0,
        "lineHeight": 0,
        "fontSize": 0,
        "overflow": "hidden"
    },
    "sidebar title": {
        "marginBottom": 15,
        "marginTop": 20,
        "position": "relative"
    },
    "page-header": {
        "marginTop": 20,
        "paddingTop": 20
    },
    "p": {
        "marginBottom": 20
    },
    "a": {
        "color": "#e84c3d",
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "a:hover": {
        "color": "#cd3c2e"
    },
    "a:focus": {
        "outline": "none"
    },
    "a:active": {
        "outline": "none"
    },
    "img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto"
    },
    "blockquote": {
        "borderLeft": "none",
        "display": "block",
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": 40,
        "fontSize": 16,
        "position": "relative",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "blockquote:after": {
        "content": "“",
        "width": 25,
        "height": 25,
        "lineHeight": 64,
        "fontSize": 64,
        "fontFamily": "'PT Serif', serif",
        "position": "absolute",
        "top": 12,
        "left": -45
    },
    "blockquote:before": {
        "fontFamily": "'PT Serif', serif",
        "content": "“",
        "fontSize": 40
    },
    "blockquoteinline": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "blockquoteinline p": {
        "width": "60%",
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "blockquoteinline footer": {
        "width": "37%",
        "display": "inline-block",
        "paddingLeft": 5
    },
    "blockquoteinline:after": {
        "top": 0
    },
    "mark": {
        "backgroundColor": "#e84c3d",
        "color": "#ffffff"
    },
    "pre": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "text-muted": {
        "color": "#999999"
    },
    "text-default": {
        "color": "#e84c3d"
    },
    "well": {
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "backgroundColor": "#f3f3f3",
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0, 0, 0, .05)",
        "boxShadow": "inset 0 1px 2px rgba(0, 0, 0, .05)"
    },
    "icons-page i": {
        "color": "#333",
        "fontSize": 20
    },
    "ul": {
        "listStyle": "square"
    },
    "list-icons": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "list": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "list-icons li": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "list li": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "list-icons li i": {
        "width": 25,
        "textAlign": "center"
    },
    "list li vertical-divider": {
        "paddingRight": 15,
        "position": "relative"
    },
    "list li vertical-divider:after": {
        "position": "absolute",
        "content": "",
        "height": "60%",
        "width": 1,
        "backgroundColor": "#CECECE",
        "right": 9,
        "top": 5
    },
    "list-inline": {
        "marginTop": 9,
        "marginBottom": 8
    },
    "table:not(table-bordered)": {
        "borderBottom": "2px solid #f3f3f3"
    },
    "table > thead > tr > th": {
        "verticalAlign": "bottom",
        "borderBottom": "1px solid #e84c3d",
        "backgroundColor": "#e84c3d",
        "color": "#fff",
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "borderTop": "1px solid #f3f3f3"
    },
    "table-bordered": {
        "borderColor": "#e84c3d"
    },
    "tbody": {
        "backgroundColor": "#ffffff"
    },
    "table > tbody > tr > th": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "borderTop": "1px solid #f3f3f3"
    },
    "table > tfoot > tr > th": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "borderTop": "1px solid #f3f3f3"
    },
    "table > thead > tr > td": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "borderTop": "1px solid #f3f3f3"
    },
    "table > tbody > tr > td": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "borderTop": "1px solid #f3f3f3"
    },
    "table > tfoot > tr > td": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "borderTop": "1px solid #f3f3f3"
    },
    "table-striped tbody": {
        "backgroundColor": "#fafafa"
    },
    "table-striped > tbody > tr:nth-child(odd) > td": {
        "backgroundColor": "#f1f1f1"
    },
    "table-striped > tbody > tr:nth-child(odd) > th": {
        "backgroundColor": "#f1f1f1"
    },
    "table-stripedtable > tbody > tr > td": {
        "borderColor": "#e8e8e8"
    },
    "table-bordered > thead > tr > th": {
        "borderColor": "#f3f3f3"
    },
    "table-bordered > tbody > tr > th": {
        "borderColor": "#f3f3f3"
    },
    "table-bordered > tfoot > tr > th": {
        "borderColor": "#f3f3f3"
    },
    "table-bordered > thead > tr > td": {
        "borderColor": "#f3f3f3"
    },
    "table-bordered > tbody > tr > td": {
        "borderColor": "#f3f3f3"
    },
    "table-bordered > tfoot > tr > td": {
        "borderColor": "#f3f3f3"
    },
    "dl-horizontal dd": {
        "marginBottom": 10
    },
    "page-wrapper": {
        "backgroundColor": "#ffffff"
    },
    "header-top": {
        "backgroundColor": "#f1f1f1",
        "borderBottom": "1px solid #dadada",
        "WebkitBoxShadow": "0 -1px 3px rgba(0, 0, 0, 0.03) inset",
        "boxShadow": "0 -1px 3px rgba(0, 0, 0, 0.03) inset",
        "fontSize": 12
    },
    "header-topbanner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderBottom": "none"
    },
    "header": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "borderBottom": "1px solid #eaeaea",
        "backgroundColor": "#fff"
    },
    "headerheader-small": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "banner": {
        "backgroundColor": "#f1f1f1",
        "borderBottom": "1px solid #eaeaea"
    },
    "page-intro": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "WebkitBoxShadow": "0 -1px 2px rgba(0, 0, 0, 0.06) inset",
        "boxShadow": "0 -1px 2px rgba(0, 0, 0, 0.06) inset",
        "backgroundColor": "#fafafa",
        "borderBottom": "1px solid #dadada"
    },
    "banner + page-intro": {
        "marginTop": "-56px !important",
        "position": "relative",
        "backgroundColor": "rgba(250, 250, 250, 0.9)",
        "zIndex": 2
    },
    "page-top": {
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0
    },
    "main-container": {
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0
    },
    "full-height main-container": {
        "paddingTop": 220
    },
    "section": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0
    },
    "footer": {
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0,
        "backgroundColor": "#262626",
        "borderTop": "1px solid #3a3a3a",
        "borderBottom": "1px solid #333333",
        "fontSize": 14,
        "color": "#999999"
    },
    "subfooter": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "backgroundColor": "#262626",
        "fontSize": 14,
        "color": "#999999"
    },
    "block": {
        "paddingBottom": 40
    },
    "sidebar block:first-child": {
        "marginTop": 2
    },
    "boxed page-wrapper": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "position": "relative",
        "WebkitBoxShadow": "0px 0px 10px #cacaca",
        "boxShadow": "0px 0px 10px #cacaca"
    },
    "pattern-1": {
        "backgroundImage": "url(\"../images/pattern-1.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "pattern-4 page-wrapper": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "pattern-5 page-wrapper": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "pattern-6 page-wrapper": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "pattern-7 page-wrapper": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "pattern-8 page-wrapper": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "pattern-9 page-wrapper": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "pattern-2": {
        "backgroundImage": "url(\"../images/pattern-2.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "pattern-3": {
        "backgroundImage": "url(\"../images/pattern-3.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "pattern-4": {
        "backgroundImage": "url(\"../images/pattern-4.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "pattern-5": {
        "backgroundImage": "url(\"../images/pattern-5.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "pattern-6": {
        "backgroundImage": "url(\"../images/pattern-6.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "pattern-7": {
        "backgroundImage": "url(\"../images/pattern-7.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "pattern-8": {
        "backgroundImage": "url(\"../images/pattern-8.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "pattern-9": {
        "backgroundImage": "url(\"../images/pattern-9.png\")",
        "backgroundRepeat": "repeat",
        "backgroundPosition": "0 0"
    },
    "light footer": {
        "backgroundColor": "#f7f7f7",
        "borderTop": "1px solid #DDDDDD",
        "borderBottom": "1px solid #d1d1d1",
        "position": "relative",
        "color": "#666"
    },
    "light subfooter": {
        "backgroundColor": "#e7e7e7"
    },
    "white-bg": {
        "backgroundColor": "#ffffff !important",
        "WebkitBoxShadow": "0 1px 2px rgba(0, 0, 0, .1)",
        "boxShadow": "0 1px 2px rgba(0, 0, 0, .1)",
        "border": "none !important"
    },
    "header-topwhite-bg": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderBottom": "1px solid #dadada !important"
    },
    "gray-bg": {
        "backgroundColor": "#f1f1f1",
        "WebkitBoxShadow": "0 2px 3px rgba(0, 0, 0, 0.13) !important",
        "boxShadow": "0 2px 3px rgba(0, 0, 0, 0.13) !important",
        "position": "relative"
    },
    "gray-bg:before": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "backgroundColor": "transparent",
        "height": 5,
        "content": "",
        "width": "100%",
        "WebkitBoxShadow": "0 -2px 3px rgba(0, 0, 0, 0.13)",
        "boxShadow": "0 -2px 3px rgba(0, 0, 0, 0.13)"
    },
    "headergray-bg": {
        "borderBottom": "1px solid #dadada",
        "WebkitBoxShadow": "none !important",
        "boxShadow": "none !important"
    },
    "headergray-bg:before": {
        "WebkitBoxShadow": "none !important",
        "boxShadow": "none !important"
    },
    "dark-bg": {
        "backgroundColor": "#000000",
        "color": "#ffffff"
    },
    "dark-bg h1": {
        "color": "#ffffff"
    },
    "dark-bg h2": {
        "color": "#ffffff"
    },
    "dark-bg h3": {
        "color": "#ffffff"
    },
    "dark-bg h4": {
        "color": "#ffffff"
    },
    "dark-bg h5": {
        "color": "#ffffff"
    },
    "dark-bg h6": {
        "color": "#ffffff"
    },
    "dark-bg a:not(btn)": {
        "color": "#fff",
        "textDecoration": "underline"
    },
    "dark-bg a:not(btn):hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "default-bg": {
        "backgroundColor": "#e84c3d",
        "color": "#ffffff"
    },
    "default-bg h1": {
        "color": "#ffffff"
    },
    "default-bg h2": {
        "color": "#ffffff"
    },
    "default-bg h3": {
        "color": "#ffffff"
    },
    "default-bg h4": {
        "color": "#ffffff"
    },
    "default-bg h5": {
        "color": "#ffffff"
    },
    "default-bg h6": {
        "color": "#ffffff"
    },
    "default-bg a:not(btn)": {
        "color": "#ffffff",
        "textDecoration": "underline"
    },
    "default-bg a:not(btn):hover": {
        "color": "#ffffff",
        "textDecoration": "none"
    },
    "default-bgtext-muted": {
        "color": "#f1f1f1"
    },
    "default-bgtext-muted h1": {
        "color": "#f1f1f1"
    },
    "default-bgtext-muted h2": {
        "color": "#f1f1f1"
    },
    "default-bgtext-muted h3": {
        "color": "#f1f1f1"
    },
    "default-bgtext-muted h4": {
        "color": "#f1f1f1"
    },
    "default-bgtext-muted h5": {
        "color": "#f1f1f1"
    },
    "default-bgtext-muted h6": {
        "color": "#f1f1f1"
    },
    "dark-bgtext-muted": {
        "color": "#999999"
    },
    "dark-bgtext-muted h1": {
        "color": "#999999"
    },
    "dark-bgtext-muted h2": {
        "color": "#999999"
    },
    "dark-bgtext-muted h3": {
        "color": "#999999"
    },
    "dark-bgtext-muted h4": {
        "color": "#999999"
    },
    "dark-bgtext-muted h5": {
        "color": "#999999"
    },
    "dark-bgtext-muted h6": {
        "color": "#999999"
    },
    "gray-bgtext-muted": {
        "color": "#999999"
    },
    "gray-bgtext-muted h1": {
        "color": "#999999"
    },
    "gray-bgtext-muted h2": {
        "color": "#999999"
    },
    "gray-bgtext-muted h3": {
        "color": "#999999"
    },
    "gray-bgtext-muted h4": {
        "color": "#999999"
    },
    "gray-bgtext-muted h5": {
        "color": "#999999"
    },
    "gray-bgtext-muted h6": {
        "color": "#999999"
    },
    "no-touch light-translucent-bg": {
        "backgroundAttachment": "fixed !important"
    },
    "no-touch dark-translucent-bg": {
        "backgroundAttachment": "fixed !important"
    },
    "no-touch default-translucent-bg": {
        "backgroundAttachment": "fixed !important"
    },
    "no-touch parallax": {
        "backgroundAttachment": "fixed !important"
    },
    "light-translucent-bg": {
        "WebkitBackgroundSize": "cover!important",
        "MozBackgroundSize": "cover!important",
        "OBackgroundSize": "cover!important",
        "backgroundSize": "cover!important",
        "backgroundPosition": "50% 0",
        "backgroundRepeat": "no-repeat",
        "zIndex": 1,
        "position": "relative",
        "color": "#333",
        "borderBottom": "1px solid #dadada",
        "borderTop": "1px solid #dadada"
    },
    "dark-translucent-bg": {
        "WebkitBackgroundSize": "cover!important",
        "MozBackgroundSize": "cover!important",
        "OBackgroundSize": "cover!important",
        "backgroundSize": "cover!important",
        "backgroundPosition": "50% 0",
        "backgroundRepeat": "no-repeat",
        "zIndex": 1,
        "position": "relative",
        "color": "#ffffff"
    },
    "default-translucent-bg": {
        "WebkitBackgroundSize": "cover!important",
        "MozBackgroundSize": "cover!important",
        "OBackgroundSize": "cover!important",
        "backgroundSize": "cover!important",
        "backgroundPosition": "50% 0",
        "backgroundRepeat": "no-repeat",
        "zIndex": 1,
        "position": "relative",
        "color": "#ffffff"
    },
    "parallax": {
        "WebkitBackgroundSize": "cover!important",
        "MozBackgroundSize": "cover!important",
        "OBackgroundSize": "cover!important",
        "backgroundSize": "cover!important",
        "backgroundPosition": "50% 0",
        "backgroundRepeat": "no-repeat",
        "zIndex": 1,
        "position": "relative",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "light-translucent-bg:after": {
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 2,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgba(255, 255, 255, 0.7)"
    },
    "dark-translucent-bg:after": {
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 2,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgba(0, 0, 0, 0.7)"
    },
    "default-translucent-bg:after": {
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 2,
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgba(232, 76, 61, 0.7)"
    },
    "header + banner > light-translucent-bg": {
        "borderTop": "none"
    },
    "slider-banner-container light-translucent-bg": {
        "border": "none"
    },
    "light-translucent-bg separator-2": {
        "backgroundColor": "#333"
    },
    "dark-translucent-bg h1": {
        "color": "#ffffff"
    },
    "dark-translucent-bg h2": {
        "color": "#ffffff"
    },
    "dark-translucent-bg h3": {
        "color": "#ffffff"
    },
    "dark-translucent-bg h4": {
        "color": "#ffffff"
    },
    "dark-translucent-bg h5": {
        "color": "#ffffff"
    },
    "dark-translucent-bg h6": {
        "color": "#ffffff"
    },
    "dark-translucent-bg a:not(btn)": {
        "textDecoration": "underline",
        "color": "#ffffff"
    },
    "dark-translucent-bg a:not(btn):hover": {
        "textDecoration": "none",
        "color": "#ffffff"
    },
    "default-translucent-bg h1": {
        "color": "#ffffff"
    },
    "default-translucent-bg h2": {
        "color": "#ffffff"
    },
    "default-translucent-bg h3": {
        "color": "#ffffff"
    },
    "default-translucent-bg h4": {
        "color": "#ffffff"
    },
    "default-translucent-bg h5": {
        "color": "#ffffff"
    },
    "default-translucent-bg h6": {
        "color": "#ffffff"
    },
    "default-translucent-bg a:not(btn)": {
        "textDecoration": "underline",
        "color": "#ffffff"
    },
    "default-translucent-bg a:not(btn):hover": {
        "textDecoration": "none",
        "color": "#ffffff"
    },
    "light-translucent-bg container": {
        "zIndex": 3,
        "position": "relative"
    },
    "dark-translucent-bg container": {
        "zIndex": 3,
        "position": "relative"
    },
    "default-translucent-bg container": {
        "zIndex": 3,
        "position": "relative"
    },
    "parallax-bg": {
        "background": "url(\"../images/parallax-bg.jpg\") 50% 0px no-repeat"
    },
    "parallax-bg-2": {
        "background": "url(\"../images/parallax-bg-2.jpg\") 50% 0px no-repeat"
    },
    "parallax-bg-3": {
        "background": "url(\"../images/parallax-bg-3.jpg\") 50% 0px no-repeat"
    },
    "grid-space-20": {
        "marginRight": -10.5,
        "marginLeft": -10.5
    },
    "grid-space-20 col-lg-6": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-lg-4": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-lg-3": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-md-6": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-md-4": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-md-3": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-sm-6": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-sm-4": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-sm-3": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-xs-6": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-xs-4": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-20 col-xs-3": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "grid-space-10": {
        "marginRight": -6,
        "marginLeft": -6
    },
    "grid-space-10 col-lg-6": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-lg-4": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-lg-3": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-md-6": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-md-4": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-md-3": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-sm-6": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-sm-4": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-sm-3": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-xs-6": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-xs-4": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-10 col-xs-3": {
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "grid-space-0": {
        "marginRight": 0,
        "marginLeft": 0
    },
    "grid-space-0 col-lg-6": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-lg-4": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-lg-3": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-md-6": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-md-4": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-md-3": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-sm-6": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-sm-4": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-sm-3": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-xs-6": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-xs-4": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0 col-xs-3": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "grid-space-0>div": {
        "marginBottom": 0,
        "paddingBottom": 0
    },
    "fixed-header-on headerfixed": {
        "position": "fixed",
        "width": "100%",
        "top": 0,
        "left": 0,
        "zIndex": 1006,
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "borderBottom": "1px solid #f1f1f1",
        "paddingTop": 7,
        "paddingRight": 0,
        "paddingBottom": 7,
        "paddingLeft": 0,
        "backgroundColor": "rgba(255, 255, 255, 0.95)"
    },
    "fixed-header-onboxed headerfixed": {
        "left": "auto"
    },
    "fixed-header-on header logo": {
        "WebkitTransform": "scale(0.80)",
        "MozTransform": "scale(0.80)",
        "MsTransform": "scale(0.80)",
        "OTransform": "scale(0.80)",
        "transform": "scale(0.80)",
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": -4,
        "marginLeft": 0,
        "display": "none"
    },
    "fixed-header-on header site-slogan": {
        "display": "none"
    },
    "fixed-header-on header navbarnavbar-default": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "fixed-header-on headerfixedanimated": {
        "WebkitAnimationDuration": "0.5s",
        "animationDuration": "0.5s"
    },
    "pl-5": {
        "paddingLeft": 5
    },
    "pl-10": {
        "paddingLeft": 10
    },
    "pl-20": {
        "paddingLeft": 20
    },
    "pr-5": {
        "paddingRight": 5
    },
    "pr-10": {
        "paddingRight": 10
    },
    "pr-20": {
        "paddingRight": 20
    },
    "mt-20": {
        "marginTop": 20
    },
    "mb-20": {
        "marginBottom": 20
    },
    "space": {
        "paddingTop": 20,
        "paddingBottom": 20
    },
    "space-top": {
        "paddingTop": 20
    },
    "space-bottom": {
        "paddingBottom": 20
    },
    "margin-clear": {
        "marginTop": "0 !important",
        "marginBottom": "0 !important"
    },
    "padding-top-clear": {
        "paddingTop": "0 !important"
    },
    "padding-bottom-clear": {
        "paddingBottom": "0 !important"
    },
    "border-clear": {
        "border": "none !important"
    },
    "separator": {
        "display": "block",
        "width": 60,
        "height": 5,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "backgroundColor": "#cccccc",
        "position": "relative",
        "border": "1px solid #cccccc"
    },
    "separator:after": {
        "width": 30,
        "height": 5,
        "background": "#333333",
        "position": "absolute",
        "top": -1,
        "left": -1,
        "content": ""
    },
    "separator-2": {
        "display": "block",
        "width": 30,
        "height": 5,
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "backgroundColor": "#cccccc",
        "position": "relative"
    },
    "sidebar separator": {
        "width": 30,
        "height": 5,
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "backgroundColor": "#666",
        "borderColor": "#666"
    },
    "sidebar separator:after": {
        "content": "",
        "backgroundColor": "transparent"
    },
    "dark-bg separator-2": {
        "backgroundColor": "#999999"
    },
    "default-bg separator-2": {
        "backgroundColor": "#ebebeb"
    },
    "object-non-visible": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "object-visible": {
        "opacity": "1 !important",
        "filter": "alpha(opacity=100) !important"
    },
    "touch object-non-visible": {
        "opacity": "1 !important",
        "filter": "alpha(opacity=100) !important"
    },
    "vertical-divider-left": {
        "borderLeft": "1px solid #eeeeee",
        "paddingLeft": 50,
        "marginLeft": 20
    },
    "vertical-divider-left-lg": {
        "borderLeft": "1px solid #eeeeee",
        "paddingLeft": 50,
        "marginLeft": 20
    },
    "vertical-divider-right": {
        "borderRight": "1px solid #eeeeee",
        "paddingRight": 50,
        "marginRight": 20
    },
    "vertical-divider-right-lg": {
        "borderRight": "1px solid #eeeeee",
        "paddingRight": 50,
        "marginRight": 20
    },
    "grid span": {
        "paddingTop": 15,
        "paddingRight": 5,
        "paddingBottom": 15,
        "paddingLeft": 5,
        "backgroundColor": "#fafafa",
        "border": "1px solid #f3f3f3",
        "display": "block",
        "textAlign": "center",
        "marginBottom": 10
    },
    "footer h1": {
        "color": "#999999"
    },
    "footer h2": {
        "color": "#999999",
        "fontSize": 24,
        "marginBottom": 30
    },
    "footer h3": {
        "color": "#999999"
    },
    "footer h4": {
        "color": "#999999"
    },
    "footer h5": {
        "color": "#999999"
    },
    "footer h6": {
        "color": "#999999"
    },
    "light footer h1": {
        "color": "#666"
    },
    "light footer h2": {
        "color": "#666"
    },
    "light footer h3": {
        "color": "#666"
    },
    "light footer h4": {
        "color": "#666"
    },
    "light footer h5": {
        "color": "#666"
    },
    "light footer h6": {
        "color": "#666"
    },
    "subfooter p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "blogpost": {
        "backgroundColor": "#fafafa",
        "border": "1px solid #f3f3f3",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "position": "relative"
    },
    "blogpost blogpost-body": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "minHeight": 100
    },
    "blogpost h2title": {
        "marginBottom": 0,
        "marginTop": 0
    },
    "blogpost submitted": {
        "fontSize": 12,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "blogpost side": {
        "float": "left",
        "width": 80
    },
    "blogpost post-info": {
        "float": "left",
        "top": 0,
        "left": 25,
        "width": 80,
        "height": 90,
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "backgroundColor": "#e84c3d",
        "color": "#fff",
        "textAlign": "center",
        "zIndex": 3,
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "blogpost side post-info": {
        "float": "none"
    },
    "blogpost post-info day": {
        "fontSize": 34,
        "fontWeight": "700",
        "lineHeight": 1,
        "display": "block"
    },
    "blogpost post-info month": {
        "fontSize": 16,
        "lineHeight": 1.2,
        "display": "inline-block"
    },
    "blogpost side spanshare": {
        "fontSize": 13,
        "fontWeight": "700",
        "textAlign": "right",
        "paddingTop": 20,
        "display": "block"
    },
    "blogpost side social-links": {
        "marginTop": 0
    },
    "blogpost side social-links li": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "blogpost side social-links li a": {
        "width": "100%",
        "height": "auto",
        "display": "block",
        "fontSize": 20,
        "marginBottom": 0,
        "textAlign": "right",
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "color": "#e84c3d"
    },
    "blogpost side social-links litwitter a:hover": {
        "backgroundColor": "transparent",
        "color": "#55acee",
        "borderColor": "transparent"
    },
    "blogpost side social-links lifacebook a:hover": {
        "backgroundColor": "transparent",
        "color": "#3b5998",
        "borderColor": "transparent"
    },
    "blogpost side social-links ligoogleplus a:hover": {
        "backgroundColor": "transparent",
        "color": "#dd4b39",
        "borderColor": "transparent"
    },
    "blogpost blogpost-content": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginLeft": 100
    },
    "blogpost footer": {
        "backgroundColor": "#f1f1f1",
        "paddingTop": 12,
        "paddingRight": 20,
        "paddingBottom": 12,
        "paddingLeft": 20,
        "borderTop": "1px solid #e8e8e8",
        "fontSize": 14,
        "lineHeight": 2,
        "clear": "both"
    },
    "blogpost ullinks": {
        "listStyle": "none",
        "paddingLeft": 0,
        "marginBottom": 0
    },
    "blogpost ullinks li": {
        "display": "inline-block"
    },
    "blogpost ullinks li a": {
        "color": "#666666",
        "display": "inline-block"
    },
    "blogpost ullinks li a:hover": {
        "color": "#e84c3d"
    },
    "blogpostfull": {
        "backgroundColor": "transparent",
        "border": "none"
    },
    "blogpostfull footer": {
        "border": "1px solid #e8e8e8"
    },
    "blogpostfull blogpost-body": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0
    },
    "blogpostfull submitted": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "blogpostfull overlay-container": {
        "marginBottom": 20
    },
    "affixaffix": {
        "position": "static"
    },
    "sidebaraffix": {
        "position": "static"
    },
    "masonry-grid blogpost": {
        "marginBottom": 30
    },
    "masonry-grid blogpost blogpost-body": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "masonry-grid blogpost h2title": {
        "fontSize": 24
    },
    "masonry-grid blogpost submitted": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "masonry-grid blogpost blogpost-content": {
        "marginLeft": 0
    },
    "masonry-grid blogpost post-info": {
        "width": 50,
        "height": 60,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "masonry-grid blogpost post-info day": {
        "fontSize": 20
    },
    "masonry-grid blogpost post-info month": {
        "fontSize": 11,
        "lineHeight": 1.2
    },
    "timeline": {
        "position": "relative",
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0,
        "marginTop": 40
    },
    "timeline-icon": {
        "position": "absolute",
        "display": "block",
        "top": -30,
        "left": "50%",
        "color": "#f3f3f3",
        "fontSize": 40,
        "marginLeft": -13,
        "lineHeight": 1
    },
    "timeline timeline-item": {
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "timeline blogpost blogpost-body": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "timeline blogpost h2title": {
        "fontSize": 24
    },
    "timeline blogpost submitted": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "timeline blogpost footer": {
        "paddingTop": 12,
        "paddingRight": 15,
        "paddingBottom": 12,
        "paddingLeft": 15
    },
    "timeline blogpost blogpost-content": {
        "marginLeft": 0
    },
    "timeline blogpost post-info": {
        "width": 50,
        "height": 60,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "timeline blogpost post-info day": {
        "fontSize": 20
    },
    "timeline blogpost post-info month": {
        "fontSize": 11,
        "lineHeight": 1.2
    },
    "timeline-date-label": {
        "float": "none",
        "clear": "both",
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 80,
        "marginLeft": "auto",
        "textAlign": "center",
        "lineHeight": 1,
        "width": 135,
        "position": "relative",
        "zIndex": 2,
        "color": "#e84c3d"
    },
    "timeline timeline-itempull-right + timeline-date-label": {
        "paddingTop": 80
    },
    "timeline-date-label:after": {
        "backgroundColor": "#f3f3f3",
        "height": 30,
        "width": "100%",
        "position": "absolute",
        "bottom": -8,
        "zIndex": -1
    },
    "comments": {
        "marginTop": 60
    },
    "comments h2title": {
        "marginBottom": 40,
        "borderBottom": "1px solid #d2d2d2",
        "paddingBottom": 10
    },
    "comment": {
        "fontSize": 14
    },
    "comment comment": {
        "marginLeft": 75
    },
    "comment-avatar": {
        "marginTop": 5,
        "width": 55,
        "float": "left"
    },
    "comment-content": {
        "marginLeft": 75,
        "borderBottom": "1px solid #d2d2d2",
        "marginBottom": 40
    },
    "comment h3": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "comment-meta": {
        "marginBottom": 15,
        "color": "#999999",
        "fontSize": 12
    },
    "comment-meta a": {
        "color": "#666666"
    },
    "comment-meta a:hover": {
        "textDecoration": "underline"
    },
    "comment btn": {
        "fontSize": 12,
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "minWidth": 100,
        "marginTop": 5,
        "marginBottom": -1
    },
    "comment btn i": {
        "paddingRight": 5
    },
    "filters": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "filters nav-pills > li": {
        "marginRight": 2,
        "marginBottom": 2
    },
    "filters nav-pills > li + li": {
        "marginLeft": 0
    },
    "text-centerfilters nav-pills > li": {
        "marginRight": 2,
        "marginLeft": 2,
        "marginBottom": 2,
        "display": "inline-block",
        "float": "none"
    },
    "portfolio-itemside": {
        "fontSize": 14,
        "marginTop": 30
    },
    "portfolio-itemside social-links": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "team-member small": {
        "display": "block",
        "marginTop": -5
    },
    "team-memberbox-style-1": {
        "marginTop": 0
    },
    "coming-soon-bg": {
        "background": "url(\"../images/coming-soon-bg.jpg\") 50% 0px no-repeat",
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover"
    },
    "boxed coming-soon-bg": {
        "background": "none"
    },
    "is-countdown": {
        "border": "1px solid transparent",
        "backgroundColor": "transparent"
    },
    "countdown-section": {
        "textAlign": "center",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "countdown-amount": {
        "fontSize": 36,
        "fontWeight": "700",
        "display": "block"
    },
    "countdown-period": {
        "display": "block",
        "fontSize": 28,
        "lineHeight": 1.2,
        "marginTop": 15
    },
    "listing-item": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "border": "1px solid #f1f1f1",
        "position": "relative",
        "overflow": "hidden"
    },
    "listing-item-body": {
        "paddingTop": 20,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "WebkitTransition": "ease-in-out all 0.25s",
        "OTransition": "ease-in-out all 0.25s",
        "transition": "ease-in-out all 0.25s"
    },
    "listing-item:hover listing-item-body": {
        "backgroundColor": "#fafafa"
    },
    "listing-item h3": {
        "fontSize": 18
    },
    "listing-item p": {
        "color": "#999999",
        "fontSize": 13
    },
    "listing-item del": {
        "fontSize": 13,
        "lineHeight": 1,
        "color": "#cccccc"
    },
    "price del": {
        "fontSize": 13,
        "lineHeight": 1,
        "color": "#cccccc"
    },
    "elements-list > *": {
        "borderRight": "1px solid #dddddd",
        "marginTop": 5,
        "marginRight": 6,
        "marginBottom": 5,
        "marginLeft": 0,
        "paddingRight": 10,
        "lineHeight": 24,
        "height": 22,
        "display": "inline-block"
    },
    "elements-list > *:last-child": {
        "borderRight": "none",
        "marginRight": 0,
        "paddingRight": 0
    },
    "price": {
        "fontSize": 22,
        "color": "#000",
        "fontWeight": "300"
    },
    "wishlist:hover i:before": {
        "content": "\\f004"
    },
    "listing-item badge": {
        "borderRadius": 0,
        "position": "absolute",
        "top": -1,
        "left": -1,
        "fontWeight": "400"
    },
    "sorting-filters": {
        "backgroundColor": "#f3f3f3",
        "border": "1px solid #dddddd",
        "paddingTop": 20,
        "paddingRight": 15,
        "paddingBottom": 20,
        "paddingLeft": 15,
        "marginBottom": 40
    },
    "sidebar sorting-filters": {
        "marginBottom": 0
    },
    "sorting-filters label": {
        "display": "block",
        "marginBottom": 5,
        "fontSize": 14
    },
    "sorting-filters form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "sorting-filters btn": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minWidth": 0,
        "width": "100%"
    },
    "sorting-filters form-control": {
        "marginBottom": 5,
        "webkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "borderColor": "#f3f3f3"
    },
    "sorting-filters form-control:focus": {
        "marginBottom": 5,
        "webkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "borderColor": "#f3f3f3"
    },
    "sorting-filters form-inline form-control": {
        "width": "100%"
    },
    "list-with-image": {
        "marginBottom": 20,
        "borderBottom": "1px solid #f1f1f1",
        "paddingBottom": 5
    },
    "list-with-image:last-child": {
        "borderBottom": "none"
    },
    "list-with-image overlay-container": {
        "float": "left",
        "width": 80,
        "marginBottom": 10
    },
    "list-with-image h2": {
        "marginLeft": 100,
        "fontSize": 16,
        "marginTop": 0,
        "marginBottom": 5
    },
    "list-with-image p": {
        "marginLeft": 100,
        "fontSize": 13,
        "color": "#999",
        "marginBottom": 15
    },
    "carttable price": {
        "width": "18%"
    },
    "carttable amount": {
        "width": "12%",
        "textAlign": "right"
    },
    "carttable remove": {
        "width": "12%"
    },
    "carttable quantity": {
        "width": "12%"
    },
    "table information": {
        "width": "80%"
    },
    "carttable quantity input": {
        "width": 60,
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6
    },
    "carttable product": {
        "fontSize": 15
    },
    "cart price": {
        "fontSize": 14
    },
    "carttable product small": {
        "fontSize": 12,
        "display": "block",
        "color": "#999"
    },
    "carttable thead > tr > th": {
        "fontSize": 16
    },
    "carttable total-quantity": {
        "paddingTop": 15,
        "paddingBottom": 15,
        "fontSize": 16,
        "fontWeight": "700"
    },
    "carttable total-amount": {
        "paddingTop": 15,
        "paddingBottom": 15,
        "fontSize": 16,
        "fontWeight": "700",
        "textAlign": "right"
    },
    "cart form-group": {
        "marginBottom": 0
    },
    "header-top-dropdown dropdown-menucart": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minWidth": 350,
        "fontSize": 12,
        "right": -1
    },
    "dropdown-menucart table": {
        "marginBottom": 0
    },
    "dropdown-menucart panel-body": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "dropdown-menucart panel-body btn": {
        "marginLeft": 5
    },
    "total-amount": {
        "fontSize": 13,
        "fontWeight": "700"
    },
    "total-quantity": {
        "fontSize": 13
    },
    "cart table > tbody > tr > td": {
        "verticalAlign": "inherit"
    },
    "carttable > tbody > tr > td": {
        "verticalAlign": "inherit"
    },
    "cart quantity": {
        "width": 50,
        "fontSize": 11
    },
    "cart product": {
        "width": 220,
        "fontSize": 13
    },
    "cart product small": {
        "display": "block",
        "color": "#999999"
    },
    "cart amount": {
        "fontWeight": "700"
    },
    "btn": {
        "paddingTop": 10,
        "paddingRight": 12,
        "paddingBottom": 10,
        "paddingLeft": 12,
        "fontSize": 14,
        "lineHeight": 1.42857143,
        "minWidth": 160,
        "textAlign": "center",
        "borderRadius": 0,
        "textTransform": "uppercase",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "btn:focus": {
        "outline": "none",
        "boxShadow": "none"
    },
    "btn:active": {
        "outline": "none",
        "boxShadow": "none"
    },
    "btnbtn-lg": {
        "paddingTop": 17,
        "paddingRight": 12,
        "paddingBottom": 17,
        "paddingLeft": 12,
        "fontSize": 18,
        "minWidth": 210
    },
    "btnbtn-sm": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "fontSize": 12,
        "minWidth": 105
    },
    "btnradius": {
        "WebkitBorderRadius": 15,
        "MozBorderRadius": 15,
        "borderRadius": 15
    },
    "moving": {
        "WebkitAnimation": "moving 1.7s ease-out infinite",
        "animation": "moving 1.7s ease-out infinite",
        "position": "relative",
        "top": -30,
        "WebkitTransition": "none !important",
        "MozTransition": "none !important",
        "OTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "btn-remove": {
        "fontSize": 10,
        "paddingTop": 3,
        "paddingRight": 15,
        "paddingBottom": 3,
        "paddingLeft": 15,
        "minWidth": 0
    },
    "btn-dark": {
        "color": "#f1f1f1",
        "backgroundColor": "#333333",
        "borderColor": "#333333"
    },
    "btn-dark:hover": {
        "color": "#ffffff",
        "backgroundColor": "#666",
        "borderColor": "#666"
    },
    "btn-dark:focus": {
        "color": "#ffffff",
        "backgroundColor": "#666",
        "borderColor": "#666"
    },
    "btn-dark:active": {
        "color": "#ffffff",
        "backgroundColor": "#666",
        "borderColor": "#666"
    },
    "btn-darkactive": {
        "color": "#ffffff",
        "backgroundColor": "#666",
        "borderColor": "#666"
    },
    "open dropdown-togglebtn-dark": {
        "color": "#ffffff",
        "backgroundColor": "#666",
        "borderColor": "#666"
    },
    "btn-gray": {
        "color": "#fff",
        "backgroundColor": "#666666",
        "borderColor": "#666666"
    },
    "btn-gray:hover": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "btn-gray:focus": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "btn-gray:active": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "btn-grayactive": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "open dropdown-togglebtn-gray": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "btn-light-gray": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#f3f3f3"
    },
    "btn-light-gray:hover": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "btn-light-gray:focus": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "btn-light-gray:active": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "btn-light-grayactive": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "open dropdown-togglebtn-light-gray": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d"
    },
    "default-bg btn-light-gray": {
        "color": "#ffffff",
        "backgroundColor": "transparent",
        "borderColor": "#ffffff"
    },
    "default-bg btn-light-gray:hover": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "default-bg btn-light-gray:focus": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "default-bg btn-light-gray:active": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "default-bg btn-light-grayactive": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "default-bg open dropdown-togglebtn-light-gray": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "btn-default": {
        "backgroundColor": "#e84c3d",
        "color": "#fff !important",
        "borderColor": "#cd3c2e"
    },
    "btn-default:hover": {
        "color": "#fff !important",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "btn-default:focus": {
        "color": "#fff !important",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "btn-default:active": {
        "color": "#fff !important",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "btn-defaultactive": {
        "color": "#fff !important",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "open dropdown-togglebtn-default": {
        "color": "#fff !important",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "default-bg btn-default": {
        "backgroundColor": "rgba(0, 0, 0, 0.3)",
        "borderColor": "transparent"
    },
    "default-bg btn-default:hover": {
        "color": "#fff !important",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "borderColor": "transparent"
    },
    "default-bg btn-default:focus": {
        "color": "#fff !important",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "borderColor": "transparent"
    },
    "default-bg btn-default:active": {
        "color": "#fff !important",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "borderColor": "transparent"
    },
    "default-bg btn-defaultactive": {
        "color": "#fff !important",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "borderColor": "transparent"
    },
    "default-bg open dropdown-togglebtn-default": {
        "color": "#fff !important",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "borderColor": "transparent"
    },
    "btn-defaultdisabled": {
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e",
        "opacity": 0.7,
        "filter": "alpha(opacity=70)"
    },
    "btn-default[disabled]": {
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e",
        "opacity": 0.7,
        "filter": "alpha(opacity=70)"
    },
    "fieldset[disabled] btn-default": {
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e",
        "opacity": 0.7,
        "filter": "alpha(opacity=70)"
    },
    "btn-white": {
        "backgroundColor": "transparent",
        "color": "#cd3c2e",
        "border": "1px solid #e84c3d"
    },
    "footer btn-white": {
        "color": "inherit"
    },
    "subfooter btn-white": {
        "color": "inherit"
    },
    "footer btn-white:hover": {
        "color": "#fff"
    },
    "subfooter btn-white:hover": {
        "color": "#fff"
    },
    "btn-white:hover": {
        "color": "#fff",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "btn-white:focus": {
        "color": "#fff",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "btn-white:active": {
        "color": "#fff",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "btn-whiteactive": {
        "color": "#fff",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "open dropdown-togglebtn-white": {
        "color": "#fff",
        "backgroundColor": "#cd3c2e",
        "borderColor": "#cd3c2e"
    },
    "default-bg btn-white": {
        "color": "#ffffff",
        "backgroundColor": "transparent",
        "borderColor": "#ffffff"
    },
    "default-bg btn-white:hover": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "default-bg btn-white:focus": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "default-bg btn-white:active": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "default-bg btn-whiteactive": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "default-bg open dropdown-togglebtn-white": {
        "color": "#333333",
        "backgroundColor": "#fafafa",
        "borderColor": "#fafafa"
    },
    "footer-content btn-white": {
        "color": "#999",
        "backgroundColor": "transparent",
        "borderColor": "#555"
    },
    "link": {
        "paddingRight": 23,
        "position": "relative",
        "display": "inline-block",
        "textAlign": "right"
    },
    "link:hover": {
        "textDecoration": "none"
    },
    "link:hover span": {
        "textDecoration": "underline"
    },
    "link:after": {
        "content": "\\f178",
        "fontFamily": "FontAwesome",
        "position": "absolute",
        "right": 0,
        "top": 2
    },
    "form": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "textarea": {
        "resize": "vertical"
    },
    "sidebar form": {
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "form-control": {
        "borderRadius": 0,
        "background": "#ffffff",
        "height": 40,
        "paddingRight": 30,
        "borderColor": "#acacac",
        "color": "#666666",
        "position": "relative",
        "WebkitAppearance": "none",
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0, 0, 0, .075)",
        "boxShadow": "inset 0 1px 2px rgba(0, 0, 0, .075)"
    },
    "form-control:focus": {
        "borderColor": "#666666",
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0, 0, 0, .075)",
        "boxShadow": "inset 0 1px 2px rgba(0, 0, 0, .075)"
    },
    "selectform-control": {
        "paddingRight": 5,
        "WebkitAppearance": "menulist"
    },
    "form-control::-moz-placeholder": {
        "color": "inherit"
    },
    "form-control:-ms-input-placeholder": {
        "color": "inherit"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "inherit"
    },
    "input-group-addon": {
        "backgroundColor": "#cacaca",
        "borderColor": "#acacac",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "form-list > div": {
        "paddingTop": 7,
        "paddingRight": 15,
        "paddingBottom": 7,
        "paddingLeft": 15,
        "borderBottom": "1px solid #dddddd",
        "backgroundColor": "#f3f3f3",
        "marginTop": 6,
        "marginRight": 0,
        "marginBottom": 6,
        "marginLeft": 0,
        "display": "block"
    },
    "fieldset": {
        "paddingTop": 10,
        "paddingRight": 25,
        "paddingBottom": 10,
        "paddingLeft": 25,
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "border": "1px solid #dddddd",
        "backgroundColor": "#fafafa"
    },
    "fieldset legend": {
        "display": "block",
        "width": "auto",
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "marginBottom": 0,
        "fontSize": 15,
        "lineHeight": "inherit",
        "color": "#333",
        "border": "1px solid #ddd",
        "backgroundColor": "#ffffff"
    },
    "fieldset form-control": {
        "webkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "borderColor": "#f3f3f3"
    },
    "fieldset form-control:focus": {
        "webkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "borderColor": "#f3f3f3"
    },
    "dark-bg form-control": {
        "backgroundColor": "rgba(255, 255, 255, 0.20)",
        "borderColor": "#000",
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0, 0, 0, .45)",
        "boxShadow": "inset 0 1px 2px rgba(0, 0, 0, .45)",
        "color": "#999999"
    },
    "dark-bg input-group-addon": {
        "backgroundColor": "rgba(255, 255, 255, 0.20)",
        "borderColor": "#000"
    },
    "dark-bg form-control:focus": {
        "backgroundColor": "rgba(255, 255, 255, 0.25)"
    },
    "gray-bg form-control": {
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "borderColor": "#f1f1f1",
        "backgroundColor": "#ffffff"
    },
    "header-top-dropdown form-control": {
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "borderColor": "#f1f1f1",
        "backgroundColor": "#ffffff"
    },
    "footerlight form-control": {
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .12)",
        "borderColor": "#f1f1f1",
        "backgroundColor": "#ffffff"
    },
    "gray-bg form-control:focus": {
        "borderColor": "#cacaca",
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .09)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .09)"
    },
    "header-top-dropdown form-control:focus": {
        "borderColor": "#cacaca",
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .09)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .09)"
    },
    "footerlight form-control:focus": {
        "borderColor": "#cacaca",
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .09)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .09)"
    },
    "gray-bg input-group-addon": {
        "backgroundColor": "#ececec",
        "border": "1px solid #f1f1f1"
    },
    "default-bg form-control": {
        "borderColor": "#e84c3d",
        "backgroundColor": "rgba(0, 0, 0, 0.2)",
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .35)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .35)",
        "color": "#ffffff"
    },
    "default-bg form-control:focus": {
        "borderColor": "#e84c3d",
        "backgroundColor": "rgba(0, 0, 0, 0.25)"
    },
    "default-bg input-group-addon": {
        "backgroundColor": "#cd3c2e",
        "borderColor": "#e84c3d",
        "color": "#fff"
    },
    "default-bg selectform-control": {
        "color": "#666666"
    },
    "dark-bg selectform-control": {
        "color": "#666666"
    },
    "footer:not(light) footer-content form-control": {
        "borderColor": "#292929",
        "backgroundColor": "rgba(0, 0, 0, 0.3)",
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .55)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .55)"
    },
    "footer:not(light) footer-content form-control:focus": {
        "backgroundColor": "rgba(0, 0, 0, 0.2)",
        "WebkitBoxShadow": "inset 0 2px 3px rgba(0, 0, 0, .55)",
        "boxShadow": "inset 0 2px 3px rgba(0, 0, 0, .55)"
    },
    "footer:not(light) footer-content input-group-addon": {
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "border": "transparent"
    },
    "has-success form-control": {
        "borderColor": "#3c763d",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-success form-control:focus": {
        "borderColor": "#3c763d",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-warning form-control": {
        "borderColor": "#8a6d3b",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-warning form-control:focus": {
        "borderColor": "#8a6d3b",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-error form-control": {
        "borderColor": "#a94442",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "has-error form-control:focus": {
        "borderColor": "#a94442",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "default-bg has-success form-control": {
        "borderColor": "#fff",
        "color": "#ffffff"
    },
    "default-bg has-warning form-control": {
        "borderColor": "#fff",
        "color": "#ffffff"
    },
    "default-bg has-error form-control": {
        "borderColor": "#fff",
        "color": "#ffffff"
    },
    "default-bg has-success form-control:focus": {
        "borderColor": "#fff",
        "color": "#ffffff"
    },
    "default-bg has-warning form-control:focus": {
        "borderColor": "#fff",
        "color": "#ffffff"
    },
    "default-bg has-error form-control:focus": {
        "borderColor": "#fff",
        "color": "#ffffff"
    },
    "default-bg has-success form-control-feedback": {
        "color": "#fff"
    },
    "default-bg has-warning form-control-feedback": {
        "color": "#fff"
    },
    "default-bg has-error form-control-feedback": {
        "color": "#fff"
    },
    "default-bg has-success control-label": {
        "color": "#fff"
    },
    "default-bg has-warning control-label": {
        "color": "#fff"
    },
    "default-bg has-error control-label": {
        "color": "#fff"
    },
    "has-error error": {
        "fontWeight": "700",
        "marginBottom": 5,
        "display": "block"
    },
    "label ~ form-control-feedback": {
        "top": 25
    },
    "form-control-feedback": {
        "width": 40,
        "height": 40,
        "lineHeight": "42px !important",
        "top": 0
    },
    "form-control[disabled]": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "form-control[readonly]": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "fieldset[disabled] form-control": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "ulpagination": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "ulpager": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "ulpagination li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderBottom": "none",
        "fontSize": 12,
        "display": "inline-block",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "ulpagination li > a": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "border": "1px solid #f3f3f3",
        "lineHeight": 1,
        "backgroundColor": "#fafafa",
        "display": "inline-block",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "color": "#666666"
    },
    "pagination > li:first-child > a": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "border": "1px solid #f3f3f3",
        "lineHeight": 1,
        "backgroundColor": "#fafafa",
        "display": "inline-block",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "color": "#666666"
    },
    "pagination > li:last-child > a": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "border": "1px solid #f3f3f3",
        "lineHeight": 1,
        "backgroundColor": "#fafafa",
        "display": "inline-block",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "color": "#666666"
    },
    "ulpager li > a": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "border": "1px solid #f3f3f3",
        "lineHeight": 1,
        "backgroundColor": "#fafafa",
        "display": "inline-block",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "color": "#666666"
    },
    "ulpagination li > a:hover": {
        "backgroundColor": "#e84c3d",
        "color": "#ffffff",
        "borderColor": "#e84c3d"
    },
    "ulpagination liactive a": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d",
        "lineHeight": 1
    },
    "pagination > active > a:hover": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d",
        "lineHeight": 1
    },
    "pagination > active > a:focus": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d",
        "lineHeight": 1
    },
    "ulpagination li > a:focus": {
        "background": "none"
    },
    "breadcrumb": {
        "backgroundColor": "transparent",
        "marginBottom": 0,
        "fontSize": 13,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 0
    },
    "nav-tabs": {
        "WebkitBoxShadow": "inset 0px -1px 1px rgba(0, 0, 0, 0.04)",
        "boxShadow": "inset 0px -1px 1px rgba(0, 0, 0, 0.04)",
        "borderBottom": "1px solid #f0f0f0",
        "marginTop": 15
    },
    "nav-tabs > li > a": {
        "fontSize": 13,
        "textTransform": "uppercase",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "paddingTop": 12,
        "paddingRight": 25,
        "paddingBottom": 12,
        "paddingLeft": 25,
        "position": "relative",
        "color": "#666666"
    },
    "nav-tabs > li > a:hover": {
        "borderColor": "#f0f0f0 #f0f0f0 #ebebeb",
        "backgroundColor": "#fafafa"
    },
    "nav-tabs > liactive > a": {
        "color": "#666",
        "backgroundColor": "#fafafa",
        "border": "1px solid #f0f0f0",
        "WebkitBoxShadow": "0 -1px 1px rgba(0, 0, 0, 0.04)",
        "boxShadow": "0 -1px 1px rgba(0, 0, 0, 0.04)",
        "borderBottomColor": "transparent"
    },
    "nav-tabs > liactive > a:hover": {
        "color": "#666",
        "backgroundColor": "#fafafa",
        "border": "1px solid #f0f0f0",
        "WebkitBoxShadow": "0 -1px 1px rgba(0, 0, 0, 0.04)",
        "boxShadow": "0 -1px 1px rgba(0, 0, 0, 0.04)",
        "borderBottomColor": "transparent"
    },
    "nav-tabs > liactive > a:focus": {
        "color": "#666",
        "backgroundColor": "#fafafa",
        "border": "1px solid #f0f0f0",
        "WebkitBoxShadow": "0 -1px 1px rgba(0, 0, 0, 0.04)",
        "boxShadow": "0 -1px 1px rgba(0, 0, 0, 0.04)",
        "borderBottomColor": "transparent"
    },
    "nav-tabs > liactive > a:after": {
        "width": 3,
        "content": "",
        "backgroundColor": "#e84c3d",
        "height": "103%",
        "position": "absolute",
        "left": 0,
        "top": 0
    },
    "tab-content": {
        "border": "1px solid #f0f0f0",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderTop": "none",
        "WebkitBoxShadow": "0 1px 1px rgba(0, 0, 0, 0.04)",
        "position": "relative",
        "boxShadow": "0 1px 1px rgba(0, 0, 0, 0.04)",
        "backgroundColor": "#fafafa",
        "marginBottom": 15
    },
    "tab-content h1": {
        "fontSize": 34
    },
    "tab-content:after": {
        "width": 3,
        "content": "",
        "backgroundColor": "#e84c3d",
        "height": "100%",
        "position": "absolute",
        "left": 0,
        "top": 0
    },
    "tab-contentclear-style": {
        "border": "none",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "transparent"
    },
    "tab-contentclear-style:after": {
        "width": 0,
        "backgroundColor": "transparent",
        "height": "100%"
    },
    "tabs-style-2 nav-tabs": {
        "borderBottom": "1px solid #e84c3d"
    },
    "tabs-style-2 nav-tabs > liactive > a": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "border": "1px solid #e84c3d",
        "backgroundColor": "#e84c3d",
        "color": "#fff"
    },
    "tabs-style-2 nav-tabs > liactive > a:hover": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "border": "1px solid #e84c3d",
        "backgroundColor": "#e84c3d",
        "color": "#fff"
    },
    "tabs-style-2 nav-tabs > liactive > a:focus": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "border": "1px solid #e84c3d",
        "backgroundColor": "#e84c3d",
        "color": "#fff"
    },
    "tabs-style-2 nav-tabs > li > a:hover": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "border": "1px solid #e84c3d",
        "backgroundColor": "#e84c3d",
        "color": "#fff"
    },
    "tabs-style-2 nav-tabs > liactive > a:after": {
        "width": 0,
        "height": 0,
        "backgroundColor": "transparent"
    },
    "tabs-style-2 tab-content": {
        "border": "none",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "transparent"
    },
    "tabs-style-2 tab-content:after": {
        "width": 0,
        "backgroundColor": "transparent",
        "height": 0
    },
    "tabs-style-2 nav-tabs > li > a:hover:after": {
        "width": 0,
        "backgroundColor": "transparent",
        "height": 0
    },
    "vertical": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "verticalhc-tabs": {
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0
    },
    "vertical nav-tabs": {
        "display": "table-cell",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "verticalAlign": "top",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderBottomColor": "transparent",
        "backgroundColor": "#999999"
    },
    "vertical tab-content": {
        "display": "table-cell",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "verticalAlign": "top",
        "borderTop": "1px solid #f0f0f0",
        "WebkitBoxShadow": "1px 0px 1px rgba(0, 0, 0, 0.04)",
        "boxShadow": "1px 0px 1px rgba(0, 0, 0, 0.04)",
        "left": -1,
        "zIndex": 1,
        "paddingTop": 20,
        "paddingRight": 30,
        "paddingBottom": 20,
        "paddingLeft": 30
    },
    "vertical nav-tabs > li": {
        "float": "none"
    },
    "vertical nav-tabs > li a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 15,
        "paddingRight": 40,
        "paddingBottom": 15,
        "paddingLeft": 40,
        "whiteSpace": "nowrap",
        "color": "#ffffff",
        "borderBottom": "1px solid #8f8f8f"
    },
    "vertical nav-tabs > li > a:hover": {
        "borderColor": "#f0f0f0 #f0f0f0 #ebebeb",
        "borderRightColor": "transparent",
        "color": "#666666",
        "zIndex": 2
    },
    "vertical nav-tabs > li > a:hover:after": {
        "width": 3,
        "content": "",
        "backgroundColor": "#e84c3d",
        "height": "102%",
        "position": "absolute",
        "left": 0,
        "top": 0
    },
    "vertical nav-tabs > liactive > a": {
        "WebkitBoxShadow": "-1px 0px 1px rgba(0, 0, 0, 0.04)",
        "boxShadow": "-1px 0px 1px rgba(0, 0, 0, 0.04)",
        "borderRightColor": "transparent",
        "borderBottomColor": "#f0f0f0",
        "color": "#666666",
        "zIndex": 2,
        "width": "101%"
    },
    "vertical nav-tabs > liactive > a:hover": {
        "WebkitBoxShadow": "-1px 0px 1px rgba(0, 0, 0, 0.04)",
        "boxShadow": "-1px 0px 1px rgba(0, 0, 0, 0.04)",
        "borderRightColor": "transparent",
        "borderBottomColor": "#f0f0f0",
        "color": "#666666",
        "zIndex": 2,
        "width": "101%"
    },
    "vertical nav-tabs > liactive > a:focus": {
        "WebkitBoxShadow": "-1px 0px 1px rgba(0, 0, 0, 0.04)",
        "boxShadow": "-1px 0px 1px rgba(0, 0, 0, 0.04)",
        "borderRightColor": "transparent",
        "borderBottomColor": "#f0f0f0",
        "color": "#666666",
        "zIndex": 2,
        "width": "101%"
    },
    "vertical tab-content:after": {
        "backgroundColor": "transparent"
    },
    "arrow": {
        "display": "block",
        "position": "relative"
    },
    "arrow i": {
        "fontSize": 96,
        "top": -62,
        "position": "absolute",
        "lineHeight": 1,
        "zIndex": 2,
        "left": "50%",
        "marginLeft": -27
    },
    "arrow i:before": {
        "color": "#fafafa",
        "textShadow": "0px -1px 1px #E9E9E9"
    },
    "hc-tabs hc-tabs-top img": {
        "display": "none"
    },
    "nav-pills > li > a": {
        "borderRadius": 0,
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "border": "1px solid transparent",
        "color": "#666666",
        "fontSize": 13,
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "nav-pillsnav-stacked > li + li": {
        "marginLeft": 0
    },
    "nav-pills > liactive > a": {
        "border": "1px solid #f3f3f3",
        "color": "#e84c3d",
        "backgroundColor": "#fafafa"
    },
    "nav-pills > liactive > a:hover": {
        "border": "1px solid #f3f3f3",
        "color": "#e84c3d",
        "backgroundColor": "#fafafa"
    },
    "nav-pills > liactive > a:focus": {
        "border": "1px solid #f3f3f3",
        "color": "#e84c3d",
        "backgroundColor": "#fafafa"
    },
    "nav-pills > li > a:hover": {
        "border": "1px solid #f3f3f3",
        "color": "#e84c3d",
        "backgroundColor": "#fafafa"
    },
    "nav-pills > li > a:focus": {
        "border": "1px solid #f3f3f3",
        "color": "#e84c3d",
        "backgroundColor": "#fafafa"
    },
    "nav-pillsnav-stacked > li > a:after": {
        "fontFamily": "FontAwesome",
        "content": "\\f105",
        "fontSize": 14,
        "fontWeight": "700",
        "position": "absolute",
        "right": 15,
        "top": 9,
        "color": "#d1d1d1",
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "nav-pills > liactive > a:after": {
        "color": "#e84c3d"
    },
    "nav-pills > liactive > a:hover:after": {
        "color": "#e84c3d",
        "right": 10
    },
    "nav-pills > liactive > a:focus:after": {
        "color": "#e84c3d",
        "right": 10
    },
    "nav-pills > li > a:hover:after": {
        "color": "#e84c3d",
        "right": 10
    },
    "nav-pills > li > a:focus:after": {
        "color": "#e84c3d",
        "right": 10
    },
    "footer-content nav-pills > li > a": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "borderColor": "transparent",
        "color": "#999",
        "fontWeight": "400"
    },
    "footer-content nav-pills > li:last-child > a": {
        "borderBottom": "none"
    },
    "footer-content nav-pills > liactive > a": {
        "color": "#999",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "footer-content nav-pills > liactive > a:focus": {
        "color": "#999",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "footer-content nav-pills > li > a:focus": {
        "color": "#999",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "footer-content nav-pills > liactive > a:hover": {
        "color": "#fff",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "footer-content nav-pills > li > a:hover": {
        "color": "#fff",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "footer-content nav-pillsnav-stacked > li > a:after": {
        "top": 3,
        "color": "#999"
    },
    "footer-content nav-pills > liactive > a:after": {
        "color": "#999"
    },
    "footer-content nav-pills > liactive > a:hover:after": {
        "color": "#999"
    },
    "footer-content nav-pills > liactive > a:focus:after": {
        "color": "#999"
    },
    "footer-content nav-pills > li > a:hover:after": {
        "color": "#999"
    },
    "footer-content nav-pills > li > a:focus:after": {
        "color": "#999"
    },
    "light footer-content nav-pills > li > a": {
        "color": "#666"
    },
    "light footer-content nav-pills > liactive > a": {
        "color": "#666"
    },
    "light footer-content nav-pills > liactive > a:focus": {
        "color": "#666"
    },
    "light footer-content nav-pills > li > a:focus": {
        "color": "#666"
    },
    "light footer-content nav-pills > liactive > a:hover": {
        "color": "#cd3c2e"
    },
    "light footer-content nav-pills > li > a:hover": {
        "color": "#cd3c2e"
    },
    "light footer-content nav-pillsnav-stacked > li > a:after": {
        "color": "#666"
    },
    "light footer-content nav-pills > liactive > a:after": {
        "color": "#666"
    },
    "light footer-content nav-pills > liactive > a:hover:after": {
        "color": "#666"
    },
    "light footer-content nav-pills > liactive > a:focus:after": {
        "color": "#666"
    },
    "light footer-content nav-pills > li > a:hover:after": {
        "color": "#666"
    },
    "light footer-content nav-pills > li > a:focus:after": {
        "color": "#666"
    },
    "process nav-pills > li + li": {
        "marginLeft": 60,
        "position": "relative"
    },
    "process nav-pills > li + li:after": {
        "fontFamily": "FontAwesome",
        "content": "\\f101",
        "position": "absolute",
        "top": 10,
        "left": -35,
        "width": 10,
        "backgroundColor": "#fff"
    },
    "panel-group panel": {
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "border": "none"
    },
    "panel-default > panel-heading": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "outline": "none",
        "border": "none",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "OBorderRadius": 0,
        "borderRadius": 0,
        "width": "100%"
    },
    "panel-default > panel-heading + panel-collapse > panel-body": {
        "border": "1px solid #f0f0f0",
        "borderTop": "none",
        "backgroundColor": "#fafafa"
    },
    "panel-heading a": {
        "fontWeight": "400",
        "paddingTop": 12,
        "paddingRight": 35,
        "paddingBottom": 12,
        "paddingLeft": 15,
        "display": "inline-block",
        "width": "100%",
        "backgroundColor": "#e84c3d",
        "color": "#ffffff",
        "position": "relative",
        "textDecoration": "none"
    },
    "panel-dark panel-heading a": {
        "backgroundColor": "#333333"
    },
    "panel-dark panel-heading a:hover": {
        "backgroundColor": "#333333"
    },
    "panel-transparent panel-default > panel-heading": {
        "backgroundColor": "transparent",
        "color": "inherit"
    },
    "panel-transparent panel-default > panel-heading + panel-collapse > panel-body": {
        "backgroundColor": "transparent",
        "color": "inherit"
    },
    "panel-transparent panel-heading a": {
        "border": "1px solid #f1f1f1"
    },
    "panel-transparent panel-heading acollapsed": {
        "color": "inherit",
        "backgroundColor": "transparent"
    },
    "panel-heading acollapsed": {
        "color": "#ffffff",
        "backgroundColor": "#999999"
    },
    "panel-heading a:after": {
        "fontFamily": "FontAwesome",
        "content": "\\f147",
        "position": "absolute",
        "right": 15,
        "fontSize": 14,
        "fontWeight": "300",
        "top": "50%",
        "lineHeight": 1,
        "marginTop": -7
    },
    "panel-heading acollapsed:after": {
        "content": "\\f196"
    },
    "panel-heading a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#e84c3d",
        "color": "#ffffff"
    },
    "panel-transparent panel-heading a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#e84c3d",
        "color": "#ffffff"
    },
    "panel-title a i": {
        "paddingRight": 10,
        "fontSize": 20
    },
    "progress": {
        "marginBottom": 25,
        "backgroundColor": "#f1f1f1",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "height": 30
    },
    "progress-bar": {
        "paddingTop": 6,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "textAlign": "left"
    },
    "progress-bar-default": {
        "backgroundColor": "#e84c3d"
    },
    "progress-bar-gray": {
        "backgroundColor": "#999999"
    },
    "progress-bar-dark": {
        "backgroundColor": "#333333"
    },
    "gray-bg progress": {
        "backgroundColor": "#ffffff",
        "WebkitBoxShadow": "inset 0 2px 2px rgba(0, 0, 0, .1)",
        "boxShadow": "inset 0 2px 2px rgba(0, 0, 0, .1)"
    },
    "progress-bar span": {
        "position": "relative",
        "left": 15
    },
    "knob-container": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "position": "relative",
        "display": "inline-block"
    },
    "knob-container canvas": {
        "width": 132,
        "height": 132,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "knob-text": {
        "position": "absolute",
        "textAlign": "center",
        "top": "50%",
        "width": "100%",
        "marginTop": -14
    },
    "alert": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "position": "relative",
        "paddingLeft": 70,
        "overflow": "hidden",
        "zIndex": 1,
        "border": "none"
    },
    "alert:before": {
        "position": "absolute",
        "content": "",
        "top": 0,
        "left": 0,
        "width": 50,
        "height": "101%",
        "backgroundColor": "rgba(0, 0, 0, 0.25)",
        "zIndex": 2
    },
    "alert-success": {
        "color": "#2a5f2b",
        "backgroundColor": "#bcdab0"
    },
    "alert-info": {
        "color": "#1a4e68",
        "backgroundColor": "#c6e8fa"
    },
    "alert-warning": {
        "color": "#72582b",
        "backgroundColor": "#f7f0ce"
    },
    "alert:after": {
        "fontFamily": "FontAwesome",
        "position": "absolute",
        "top": 10,
        "left": 17,
        "color": "#ffffff",
        "fontSize": 20,
        "zIndex": 3
    },
    "alertalert-success:after": {
        "content": "\\f00c"
    },
    "alertalert-info:after": {
        "content": "\\f05a"
    },
    "alertalert-warning:after": {
        "content": "\\f071"
    },
    "alertalert-danger:after": {
        "content": "\\f00d"
    },
    "close": {
        "fontSize": 28,
        "fontWeight": "normal",
        "filter": "alpha(opacity=40)",
        "opacity": 0.4
    },
    "modal-open page-wrapper": {
        "WebkitFilter": "blur(3px)",
        "MozFilter": "blur(5px)",
        "OFilter": "blur(5px)",
        "MsFilter": "blur(5px)",
        "filter": "blur(5px)"
    },
    "modal-content": {
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "modal-content modal-header": {
        "backgroundColor": "#e84c3d"
    },
    "modal-content modal-title": {
        "fontSize": 24,
        "color": "#ffffff"
    },
    "modal-footer btn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mfp-zoom-out-cur page-wrapper": {
        "WebkitFilter": "blur(3px)",
        "MozFilter": "blur(5px)",
        "OFilter": "blur(5px)",
        "MsFilter": "blur(5px)",
        "filter": "blur(5px)"
    },
    "mfp-bg": {
        "opacity": 0.6,
        "filter": "alpha(opacity=60)"
    },
    "mfp-figure:after": {
        "backgroundColor": "#ffffff"
    },
    "fixed-image": {
        "backgroundPosition": "center center",
        "backgroundRepeat": "no-repeat",
        "height": 400,
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover"
    },
    "no-touch fixed-image": {
        "backgroundAttachment": "fixed"
    },
    "overlay-container": {
        "position": "relative",
        "display": "block",
        "overflow": "hidden"
    },
    "overlay": {
        "position": "absolute",
        "top": 0,
        "bottom": -1,
        "left": 0,
        "right": -1,
        "backgroundColor": "rgba(241, 241, 241, 0.85)",
        "overflow": "hidden",
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "WebkitTransform": "scale(0.8)",
        "transform": "scale(0.8)",
        "WebkitTransition": "all linear 0.2s",
        "MozTransition": "all linear 0.2s",
        "MsTransition": "all linear 0.2s",
        "OTransition": "all linear 0.2s",
        "transition": "all linear 0.2s"
    },
    "overlay a": {
        "display": "inline-block",
        "width": 50,
        "height": 50,
        "fontSize": 26,
        "color": "#e84c3d",
        "backgroundColor": "#ffffff",
        "textAlign": "center",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "marginTop": -25,
        "marginLeft": -25
    },
    "overlay span": {
        "position": "absolute",
        "display": "block",
        "bottom": 10,
        "textAlign": "center",
        "width": "100%",
        "color": "#000000",
        "fontStyle": "italic"
    },
    "overlay-links": {
        "display": "block",
        "marginTop": -25,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": -50,
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "fontSize": 0,
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "WebkitTransform": "scale(0.4)",
        "transform": "scale(0.4)",
        "WebkitTransition": "all 0.25s linear 0.05s",
        "MozTransition": "all 0.25s linear 0.05s",
        "MsTransition": "all 0.25s linear 0.05s",
        "OTransition": "all 0.25s linear 0.05s",
        "transition": "all 0.25s linear 0.05s"
    },
    "overlay-links a": {
        "position": "static",
        "marginTop": 0,
        "marginLeft": 0
    },
    "overlay-links a + a": {
        "left": 50,
        "color": "#ffffff",
        "backgroundColor": "#e84c3d"
    },
    "overlay a:hover": {
        "color": "#ffffff",
        "backgroundColor": "#333333"
    },
    "overlay i": {
        "lineHeight": 50
    },
    "box-style-1 overlay i": {
        "fontSize": 26,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "aoverlay": {
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "cursor": "pointer"
    },
    "listing-item aoverlay": {
        "WebkitTransition": "linear 0.25s",
        "OTransition": "linear 0.25s",
        "transition": "linear 0.25s",
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "aoverlay i": {
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "fontSize": 40,
        "lineHeight": 42,
        "color": "#e84c3d",
        "marginTop": -22,
        "marginLeft": -18,
        "textAlign": "center"
    },
    "aoverlaysmall i": {
        "fontSize": 18,
        "lineHeight": 1,
        "marginTop": -8,
        "marginLeft": -8
    },
    "overlay social-links": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "absolute",
        "bottom": 10,
        "width": "100%",
        "textAlign": "center"
    },
    "overlay social-links li": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "overlay social-links li a": {
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "width": 40,
        "height": 40,
        "fontSize": 18,
        "position": "static"
    },
    "overlay social-links li a:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#fff",
        "textDecoration": "none"
    },
    "overlay social-links li a i": {
        "lineHeight": 38,
        "fontSize": 24,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "overlay-container:hover overlay": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "overlay-container:hover overlay-links": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "tp-caption embed-responsive": {
        "overflow": "visible"
    },
    "audio-wrapper iframe": {
        "width": "100%",
        "border": "none",
        "marginBottom": 20
    },
    "scroll-spy": {
        "position": "relative"
    },
    "navbarnavbar-default": {
        "borderRadius": 0,
        "marginTop": 12,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "backgroundColor": "#fafafa",
        "borderColor": "#f1f1f1"
    },
    "header-small navbarnavbar-default": {
        "marginTop": 6,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "navbar-default navbar-nav > li > a": {
        "color": "#666666",
        "textTransform": "uppercase",
        "fontSize": 14,
        "fontWeight": "700",
        "paddingTop": 12,
        "paddingRight": 20,
        "paddingBottom": 12,
        "paddingLeft": 19,
        "zIndex": 102,
        "border": "1px solid transparent",
        "bottom": -1,
        "WebkitTransition": "none",
        "MozTransition": "none",
        "OTransition": "none",
        "MsTransition": "none",
        "transition": "none"
    },
    "navbar-default navbar-nav > li > a:hover": {
        "WebkitTransition": "all 0.2s ease-out",
        "MozTransition": "all 0.2s ease-out",
        "OTransition": "all 0.2s ease-out",
        "MsTransition": "all 0.2s ease-out",
        "transition": "all 0.2s ease-out"
    },
    "navbar-default navbar-nav > active > a": {
        "color": "#e84c3d",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > active > a:focus": {
        "color": "#e84c3d",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > active > a:hover": {
        "backgroundColor": "transparent"
    },
    "main-navigation navbar-nav > open > a": {
        "color": "#666666",
        "backgroundColor": "#fafafa",
        "border": "1px solid #f1f1f1",
        "borderBottom": "1px solid transparent",
        "WebkitBoxShadow": "-1px -1px 0px rgba(0, 0, 0, 0.03)",
        "boxShadow": "-1px -1px 0px rgba(0, 0, 0, 0.03)"
    },
    "main-navigation navbar-nav > open > a:hover": {
        "color": "#666666",
        "backgroundColor": "#fafafa",
        "border": "1px solid #f1f1f1",
        "borderBottom": "1px solid transparent",
        "WebkitBoxShadow": "-1px -1px 0px rgba(0, 0, 0, 0.03)",
        "boxShadow": "-1px -1px 0px rgba(0, 0, 0, 0.03)"
    },
    "main-navigation navbar-nav > open > a:focus": {
        "color": "#666666",
        "backgroundColor": "#fafafa",
        "border": "1px solid #f1f1f1",
        "borderBottom": "1px solid transparent",
        "WebkitBoxShadow": "-1px -1px 0px rgba(0, 0, 0, 0.03)",
        "boxShadow": "-1px -1px 0px rgba(0, 0, 0, 0.03)"
    },
    "main-navigation navbar-nav > open > a:active": {
        "backgroundColor": "#ffffff",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderColor": "transparent",
        "WebkitTransition": "all 0.1s ease-in-out",
        "MozTransition": "all 0.1s ease-in-out",
        "OTransition": "all 0.1s ease-in-out",
        "MsTransition": "all 0.1s ease-in-out",
        "transition": "all 0.1s ease-in-out"
    },
    "main-navigation navbar-nav > openactive > a:active": {
        "backgroundColor": "#ffffff",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderColor": "transparent",
        "WebkitTransition": "all 0.1s ease-in-out",
        "MozTransition": "all 0.1s ease-in-out",
        "OTransition": "all 0.1s ease-in-out",
        "MsTransition": "all 0.1s ease-in-out",
        "transition": "all 0.1s ease-in-out"
    },
    "main-navigation navbar-nav > open > a:active + ul": {
        "display": "none"
    },
    "main-navigation navbar-nav > openactive > a:active + ul": {
        "display": "none"
    },
    "dropdown-menu": {
        "minWidth": 220,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "#fafafa",
        "WebkitBoxShadow": "0px 1px 2px rgba(0, 0, 0, 0.08)",
        "boxShadow": "0px 1px 2px rgba(0, 0, 0, 0.08)",
        "border": "1px solid #f1f1f1",
        "zIndex": 101
    },
    "dropdown-menu > li > a": {
        "paddingTop": 12,
        "paddingRight": 20,
        "paddingBottom": 12,
        "paddingLeft": 20,
        "fontSize": 15,
        "color": "#666666",
        "borderBottom": "1px solid #f1f1f1",
        "WebkitTransition": "none",
        "MozTransition": "none",
        "OTransition": "none",
        "MsTransition": "none",
        "transition": "none"
    },
    "dropdown-menu > li > a:hover": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "dropdown-menu > li > a:focus": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "nav open > a": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "nav open > a:hover": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "nav open > a:focus": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "dropdown-menu > active > a": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "dropdown-menu > active > a:hover": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "dropdown-menu > active > a:focus": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "dropdown-menu menu > active > a": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "dropdown-menu menu > active > a:hover": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "dropdown-menu menu > active > a:focus": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1"
    },
    "dropdown-menu dropdown-menu": {
        "top": -1,
        "left": "100% !important",
        "paddingTop": 0,
        "marginLeft": 1,
        "borderLeft": "none",
        "WebkitBoxShadow": "1px 1px 2px rgba(0, 0, 0, 0.08)",
        "boxShadow": "1px 1px 2px rgba(0, 0, 0, 0.08)",
        "borderTop": "1px solid #f1f1f1"
    },
    "mega-menudropdown": {
        "position": "static"
    },
    "mega-menu dropdown-menu": {
        "left": 0,
        "top": "96%",
        "width": "100%",
        "paddingTop": 20,
        "paddingRight": 30,
        "paddingBottom": 20,
        "paddingLeft": 30
    },
    "mega-menu menu": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "mega-menu h4title": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "fontSize": 14,
        "textTransform": "uppercase"
    },
    "mega-menu menu > li > a": {
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "fontSize": 15,
        "color": "#666666",
        "borderBottom": "1px solid #f1f1f1",
        "display": "block",
        "WebkitTransition": "none",
        "MozTransition": "none",
        "OTransition": "none",
        "MsTransition": "none",
        "transition": "none"
    },
    "mega-menu menu > li > a i": {
        "paddingRight": 5,
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "dropdown-menu > li > a i": {
        "paddingRight": 5,
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "mega-menu menu > li:last-child > a": {
        "borderBottom": "none"
    },
    "mega-menu menu > li > a:hover i": {
        "paddingLeft": 5
    },
    "dropdown-menu > li > a:hover i": {
        "paddingLeft": 5
    },
    "mega-menu menu > li > a:hover": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1",
        "textDecoration": "none"
    },
    "mega-menu menu > li > a:focus": {
        "backgroundColor": "#ffffff",
        "color": "#e84c3d",
        "borderColor": "#f1f1f1",
        "textDecoration": "none"
    },
    "dropdown>a:before": {
        "fontFamily": "'FontAwesome'",
        "content": "\\f107",
        "position": "absolute",
        "left": "auto",
        "top": 15,
        "right": 6,
        "lineHeight": 1,
        "color": "#d1d1d1"
    },
    "navbar-default navbar-nav > activedropdown > a:before": {
        "color": "#e84c3d"
    },
    "navbar-default navbar-nav > dropdownopen > a:before": {
        "color": "#e5e5e5"
    },
    "dropdown dropdown>a:before": {
        "content": "\\f105",
        "right": 10,
        "top": 15,
        "marginLeft": 0,
        "visibility": "visible",
        "color": "#666"
    },
    "dropdown dropdownopen>a:before": {
        "color": "#e84c3d"
    },
    "animatedmain-navigation open dropdown-menu": {
        "WebkitAnimationDuration": "0.2s",
        "animationDuration": "0.2s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both",
        "WebkitAnimationName": "fadeInDownSmall",
        "animationName": "fadeInDownSmall"
    },
    "open dropdown-animation": {
        "WebkitAnimationDuration": "0.3s",
        "animationDuration": "0.3s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both",
        "WebkitAnimationName": "fadeInDownSmall",
        "animationName": "fadeInDownSmall"
    },
    "animatedmain-navigation dropdown-menu open dropdown-menu": {
        "WebkitAnimationName": "fadeInLeftSmall",
        "animationName": "fadeInLeftSmall"
    },
    "navbar-default navbar-toggle": {
        "borderColor": "#ccc"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "#fafafa",
        "borderColor": "#e84c3d"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "#fafafa",
        "borderColor": "#e84c3d"
    },
    "navbar-default navbar-toggle icon-bar": {
        "backgroundColor": "#999"
    },
    "navbar-default navbar-toggle:hover icon-bar": {
        "backgroundColor": "#e84c3d"
    },
    "navbar-default navbar-toggle:focus icon-bar": {
        "backgroundColor": "#e84c3d"
    },
    "header-top navbarnavbar-default": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minHeight": 30
    },
    "header-top navbar-default navbar-nav > li > a": {
        "color": "#999999",
        "paddingTop": 4,
        "paddingRight": 20,
        "paddingBottom": 4,
        "paddingLeft": 20
    },
    "header-top navbar-default navbar-nav > li": {
        "borderRight": "1px solid #999999"
    },
    "header-top navbar-default navbar-nav > li:last-child": {
        "borderRight": "none"
    },
    "subfooter navbar": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minHeight": 0,
        "background": "transparent",
        "borderColor": "transparent"
    },
    "subfooter navbar-default nav > li > a": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textTransform": "none",
        "lineHeight": 1,
        "fontSize": 14,
        "fontWeight": "400"
    },
    "subfooter navbar-default nav li:last-child a": {
        "border": "none"
    },
    "light subfooter navbar-default nav > li:last-child > a": {
        "border": "none"
    },
    "subfooter navbar-default nav > li > a:hover": {
        "backgroundColor": "transparent",
        "textDecoration": "underline",
        "color": "#e84c3d"
    },
    "subfooter navbar-default nav > active > a:hover": {
        "backgroundColor": "transparent",
        "textDecoration": "underline",
        "color": "#e84c3d"
    },
    "subfooter navbar-default nav > active > a:focus": {
        "backgroundColor": "transparent",
        "textDecoration": "underline",
        "color": "#e84c3d"
    },
    "logo img": {
        "WebkitTransition": "all 0.2s linear",
        "MozTransition": "all 0.2s linear",
        "MsTransition": "all 0.2s linear",
        "OTransition": "all 0.2s linear",
        "transition": "all 0.2s linear"
    },
    "logo img:hover": {
        "opacity": 0.85,
        "filter": "alpha(opacity=85)"
    },
    "main-container logo img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "header-small logo img": {
        "maxHeight": 40,
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": -4,
        "marginLeft": 0
    },
    "text-center logo img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "site-slogan": {
        "fontSize": 13,
        "fontStyle": "italic",
        "color": "#999999"
    },
    "main-container site-slogan": {
        "color": "inherit",
        "textAlign": "center",
        "marginBottom": 20
    },
    "logo-footer": {
        "marginTop": 25,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "call-to-action": {
        "paddingTop": 10,
        "paddingRight": 25,
        "paddingBottom": 10,
        "paddingLeft": 25,
        "textAlign": "center"
    },
    "call-to-action btn": {
        "marginTop": 10,
        "marginRight": 5,
        "marginBottom": 10,
        "marginLeft": 5
    },
    "call-to-action btnbtn-lg": {
        "marginTop": 15
    },
    "box": {
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0,
        "width": 60,
        "height": 60,
        "display": "inline-block",
        "fontSize": 0,
        "float": "left",
        "border": "1px solid transparent",
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "box i": {
        "fontSize": 36,
        "lineHeight": 60
    },
    "boxsmall": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 0,
        "width": 45,
        "height": 45
    },
    "boxsmall i": {
        "fontSize": 24,
        "lineHeight": 45
    },
    "boxgray-bg:hover": {
        "color": "#e84c3d"
    },
    "boxdefault-bg:hover": {
        "backgroundColor": "#fff",
        "border": "1px solid #e84c3d"
    },
    "boxdefault-bg:hover *": {
        "color": "#e84c3d"
    },
    "boxdark-bg:hover": {
        "backgroundColor": "#fff",
        "border": "1px solid #666"
    },
    "boxdark-bg:hover *": {
        "color": "#666"
    },
    "box-style-1": {
        "textAlign": "center",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "grid-space-10 box-style-1": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "box-style-1 i": {
        "fontSize": 90,
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "textAlign": "center"
    },
    "box-style-1:not(team-member):hover i": {
        "color": "#e84c3d",
        "WebkitTransition": "all 0.3s ease-in-out",
        "MozTransition": "all 0.3s ease-in-out",
        "OTransition": "all 0.3s ease-in-out",
        "MsTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "box-style-1default-bg:hover i": {
        "color": "inherit"
    },
    "box-style-1dark-bg:hover i": {
        "color": "inherit"
    },
    "box-style-2": {
        "marginTop": 20
    },
    "box-style-2 i": {
        "fontSize": 36,
        "lineHeight": 60
    },
    "box-style-2 icon-container": {
        "float": "left",
        "width": 60,
        "height": 60,
        "textAlign": "center",
        "border": "1px solid transparent",
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "box-style-2 body": {
        "marginLeft": 80
    },
    "box-style-2 h2": {
        "fontSize": 24,
        "marginTop": 0
    },
    "box-style-2:hover icon-container": {
        "border": "1px solid #666"
    },
    "box-style-2:hover default-bg": {
        "backgroundColor": "#fff",
        "border": "1px solid #e84c3d"
    },
    "box-style-2:hover default-bg *": {
        "color": "#e84c3d"
    },
    "box-style-2:hover dark-bg": {
        "backgroundColor": "#fff",
        "border": "1px solid #666"
    },
    "box-style-2:hover dark-bg *": {
        "color": "#666"
    },
    "box-style-2:hover white-bg *": {
        "color": "#e84c3d"
    },
    "box-style-3": {
        "marginTop": 20
    },
    "box-style-3 i": {
        "fontSize": 22,
        "lineHeight": 45
    },
    "box-style-3 icon-container": {
        "float": "left",
        "width": 45,
        "height": 45,
        "textAlign": "center",
        "border": "1px solid transparent",
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "box-style-3 body": {
        "marginLeft": 80
    },
    "box-style-3 h2": {
        "fontSize": 20,
        "marginTop": 0
    },
    "box-style-3:hover icon-container": {
        "border": "1px solid #666"
    },
    "box-style-3:hover default-bg": {
        "backgroundColor": "#fff",
        "border": "1px solid #e84c3d"
    },
    "box-style-3:hover default-bg *": {
        "color": "#e84c3d"
    },
    "box-style-3:hover dark-bg": {
        "backgroundColor": "#fff",
        "border": "1px solid #666"
    },
    "box-style-3:hover dark-bg *": {
        "color": "#666"
    },
    "box-style-3:hover white-bg *": {
        "color": "#e84c3d"
    },
    "panel-body i": {
        "width": 35,
        "textAlign": "center"
    },
    "image-box": {
        "backgroundColor": "#fafafa",
        "border": "1px solid #f3f3f3"
    },
    "grid-space-0 image-box": {
        "border": "none"
    },
    "image-box h3title": {
        "marginTop": 0
    },
    "image-box btn": {
        "whiteSpace": "normal",
        "borderColor": "transparent"
    },
    "image-box btn-block": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "image-box-body": {
        "paddingTop": 20,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "tags-cloud": {
        "fontSize": 0
    },
    "tag": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "tag a": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "color": "#999",
        "display": "block",
        "fontSize": 12,
        "backgroundColor": "#fafafa",
        "border": "1px solid #f3f3f3"
    },
    "tag a:hover": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d",
        "borderColor": "#e84c3d",
        "textDecoration": "none"
    },
    "footer:not(light) footer-content tag a": {
        "backgroundColor": "transparent",
        "borderColor": "#555",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2
    },
    "dark-bg tag a": {
        "backgroundColor": "transparent",
        "borderColor": "#555",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2
    },
    "social-links": {
        "listStyle": "none",
        "fontSize": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "social-links li": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "social-links li a": {
        "width": 45,
        "height": 45,
        "display": "block",
        "textAlign": "center",
        "fontSize": 20,
        "background": "#e84c3d",
        "border": "1px solid #e84c3d",
        "color": "#fff"
    },
    "social-linkslarge li a": {
        "width": 60,
        "height": 60,
        "fontSize": 24
    },
    "social-linkslight li a": {
        "background": "#fafafa",
        "border": "1px solid #f3f3f3",
        "color": "inherit"
    },
    "social-linksdark li a": {
        "background": "#454545",
        "border": "1px solid #333333",
        "color": "#acacac"
    },
    "social-linksradius-5px li a": {
        "WebkitBorderRadius": 5,
        "MozBorderRadius": 5,
        "borderRadius": 5
    },
    "social-linkscircle li a": {
        "WebkitBorderRadius": "100%",
        "MozBorderRadius": "100%",
        "borderRadius": "100%"
    },
    "social-links li a:hover": {
        "backgroundColor": "transparent",
        "borderColor": "#cd3c2e",
        "color": "#cd3c2e"
    },
    "social-linksdark li a:hover": {
        "background": "#fafafa",
        "border": "1px solid #acacac",
        "color": "inherit"
    },
    "social-linkslight li a:hover": {
        "border": "1px solid #d2d2d2",
        "color": "#333333"
    },
    "social-links li a i": {
        "lineHeight": 44
    },
    "social-linkslarge li a i": {
        "lineHeight": 60
    },
    "header-top social-links": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "header-top social-links li": {
        "paddingTop": 3,
        "paddingRight": 5,
        "paddingBottom": 2,
        "paddingLeft": 5,
        "borderRight": "1px solid #e3e3e3",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "header-top social-links li:hover": {
        "backgroundColor": "#fafafa"
    },
    "header-top social-links li a": {
        "fontSize": 16,
        "border": "none",
        "width": 25,
        "height": 30,
        "color": "#999999",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links li:last-child": {
        "borderRight": "none"
    },
    "header-top social-links li a:hover": {
        "color": "#cd3c2e"
    },
    "header-top social-links li a i": {
        "lineHeight": 30
    },
    "footer-content social-links": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "footer-content social-links li": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "footer-content social-links li a": {
        "color": "#666",
        "backgroundColor": "transparent",
        "borderColor": "#666"
    },
    "footer-content social-links li a:hover": {
        "color": "#fff",
        "backgroundColor": "#666",
        "borderColor": "#666"
    },
    "social-links litwitter a:hover": {
        "backgroundColor": "#55acee",
        "borderColor": "#55acee",
        "color": "#fff"
    },
    "coloredsocial-links litwitter a": {
        "backgroundColor": "#55acee",
        "borderColor": "#55acee",
        "color": "#fff"
    },
    "social-links liskype a:hover": {
        "backgroundColor": "#00aff0",
        "borderColor": "#00aff0",
        "color": "#fff"
    },
    "coloredsocial-links liskype a": {
        "backgroundColor": "#00aff0",
        "borderColor": "#00aff0",
        "color": "#fff"
    },
    "social-links lilinkedin a:hover": {
        "backgroundColor": "#0976b4",
        "borderColor": "#0976b4",
        "color": "#fff"
    },
    "coloredsocial-links lilinkedin a": {
        "backgroundColor": "#0976b4",
        "borderColor": "#0976b4",
        "color": "#fff"
    },
    "social-links ligoogleplus a:hover": {
        "backgroundColor": "#dd4b39",
        "borderColor": "#dd4b39",
        "color": "#fff"
    },
    "coloredsocial-links ligoogleplus a": {
        "backgroundColor": "#dd4b39",
        "borderColor": "#dd4b39",
        "color": "#fff"
    },
    "social-links liyoutube a:hover": {
        "backgroundColor": "#b31217",
        "borderColor": "#b31217",
        "color": "#fff"
    },
    "coloredsocial-links liyoutube a": {
        "backgroundColor": "#b31217",
        "borderColor": "#b31217",
        "color": "#fff"
    },
    "social-links liflickr a:hover": {
        "backgroundColor": "#ff0084",
        "borderColor": "#ff0084",
        "color": "#fff"
    },
    "coloredsocial-links liflickr a": {
        "backgroundColor": "#ff0084",
        "borderColor": "#ff0084",
        "color": "#fff"
    },
    "social-links lifacebook a:hover": {
        "backgroundColor": "#3b5998",
        "borderColor": "#3b5998",
        "color": "#fff"
    },
    "coloredsocial-links lifacebook a": {
        "backgroundColor": "#3b5998",
        "borderColor": "#3b5998",
        "color": "#fff"
    },
    "social-links lipinterest a:hover": {
        "backgroundColor": "#cb2027",
        "borderColor": "#cb2027",
        "color": "#fff"
    },
    "coloredsocial-links lipinterest a": {
        "backgroundColor": "#cb2027",
        "borderColor": "#cb2027",
        "color": "#fff"
    },
    "social-links liinstagram a:hover": {
        "backgroundColor": "#517fa4",
        "borderColor": "#517fa4",
        "color": "#fff"
    },
    "coloredsocial-links liinstagram a": {
        "backgroundColor": "#517fa4",
        "borderColor": "#517fa4",
        "color": "#fff"
    },
    "social-links livimeo a:hover": {
        "backgroundColor": "#aad450",
        "borderColor": "#aad450",
        "color": "#fff"
    },
    "coloredsocial-links livimeo a": {
        "backgroundColor": "#aad450",
        "borderColor": "#aad450",
        "color": "#fff"
    },
    "social-links litumblr a:hover": {
        "backgroundColor": "#32506d",
        "borderColor": "#32506d",
        "color": "#fff"
    },
    "coloredsocial-links litumblr a": {
        "backgroundColor": "#32506d",
        "borderColor": "#32506d",
        "color": "#fff"
    },
    "social-links lisoundcloud a:hover": {
        "backgroundColor": "#ff3a00",
        "borderColor": "#ff3a00",
        "color": "#fff"
    },
    "coloredsocial-links lisoundcloud a": {
        "backgroundColor": "#ff3a00",
        "borderColor": "#ff3a00",
        "color": "#fff"
    },
    "social-links lifoursquare a:hover": {
        "backgroundColor": "#0072b1",
        "borderColor": "#0072b1",
        "color": "#fff"
    },
    "coloredsocial-links lifoursquare a": {
        "backgroundColor": "#0072b1",
        "borderColor": "#0072b1",
        "color": "#fff"
    },
    "social-links lidribbble a:hover": {
        "backgroundColor": "#ea4c89",
        "borderColor": "#ea4c89",
        "color": "#fff"
    },
    "coloredsocial-links lidribbble a": {
        "backgroundColor": "#ea4c89",
        "borderColor": "#ea4c89",
        "color": "#fff"
    },
    "social-links libehance a:hover": {
        "backgroundColor": "#053eff",
        "borderColor": "#053eff",
        "color": "#fff"
    },
    "coloredsocial-links libehance a": {
        "backgroundColor": "#053eff",
        "borderColor": "#053eff",
        "color": "#fff"
    },
    "social-links livine a:hover": {
        "backgroundColor": "#00a478",
        "borderColor": "#00a478",
        "color": "#fff"
    },
    "coloredsocial-links livine a": {
        "backgroundColor": "#00a478",
        "borderColor": "#00a478",
        "color": "#fff"
    },
    "social-links listumbleupon a:hover": {
        "backgroundColor": "#f74425",
        "borderColor": "#f74425",
        "color": "#fff"
    },
    "coloredsocial-links listumbleupon a": {
        "backgroundColor": "#f74425",
        "borderColor": "#f74425",
        "color": "#fff"
    },
    "header-top social-links litwitter a:hover": {
        "color": "#55acee",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links liskype a:hover": {
        "color": "#00aff0",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links lilinkedin a:hover": {
        "color": "#0976b4",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links ligoogleplus a:hover": {
        "color": "#dd4b39",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links liyoutube a:hover": {
        "color": "#b31217",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links liflickr a:hover": {
        "color": "#ff0084",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links lifacebook a:hover": {
        "color": "#3b5998",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links lipinterest a:hover": {
        "color": "#cb2027",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links liinstagram a:hover": {
        "color": "#517fa4",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links livimeo a:hover": {
        "color": "#aad450",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links litumblr a:hover": {
        "color": "#32506d",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links lisoundcloud a:hover": {
        "color": "#ff3a00",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links lifoursquare a:hover": {
        "color": "#0072b1",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links lidribbble a:hover": {
        "color": "#ea4c89",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links libehance a:hover": {
        "color": "#053eff",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links livine a:hover": {
        "color": "#00a478",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "header-top social-links listumbleupon a:hover": {
        "color": "#f74425",
        "backgroundColor": "transparent",
        "borderColor": "transparent"
    },
    "social-links dropdown>button": {
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "fontSize": 16,
        "color": "#999",
        "textAlign": "center",
        "minWidth": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "transparent",
        "MozBoxShadow": "none !important",
        "OBoxShadow": "none !important",
        "WebkitBoxShadow": "none !important",
        "boxShadow": "none !important"
    },
    "social-links dropdown>button i": {
        "width": 15
    },
    "social-links dropdownopen>button>i:before": {
        "content": "\\f00d",
        "color": "#e84c3d"
    },
    "social-links dropdown-menu": {
        "zIndex": 103,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minWidth": 290,
        "marginTop": 1,
        "fontSize": 0,
        "boxShadow": "none",
        "backgroundColor": "#fafafa"
    },
    "social-links dropdown-menu li a": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "social-links dropdown-menu li a i": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "header-top-dropdown": {
        "float": "right",
        "fontSize": 0,
        "textAlign": "right"
    },
    "header-top-dropdown dropdown>button": {
        "borderRight": "1px solid #e3e3e3",
        "borderLeft": "1px solid transparent",
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 12,
        "color": "#999",
        "textAlign": "center",
        "minWidth": 0,
        "backgroundColor": "transparent",
        "MozBoxShadow": "none !important",
        "OBoxShadow": "none !important",
        "WebkitBoxShadow": "none !important",
        "boxShadow": "none !important",
        "textTransform": "none"
    },
    "header-top-dropdown dropdown:last-child>button": {
        "borderRightColor": "transparent"
    },
    "header-top-dropdown dropdown>button i": {
        "paddingRight": 5,
        "width": 15
    },
    "header-top-dropdown dropdownopen>button": {
        "color": "#e84c3d",
        "backgroundColor": "#fafafa",
        "borderRightColor": "#e3e3e3"
    },
    "header-top-dropdown dropdown>button:hover": {
        "color": "#e84c3d",
        "backgroundColor": "#fafafa",
        "borderRightColor": "#e3e3e3"
    },
    "header-top-dropdown dropdown:first-childopen>button": {
        "borderLeftColor": "#e3e3e3"
    },
    "header-top-dropdown dropdown:first-child>button:hover": {
        "borderLeftColor": "#e3e3e3"
    },
    "header header-top-dropdown dropdown>button": {
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10
    },
    "header header-top-dropdown dropdownopen>button": {
        "backgroundColor": "transparent"
    },
    "header header-top-dropdown dropdown>button:hover": {
        "backgroundColor": "transparent"
    },
    "header header-top-dropdown dropdown:first-childopen>button": {
        "borderLeftColor": "transparent"
    },
    "header header-top-dropdown dropdown:first-child>button:hover": {
        "borderLeftColor": "transparent"
    },
    "header header-top-dropdown dropdown:last-childopen>button": {
        "borderRightColor": "transparent"
    },
    "header header-top-dropdown dropdown:last-child>button:hover": {
        "borderRightColor": "transparent"
    },
    "header header-top-dropdown dropdown-menu": {
        "marginTop": 27
    },
    "header-top-dropdown dropdown-menu": {
        "zIndex": 103,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "minWidth": 280,
        "marginTop": 0
    },
    "header-top-dropdown search-box form-group": {
        "marginBottom": 0
    },
    "header-top-dropdown form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "header-top-dropdown login-form span": {
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 0,
        "marginLeft": 3
    },
    "header-top-dropdown login-form ul": {
        "paddingLeft": 0,
        "listStylePosition": "inside",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5
    },
    "header-top-dropdown login-form social-links": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "header header-top-dropdown": {
        "marginTop": 19
    },
    "fixed-header-on header header-top-dropdown": {
        "marginTop": 13
    },
    "fixed-header-on header header-top-dropdown dropdown-menu": {
        "marginTop": 19
    },
    "galleryrow": {
        "marginLeft": -5,
        "marginRight": -5
    },
    "gallery-item": {
        "paddingRight": 5,
        "paddingLeft": 5,
        "marginBottom": 10
    },
    "ultweets": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ultweets li": {
        "marginBottom": 20,
        "position": "relative",
        "paddingLeft": 35
    },
    "ultweets li i": {
        "position": "absolute",
        "top": 4,
        "left": 0,
        "width": 25,
        "height": 25,
        "textAlign": "center",
        "color": "#666666"
    },
    "ultweets li p": {
        "marginBottom": 5
    },
    "ultweets li span": {
        "fontSize": 12,
        "color": "#666666"
    },
    "testimonial": {
        "marginTop": 25,
        "marginRight": 0,
        "marginBottom": 25,
        "marginLeft": 0
    },
    "well testimonial": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "owl-item testimonial": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "testimonial h2": {
        "marginBottom": 25
    },
    "testimonial-image": {
        "maxWidth": 160,
        "float": "left",
        "WebkitBorderRadius": "100%",
        "MozBorderRadius": "100%",
        "borderRadius": "100%"
    },
    "testimonial-body": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "testimonial-image + testimonial-body": {
        "marginLeft": 180
    },
    "testimonial-info-1": {
        "fontSize": 13,
        "color": "#000",
        "fontStyle": "italic"
    },
    "testimonial-info-2": {
        "fontSize": 13,
        "color": "#000",
        "fontWeight": "700"
    },
    "dark-bg testimonial-info-1": {
        "color": "inherit"
    },
    "dark-bg testimonial-info-2": {
        "color": "inherit"
    },
    "default-bg testimonial-info-1": {
        "color": "inherit"
    },
    "default-bg testimonial-info-2": {
        "color": "inherit"
    },
    "dark-translucent-bg testimonial-info-1": {
        "color": "inherit"
    },
    "dark-translucent-bg testimonial-info-2": {
        "color": "inherit"
    },
    "isotope-container": {
        "display": "none",
        "marginBottom": 40
    },
    "isotope-item": {
        "marginBottom": 30
    },
    "grid-space-20 isotope-item": {
        "marginBottom": 20
    },
    "grid-space-10 isotope-item": {
        "marginBottom": 0
    },
    "stat-num": {
        "fontSize": 36,
        "fontWeight": "700",
        "display": "block"
    },
    "pricing-tables": {
        "marginTop": 60,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "plan": {
        "textAlign": "center",
        "border": "1px solid #c5c5c5",
        "borderTop": "none",
        "marginBottom": "40px !important"
    },
    "plan + plan": {
        "borderLeft": "none"
    },
    "plan header": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": -1,
        "marginBottom": 0,
        "marginLeft": -1
    },
    "plan header h3": {
        "display": "inline-block",
        "fontSize": 24,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 28,
        "fontWeight": "normal",
        "letterSpacing": 0.04,
        "textTransform": "uppercase",
        "textShadow": "0px 1px 1px #494949"
    },
    "plan header price": {
        "display": "inline-block",
        "fontSize": 16,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "400",
        "color": "inherit"
    },
    "plan header price span": {
        "textTransform": "uppercase"
    },
    "plan ul": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 14
    },
    "plan ul li": {
        "paddingTop": 12,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0,
        "fontSize": 13,
        "lineHeight": 18,
        "textShadow": "1px 1px 0 #fff"
    },
    "plan ul li apt-popover": {
        "color": "#000",
        "borderBottom": "1px dashed #000",
        "position": "relative"
    },
    "plan ul li apt-popover:hover": {
        "textDecoration": "none"
    },
    "plan ul li apt-popover:after": {
        "position": "absolute",
        "top": 0,
        "left": -15,
        "fontFamily": "FontAwesome",
        "content": "\\f059",
        "color": "#DDDDDD",
        "fontSize": 12
    },
    "best-valueplan ul li": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "plan popover": {
        "width": 250,
        "fontSize": 13,
        "textAlign": "center",
        "border": "none",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "plan popover-title": {
        "backgroundColor": "#e84c3d",
        "color": "#ffffff",
        "textShadow": "none",
        "fontSize": 13,
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "plan popover-content": {
        "fontSize": 12
    },
    "plan btn": {
        "textShadow": "none"
    },
    "gray plan": {
        "borderTop": "1px solid #c5c5c5",
        "backgroundColor": "#f1f1f1",
        "WebkitBoxShadow": "-1px 0 0px rgba(0, 0, 0, 0.15)",
        "boxShadow": "-1px 0 0px rgba(0, 0, 0, 0.15)"
    },
    "gray plan header": {
        "background": "#fafafa",
        "border": "1px solid #cacaca",
        "width": 150,
        "height": 150,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "borderRadius": "100%"
    },
    "gray plan header h3": {
        "color": "#e84c3d",
        "display": "block",
        "marginTop": 30
    },
    "gray plan header price": {
        "fontSize": 24,
        "paddingTop": 5
    },
    "gray plan ul": {
        "background": "#f1f1f1",
        "borderTop": "1px solid #e4e4e4"
    },
    "gray plan ul li": {
        "borderBottom": "1px solid #e4e4e4",
        "borderTop": "1px solid #f8f8f8",
        "color": "#333333"
    },
    "white plan": {
        "borderColor": "#f3f3f3"
    },
    "white plan header": {
        "color": "#fff",
        "background": "#e84c3d"
    },
    "white plan header h3": {
        "color": "#fff"
    },
    "white plan ul": {
        "WebkitBoxShadow": "0 2px 2px rgba(0, 0, 0, 0.1)",
        "boxShadow": "0 2px 2px rgba(0, 0, 0, 0.1)",
        "backgroundColor": "#fbfbfb"
    },
    "white plan ul li": {
        "borderBottom": "1px solid #f5f5f5"
    },
    "stripped header": {
        "background": "#e84c3d",
        "border": "none",
        "WebkitBoxShadow": "0px 0px 60px #cd3c2e inset",
        "MozBoxShadow": "0px 0px 60px #cd3c2e inset",
        "boxShadow": "0px 0px 60px #cd3c2e inset",
        "color": "#fff"
    },
    "stripped header h3": {
        "color": "#fff"
    },
    "stripped plan ul": {
        "WebkitBoxShadow": "0px 0px 32px 0px #cacaca inset",
        "MozBoxShadow": "0px 0px 32px 0px #cacaca inset",
        "boxShadow": "0px 0px 32px 0px #cacaca inset",
        "background": "#fdfdfd"
    },
    "stripped plan ul li": {
        "border": "1px solid #ececec",
        "borderTop": "none",
        "color": "#666"
    },
    "stripped plan ul li:nth-child(even)": {
        "WebkitBoxShadow": "0px 0px 40px #e4e4e4 inset",
        "MozBoxShadow": "0px 0px 40px #e4e4e4 inset",
        "boxShadow": "0px 0px 40px #e4e4e4 inset",
        "background": "#ffffff",
        "borderRight": "1px solid #e2e2e2",
        "borderBottom": "1px solid #e2e2e2"
    },
    "map-canvas": {
        "height": 450
    },
    "sidebar map-canvas": {
        "height": 350
    },
    "map-canvas img": {
        "maxWidth": "inherit"
    },
    "scrollToTop": {
        "color": "#fff",
        "position": "fixed",
        "bottom": 5,
        "right": 5,
        "width": 50,
        "height": 50,
        "textAlign": "center",
        "cursor": "pointer",
        "backgroundColor": "#000000",
        "zIndex": 1005,
        "display": "none"
    },
    "scrollToTop i": {
        "lineHeight": 50,
        "fontSize": 24
    },
    "slider-banner-container": {
        "width": "100%",
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "slider-banner": {
        "width": "100%",
        "position": "relative"
    },
    "slider-banner-2": {
        "width": "100%",
        "position": "relative"
    },
    "slider-banner-3": {
        "width": "100%",
        "position": "relative"
    },
    "slider-banner-fullscreen": {
        "width": "100%",
        "position": "relative"
    },
    "slider-banner>ul": {
        "display": "none"
    },
    "slider-banner-2>ul": {
        "display": "none"
    },
    "slider-banner-3>ul": {
        "display": "none"
    },
    "slider-banner-fullscreen>ul": {
        "display": "none"
    },
    "tp-loaderspinner0": {
        "background": "url(\"../images/loader.gif\") no-repeat center center",
        "boxShadow": "none",
        "WebkitBoxShadow": "none",
        "WebkitAnimation": "none",
        "animation": "none",
        "borderRadius": 0,
        "MozBorderRadius": 0,
        "WebkitBorderRadius": 0,
        "width": 44,
        "height": 44,
        "marginTop": -22,
        "marginLeft": -22
    },
    "tp-loaderspinner4 dot1": {
        "backgroundColor": "#666666",
        "boxShadow": "0px 0px 20px 0px rgba(255, 255, 255, 0.80)",
        "WebkitBoxShadow": "0px 0px 20px 0px rgba(255, 255, 255, 0.80)"
    },
    "tp-loaderspinner4 dot2": {
        "backgroundColor": "#666666",
        "boxShadow": "0px 0px 20px 0px rgba(255, 255, 255, 0.80)",
        "WebkitBoxShadow": "0px 0px 20px 0px rgba(255, 255, 255, 0.80)"
    },
    "slideshow-boxed": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0
    },
    "slideshow-boxed slider-banner-container": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "#fff",
        "border": "1px solid #eaeaea"
    },
    "slideshow-boxed tp-caption": {
        "marginLeft": "20px !important"
    },
    "tp-caption": {
        "zIndex": 5
    },
    "tp-caption abtn": {
        "color": "#ffffff"
    },
    "tp-caption abtn:hover": {
        "color": "#ffffff"
    },
    "default_bg": {
        "backgroundColor": "#e84c3d",
        "color": "#fff"
    },
    "white_bg": {
        "backgroundColor": "#ffffff",
        "color": "#333333"
    },
    "dark_gray_bg": {
        "backgroundColor": "#666666",
        "color": "#fff"
    },
    "light_gray_bg": {
        "backgroundColor": "#fafafa",
        "color": "#333",
        "border": "1px solid #f3f3f3!important",
        "borderLeft": "none!important"
    },
    "tp-captionsmall_thin_white": {
        "fontSize": 18,
        "lineHeight": 26,
        "color": "#e1e1e1",
        "fontWeight": "300",
        "textShadow": "1px 1px 1px #000000"
    },
    "tp-captionsmall_thin_dark": {
        "fontSize": 18,
        "lineHeight": 26,
        "color": "#000",
        "fontWeight": "400"
    },
    "tp-captionlarge": {
        "fontSize": 36,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "tp-captionmedium": {
        "fontSize": 22,
        "paddingTop": 2,
        "paddingRight": 10,
        "paddingBottom": 2,
        "paddingLeft": 10
    },
    "tp-captionsmall": {
        "fontSize": 14,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "tparrowsround": {
        "backgroundImage": "none",
        "width": 50,
        "height": 50,
        "textAlign": "center",
        "color": "#fff",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "top": "50% !important",
        "WebkitTransition": "all linear 0.2s",
        "MozTransition": "all linear 0.2s",
        "OTransition": "all linear 0.2s",
        "MsTransition": "all linear 0.2s",
        "transition": "all linear 0.2s",
        "WebkitBorderRadius": "100%",
        "MozBorderRadius": "100%",
        "borderRadius": "100%"
    },
    "tparrowsround:before": {
        "fontFamily": "'fontello'",
        "fontSize": 24,
        "content": "'\\e87c'",
        "lineHeight": 52,
        "display": "inline-block"
    },
    "tparrowsroundtp-rightarrow:before": {
        "content": "'\\e87d'"
    },
    "tparrowsround:hover": {
        "color": "#ffffff",
        "backgroundColor": "#e84c3d"
    },
    "slideshow-boxed slider-banner-container tparrows": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "slideshow-boxed slider-banner-container:hover tparrows": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "tp-bullets": {
        "zIndex": 100
    },
    "tp-bulletssimplebulletsround bullet": {
        "backgroundImage": "none",
        "width": 14,
        "height": 14,
        "background": "rgba(0, 0, 0, 0.5)",
        "border": "none",
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 0,
        "marginLeft": 3,
        "WebkitTransition": "all linear 0.2s",
        "MozTransition": "all linear 0.2s",
        "OTransition": "all linear 0.2s",
        "MsTransition": "all linear 0.2s",
        "transition": "all linear 0.2s",
        "WebkitBorderRadius": "100%",
        "MozBorderRadius": "100%",
        "borderRadius": "100%"
    },
    "bullets-with-bg + tp-bulletspreview4": {
        "height": "auto",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15,
        "bottom": "-6px !important",
        "borderRadius": 3
    },
    "tp-bulletssimplebulletsround bullet:hover": {
        "backgroundColor": "#e84c3d"
    },
    "tp-bulletssimplebulletsround bulletselected": {
        "backgroundColor": "#e84c3d"
    },
    "tp-bannertimer": {
        "backgroundImage": "none",
        "backgroundColor": "rgba(232, 76, 61, 0.7)",
        "zIndex": 100,
        "display": "none"
    },
    "slideshow-boxed tp-bullets": {
        "bottom": "-33px !important"
    },
    "slideshow-boxed bullets-with-bg + tp-bulletspreview4": {
        "paddingTop": 7,
        "paddingRight": 15,
        "paddingBottom": 2,
        "paddingLeft": 15,
        "bottom": "-45px !important"
    },
    "slideshow-boxed tp-rightarrow": {
        "right": "10px !important"
    },
    "slideshow-boxed tp-leftarrow": {
        "left": "10px !important"
    },
    "slideshow-boxed tp-bulletshidebullets": {
        "opacity": "1 !important",
        "filter": "alpha(opacity=100) !important"
    },
    "owl-carousel": {
        "zIndex": 4
    },
    "owl-carousel owl-item>div": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "owl-carouselcarousel owl-item>div": {
        "marginTop": 10,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "owl-carouselcarousel-autoplay owl-item>div": {
        "marginTop": 10,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "owl-carouselclients owl-item>div": {
        "marginTop": 0,
        "marginRight": 30,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "wellowl-carousel owl-item>div": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "tab-content owl-carousel owl-item>div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "caption": {
        "backgroundColor": "rgba(255, 255, 255, 0.85)",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "position": "absolute",
        "bottom": 80,
        "left": 80,
        "width": "40%",
        "border": "1px solid #ffffff"
    },
    "caption title": {
        "marginTop": 0
    },
    "owl-controls": {
        "width": "100%",
        "marginBottom": 50
    },
    "owl-controls owl-buttons div": {
        "display": "inline-block",
        "zoom": 1,
        "paddingTop": 3,
        "paddingRight": 10,
        "paddingBottom": 3,
        "paddingLeft": 10,
        "fontSize": 12,
        "position": "absolute",
        "width": 30,
        "height": 30,
        "WebkitTransition": "all 0.2s ease-in-out",
        "MozTransition": "all 0.2s ease-in-out",
        "OTransition": "all 0.2s ease-in-out",
        "MsTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "owl-prev": {
        "left": 0,
        "backgroundColor": "#e84c3d",
        "color": "#f1f1f1"
    },
    "owl-next": {
        "left": 30,
        "backgroundColor": "#f1f1f1",
        "color": "#e84c3d"
    },
    "owl-prev:hover": {
        "backgroundColor": "#333333",
        "color": "#f1f1f1"
    },
    "owl-next:hover": {
        "backgroundColor": "#333333",
        "color": "#f1f1f1"
    },
    "gray-bg owl-next:hover": {
        "backgroundColor": "#333333",
        "color": "#f1f1f1"
    },
    "gray-bg owl-next": {
        "backgroundColor": "#ffffff"
    },
    "owl-controls owl-buttons div:after": {
        "fontFamily": "fontello",
        "fontSize": 18,
        "lineHeight": 26
    },
    "owl-prev:after": {
        "content": "\\e87c"
    },
    "owl-next:after": {
        "content": "\\e87d"
    },
    "no-touch owl-controlsclickable owl-buttons div:hover": {
        "filter": "Alpha(Opacity=100)",
        "opacity": 1,
        "textDecoration": "none"
    },
    "content-slider-with-controls": {
        "marginBottom": 20
    },
    "content-slider-with-controls owl-controls": {
        "marginBottom": 0
    },
    "content-slider-with-controls-autoplay owl-controls": {
        "marginBottom": 0
    },
    "content-slider-with-controls owl-buttons div": {
        "top": "50%",
        "marginTop": -15,
        "backgroundColor": "#e84c3d",
        "color": "#f1f1f1"
    },
    "content-slider-with-controls-autoplay owl-buttons div": {
        "top": "50%",
        "marginTop": -15,
        "backgroundColor": "#e84c3d",
        "color": "#f1f1f1"
    },
    "content-slider-with-controls owl-buttons divowl-next": {
        "left": "auto",
        "right": 0
    },
    "content-slider-with-controls-autoplay owl-buttons divowl-next": {
        "left": "auto",
        "right": 0
    },
    "content-slider-with-controls owl-prev:hover": {
        "backgroundColor": "#f1f1f1",
        "color": "#e84c3d"
    },
    "content-slider-with-controls owl-next:hover": {
        "backgroundColor": "#f1f1f1",
        "color": "#e84c3d"
    },
    "content-slider-with-controls-autoplay owl-prev:hover": {
        "backgroundColor": "#f1f1f1",
        "color": "#e84c3d"
    },
    "content-slider-with-controls-autoplay owl-next:hover": {
        "backgroundColor": "#f1f1f1",
        "color": "#e84c3d"
    },
    "content-slider-with-controls-bottom owl-controls owl-pagination": {
        "bottom": -30
    },
    "content-slider-with-controls-bottom owl-controls owl-page span": {
        "background": "#acacac"
    },
    "owl-controls owl-pagination": {
        "position": "absolute",
        "bottom": 25,
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "block",
        "width": "100%"
    },
    "owl-controls owl-page": {
        "display": "inline-block",
        "zoom": 1
    },
    "owl-controls owl-page span": {
        "display": "block",
        "width": 12,
        "height": 12,
        "marginTop": 5,
        "marginRight": 4,
        "marginBottom": 5,
        "marginLeft": 4,
        "background": "#ffffff"
    },
    "owl-controls owl-pageactive span": {
        "background": "#e84c3d"
    },
    "owl-controlsclickable owl-page:hover span": {
        "background": "#e84c3d"
    }
});