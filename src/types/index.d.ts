type LocationData = {
  location: string;
  date: string;
};

type TravelData = {
  distance: number;
  countries: string[];
};

type UnsplashData = {
  total_photos: number;
  downloads: {
    total: number;
  };
  views: {
    total: number;
  };
};
interface PageProps {
  locationData: LocationData;
}
