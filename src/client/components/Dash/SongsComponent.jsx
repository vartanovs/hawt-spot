import React from 'react';

import SongQueryDisplay from './SongQueryDisplay.jsx';

const SongsComponent = (props) => {
  const { saveSong, searchSongs, songField, songQueryResults, updateSongField } = props;
  const songQueryArray = [];
  if (songQueryResults.length) {
    songQueryResults.forEach((songQueryResultDetail, i) => songQueryArray.push(<SongQueryDisplay key={i} saveSong={saveSong} songQueryResultDetail={songQueryResultDetail} />));
  }
  return (
    <div>
      <div className="songs-header-container">
        <div className="songs-header">
          <strong>Search Songs: </strong>
          <input className="song-search-field" name="songSearchField" onChange={updateSongField} type="text" value={songField} />
          <input className="song-search-submit" name="songSearchSubmit" onClick={searchSongs} type="submit" />
        </div>
      </div>
      <div className="songs-list">
        <strong>Your Songs:</strong>
        {songQueryArray}
      </div>
    </div>
  );
}

export default SongsComponent;
