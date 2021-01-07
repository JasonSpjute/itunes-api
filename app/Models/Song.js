export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data._id;
  }

  get Template() {
    return `
    <div class = "row">
    <div class="col text-center m-3 py-2 rounded border-dark bg-warning shadow">
        <h5>${this.title} - by ${this.artist}</h5>
        <img src="${this.albumArt}" alt="uh oh">
        <p>${this.album}</p>
        <p>$${this.price} <button class = "btn btn-h btn-primary" onclick="app.songsController.addSong('${this.id}')">Add to Playlist</button></p>
        <audio controls><source src="${this.preview}"></audio>
    </div>
  </div>
        `;
  }

  get playlistTemplate() {
    return `
    <div class = "row">
    <div class="col text-center rounded-bottom rounded border-dark m-3 py-2 bg-warning shadow text-light">
        <h5>${this.title} - by ${this.artist}</h5>
        <p>${this.album}</p>
        <audio controls><source src="${this.preview}"></audio>
        <div class="row">
          <div class = "col text-center">
          <button class = "btn btn-h btn-danger" onclick = "app.songsController.removeSong('${this.id}')">Delete</button>
          </div>
        </div>
    </div>
  </div>
  `
  }
}
