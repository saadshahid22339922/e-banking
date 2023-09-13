import { Favorite } from "../models";
import { successResponse } from "../utils/response";

const getAllFavorites = async () => {
  try {
    const res = await Favorite.find({});
    return successResponse({ message: "favorite.found.ok", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const createFavorites = async ({ body }) => {
  try {
    let res = await Favorite.create({
      person: {
        ...body,
      },
    });
    return successResponse({ message: "favorite.created", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default { getAllFavorites, createFavorites };
