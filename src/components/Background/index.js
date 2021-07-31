import React, { ReactNode } from "react";

import  LinearGradient  from "react-native-linear-gradient";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";

/**
 * Component to set a background with gradient
 * @param {string} primary
 * @param {string} secondary  
 * @param {ReactNode} children
 * @returns 
 */
export function Background({ children, secondary = false, primary = false }) {

    const { secondary80, secondary100 } = theme.colors;
    let colors =  [secondary80, secondary100];

    return (
        <LinearGradient
            style={styles.container}
            colors={colors}
        >
            {children}
        </LinearGradient>
    );
}