import express from 'express'
import { 
    ChangeJobApplicationsStatus,
    changeVisiblity,
    getCompanyData,
    getCompanyJobApplicants,
    getCompanyPostedJobs,
    loginCompany,
    postJob,
    registerCompany

   } from '../controllers/company.controller.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/auth.middleware.js'

const router = express.Router()

//Register a company

router.post('/register',upload.single('image'), registerCompany)

//Company login

router.post('/login',loginCompany)

//Get company data

router.get('/company',protectCompany, getCompanyData)

//Post a job

router.post('/post-job',protectCompany, postJob)

//Get Applicants data of company

router.get('/applicants',protectCompany, getCompanyJobApplicants)

//Get Company Job List

router.get('/list-jobs',protectCompany, getCompanyPostedJobs)

//Change application status

router.post('/change-status',protectCompany, ChangeJobApplicationsStatus)

//Change Applications Visibility

router.post('/change-visibility',protectCompany, changeVisiblity)

export default router