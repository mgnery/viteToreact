import { Bell, Calendar, Clock, Tag } from "lucide-react";
import { useState } from "react";

const announcements = [
  {
    id: 1,
    title: "Community Clean-up Drive",
    category: "Event",
    description:
      "Join us this Saturday for our monthly community clean-up drive. Let's keep our barangay clean and beautiful!",
    date: "April 12, 2026",
    time: "7:00 AM",
    author: "Barangay Captain",
    priority: "high",
  },
  {
    id: 2,
    title: "Ayuda Distribution Schedule",
    category: "Announcement",
    description:
      "Financial assistance will be distributed to qualified residents. Please check the Ayuda tab for eligibility and schedule.",
    date: "April 10, 2026",
    time: "2:30 PM",
    author: "Social Services Officer",
    priority: "high",
  },
  {
    id: 3,
    title: "Road Repair Notice",
    category: "Notice",
    description:
      "Main Street will undergo repair work from April 8-15. Expect traffic delays and find alternative routes.",
    date: "April 7, 2026",
    time: "9:00 AM",
    author: "Infrastructure Committee",
    priority: "medium",
  },
  {
    id: 4,
    title: "Health & Wellness Program",
    category: "Event",
    description:
      "Free health check-up and consultation this Friday at the barangay hall. Bring your health cards.",
    date: "April 6, 2026",
    time: "1:15 PM",
    author: "Health Officer",
    priority: "medium",
  },
  {
    id: 5,
    title: "Barangay Assembly Meeting",
    category: "Meeting",
    description:
      "Monthly barangay assembly meeting. All residents are encouraged to attend and participate in community discussions.",
    date: "April 5, 2026",
    time: "6:00 PM",
    author: "Barangay Secretary",
    priority: "low",
  },
];

const categories = ["All", "Event", "Announcement", "Notice", "Meeting"];

export function Updates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAnnouncements =
    selectedCategory === "All"
      ? announcements
      : announcements.filter((a) => a.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[rgb(var(--color-primary))] text-white p-4 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Bell size={24} />
          <h1 className="text-xl font-bold">Updates</h1>
        </div>
        <p className="text-sm opacity-90">Stay informed with official announcements</p>
      </div>

      {/* Category Filter */}
      <div className="px-4 -mt-3 mb-4">
        <div className="bg-[rgb(var(--color-card))] rounded-xl p-2 border border-[rgb(var(--color-border))] flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-[rgb(var(--color-primary))] text-white"
                  : "text-[rgb(var(--color-foreground))] hover:bg-[rgb(var(--color-muted))]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Announcements List */}
      <div className="px-4 pb-4 space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] overflow-hidden"
          >
            {/* Priority Indicator */}
            <div
              className={`h-1 ${
                announcement.priority === "high"
                  ? "bg-red-500"
                  : announcement.priority === "medium"
                  ? "bg-orange-500"
                  : "bg-green-500"
              }`}
            />

            <div className="p-4">
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-[rgb(var(--color-foreground))] mb-1">
                    {announcement.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]">
                      <Tag size={10} />
                      {announcement.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[rgb(var(--color-muted-foreground))] mb-3">
                {announcement.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-[rgb(var(--color-muted-foreground))]">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {announcement.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  {announcement.time}
                </div>
              </div>

              {/* Author */}
              <div className="mt-3 pt-3 border-t border-[rgb(var(--color-border))]">
                <span className="text-xs font-medium text-[rgb(var(--color-foreground))]">
                  Posted by: {announcement.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
