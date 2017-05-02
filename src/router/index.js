import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Home from '@/components/Home'
import Login from '@/components/Login'
import About from '@/components/About'
import Quiz from '@/components/quiz/Quiz'
import QuizResult from '@/components/quiz/QuizResult'
import HomePlus from '@/components/plus/HomePlus'
import EmailPwned from '@/components/plus/modules/EmailPwned'
import InternetPremium from '@/components/plus/modules/InternetPremium'
import LegalQuiz from '@/components/plus/modules/LegalQuiz'
import PasswordSecurity from '@/components/plus/modules/PasswordSecurity'
import PhishingTest from '@/components/plus/modules/PhishingTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Landing Page', component: LandingPage },
    { path: '/home', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/about', name: 'About', component: About },
    { path: '/quiz', name: 'Quiz', component: Quiz },
    { path: '/quiz/result', name: 'QuizResult', component: QuizResult },

    // Unlocked Home Plus
    { path: '/home/plus', name: 'HomePlus', component: HomePlus },
    { path: '/home/plus/modules/emailcheck', name: 'EmailPwned', component: EmailPwned },
    { path: '/home/plus/modules/internetpremium', name: 'InternetPremium', component: InternetPremium },
    { path: '/home/plus/modules/legalquiz', name: 'LegalQuiz', component: LegalQuiz },
    { path: '/home/plus/modules/passwordsecurity', name: 'PasswordSecurity', component: PasswordSecurity },
    { path: '/home/plus/modules/phishingtest', name: 'PhishingTest', component: PhishingTest }
  ]
})
