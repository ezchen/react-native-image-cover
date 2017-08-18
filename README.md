# IN PROGRESS

# React-Native-Image-Cover
A better version of React Native's Image components resizeMode="Cover". This library allows you to offset the image instead of simply centering the image after the resize.

## Use Case
This library does have a few downsides compared to React Natives Image component
  * You have to know the width/height of the image container before hand

## Install
```shell
npm install --save react-native-image-cover
```

## Example
```js
import ImageCover from require('react-native-image-cover');

...

render() {
	return (
    	<ImageCover
        	imageURI={"http://example.com/image.jpg"}
            offset={{x: 0, y: 0}}
            dimensions={{w: 120, h: 90}} />
    );
}
```

| Prop Name | Expected  | Example  | Notes                                                                                                            |
| :------------------------- | :------------------------------- | :-------------------------------------------------------------------------------------------- | :---------
| imageURI | String or URI | "http://example.com/image.jpg" | |
| offset   | Object with x & y | {x: 0, y:0}, {x: 'top', y: 'top'}, {x: 'center', y: 'center'} | Values most either be a number of 'top', 'bottom', 'left', 'right' |
| dimensions | Object with w & h | {w: 120, h:90} |
