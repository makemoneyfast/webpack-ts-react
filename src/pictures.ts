export const getPictures = async () => {
  const qq = await fetch("https://happy-cori-e2a104.netlify.app/search");
  console.log(qq);
  const xx = await qq.body;
  console.log(xx);
};
