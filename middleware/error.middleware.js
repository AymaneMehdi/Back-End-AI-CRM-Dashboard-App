import { ApiError } from "../utils/APIError.js";

/** 404 handler for unmatched routes. */
export const notFound = (req, res, next) => {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
};