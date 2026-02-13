"use client";

import { useState, useRef } from "react";

// Mock data for demonstration
const mockBoards = [
  { id: "1", name: "Business Growth Tips", sections: ["Marketing", "Sales", "Strategy"] },
  { id: "2", name: "Digital Marketing", sections: ["SEO", "Social Media", "Content"] },
  { id: "3", name: "Entrepreneurship", sections: ["Startups", "Leadership", "Success Stories"] },
  { id: "4", name: "Tech & Tools", sections: ["Software", "AI Tools", "Productivity"] },
  { id: "5", name: "E-commerce", sections: ["Products", "Dropshipping", "Amazon FBA"] },
];

const mockPublishedPins = [
  {
    id: "pin_001",
    title: "10 AI Tools That Will Transform Your Business in 2026",
    description: "Discover the top AI tools that successful entrepreneurs are using to automate their workflow and scale faster than ever. #AI #Business #Automation",
    board: "Tech & Tools",
    section: "AI Tools",
    mediaType: "image",
    thumbnailUrl: "https://placehold.co/150x200/1A1A1A/FFD700?text=AI+Tools",
    destinationUrl: "https://unifiedicp.com/ai-tools",
    status: "published",
    createdAt: "2026-02-13T10:30:00Z",
    impressions: 1250,
    saves: 45,
    clicks: 89,
  },
  {
    id: "pin_002",
    title: "The Ultimate Guide to Lead Generation",
    description: "Stop struggling to find customers. Learn the proven strategies that generate qualified leads on autopilot. #LeadGen #Marketing #Growth",
    board: "Digital Marketing",
    section: "Marketing",
    mediaType: "video",
    thumbnailUrl: "https://placehold.co/150x200/1A1A1A/FFD700?text=Lead+Gen",
    destinationUrl: "https://unifiedicp.com/lead-gen",
    status: "published",
    createdAt: "2026-02-12T15:45:00Z",
    impressions: 3420,
    saves: 156,
    clicks: 234,
  },
  {
    id: "pin_003",
    title: "5 Steps to Build Your Personal Brand",
    description: "Your personal brand is your superpower. Here's how to build one that attracts opportunities and opens doors. #PersonalBranding #Success",
    board: "Entrepreneurship",
    section: "Leadership",
    mediaType: "image",
    thumbnailUrl: "https://placehold.co/150x200/1A1A1A/FFD700?text=Branding",
    destinationUrl: "https://unifiedicp.com/personal-brand",
    status: "published",
    createdAt: "2026-02-11T09:15:00Z",
    impressions: 2180,
    saves: 98,
    clicks: 156,
  },
  {
    id: "pin_004",
    title: "Dropshipping in 2026: What Actually Works",
    description: "Forget what you've heard. Here's the real playbook for building a profitable dropshipping business this year. #Dropshipping #Ecommerce",
    board: "E-commerce",
    section: "Dropshipping",
    mediaType: "video",
    thumbnailUrl: "https://placehold.co/150x200/1A1A1A/FFD700?text=Dropship",
    destinationUrl: "https://unifiedicp.com/dropshipping",
    status: "scheduled",
    scheduledFor: "2026-02-14T14:00:00Z",
    createdAt: "2026-02-13T08:00:00Z",
    impressions: 0,
    saves: 0,
    clicks: 0,
  },
];

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("https://unifiedicp.com/");
  const [hashtags, setHashtags] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedPins, setPublishedPins] = useState(mockPublishedPins);
  const [aiSuggestion, setAiSuggestion] = useState<{ board: string; section: string; reason: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const generateAIContent = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock AI-generated content
    setTitle("Unlock Your Business Potential with AI-Powered Solutions");
    setDescription(
      "Transform the way you work with cutting-edge AI tools designed for modern entrepreneurs. Automate tedious tasks, generate insights, and scale faster than ever before. Your competitors are already using AI—don't get left behind."
    );
    setHashtags("#AI #Business #Automation #Entrepreneur #Growth #Tech #Productivity #Success");

    // AI board suggestion
    setAiSuggestion({
      board: "Tech & Tools",
      section: "AI Tools",
      reason: "Based on your content about AI solutions, this board has the highest engagement for tech-related pins and reaches your target audience of entrepreneurs and business owners.",
    });

    setIsGenerating(false);
  };

  const handlePublish = async () => {
    if (!file) {
      alert("Please upload an image or video first");
      return;
    }

    setIsPublishing(true);
    // Simulate publishing
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const newPin = {
      id: `pin_${Date.now()}`,
      title: title || "Untitled Pin",
      description: description,
      board: selectedBoard || aiSuggestion?.board || "Tech & Tools",
      section: selectedSection || aiSuggestion?.section || "General",
      mediaType: file.type.startsWith("video/") ? "video" : "image",
      thumbnailUrl: preview || "https://placehold.co/150x200/1A1A1A/FFD700?text=New+Pin",
      destinationUrl: destinationUrl,
      status: "published",
      createdAt: new Date().toISOString(),
      impressions: 0,
      saves: 0,
      clicks: 0,
    };

    setPublishedPins([newPin, ...publishedPins]);

    // Reset form
    setFile(null);
    setPreview(null);
    setTitle("");
    setDescription("");
    setHashtags("");
    setSelectedBoard("");
    setSelectedSection("");
    setAiSuggestion(null);
    setIsPublishing(false);

    alert("Pin published successfully! (Demo mode)");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const selectedBoardData = mockBoards.find((b) => b.name === selectedBoard);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-[#333333] bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#FFD700]">
                <i className="fab fa-pinterest mr-2"></i>
                Pinterest Pin Publisher
              </h1>
              <p className="text-[#CCCCCC] text-sm">AI-powered automation for maximum visibility</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 rounded-full bg-[#2A4D3A] text-[#90EE90] text-sm">
                <i className="fas fa-circle text-xs mr-2"></i>
                Connected
              </div>
              <button className="px-4 py-2 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#CCCCCC] hover:border-[#FFD700] hover:text-[#FFD700] transition-all">
                <i className="fas fa-cog mr-2"></i>
                Settings
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Pin Creator */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1A] rounded-xl border border-[#333333] p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                <i className="fas fa-plus-circle text-[#FFD700] mr-2"></i>
                Create New Pin
              </h2>

              {/* File Upload */}
              <div
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                  preview
                    ? "border-[#FFD700] bg-[#FFD700]/5"
                    : "border-[#333333] hover:border-[#FFD700] hover:bg-[#1A1A1A]"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {preview ? (
                  <div className="space-y-4">
                    {file?.type.startsWith("video/") ? (
                      <video
                        src={preview}
                        className="max-h-64 mx-auto rounded-lg"
                        controls
                      />
                    ) : (
                      <img
                        src={preview}
                        alt="Preview"
                        className="max-h-64 mx-auto rounded-lg object-contain"
                      />
                    )}
                    <p className="text-[#90EE90] text-sm">
                      <i className="fas fa-check-circle mr-2"></i>
                      {file?.name} ({(file?.size || 0 / 1024 / 1024).toFixed(2)} MB)
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                        setPreview(null);
                      }}
                      className="text-[#CCCCCC] hover:text-[#FFD700] text-sm"
                    >
                      <i className="fas fa-times mr-1"></i>
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <i className="fas fa-cloud-upload-alt text-4xl text-[#FFD700] mb-4"></i>
                    <p className="text-white font-medium mb-2">
                      Drop your image or video here
                    </p>
                    <p className="text-[#CCCCCC] text-sm">
                      or click to browse • Images up to 20MB • Videos up to 2GB
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4 text-sm text-[#666666]">
                      <span><i className="fas fa-image mr-1"></i> JPG, PNG, GIF</span>
                      <span><i className="fas fa-video mr-1"></i> MP4, MOV</span>
                    </div>
                  </>
                )}
              </div>

              {/* Title */}
              <div className="mt-6">
                <label className="block text-[#FFD700] font-medium mb-2">
                  Title
                  <span className="text-[#666666] font-normal ml-2">(leave blank for AI)</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter pin title or let AI generate..."
                  className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors"
                />
              </div>

              {/* Description */}
              <div className="mt-4">
                <label className="block text-[#FFD700] font-medium mb-2">
                  Description
                  <span className="text-[#666666] font-normal ml-2">(leave blank for AI)</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your pin or let AI craft the perfect copy..."
                  rows={4}
                  className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Destination URL */}
              <div className="mt-4">
                <label className="block text-[#FFD700] font-medium mb-2">
                  Destination URL
                </label>
                <input
                  type="url"
                  value={destinationUrl}
                  onChange={(e) => setDestinationUrl(e.target.value)}
                  placeholder="https://your-link.com"
                  className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors"
                />
              </div>

              {/* Hashtags */}
              <div className="mt-4">
                <label className="block text-[#FFD700] font-medium mb-2">
                  Hashtags
                  <span className="text-[#666666] font-normal ml-2">(leave blank for AI)</span>
                </label>
                <input
                  type="text"
                  value={hashtags}
                  onChange={(e) => setHashtags(e.target.value)}
                  placeholder="#business #marketing #growth"
                  className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors"
                />
              </div>

              {/* Board Selection */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#FFD700] font-medium mb-2">Board</label>
                  <select
                    value={selectedBoard}
                    onChange={(e) => {
                      setSelectedBoard(e.target.value);
                      setSelectedSection("");
                    }}
                    className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                  >
                    <option value="">Let AI choose...</option>
                    {mockBoards.map((board) => (
                      <option key={board.id} value={board.name}>
                        {board.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#FFD700] font-medium mb-2">Section</label>
                  <select
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    disabled={!selectedBoard}
                    className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors disabled:opacity-50"
                  >
                    <option value="">Let AI choose...</option>
                    {selectedBoardData?.sections.map((section) => (
                      <option key={section} value={section}>
                        {section}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* AI Suggestion */}
              {aiSuggestion && (
                <div className="mt-4 p-4 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-robot text-[#FFD700] mt-1"></i>
                    <div>
                      <p className="text-[#FFD700] font-medium">AI Recommendation</p>
                      <p className="text-white text-sm mt-1">
                        <strong>{aiSuggestion.board}</strong> → {aiSuggestion.section}
                      </p>
                      <p className="text-[#CCCCCC] text-sm mt-2">{aiSuggestion.reason}</p>
                      <button
                        onClick={() => {
                          setSelectedBoard(aiSuggestion.board);
                          setSelectedSection(aiSuggestion.section);
                        }}
                        className="mt-3 px-3 py-1 bg-[#FFD700] text-black rounded text-sm font-medium hover:bg-[#FFC700] transition-colors"
                      >
                        Use This Recommendation
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4">
                <button
                  onClick={generateAIContent}
                  disabled={isGenerating}
                  className="flex-1 px-6 py-3 bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-lg font-bold hover:bg-[#FFD700] hover:text-black transition-all disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Generating...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-magic mr-2"></i>
                      AI Generate
                    </>
                  )}
                </button>
                <button
                  onClick={handlePublish}
                  disabled={isPublishing || !file}
                  className="flex-1 px-6 py-3 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFC700] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPublishing ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Publish Pin
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Preview & Stats */}
          <div className="space-y-6">
            {/* Pin Preview */}
            <div className="bg-[#1A1A1A] rounded-xl border border-[#333333] p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                <i className="fas fa-eye text-[#FFD700] mr-2"></i>
                Pin Preview
              </h2>
              <div className="bg-black rounded-xl p-4 border border-[#333333]">
                <div className="aspect-[2/3] bg-[#0A0A0A] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  {preview ? (
                    file?.type.startsWith("video/") ? (
                      <video src={preview} className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                    )
                  ) : (
                    <div className="text-center text-[#666666]">
                      <i className="fas fa-image text-4xl mb-2"></i>
                      <p className="text-sm">Upload to preview</p>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {title || "Your pin title will appear here..."}
                </h3>
                <p className="text-[#CCCCCC] text-sm line-clamp-3">
                  {description || "Your description will appear here. AI can generate engaging copy that drives clicks and saves."}
                </p>
                {hashtags && (
                  <p className="text-[#FFD700] text-sm mt-2">{hashtags}</p>
                )}
                <div className="mt-4 pt-4 border-t border-[#333333] flex items-center justify-between text-sm">
                  <span className="text-[#CCCCCC]">
                    <i className="fas fa-link mr-1"></i>
                    {destinationUrl ? new URL(destinationUrl).hostname : "unifiedicp.com"}
                  </span>
                  <span className="text-[#CCCCCC]">
                    <i className="fas fa-folder mr-1"></i>
                    {selectedBoard || "Auto-select"}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1A1A1A] rounded-xl border border-[#333333] p-4 text-center">
                <p className="text-3xl font-bold text-[#FFD700]">{publishedPins.length}</p>
                <p className="text-[#CCCCCC] text-sm">Total Pins</p>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl border border-[#333333] p-4 text-center">
                <p className="text-3xl font-bold text-[#90EE90]">
                  {publishedPins.reduce((acc, p) => acc + (p.impressions || 0), 0).toLocaleString()}
                </p>
                <p className="text-[#CCCCCC] text-sm">Impressions</p>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl border border-[#333333] p-4 text-center">
                <p className="text-3xl font-bold text-[#FFD700]">
                  {publishedPins.reduce((acc, p) => acc + (p.clicks || 0), 0).toLocaleString()}
                </p>
                <p className="text-[#CCCCCC] text-sm">Clicks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Published Pins Table */}
        <div className="mt-8 bg-[#1A1A1A] rounded-xl border border-[#333333] overflow-hidden">
          <div className="p-6 border-b border-[#333333]">
            <h2 className="text-xl font-bold text-white">
              <i className="fas fa-history text-[#FFD700] mr-2"></i>
              Published Pins
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#FFD700]">Pin</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#FFD700]">Board / Section</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#FFD700]">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#FFD700]">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-[#FFD700]">Impressions</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-[#FFD700]">Saves</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-[#FFD700]">Clicks</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#FFD700]">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333333]">
                {publishedPins.map((pin) => (
                  <tr key={pin.id} className="hover:bg-black/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={pin.thumbnailUrl}
                          alt={pin.title}
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="max-w-xs">
                          <p className="text-white font-medium truncate">{pin.title}</p>
                          <p className="text-[#666666] text-xs truncate">{pin.destinationUrl}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white">{pin.board}</p>
                      <p className="text-[#666666] text-sm">{pin.section}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs ${
                        pin.mediaType === "video"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}>
                        <i className={`fas fa-${pin.mediaType === "video" ? "video" : "image"} mr-1`}></i>
                        {pin.mediaType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs ${
                        pin.status === "published"
                          ? "bg-[#2A4D3A] text-[#90EE90]"
                          : "bg-[#4D4D2A] text-[#EEEE90]"
                      }`}>
                        <i className={`fas fa-${pin.status === "published" ? "check" : "clock"} mr-1`}></i>
                        {pin.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-white">
                      {pin.impressions.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-white">
                      {pin.saves.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-[#FFD700] font-medium">
                      {pin.clicks.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-[#CCCCCC] text-sm">
                      {formatDate(pin.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#333333] mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-[#666666] flex items-center justify-center gap-1">
            <i className="fas fa-code"></i> with <i className="fas fa-heart text-red-500"></i> by{" "}
            <a
              href="https://fifthboston.services/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors"
            >
              FIFTHBOSTON.SERVICES
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
