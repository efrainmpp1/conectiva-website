export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  icon: string;
  imagePath: string;
  videoId: string; // YouTube Video ID
}

export interface ServiceBackend {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ServiceBackendSimplify {
  id: number;
  name: string;
}
