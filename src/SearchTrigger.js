/* eslint-disable no-undef */
import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

const albumInfoComponent = document.getElementById('album-info');
const albumTracksComponent = document.getElementById('album-tracks');

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    spotify.search.albums(searchInput.value)
      .then((data) => {
        renderAlbums(data.albums.items, albumList);
        renderAlbumInfo(data.albums.items[0], albumInfoComponent);
        spotify.album.getAlbum(data.albums.items[0].id)
          .then(trackData => renderAlbumTracks(trackData.tracks.items, albumTracksComponent));
      });
  });
}
