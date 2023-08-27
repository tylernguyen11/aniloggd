import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Anime } from './types';
import './AnimeDetails.css'

interface AnimeDetailsProps {
  anime: Anime;
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({ anime }) => {
  const { mal_id } = useParams<{ mal_id: string }>();
  const [animeDetails, setAnimeDetails] = useState<Anime | null>(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`);
        const data: Anime = await response.json();
        setAnimeDetails(data.data);
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };

    fetchAnimeDetails();
  }, [mal_id]);

  if (!animeDetails) {
    return <div>Loading...</div>;
  }
  
  console.log(animeDetails)
  return (
    <div>
      <div className="anime-details">
        <div className="anime-info">
          <div className="anime-image">
            <img src={animeDetails.images.jpg.image_url} alt={animeDetails.title} />
          </div>
          <div className="anime-summary">
            <h1>{animeDetails.title}</h1>
            <p>{animeDetails.synopsis}</p>
          </div>
        </div>
      </div>
      <button>Add to List</button>
      <div className="reviews">
        <p>Popular Reviews</p>
        <p>Recent Reviews</p>
      </div>
    </div>
  );
};

export default AnimeDetails;