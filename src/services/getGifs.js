import { API_KEY, API_URL } from "./settings";

const fromAPiResponseGifs = (response) => {
  const { data } = response;
  //   console.log(data);

  const gifs = data.map((image) => {
    const { images, title, id } = image;
    const { url } = images.downsized_medium;
    return { images, title, id, url };
  });
  return gifs;
};

const getGifs = ({ keyword = "rick" } = {}) => {
  // hace la peticion al endpoint.
  return fetch(`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
    .then((res) => res.json())
    .then(fromAPiResponseGifs);
};

export default getGifs;
