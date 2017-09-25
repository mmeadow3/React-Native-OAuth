import React from 'react';
import { Text, View, Image, Linking } from 'react-native';//////view is used to get the view deminsions
import Card from './Card';//////view is used to get the view deminsions
import CardSection from './CardSection';//////view is used to get the view deminsions
import Button from './Button';//////view is used to get the view deminsions

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

  return (
        <Card>
          <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle} >{ title }</Text>
            <Text>{ artist }</Text>
          </View>
          </CardSection>
          <CardSection>
            <Image
            style={imageStyle}
            source={{ uri: image }}
            />
          </CardSection>
          <CardSection>
            <Button onPress={() => Linking.openURL(url)}>
            Buy Now
            </Button>
          </CardSection>
        </Card>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;