import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AppSidebar } from '@/components/app-sidebar'

const RootLayout = () => (
  <SidebarProvider>
    <div className="flex h-screen bg-gray-50">
      <AppSidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <SidebarTrigger className="mb-4 md:hidden block bg-primary text-white px-4 py-2 rounded shadow" />
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  </SidebarProvider>
)

export const Route = createRootRoute({ component: RootLayout })