import React, {Component} from 'react';
import {
  ImageEditor,
  ImageStore,
  Image
} from 'react-native';

export default class ImageCover extends Component {
  constructor(props) {
    super(props);
    this.state = { imageURI: "" };
    this.fixDimensions(this.props.imageURI);
  }

  componentWillUnmount() {
    ImageStore.removeImageForTag(this.state.imageURI);
  }

  fixDimensions(uri) {
    size = Image.getSize(uri: uri,
      (width, height) => {
        this.cropImage(uri, width, height, this.props.offset, this.props.dimensions);
      });
  }

  cropImage(uri, width, height, offset, dimensions) {
    dimWidth = dimensions.w * 1.0;
    dimHeight = dimensions.h * 1.0;
    let cropWidth = width;
    let cropHeight = height;

    console.log('before dimension change');
    if ((width * 1.0)/height > (dimWidth/dimHeight)) {
      cropWidth = (dimWidth/dimHeight) * height;
    } else {
      cropHeight = (dimHeight/dimWidth) * width;
    }

    const cropData = {
      offset: offset,
      size: { width: cropWidth, height: cropHeight }
    }
    console.log('before crop');
    console.log(cropData);

    ImageEditor.cropImage(
      uri,
      cropData,
      successURI => {
        console.log('after dimension crop');
        this.setState({ imageURI: successURI})
      },
      error => console.log(error.message))
  }

  render() {
    return (
      <Image style={{width: this.props.dimensions.w, height: this.props.dimensions.h}}
        resizeMode="stretch"
        source={{uri: this.state.imageURI}}/>
    )
  }
}
