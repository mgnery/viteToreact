import { FileText, Camera, MapPin, Send, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

const myReports = [
  {
    id: 1,
    type: "Streetlight",
    description: "Broken streetlight in Purok 3 near the basketball court",
    location: "Purok 3, Basketball Court",
    status: "completed",
    date: "March 30, 2026",
    response: "Streetlight has been repaired. Thank you for reporting!",
  },
  {
    id: 2,
    type: "Drainage",
    description: "Clogged drainage causing flooding during rain",
    location: "Purok 1, Main Street",
    status: "in-progress",
    date: "April 5, 2026",
    response: "Our team is working on clearing the drainage.",
  },
  {
    id: 3,
    type: "Road",
    description: "Large pothole on the road, dangerous for vehicles",
    location: "Purok 2, Corner Street",
    status: "pending",
    date: "April 6, 2026",
    response: null,
  },
];

const issueTypes = [
  "Streetlight",
  "Drainage",
  "Road",
  "Garbage",
  "Water",
  "Noise",
  "Security",
  "Other",
];

export function Reports() {
  const [view, setView] = useState<"list" | "create">("list");
  const [selectedType, setSelectedType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle report submission
    alert("Report submitted successfully!");
    setView("list");
    setSelectedType("");
    setDescription("");
    setLocation("");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[rgb(var(--color-primary))] text-white p-4 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <FileText size={24} />
            <h1 className="text-xl font-bold">Reports</h1>
          </div>
          {view === "list" && (
            <button
              onClick={() => setView("create")}
              className="bg-white text-[rgb(var(--color-primary))] px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
            >
              New Report
            </button>
          )}
        </div>
        <p className="text-sm opacity-90">
          {view === "list" ? "Track your community reports" : "Report a community issue"}
        </p>
      </div>

      {view === "list" ? (
        /* Reports List */
        <div className="px-4 py-4 space-y-4">
          {myReports.map((report) => (
            <div
              key={report.id}
              className="bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] p-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[rgb(var(--color-foreground))]">
                      {report.type} Issue
                    </h3>
                    <span
                      className={`text-[10px] px-2 py-1 rounded-full flex items-center gap-1 ${
                        report.status === "completed"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : report.status === "in-progress"
                          ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {report.status === "completed" ? (
                        <CheckCircle size={10} />
                      ) : report.status === "in-progress" ? (
                        <Clock size={10} />
                      ) : (
                        <AlertCircle size={10} />
                      )}
                      {report.status}
                    </span>
                  </div>
                  <p className="text-sm text-[rgb(var(--color-muted-foreground))] mb-2">
                    {report.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-[rgb(var(--color-muted-foreground))]">
                    <MapPin size={12} />
                    {report.location}
                  </div>
                </div>
              </div>

              {/* Response */}
              {report.response && (
                <div className="mt-3 pt-3 border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-muted))]/50 -mx-4 -mb-4 p-4 rounded-b-xl">
                  <p className="text-xs font-medium text-[rgb(var(--color-foreground))] mb-1">
                    Official Response:
                  </p>
                  <p className="text-xs text-[rgb(var(--color-muted-foreground))]">
                    {report.response}
                  </p>
                </div>
              )}

              {/* Date */}
              <div className="mt-3 text-[10px] text-[rgb(var(--color-muted-foreground))]">
                Reported on {report.date}
              </div>
            </div>
          ))}

          {myReports.length === 0 && (
            <div className="text-center py-12">
              <FileText size={48} className="mx-auto mb-3 text-[rgb(var(--color-muted-foreground))]" />
              <p className="text-[rgb(var(--color-muted-foreground))]">No reports yet</p>
            </div>
          )}
        </div>
      ) : (
        /* Create Report Form */
        <div className="px-4 py-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Issue Type */}
            <div>
              <label className="block text-sm font-medium text-[rgb(var(--color-foreground))] mb-2">
                Issue Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {issueTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      selectedType === type
                        ? "bg-[rgb(var(--color-primary))] text-white border-[rgb(var(--color-primary))]"
                        : "bg-[rgb(var(--color-card))] text-[rgb(var(--color-foreground))] border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-[rgb(var(--color-foreground))] mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the issue in detail..."
                rows={4}
                className="w-full px-4 py-3 bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-lg text-sm text-[rgb(var(--color-foreground))] placeholder:text-[rgb(var(--color-muted-foreground))] focus:outline-none focus:border-[rgb(var(--color-primary))]"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-[rgb(var(--color-foreground))] mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgb(var(--color-muted-foreground))]"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Purok 3, Basketball Court"
                  className="w-full pl-10 pr-4 py-3 bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-lg text-sm text-[rgb(var(--color-foreground))] placeholder:text-[rgb(var(--color-muted-foreground))] focus:outline-none focus:border-[rgb(var(--color-primary))]"
                  required
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-[rgb(var(--color-foreground))] mb-2">
                Photo Evidence (Optional)
              </label>
              <button
                type="button"
                className="w-full p-6 border-2 border-dashed border-[rgb(var(--color-border))] rounded-lg bg-[rgb(var(--color-card))] hover:border-[rgb(var(--color-primary))] transition-colors"
              >
                <Camera size={32} className="mx-auto mb-2 text-[rgb(var(--color-muted-foreground))]" />
                <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                  Tap to upload photo
                </p>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setView("list")}
                className="flex-1 py-3 bg-[rgb(var(--color-muted))] text-[rgb(var(--color-foreground))] rounded-lg font-medium hover:bg-[rgb(var(--color-muted))]/80 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!selectedType || !description || !location}
                className="flex-1 py-3 bg-[rgb(var(--color-primary))] text-white rounded-lg font-medium hover:bg-[rgb(var(--color-primary-hover))] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Submit Report
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
