export const badroutes = (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
};

export const errosingeneral = (err, req, res, next) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }
  console.error("🚫 ERROR 🚫", err);
  return res.status(500).json({
    status: "error",
    message: "Something went wrong!",
    error:err.message
  });
};

 class AppError extends Error {
   constructor(message, statusCode) {
     super(message);
     this.statusCode = statusCode;
     this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
     this.isOperational = true;
     Error.captureStackTrace(this, this.constructor);
   }
 }



export const catchAsync = fn => {
  return(req,res,next)=>{
     fn(req, res, next).catch(next);
  }
};

 