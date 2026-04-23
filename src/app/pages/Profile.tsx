import { User, MapPin, Phone, Mail, Settings, LogOut, Moon, Sun, ChevronRight, Shield, Bell as BellIcon, HelpCircle } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const userInfo = {
  name: "Juan Dela Cruz",
  purok: "Purok 3",
  barangay: "San Isidro",
  phone: "+63 912 345 6789",
  email: "juan.delacruz@email.com",
  residentId: "BI-2024-00123",
};

const settingsItems = [
  { icon: BellIcon, label: "Notifications", description: "Manage notification preferences" },
  { icon: Shield, label: "Privacy & Security", description: "Control your data and privacy" },
  { icon: HelpCircle, label: "Help & Support", description: "Get help and contact support" },
];

export function Profile() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[rgb(var(--color-primary))] text-white p-4 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <User size={24} />
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
        <p className="text-sm opacity-90">Manage your account and settings</p>
      </div>

      {/* Profile Card */}
      <div className="px-4 -mt-4 mb-6">
        <div className="bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] p-6">
          {/* Avatar */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-[rgb(var(--color-primary))] flex items-center justify-center text-white text-2xl font-bold">
              {userInfo.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
                {userInfo.name}
              </h2>
              <p className="text-xs text-[rgb(var(--color-muted-foreground))]">
                ID: {userInfo.residentId}
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-[rgb(var(--color-muted-foreground))]" />
              <span className="text-[rgb(var(--color-foreground))]">
                {userInfo.purok}, {userInfo.barangay}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} className="text-[rgb(var(--color-muted-foreground))]" />
              <span className="text-[rgb(var(--color-foreground))]">{userInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-[rgb(var(--color-muted-foreground))]" />
              <span className="text-[rgb(var(--color-foreground))]">{userInfo.email}</span>
            </div>
          </div>

          {/* Edit Button */}
          <button className="w-full mt-4 py-2.5 border border-[rgb(var(--color-border))] rounded-lg text-sm font-medium text-[rgb(var(--color-foreground))] hover:bg-[rgb(var(--color-muted))] transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="px-4 mb-6">
        <div className="bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === "light" ? (
                <Sun size={20} className="text-[rgb(var(--color-primary))]" />
              ) : (
                <Moon size={20} className="text-[rgb(var(--color-primary))]" />
              )}
              <div>
                <div className="font-medium text-sm text-[rgb(var(--color-foreground))]">
                  Dark Mode
                </div>
                <div className="text-xs text-[rgb(var(--color-muted-foreground))]">
                  {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
                </div>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-7 rounded-full transition-colors ${
                theme === "dark" ? "bg-[rgb(var(--color-primary))]" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  theme === "dark" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] mb-3 px-1">
          Settings
        </h3>
        <div className="bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] divide-y divide-[rgb(var(--color-border))]">
          {settingsItems.map((item, index) => (
            <button
              key={index}
              className="w-full p-4 flex items-center gap-3 hover:bg-[rgb(var(--color-muted))]/50 transition-colors first:rounded-t-xl last:rounded-b-xl"
            >
              <item.icon size={20} className="text-[rgb(var(--color-muted-foreground))]" />
              <div className="flex-1 text-left">
                <div className="font-medium text-sm text-[rgb(var(--color-foreground))]">
                  {item.label}
                </div>
                <div className="text-xs text-[rgb(var(--color-muted-foreground))]">
                  {item.description}
                </div>
              </div>
              <ChevronRight size={18} className="text-[rgb(var(--color-muted-foreground))]" />
            </button>
          ))}
        </div>
      </div>

      {/* Account Actions */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-[rgb(var(--color-foreground))] mb-3 px-1">
          Account
        </h3>
        <div className="space-y-3">
          <button className="w-full bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] p-4 flex items-center gap-3 hover:bg-[rgb(var(--color-muted))]/50 transition-colors">
            <Settings size={20} className="text-[rgb(var(--color-muted-foreground))]" />
            <span className="flex-1 text-left font-medium text-sm text-[rgb(var(--color-foreground))]">
              Account Settings
            </span>
            <ChevronRight size={18} className="text-[rgb(var(--color-muted-foreground))]" />
          </button>

          <button className="w-full bg-[rgb(var(--color-card))] rounded-xl border border-red-200 dark:border-red-800 p-4 flex items-center gap-3 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-red-600 dark:text-red-400">
            <LogOut size={20} />
            <span className="flex-1 text-left font-medium text-sm">Log Out</span>
          </button>
        </div>
      </div>

      {/* App Info */}
      <div className="px-4 pb-8 text-center text-xs text-[rgb(var(--color-muted-foreground))]">
        <p>Barangay App v1.0.0</p>
        <p className="mt-1">© 2026 Barangay San Isidro</p>
      </div>
    </div>
  );
}
