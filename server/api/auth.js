import { Router } from 'express'
const passport = require('passport')
const FacebookStrategy = require('passport-facebook')
const GoogleStrategy = require('passport-google-oauth20').Strategy

let router = Router()

passport.use(new FacebookStrategy(
  {
    clientID: '165117347354065',
    clientSecret: 'bdfe1229a9a1e7a0f5ca40c6d3ce7b46',
    callbackURL: 'https://damp-eyrie-94637.herokuapp.com/api/auth/facebook/callback'
  },
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile)
  }
))

passport.use(new GoogleStrategy(
  {
    clientID: '245239881657-m74a8b59vb2smp9n5vkktoc4eo5clkvk.apps.googleusercontent.com',
    clientSecret: 'od-Ydeg8NZ3LeY6-ViXZGUxm',
    callbackURL: 'https://damp-eyrie-94637.herokuapp.com/api/auth/google/callback'
  },
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile)
  }
))

passport.serializeUser(function (user, cb) {
  cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
  cb(null, obj)
})

// Facebook Login
router.get('/auth/facebook', passport.authenticate('facebook'))
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/login'
}), (req, res) => {
  req.session['facebook'] = req.session['passport']['user']
  console.log(req.session)
  res.redirect('/home')
})

// Google Login
router.get('/auth/google', passport.authenticate('google', {scope: ['profile']}))
router.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login'
}), (req, res) => {
  req.session['google'] = req.session['passport']['user']
  res.redirect('/home')
})

// Get User
router.get('/auth/me', (req, res, next) => {
  if (req.user) return res.json(req.user)
  return res.json({provider: 'none'})
})

export default router
