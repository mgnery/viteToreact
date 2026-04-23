import { Outlet, NavLink } from "react-router";
import { Home, Bell, FileText, Heart, User } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/updates", label: "Updates", icon: Bell },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/ayuda", label: "Ayuda", icon: Heart },
  { path: "/profile", label: "Profile", icon: User },
];

export function Layout() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="min-h-screen bg-[rgb(var(--color-background))] pb-20">
        <main className="max-w-md mx-auto">
          <Outlet />
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-[rgb(var(--color-background))] border-t border-[rgb(var(--color-border))] z-50">
          <div className="max-w-md mx-auto flex justify-around items-center h-16">
            {navItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
                    isActive
                      ? "text-[rgb(var(--color-primary))]"
                      : "text-[rgb(var(--color-muted-foreground))]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    <span className="text-[10px] font-medium">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
