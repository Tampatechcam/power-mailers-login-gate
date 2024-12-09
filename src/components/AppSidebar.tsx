import { LayoutDashboard, MessageSquare, Calendar, Users, Kanban, Target } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard"
  },
  {
    title: "Conversations",
    icon: MessageSquare,
    url: "/conversations"
  },
  {
    title: "Calendar",
    icon: Calendar,
    url: "/calendar"
  },
  {
    title: "Contacts",
    icon: Users,
    url: "/contacts"
  },
  {
    title: "Kanban",
    icon: Kanban,
    url: "/kanban"
  },
  {
    title: "Opportunities",
    icon: Target,
    url: "/opportunities"
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}