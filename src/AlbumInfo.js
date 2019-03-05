/* eslint-disable no-param-reassign */
function createMarkup(data) {
  return `
  <div class="album-info">
    <img class="album-image" src="${data.images[0].url}" alt="">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.total_tracks} Músicas</p>
  </div>`;
}

export default function renderAlbumInfo(data, element) {
  element.innerHTML = createMarkup(data);
}
