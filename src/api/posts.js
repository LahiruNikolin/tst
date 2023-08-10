import { BASE_URL } from "../config/endpoint";
export const get = async () => await fetch(`${BASE_URL}/post`);

// export const create = async () => {};
// export const update = async () => {};
// export const delete = async () => {};