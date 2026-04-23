import { Heart, Calendar, CreditCard, MapPin, CheckCircle, Clock, DollarSign, Info } from "lucide-react";
import { useState } from "react";

const ayudaPrograms = [
  {
    id: 1,
    title: "Financial Assistance",
    description: "Cash aid for eligible families affected by recent typhoon",
    amount: "₱3,000",
    status: "active",
    startDate: "April 15, 2026",
    endDate: "April 30, 2026",
    distribution: "Available in both digital and physical",
    eligibility: "Families with damaged homes",
  },
  {
    id: 2,
    title: "Educational Support",
    description: "School supplies and allowance for students",
    amount: "₱1,500",
    status: "upcoming",
    startDate: "May 1, 2026",
    endDate: "May 15, 2026",
    distribution: "Digital only",
    eligibility: "Students enrolled in public schools",
  },
  {
    id: 3,
    title: "Medical Assistance",
    description: "Healthcare support for senior citizens",
    amount: "₱2,000",
    status: "completed",
    startDate: "March 1, 2026",
    endDate: "March 31, 2026",
    distribution: "Physical distribution",
    eligibility: "Senior citizens 60+",
  },
];

const myApplications = [
  {
    id: 1,
    program: "Financial Assistance",
    status: "approved",
    appliedDate: "April 5, 2026",
    method: "digital",
    amount: "₱3,000",
  },
  {
    id: 2,
    program: "Educational Support",
    status: "pending",
    appliedDate: "April 6, 2026",
    method: "physical",
    amount: "₱1,500",
  },
];

