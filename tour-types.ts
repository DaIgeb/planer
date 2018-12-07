export type TTour = {
  id: string;
  name: string;
  types: {
    id: string;
    label: string;
  }[];
  timelines: {
    from: string;    
    until: string;
    locations: string[];
    restaurants: string[];
    distance: number;
    elevation: number;
    difficulty: {
      id: string;
      label: string;
    };
  }[];
};
