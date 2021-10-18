
function getFavoriteGenre(users, genres) {
    const res = {};
    const songsToGenre = {};
  
    for (const genre in genres) {
      const songs = genres[genre];
      for (const song of songs) {
        songsToGenre[song] = genre;
      }
    }
  
    for (const user in users) {
      const songs = users[user];
  
      const counts = {};
      let max = 0;
      res[user] = [];
  
      for (const song of songs) {
        const genre = songsToGenre[song];
        if (genre == null) break;
        if (counts[genre] == null) counts[genre] = 0;
        counts[genre]++;
        max = Math.max(max, counts[genre]);
      }
  
      for (const genre in counts) {
        if (counts[genre] === max) {
          res[user].push(genre);
        }
      }
    }
    return res;
}
  