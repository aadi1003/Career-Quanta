import express from "express";
import { saveJobData,getJobData } from "../controllers/jobController.js";
const router=express.Router();

router.post('/save',saveJobData)
router.get("/get",getJobData)
export default router;