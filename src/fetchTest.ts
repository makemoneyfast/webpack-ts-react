export const fetchTest = (searchTerm: string) => {
  const headers = {};
  fetch(`https://happy-cori-e2a104.netlify.app/search?query=${searchTerm}`, {
    method: "GET",
    mode: "cors",
    headers,
  })
    .then(async (response) => {
      console.log("Hi response", response);

      response.headers.forEach(function (val, key) {
        console.log(`HEADER ${key}:${val}`);
      });

      const json = await response.json();
      console.log("JSON??", json);
    })
    .catch(function (error) {
      console.log("oh no its an error!", error);
    });
};
