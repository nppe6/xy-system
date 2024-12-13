import { env } from '@/utils'
import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('@/layouts/*.vue', {
  eager: true,
  import: 'default'
})
const childrenRoutes = import.meta.glob('@/views/**/*.vue', {
  eager: true,
  import: 'default'
})

function getRoutes() {
  const layoutsRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouterModule(file, module)
    route.children = getChildrenRoutes(route)
    layoutsRoutes.push(route)
  })

  return layoutsRoutes
}

function getChildrenRoutes(layoutsRoute: RouteRecordRaw) {
  const ChildrenRoutes = [] as RouteRecordRaw[]
  Object.entries(childrenRoutes).forEach(([file, module]) => {
    if (file.includes(`/src/views/${layoutsRoute.name as string}`)) {
      const route = getRouterModule(file, module)
      ChildrenRoutes.push(route)
    }
  })

  return ChildrenRoutes
}

function getRouterModule(file: string, module: any) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    path: `/${name}`,
    name: `${name.replace('/', '-')}`,
    component: module
  } as RouteRecordRaw

  return Object.assign(route, module?.route)
}

const routes = env.VITE_ROUTE_AUTOLOAD ? getRoutes() : ([] as RouteRecordRaw[])
export default routes
