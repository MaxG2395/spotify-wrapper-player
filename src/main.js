/* eslint-disable no-undef */
import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import searchEnterTrigger from './SearchTrigger';

searchEnterTrigger();

const albumList = spotify.search.albums('I Love You');
const albumListComponent = document.getElementById('album-list');

const albumInfo = spotify.album.getAlbum('0BePiDVdS09GVoBe30WMAd');
const albumInfoComponent = document.getElementById('album-info');
const albumTracksComponent = document.getElementById('album-tracks');

albumList
  .then(data => renderAlbums(data.albums.items, albumListComponent));

albumInfo
  .then(data => renderAlbumInfo(data, albumInfoComponent))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracksComponent));
