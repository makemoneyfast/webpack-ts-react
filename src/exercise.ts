type CreatePresence = () => {
  setPosts: (posts: number) => void;
  getPosts: () => number;
  setName: (name: string) => void;
  getName: () => string;
  setFollowers: (posts: number) => void;
  getFollowers: () => number;
  getDescription: () => string;
};

export const createPresence: CreatePresence = (
  followersInput?: number,
  postsInput?: number,
  nameInput?: string
) => {
  let posts = postsInput || 0;
  let followers = followersInput || 0;
  let name = nameInput || "anonymous";
  const setPosts = (a: number) => {
    posts = a;
  };
  const getPosts = () => posts;
  const setFollowers = (a: number) => {
    followers = a;
  };
  const getFollowers = () => followers;
  const setName = (b: string) => {
    name = b;
  };
  const getName = () => name;
  const getDescription = () =>
    `With ${posts} posts to ${followers} followers, ${name} has approximately ${
      posts * followers
    } clout.`;

  return {
    setPosts,
    getPosts,
    setName,
    getName,
    setFollowers,
    getFollowers,
    getDescription,
  };
};
