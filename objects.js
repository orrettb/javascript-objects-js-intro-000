var playlist = {
  artist: "Whitney Houston",
  song: "I look to you"
}


updatePlaylist(playlist, "Michael Jackson", "The way you make me feel")

function removeFromPlaylist(playlist, artistName){
  delete playlist.artist;
  return playlist;
}
