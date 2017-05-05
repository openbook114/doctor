import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "round_border": {
        "borderRadius": "50%"
    },
    "small-image": {
        "width": 18,
        "height": 18
    },
    "large-image": {
        "width": 50,
        "height": 50
    },
    "image_text_in_line": {
        "float": "left"
    }
});