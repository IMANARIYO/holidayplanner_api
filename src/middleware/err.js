import { sendEmail } from "../utils";

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

     export class AppError extends Error {
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
const sendErrorDev=(err,res)=>{
 res
   .status(err.statusCode)
   .json({
     status: err.status,
     error: err,
     message: err.message,
     stack: err.stack
   });
}
const sendErrorpro = (err, res) => {
    if (err.isOperational) {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  
  });}
  else{
    res.status(500).json({
      statu
    })
  }
};




export const duringprocess=(req,res,err,next)=>{
  err.statusCode=err.statusCode||500;
  err.status=err.status||'error';
  if(process.env.NODE_ENV ==='development')
  {
   sendErrorDev(err,res);
  }
  else if(process.env.NODE_ENV === 'production'){
   sendErrorpro(err,res);
  }
}


 