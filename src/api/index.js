import axios from "axios";

export const getPost = async (id) => {
  const post = await axios.get(
    `https://portfolio2022-api-production.up.railway.app/getPost`,
    { params: { id: id } }
  );
  return post.data;
};

export const getPosts = async () => {
  const posts = await axios.get(
    "https://portfolio2022-api-production.up.railway.app/getPosts"
  );
  return posts.data;
};

export const getFeaturePosts = async () => {
  const posts = await axios.get(
    "https://portfolio2022-api-production.up.railway.app/getFeaturePosts"
  );
  return posts.data;
};

export const addSubscriber = async (email) => {
  const tags = [3601975];

  const subscribe = await axios.post(
    "https://portfolio2022-api-production.up.railway.app/addSubscriber",
    null,
    { params: { email: email, tags: tags } }
  );

  return subscribe;
};
