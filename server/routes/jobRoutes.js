import express from 'express'
import { getJobById, getJobs } from '../controllers/job.controller.js';

const router = express.Router()

//Route to get all jobs data
router.get('/',getJobs)

//Route to get single job by id
router.get('/:id', getJobById)


export default router;