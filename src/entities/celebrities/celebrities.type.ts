export type Celebrity = {
  id: number;
  name: string;
  profileImageUrl: string;
};

export type CelebritiesResponseType = {
  content: Celebrity[];
};
