interface Image {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}
  
interface Anime {
    mal_id: number;
    title: string;
    url: string;
    images: {
      jpg: Image;
    };
    // Add other properties from the API response as needed
}
  
interface ApiResponse {
    pagination: {
      // Add pagination properties here
    };
    data: Anime[];
}