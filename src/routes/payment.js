import express from "express";
import {
  deleteTestimoniesByUserId,
  insertTestimony,
  getAllTestimonies,
  deleteTestimony,
  findTestimonyByUserId,
  updateTestimony,
  findTestimoniesByUserId,
  updateManyTestimonies
} from "../controllers/trip";
import { cashingin,cashingout } from "../controllers/trip/index.js";
import { verifyingtoken } from "../middleware";

const payRouter = express.Router();
payRouter.post("/cashout",cashingout)
payRouter.post("/cashin",cashingin)
export default payRouter