export function Ayuda() {
  const [view, setView] = useState<"programs" | "applications" | "apply">("programs");
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [distributionMethod, setDistributionMethod] = useState<"digital" | "physical">("digital");
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setView("applications");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[rgb(var(--color-primary))] text-white p-4 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Heart size={24} />
          <h1 className="text-xl font-bold">Ayuda</h1>
        </div>
        <p className="text-sm opacity-90">Assistance programs for the community</p>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4 -mt-3 mb-4">
        <div className="bg-[rgb(var(--color-card))] rounded-xl p-1 border border-[rgb(var(--color-border))] flex gap-1">
          <button
            onClick={() => setView("programs")}
            className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${
              view === "programs"
                ? "bg-[rgb(var(--color-primary))] text-white"
                : "text-[rgb(var(--color-foreground))]"
            }`}
          >
            Programs
          </button>
          <button
            onClick={() => setView("applications")}
            className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${
              view === "applications"
                ? "bg-[rgb(var(--color-primary))] text-white"
                : "text-[rgb(var(--color-foreground))]"
            }`}
          >
            My Applications
          </button>
        </div>
      </div>

      {view === "programs" ? (
        /* Programs List */
        <div className="px-4 pb-4 space-y-4">
          {ayudaPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] overflow-hidden"
            >
              {/* Status Bar */}
              <div
                className={`h-1 ${
                  program.status === "active"
                    ? "bg-green-500"
                    : program.status === "upcoming"
                    ? "bg-orange-500"
                    : "bg-gray-400"
                }`}
              />

              <div className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[rgb(var(--color-foreground))] mb-1">
                      {program.title}
                    </h3>
                    <span
                      className={`inline-block text-[10px] px-2 py-1 rounded-full ${
                        program.status === "active"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : program.status === "upcoming"
                          ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {program.status}
                    </span>
                  </div>
                  <div className="bg-[rgb(var(--color-primary))]/10 px-3 py-2 rounded-lg">
                    <div className="text-xs text-[rgb(var(--color-muted-foreground))]">Amount</div>
                    <div className="text-lg font-bold text-[rgb(var(--color-primary))]">
                      {program.amount}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[rgb(var(--color-muted-foreground))] mb-3">
                  {program.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[rgb(var(--color-muted-foreground))]">
                    <Calendar size={14} />
                    <span>
                      {program.startDate} - {program.endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[rgb(var(--color-muted-foreground))]">
                    <MapPin size={14} />
                    <span>{program.distribution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[rgb(var(--color-muted-foreground))]">
                    <Info size={14} />
                    <span>{program.eligibility}</span>
                  </div>
                </div>

                {/* Apply Button */}
                {program.status === "active" && (
                  <button
                    onClick={() => {
                      setSelectedProgram(program);
                      setView("apply");
                    }}
                    className="w-full py-2.5 bg-[rgb(var(--color-primary))] text-white rounded-lg text-sm font-medium hover:bg-[rgb(var(--color-primary-hover))] transition-colors"
                  >
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : view === "applications" ? (
        /* My Applications */
        <div className="px-4 pb-4 space-y-4">
          {myApplications.map((application) => (
            <div
              key={application.id}
              className="bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-[rgb(var(--color-foreground))] mb-1">
                    {application.program}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full ${
                      application.status === "approved"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : application.status === "pending"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {application.status === "approved" ? (
                      <CheckCircle size={10} />
                    ) : (
                      <Clock size={10} />
                    )}
                    {application.status}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[rgb(var(--color-muted-foreground))]">Amount</div>
                  <div className="text-lg font-bold text-[rgb(var(--color-primary))]">
                    {application.amount}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[rgb(var(--color-muted-foreground))]">Applied on:</span>
                  <span className="text-[rgb(var(--color-foreground))] font-medium">
                    {application.appliedDate}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[rgb(var(--color-muted-foreground))]">Distribution method:</span>
                  <span className="text-[rgb(var(--color-foreground))] font-medium capitalize">
                    {application.method}
                  </span>
                </div>
              </div>

              {application.status === "approved" && (
                <div className="mt-3 pt-3 border-t border-[rgb(var(--color-border))] bg-green-50 dark:bg-green-900/20 -mx-4 -mb-4 p-4 rounded-b-xl">
                  <p className="text-xs text-green-700 dark:text-green-400 font-medium">
                    ✓ Your application has been approved! Please check the program schedule for distribution details.
                  </p>
                </div>
              )}
            </div>
          ))}

          {myApplications.length === 0 && (
            <div className="text-center py-12">
              <Heart size={48} className="mx-auto mb-3 text-[rgb(var(--color-muted-foreground))]" />
              <p className="text-[rgb(var(--color-muted-foreground))]">No applications yet</p>
            </div>
          )}
        </div>
      ) : (
        /* Apply Form */
        <div className="px-4 pb-4">
          {selectedProgram && (
            <form onSubmit={handleApply} className="space-y-4">
              {/* Program Info */}
              <div className="bg-[rgb(var(--color-card))] rounded-xl border border-[rgb(var(--color-border))] p-4">
                <h3 className="font-semibold text-[rgb(var(--color-foreground))] mb-1">
                  {selectedProgram.title}
                </h3>
                <p className="text-sm text-[rgb(var(--color-muted-foreground))] mb-2">
                  {selectedProgram.description}
                </p>
                <div className="text-lg font-bold text-[rgb(var(--color-primary))]">
                  {selectedProgram.amount}
                </div>
              </div>

              {/* Distribution Method */}
              <div>
                <label className="block text-sm font-medium text-[rgb(var(--color-foreground))] mb-2">
                  Distribution Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDistributionMethod("digital")}
                    className={`p-4 rounded-xl border text-left transition-colors ${
                      distributionMethod === "digital"
                        ? "bg-[rgb(var(--color-primary))] text-white border-[rgb(var(--color-primary))]"
                        : "bg-[rgb(var(--color-card))] text-[rgb(var(--color-foreground))] border-[rgb(var(--color-border))]"
                    }`}
                  >
                    <CreditCard size={24} className="mb-2" />
                    <div className="font-medium text-sm">Digital</div>
                    <div className={`text-xs ${distributionMethod === "digital" ? "text-white/80" : "text-[rgb(var(--color-muted-foreground))]"}`}>
                      Bank transfer
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDistributionMethod("physical")}
                    className={`p-4 rounded-xl border text-left transition-colors ${
                      distributionMethod === "physical"
                        ? "bg-[rgb(var(--color-primary))] text-white border-[rgb(var(--color-primary))]"
                        : "bg-[rgb(var(--color-card))] text-[rgb(var(--color-foreground))] border-[rgb(var(--color-border))]"
                    }`}
                  >
                    <MapPin size={24} className="mb-2" />
                    <div className="font-medium text-sm">Physical</div>
                    <div className={`text-xs ${distributionMethod === "physical" ? "text-white/80" : "text-[rgb(var(--color-muted-foreground))]"}`}>
                      Claim at barangay
                    </div>
                  </button>
                </div>
              </div>

              {/* Bank Details (if digital) */}
              {distributionMethod === "digital" && (
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-[rgb(var(--color-foreground))]">
                    Bank Details
                  </h4>
                  <input
                    type="text"
                    placeholder="Account Name"
                    value={bankDetails.accountName}
                    onChange={(e) =>
                      setBankDetails({ ...bankDetails, accountName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-lg text-sm text-[rgb(var(--color-foreground))] placeholder:text-[rgb(var(--color-muted-foreground))] focus:outline-none focus:border-[rgb(var(--color-primary))]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Account Number"
                    value={bankDetails.accountNumber}
                    onChange={(e) =>
                      setBankDetails({ ...bankDetails, accountNumber: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-lg text-sm text-[rgb(var(--color-foreground))] placeholder:text-[rgb(var(--color-muted-foreground))] focus:outline-none focus:border-[rgb(var(--color-primary))]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Bank Name"
                    value={bankDetails.bankName}
                    onChange={(e) =>
                      setBankDetails({ ...bankDetails, bankName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-lg text-sm text-[rgb(var(--color-foreground))] placeholder:text-[rgb(var(--color-muted-foreground))] focus:outline-none focus:border-[rgb(var(--color-primary))]"
                    required
                  />
                </div>
              )}

              {/* Collection Schedule (if physical) */}
              {distributionMethod === "physical" && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <div className="flex gap-2">
                    <Info size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-700 dark:text-blue-300">
                      <p className="font-medium mb-1">Physical Distribution Schedule:</p>
                      <p>Date: April 20-25, 2026</p>
                      <p>Time: 9:00 AM - 4:00 PM</p>
                      <p>Location: Barangay Hall</p>
                      <p className="mt-2">Please bring a valid ID for verification.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setView("programs")}
                  className="flex-1 py-3 bg-[rgb(var(--color-muted))] text-[rgb(var(--color-foreground))] rounded-lg font-medium hover:bg-[rgb(var(--color-muted))]/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[rgb(var(--color-primary))] text-white rounded-lg font-medium hover:bg-[rgb(var(--color-primary-hover))] transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} />
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
