import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sidebarItems } from "@/lib/sidebarItems";
import clsx from "clsx";

export function AppSidebar() {
  const { location } = useRouterState();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={clsx(
          // Responsive layout: row for expanded, col for collapsed/mobile
          "flex items-center gap-2 transition-all duration-200",
          "md:flex-row md:items-center md:justify-between flex-col justify-center",
          "group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-1",
          "py-2 px-2 md:px-3",
          
        )}
      >
        <SidebarMenu>
          <h1
            className={clsx(
              "font-bold transition-all duration-200",
              "text-base md:text-xl",
              "truncate text-center md:text-left",
              // Hide text in collapsed sidebar, show only on expanded or mobile
              "group-data-[collapsible=icon]:hidden md:group-data-[collapsible=icon]:hidden",
            )}
          >
            Tanstack Showcase
          </h1>
          <span
            className={clsx(
              "font-light text-xs md:text-sm transition-all duration-200",
              "truncate text-center md:text-left",
              // Hide version in collapsed sidebar, show only on expanded or mobile
              "group-data-[collapsible=icon]:hidden md:group-data-[collapsible=icon]:hidden",
            )}
          >
            v1.0.0
          </span>
          {/* Show only icon or compact logo in collapsed sidebar */}
          <span
            className={clsx(
              "hidden group-data-[collapsible=icon]:flex md:group-data-[collapsible=icon]:hidden",
              "items-center justify-center w-full",
            )}
            aria-label="Tanstack"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <rect width="28" height="28" rx="6" fill="#60A5FA" />
              <text
                x="14"
                y="19"
                textAnchor="middle"
                fontSize="16"
                fontWeight="bold"
                fill="white"
                fontFamily="monospace"
              >
                T
              </text>
            </svg>
          </span>
          
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-1 overflow-x-visible overflow-y-auto max-h-[calc(100vh-8rem)] md:max-h-none">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.to;

                return (
                  <SidebarMenuItem key={item.title} className="w-full">
                    <SidebarMenuButton
                      className={clsx(
                        "flex items-center w-full px-2 py-2 md:px-3 md:py-2 rounded transition-all duration-200",
                        "min-w-0",
                        "md:justify-start justify-center",
                        "md:gap-2 gap-0",
                        "md:h-10 h-10",
                        "group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:gap-0",
                        isActive && "bg-muted text-primary",
                      )}
                      title={item.title}
                    >
                      <item.icon
                        className={clsx(
                          "transition-all duration-200",
                          "h-5 w-5 md:h-4 md:w-4",
                          "group-data-[collapsible=icon]:mx-auto",
                        )}
                      />
                      <Link to={item.to} className="flex-1 min-w-0">
                        <span
                          className={clsx(
                            "truncate transition-all duration-200",
                            "hidden md:inline",
                            "group-data-[collapsible=icon]:hidden",
                          )}
                        >
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
