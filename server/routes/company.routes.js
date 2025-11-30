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

const router = express.Router()

//Register a company

router.post('/register',upload.single('image'), registerCompany)

//Company login

router.post('/login',loginCompany)

//Get company data

router.get('/company',getCompanyData)

//Post a job

router.post('/post-job', postJob)

//Get Applicants data of company

router.get('/applicants',getCompanyJobApplicants)

//Get Company Job List

router.get('/list-jobs',getCompanyPostedJobs)

//Change application status

router.post('/change-status',ChangeJobApplicationsStatus)

//Change Applications Visibility

router.post('/change-visibility',changeVisiblity)

export default router