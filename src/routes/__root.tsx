import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AppSidebar } from '@/components/app-sidebar'

const RootLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen h-dvh w-full overflow-hidden">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Header / Trigger */}
          <header className="shrink-0 border-b px-4 py-2">
            <SidebarTrigger />
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>

        <TanStackRouterDevtools />
      </div>
    </SidebarProvider>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
