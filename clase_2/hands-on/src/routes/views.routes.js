import { Router } from "express";

const router = Router();
router.get('/register', (req,res)=>{
    res.render('register', {title: "REGISTER"})
})
router.get('/login', (req,res)=>{
    res.render('login', {title: "LOGIN"})
})
router.get('/profile', (req,res)=>{
    res.render('profile', {title: "PROFILE",user: req.session.user})
})
export default router;