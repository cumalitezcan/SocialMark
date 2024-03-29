import {createRouter, createWebHashHistory} from "vue-router";
import store from "../store";

const routes = [
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/views/Home")
    },
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import("@/views/Login")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:()=>import("@/views/Register")
    },
    {
        name:"NewBookmarkPage",
        path:"/new",
        component:()=>import("@/views/NewBookmark")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

router.beforeEach((to,from,next)=>{
    const authRequiredRoutes = ["HomePage"];
    const authNotRequiredRoutes = ["LoginPage","RegisterPage"]
    const _isAuthenticated = store.getters._isAuthenticated;
    console.log(to,from)

    if(authNotRequiredRoutes.indexOf(to.name)>-1 && _isAuthenticated) next(false);

    if(authRequiredRoutes.indexOf(to.name)>-1){
        if(_isAuthenticated) next();
        else next({name:"LoginPage"});
    }else {
        next();
    }
    
})


export default router;