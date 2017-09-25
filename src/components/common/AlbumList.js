import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';


////////////////////This is a class functional component
///so we need to make class components for better functionality
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>List</Text>
//     </View>
//   );
// };
class AlbumList extends Component {
  state = { albums: [] };//////////initial delcaration at start of load

  componentWillMount() {
    //////cmd + d = bring up debugger
    console.log('mounting');
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // .then(response => console.log(response));
    .then(response => this.setState({ albums: response.data }));//////set state will fire when (this.state) changes
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

export default AlbumList;
