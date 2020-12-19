import { BASE_API } from "./settings";

const getAuth = ({ username, password }) => {
  // hace la peticion al endpoint.
  //?username=${username}&password=${password}
  return fetch(`${BASE_API}/auth`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      contrasena: password,
    }),
  })
    .then((res) => {
      // console.log("res...", res);
      if (!res.ok) {
        throw new Error("Response is Not Ok! :( ");
      }

      return res.json();
    })
    .then((res) => {

      const { token } = res;
      return token;
    });
};

export default getAuth;
