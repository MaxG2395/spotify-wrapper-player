/* eslint-disable no-undef */
import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Childish Gambino');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('7arx9qPJexCsDz67El4qvk');
const albumInfo = document.getElementById('album-info');

albums.then((data) => {
  renderAlbums(data.albums.items, albumList);
  renderAlbumInfo(data.albums.items, albumInfo);
  console.log(data);
});
