var playlist = {
  artist: "Whitney Houston",
  song: "I look to you"
}

updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}
const playlist = {
  artist: "Whitney Houston",
  song: "I look to you"
}
updatePlaylist(playlist, "Michael Jackson", "The way you make me feel")
