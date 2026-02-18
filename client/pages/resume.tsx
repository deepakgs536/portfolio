import { useState } from "react";
import { Download, ArrowLeft } from "lucide-react";
import { useTheme } from "@/components/layout/theme-provider";

export const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/deepakgs536.pdf";
  link.download = "deepakgs536.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Resume() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "bg-black" : "bg-white";
  const text = isDark ? "text-white" : "text-black";
  const btnBg = isDark ? "bg-white" : "bg-black";
  const btnText = isDark ? "text-black" : "text-white";

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors`}>
      {/* Fixed Header Overlay */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8">
        <button
          onClick={handleBack}
          className={`${btnBg} ${btnText} p-2 mb-2 md:mb-4 rounded-lg hover:opacity-80 transition-opacity flex items-center gap-2`}
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-semibold">Back</span>
        </button>

        <button
          onClick={handleDownload}
          className={`${btnBg} ${btnText} p-2 rounded-lg hover:opacity-80 transition-opacity flex items-center gap-2`}
        >
          <Download size={20} />
          <span className="text-sm font-semibold">Download</span>
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="w-full h-screen">
        <iframe
          src="/deepakgs536.pdf#toolbar=0"
          className="w-full h-full border-0"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
}