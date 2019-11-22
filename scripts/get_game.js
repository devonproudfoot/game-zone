axios({
  url: "https://api-v3.igdb.com/games",
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'user-key': 'c863a5359ddefacbeeeae422bd231ad8'
  },
  data: "fields alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_modes,genres,keywords,name,parent_game,platforms,release_dates,screenshots,similar_games,standalone_expansions,status,storyline,summary,tags,themes,version_title;"
});