
const routes = [
  {
    path: '/',
    component: () => import('components/SignUp.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Index.vue') }
      
    // ]
  },
  {
    path: '/signup',
    component: () => import('components/SignUp.vue')
  },
  {
    path: '/signin',
    component: () => import('components/SignIn.vue')
  },
  {
    path: '/forgotPassword',
    component: () => import('components/ForgotPassword.vue')
  },
  {
    path: '/welcome',
    component: () => import('components/Welcome.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
