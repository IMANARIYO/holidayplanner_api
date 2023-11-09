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
import { cashing } from "../controllers/trip/index.js";
import { verifyingtoken } from "../middleware";

const payRouter = express.Router();
payRouter.get("",cashing)
export default payRouter