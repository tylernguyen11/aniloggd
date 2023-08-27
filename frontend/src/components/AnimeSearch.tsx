import React, { useState } from 'react';
import './AnimeSearch.css'
import { useNavigate } from 'react-router-dom';
import AnimeDetails from './AnimeDetails';
import { ApiResponse } from './types';

const AnimeSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const apiUrl = `https://api.jikan.moe/v4/anime?q=${searchQuery}&sfw`;
      const apiResponse = await fetch(apiUrl);
      const responseData = await apiResponse.json();
      setResponse(responseData);
      console.log(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAnimeClick = (anime: Anime) => {
    console.log(`/anime/${anime.mal_id}`)
    navigate(`/anime/${anime.mal_id}`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter anime name"
      />
      <button onClick={handleSearch}>Search</button>

      {response && (
        <div>
          <h2>Results</h2>
          <div className="anime-list">
            {response.data.map((anime: Anime) => (
              <div className="anime-card" key={anime.mal_id}>
                <h3>{anime.title}</h3>
                {anime.images.jpg.image_url && (
                  
                  <img src={anime.images.jpg.image_url} alt={anime.title} onClick={() => handleAnimeClick(anime)}/>
                  
                )}
              </div>
            ))}
          </div>
          
        </div>
      )}
    </div>
  );
};

export default AnimeSearch;