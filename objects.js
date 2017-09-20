var playlist = {
  artist: "Whitney Houston",
  song: "I look to you"
}


function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artist;
  return playlist;
}
