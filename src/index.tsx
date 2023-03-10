import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import RNLinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import type { ShimmerProps } from './types';

const Shimmer: React.FC<ShimmerProps> = ({
  width,
  height,
  borderRadius = 0,
  marginVertical = 0,
  marginHorizontal = 0,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  colors = ['#E6E6E6', '#f5f5f5', '#f5f5f5', '#E6E6E6'],
  duration = 1500,
  islooped = true,
  isReversed = false,
  customStyle,
  children,
  LinearGradientComponent = RNLinearGradient,
}) => {
  const LinearGradientAnim = Animated.createAnimatedComponent(
    LinearGradientComponent
  );
  const value = useRef(new Animated.Value(0)).current;
  const animation = Animated.timing(value, {
    toValue: 1,
    duration,
    useNativeDriver: true,
    easing: Easing.linear,
  });

  useEffect(() => {
    islooped ? Animated.loop(animation).start() : animation.start();
  }, [animation, islooped]);

  return (
    <View
      style={[
        styles.container(
          width,
          height,
          borderRadius,
          marginVertical,
          marginHorizontal,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          colors
        ),
        customStyle,
      ]}
    >
      <LinearGradientAnim
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [
            {
              translateX: value.interpolate({
                inputRange: [0, 1],
                outputRange: isReversed ? [width, -width] : [-width, width],
              }),
            },
          ],
        }}
      />
      <View>{children}</View>
    </View>
  );
};

export default Shimmer;
