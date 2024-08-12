type CreatePresence = () => {
  setPosts: (posts: number) => void;
  getPosts: () => number;
  setName: (name: string) => void;
  getName: () => string;
  setFollowers: (posts: number) => void;
  getFollowers: () => number;
  getDescription: () => string;
};

export const createPresence: CreatePresence = () => {};
