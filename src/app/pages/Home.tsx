import { Bell, FileText, Heart, TrendingUp, Users, MapPin } from "lucide-react";
import { Link } from "react-router";

const stats = [
  { label: "Active Reports", value: "12", icon: FileText, color: "rgb(var(--color-primary))" },
  { label: "Residents", value: "2,431", icon: Users, color: "rgb(34 197 94)" },
  { label: "Ayuda Given", value: "156", icon: Heart, color: "rgb(251 146 60)" },
];

const quickActions = [
  { label: "Report Issue", icon: FileText, path: "/reports", color: "bg-[rgb(var(--color-primary))]" },
  { label: "View Updates", icon: Bell, path: "/updates", color: "bg-green-500" },
  { label: "Ayuda Status", icon: Heart, path: "/ayuda", color: "bg-orange-500" },
];

const recentActivities = [
  {
    title: "New Streetlight Installed",
    description: "Purok 3, reported last week",
    time: "2 hours ago",
    status: "completed",
  },
  {
    title: "Road Repair Scheduled",
    description: "Main Street, Purok 1",
    time: "5 hours ago",
    status: "in-progress",
  },
  {
    title: "Ayuda Distribution",
    description: "Financial assistance available",
    time: "1 day ago",
    status: "announcement",
  },
];

export function Home() {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={20} className="text-[rgb(var(--color-primary))]" />
          <span className="text-sm text-[rgb(var(--color-muted-foreground))]">Barangay San Isidro</span>
        </div>
        <h1 className="text-2xl font-bold text-[rgb(var(--color-foreground))]">Good day, Juan!</h1>
        <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
          Stay connected with your community
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[rgb(var(--color-card))] rounded-xl p-3 border border-[rgb(var(--color-border))]"
          >
            <stat.icon size={18} style={{ color: stat.color }} className="mb-2" />
            <div className="text-xl font-bold text-[rgb(var(--color-foreground))]">{stat.value}</div>
            <div className="text-[10px] text-[rgb(var(--color-muted-foreground))] leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-base font-semibold mb-3 text-[rgb(var(--color-foreground))]">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.path}
              className="flex flex-col items-center gap-2 p-4 bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] transition-colors"
            >
              <div className={`${action.color} p-3 rounded-full text-white`}>
                <action.icon size={20} />
              </div>
              <span className="text-xs text-center text-[rgb(var(--color-foreground))] font-medium">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-[rgb(var(--color-foreground))]">Recent Activity</h2>
          <TrendingUp size={16} className="text-[rgb(var(--color-primary))]" />
        </div>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-[rgb(var(--color-card))] p-4 rounded-xl border border-[rgb(var(--color-border))]"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-medium text-sm text-[rgb(var(--color-foreground))]">
                  {activity.title}
                </h3>
                <span
                  className={`text-[10px] px-2 py-1 rounded-full ${
                    activity.status === "completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : activity.status === "in-progress"
                      ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
              <p className="text-xs text-[rgb(var(--color-muted-foreground))] mb-2">
                {activity.description}
              </p>
              <span className="text-[10px] text-[rgb(var(--color-muted-foreground))]">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
