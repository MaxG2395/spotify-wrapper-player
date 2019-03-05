/* eslint-disable no-undef */
import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('I Love You');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('0BePiDVdS09GVoBe30WMAd');
const albumInfo = document.getElementById('album-info');

albums.then((data) => {
  renderAlbums(data.albums.items, albumList);
  console.log(data.albums);
});

album.then((data) => {
  renderAlbumInfo(data, albumInfo);
  console.log(data);
})
  .catch(err => console.log(err));
