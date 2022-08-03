type GitHubUser = {
  followers: number;
  public_repos: number;
};

type GitHubRepo = {
  stargazers_count: number;
};

type GitHubData = {
  user: GitHubUser;
  repos: GitHubRepo[];
};

type LocationData = {
  location: string;
  latitude?: number;
  longitude?: number;
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
