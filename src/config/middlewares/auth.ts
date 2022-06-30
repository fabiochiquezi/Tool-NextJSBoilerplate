import { RouteAuth, routes } from 'general/config'
import { User } from 'firebase/auth'
import Router from 'next/router'

const authMiddlewre = (user: User | null) => {
    if (user) {
        const uid = user.uid
        console.log(user, 'user')
        return
    }

    const currentPath = Router.pathname
    const routesArr = Object.values(routes)
    const isPrivate = routesArr.some(item => {
        const isCurrentRoute = currentPath === item.path
        const isPrivateRoute = item.auth === RouteAuth.private
        const verify = isCurrentRoute && isPrivateRoute
        if (verify) return true
        return false
    })

    if (isPrivate) Router.push('/')
}

export { authMiddlewre }
