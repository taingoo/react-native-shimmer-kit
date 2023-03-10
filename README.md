## React Native Shimmer Kit
*A JavaScript library used for creating shimmer effect in React Native.*


[![npm](https://img.shields.io/npm/v/react-native-shimmer-kit.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/react-native-shimmer-kit)


<img src="https://github.com/taingoo/react-native-shimmer-kit/blob/master/example/src/example.gif">

## Get Started


### Install library

 > Using **Yarn**
 
    yarn add react-native-shimmer-kit

> Or using **NPM**

    npm install react-native-shimmer-kit --save
    
    
### Install dependencies
<mark>For `React Native CLI`:</mark>

> Using **Yarn**


    yarn add react-native-linear-gradient

    
> Or using **NPM**


    npm install react-native-linear-gradient --save
    
    
Note: checkout [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient) for more information.

    
<mark>For `Expo Go`:</mark>

    expo install expo-linear-gradient
    
    
Note: checkout [expo-linear-gradient](https://www.npmjs.com/package/expo-linear-gradient) for more information.
  
### Configure for iOS

Run `cd ios && pod install`


### Configure for Android
> No additional set up necessary.


## Usage
<mark>React Native CLI:</mark>

```jsx
import Shimmer from 'react-native-shimmer-kit';

const YourShimmer = () => (
  <Shimmer
    width={120}
    height={120}
    borderRadius={60}
    duration={3000}
    colors={['#93C5FD', '#BFDBFE', '#BFDBFE', '#93C5FD']}
  />
);
```

<mark>Expo Go:</mark>

```jsx
import {LinearGradient as ExpoLinearGradient} from 'expo-linear-gradient';
import Shimmer from 'react-native-shimmer-kit';

const YourShimmer = () => (
  <Shimmer
    width={120}
    height={120}
    borderRadius={60}
    duration={3000}
    colors={['#93C5FD', '#BFDBFE', '#BFDBFE', '#93C5FD']}
    LinearGradientComponent={ExpoLinearGradient} // <~ required this for expo project
  />
);
```

## Props

| Prop                         | Description                                            | Required                     | Type           | Default                                   |
| ---------------------------- | -------------------------------------------------------| :----------------------------------------------:| :------------------------------------------:|------
| **`width`**                  | width of shimmer                                       | :white_check_mark:           | number         | undefined 
| **`height`**                 | height of shimmer                                      | :white_check_mark:           | number         | undefined    
| **`borderRadius`**           | the radius of the shimmer's corners                    | :white_large_square:         | number         | 0                               
| **`marginVertical`**         | the top-bottom margin of shimmer                                     | :white_large_square:         | number         | 0
| **`marginHorizontal`**       | the left-right margin of shimmer                                     | :white_large_square:         | number         | 0  
| **`marginTop`**              | the right margin of shimmer                                        | :white_large_square:         | number         | 0     
| **`marginBottom`**           | the bottom margin of shimmer                       | :white_large_square:         | number         | 0                               
| **`marginLeft`**             | the left margin of shimmer                                             | :white_large_square:         | number         | 0
| **`marginRight`**            | the right margin of shimmer                                           | :white_large_square:         | number         | 0  
| **`colors`**                 | array of colors for gradient background                                    | :white_large_square:         | string[]       | ['#E6E6E6', '#f5f5f5', '#f5f5f5', '#E6E6E6']   
| **`duration`**               | duration of shimmer over a row                         | :white_large_square:         | number         | 1500 
| **`islooped`**                 | loop the animation                     | :white_large_square:         | boolean        | true    
| **`isReversed`**                 | reverse direction of the animation                     | :white_large_square:         | boolean        | false    
| **`customStyle`**            | custom style for shimmer                                      | :white_large_square:         | ViewStyle      | undefined
| **`LinearGradientComponent`**            | LinearGradient components ('react-native-linear-gradient' or 'expo-linear-gradient')                               | :white_large_square:         | React component     | react-native-linear-gradient
