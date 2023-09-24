const serverErrorResponse = (resp, error) => {
  console.log("SERVER.ERROR ", error);
  return resp.status(500).send({
    message: "internal.server.error",
    error: error.toString(),
  });
};

const successResponse = ({ message, data, status = 200 }) => {
  return {
    status,
    message,
    data,
  };
};

export { serverErrorResponse, successResponse };
