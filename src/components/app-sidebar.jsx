import * as React from "react";
import {
  GalleryVerticalEnd,
  ShoppingBag,
  Columns3,
  ShoppingCart,
  ReceiptText,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "All Items",
      url: "#",
      icon: ShoppingBag,
    },
    {
      title: "Catergory",
      url: "#",
      icon: Columns3,
      items: [
        {
          title: "SKULLPANDA",
          url: "#",
        },
        {
          title: "SPACE MOLLY",
          url: "#",
        },
        {
          title: "CRYBABY",
          url: "#",
        },
      ],
    },
    {
      title: "Cart",
      url: "#",
      icon: ShoppingCart,
    },
    {
      title: "Order Details",
      url: "#",
      icon: ReceiptText,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile Settings",
          url: "#",
        },
        {
          title: "Products Settings",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-stone-800 text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="">
                  {/* <GalleryVerticalEnd className="size-4" /> */}
                  <img
                    src="https://au.popmart.com/cdn/shop/products/1n_d1197d2b-a885-4f03-8d0a-cd06dc0b5376_2048x.jpg?v=1684511261"
                    className="w-[50px] h-[50px] p-1 rounded-full border-2 border-green-300"
                    alt="pfp"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Joe Figs</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-neutral-900">
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium text-white">
                    <item.icon /> {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a className="text-white" href={item.url}>
                            {item.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
