import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { pages_config } from "@/config/route";

export default function DesktopMenu() {
  return (
    <NavigationMenu viewport={false} className="max-sm:hidden">
      <NavigationMenuList>
        {pages_config.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isGroup ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      {item.children &&
                        item.children.map((child, index) => (
                          <NavigationMenuLink asChild key={index}>
                            <Link href={child.link || ""}>
                              <div className="font-medium">{child.title}</div>
                              <div className="text-muted-foreground">
                                {child.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href={item.link || ""}>{item.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
