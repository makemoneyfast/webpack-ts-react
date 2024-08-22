type CreatePresence = (followers?: number, posts?: number, name?: string) => {
  setPosts: (posts: number) => void;
  getPosts: () => number;
  setName: (name: string) => void;
  getName: () => string;
  setFollowers: (posts: number) => void;
  getFollowers: () => number;
  getDescription: () => string;
};

export const createPresence: CreatePresence = (followers = 0, posts = 0, name = 'anonymous') => {

  return {
    
    setPosts: (newPosts: number) => {
      posts = newPosts;
    },
    getPosts: () => posts,
    setName: (newName: string) => {
      name = newName
    },
    getName: () => name,
    setFollowers: (newFollowers: number) => {
      followers = newFollowers;
    },
    getFollowers: () => followers,
    getDescription: () => {
      return `With ${posts} posts to ${followers} followers, Mikina has approximately ${posts * followers} clout.`
    },

  }
};
