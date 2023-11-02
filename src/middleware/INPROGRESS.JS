const handleCastErrorDb = err => {
  const message = `invalid ${err.value}.`;
  return new AppError(message, 404);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};
const sendErrorpro = (err, res) => {
  console.log("in sendpro", err);
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    console.error("error", err);
    res.status(500).json({
      status: "error",
      message: 'something went wrong   said by"sendErrorpro "'
    });
  }
};
export const errosingeneral1 = (req, res, err, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (err.name === "CastError") {
      error = handleCastErrorDb(error);
    }
    sendErrorpro(error, res);
  }
  next();
};
