## React Native Shimmer Kit
A JavaScript library used for creating shimmer effect in React Native.

> We use [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient) to set a gradient background. So you should install react-native-linear-gradient.

<img src="https://github.com/taingoo/react-native-shimmer-kit/blob/master/example/src/example.gif">

## Installation

1. Install library
    > using npm
    ```
    npm install react-native-shimmer-kit react-native-linear-gradient --save
    ````
    
    > or using yarn
    ```
    yarn add react-native-shimmer-kit react-native-linear-gradient
    ```
    
2. Link native code
    ```
    cd ios && pod install
    ```
## Usage

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
| **`isLoop`**                 | loop the animation                     | :white_large_square:         | boolean        | true    
| **`customStyle`**            | custom style for shimmer                                      | :white_large_square:         | ViewStyle      | undefined
