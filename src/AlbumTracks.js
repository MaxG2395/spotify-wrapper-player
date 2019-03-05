/* eslint-disable no-param-reassign */
function createMarkup(data) {
  return `
  <div class="music" data-track-preview="${data[0].preview_url}">
    <p class="music-number">${data[0].track_number}</p>
    <p class="music-title">${data[0].name}</p>
    <p class="music-duration">${data[0].duration_ms}</p>
  </div>`;
}

export default function renderAlbumTracks(data, element) {
  element.innerHTML = createMarkup(data);
}
