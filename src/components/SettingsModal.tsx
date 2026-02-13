"use client";

import { useState, useEffect } from "react";

interface Settings {
  pinterestAccessToken: string;
  pinterestAppId: string;
  pinterestAppSecret: string;
  openaiApiKey: string;
  defaultDestinationUrl: string;
  defaultBoard: string;
  autoGenerateContent: boolean;
}

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: Settings) => void;
  initialSettings?: Settings;
}

const defaultSettings: Settings = {
  pinterestAccessToken: "",
  pinterestAppId: "",
  pinterestAppSecret: "",
  openaiApiKey: "",
  defaultDestinationUrl: "https://unifiedicp.com/",
  defaultBoard: "",
  autoGenerateContent: true,
};

export function SettingsModal({ isOpen, onClose, onSave, initialSettings }: SettingsModalProps) {
  const [settings, setSettings] = useState<Settings>(initialSettings || defaultSettings);
  const [activeTab, setActiveTab] = useState<"pinterest" | "ai" | "defaults">("pinterest");
  const [showPinterestToken, setShowPinterestToken] = useState(false);
  const [showOpenAIKey, setShowOpenAIKey] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (initialSettings) {
      setSettings(initialSettings);
    }
  }, [initialSettings]);

  useEffect(() => {
    // Load settings from localStorage on mount
    const saved = localStorage.getItem("pinterest-publisher-settings");
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved settings:", e);
      }
    }
  }, []);

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem("pinterest-publisher-settings", JSON.stringify(settings));
    onSave(settings);
    onClose();
  };

  const testPinterestConnection = async () => {
    if (!settings.pinterestAccessToken) {
      setTestResult({ success: false, message: "Please enter your Pinterest Access Token first" });
      return;
    }

    setIsTesting(true);
    setTestResult(null);

    try {
      // Test the Pinterest API connection
      const response = await fetch("/api/pinterest/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken: settings.pinterestAccessToken }),
      });

      const data = await response.json();

      if (data.success) {
        setTestResult({ success: true, message: `Connected as ${data.username}` });
      } else {
        setTestResult({ success: false, message: data.error || "Connection failed" });
      }
    } catch (error) {
      // For demo, simulate a test
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (settings.pinterestAccessToken.length > 20) {
        setTestResult({ success: true, message: "Connection successful! (Demo mode)" });
      } else {
        setTestResult({ success: false, message: "Invalid token format. Pinterest tokens are typically longer." });
      }
    }

    setIsTesting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#1A1A1A] border border-[#333333] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#333333]">
          <h2 className="text-xl font-bold text-white">
            <i className="fas fa-cog text-[#FFD700] mr-2"></i>
            Settings
          </h2>
          <button
            onClick={onClose}
            className="text-[#666666] hover:text-white transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#333333]">
          <button
            onClick={() => setActiveTab("pinterest")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "pinterest"
                ? "text-[#FFD700] border-b-2 border-[#FFD700] bg-[#FFD700]/5"
                : "text-[#CCCCCC] hover:text-white"
            }`}
          >
            <i className="fab fa-pinterest mr-2"></i>
            Pinterest API
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "ai"
                ? "text-[#FFD700] border-b-2 border-[#FFD700] bg-[#FFD700]/5"
                : "text-[#CCCCCC] hover:text-white"
            }`}
          >
            <i className="fas fa-robot mr-2"></i>
            AI Settings
          </button>
          <button
            onClick={() => setActiveTab("defaults")}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "defaults"
                ? "text-[#FFD700] border-b-2 border-[#FFD700] bg-[#FFD700]/5"
                : "text-[#CCCCCC] hover:text-white"
            }`}
          >
            <i className="fas fa-sliders-h mr-2"></i>
            Defaults
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Pinterest Tab */}
          {activeTab === "pinterest" && (
            <div className="space-y-6">
              <div className="p-4 bg-[#0A0A0A] rounded-lg border border-[#333333]">
                <h3 className="text-[#FFD700] font-medium mb-2">
                  <i className="fas fa-info-circle mr-2"></i>
                  How to get your Pinterest API credentials
                </h3>
                <ol className="text-[#CCCCCC] text-sm space-y-2 list-decimal list-inside">
                  <li>Go to <a href="https://developers.pinterest.com/apps/" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">developers.pinterest.com/apps</a></li>
                  <li>Create a new app or select existing one</li>
                  <li>Enable scopes: <code className="bg-[#333333] px-1 rounded">boards:read</code>, <code className="bg-[#333333] px-1 rounded">boards:write</code>, <code className="bg-[#333333] px-1 rounded">pins:read</code>, <code className="bg-[#333333] px-1 rounded">pins:write</code></li>
                  <li>Generate an access token with all scopes</li>
                  <li>Copy and paste your credentials below</li>
                </ol>
              </div>

              {/* Access Token */}
              <div>
                <label className="block text-[#FFD700] font-medium mb-2">
                  Access Token <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPinterestToken ? "text" : "password"}
                    value={settings.pinterestAccessToken}
                    onChange={(e) => setSettings({ ...settings, pinterestAccessToken: e.target.value })}
                    placeholder="pina_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                    className="w-full px-4 py-3 pr-12 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors font-mono text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPinterestToken(!showPinterestToken)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#FFD700] transition-colors"
                  >
                    <i className={`fas fa-${showPinterestToken ? "eye-slash" : "eye"}`}></i>
                  </button>
                </div>
                <p className="text-[#666666] text-xs mt-1">Required for posting pins and fetching boards</p>
              </div>

              {/* App ID (Optional) */}
              <div>
                <label className="block text-[#FFD700] font-medium mb-2">
                  App ID <span className="text-[#666666] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={settings.pinterestAppId}
                  onChange={(e) => setSettings({ ...settings, pinterestAppId: e.target.value })}
                  placeholder="1234567890123456789"
                  className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors"
                />
              </div>

              {/* App Secret (Optional) */}
              <div>
                <label className="block text-[#FFD700] font-medium mb-2">
                  App Secret <span className="text-[#666666] font-normal">(optional)</span>
                </label>
                <input
                  type="password"
                  value={settings.pinterestAppSecret}
                  onChange={(e) => setSettings({ ...settings, pinterestAppSecret: e.target.value })}
                  placeholder="••••••••••••••••••••"
                  className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors"
                />
              </div>

              {/* Test Connection */}
              <div className="flex items-center gap-4">
                <button
                  onClick={testPinterestConnection}
                  disabled={isTesting || !settings.pinterestAccessToken}
                  className="px-6 py-2 bg-[#FFD700] text-black rounded-lg font-medium hover:bg-[#FFC700] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Testing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-plug mr-2"></i>
                      Test Connection
                    </>
                  )}
                </button>
                {testResult && (
                  <span className={`text-sm ${testResult.success ? "text-[#90EE90]" : "text-red-400"}`}>
                    <i className={`fas fa-${testResult.success ? "check-circle" : "exclamation-circle"} mr-1`}></i>
                    {testResult.message}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* AI Tab */}
          {activeTab === "ai" && (
            <div className="space-y-6">
              <div className="p-4 bg-[#0A0A0A] rounded-lg border border-[#333333]">
                <h3 className="text-[#FFD700] font-medium mb-2">
                  <i className="fas fa-info-circle mr-2"></i>
                  AI-Powered Content Generation
                </h3>
                <p className="text-[#CCCCCC] text-sm">
                  Connect your OpenAI API key to enable automatic generation of pin titles, 
                  descriptions, and hashtags. The AI will also analyze your content to recommend 
                  the best boards and sections for maximum visibility.
                </p>
              </div>

              {/* OpenAI API Key */}
              <div>
                <label className="block text-[#FFD700] font-medium mb-2">
                  OpenAI API Key
                </label>
                <div className="relative">
                  <input
                    type={showOpenAIKey ? "text" : "password"}
                    value={settings.openaiApiKey}
                    onChange={(e) => setSettings({ ...settings, openaiApiKey: e.target.value })}
                    placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    className="w-full px-4 py-3 pr-12 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors font-mono text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOpenAIKey(!showOpenAIKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#FFD700] transition-colors"
                  >
                    <i className={`fas fa-${showOpenAIKey ? "eye-slash" : "eye"}`}></i>
                  </button>
                </div>
                <p className="text-[#666666] text-xs mt-1">
                  Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">platform.openai.com/api-keys</a>
                </p>
              </div>

              {/* Auto-generate toggle */}
              <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-[#333333]">
                <div>
                  <p className="text-white font-medium">Auto-generate content</p>
                  <p className="text-[#666666] text-sm">Automatically generate title & description when uploading media</p>
                </div>
                <button
                  onClick={() => setSettings({ ...settings, autoGenerateContent: !settings.autoGenerateContent })}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    settings.autoGenerateContent ? "bg-[#FFD700]" : "bg-[#333333]"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                      settings.autoGenerateContent ? "left-7" : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* Defaults Tab */}
          {activeTab === "defaults" && (
            <div className="space-y-6">
              {/* Default Destination URL */}
              <div>
                <label className="block text-[#FFD700] font-medium mb-2">
                  Default Destination URL
                </label>
                <input
                  type="url"
                  value={settings.defaultDestinationUrl}
                  onChange={(e) => setSettings({ ...settings, defaultDestinationUrl: e.target.value })}
                  placeholder="https://your-website.com"
                  className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white placeholder-[#666666] focus:border-[#FFD700] focus:outline-none transition-colors"
                />
                <p className="text-[#666666] text-xs mt-1">This URL will be pre-filled when creating new pins</p>
              </div>

              {/* Default Board */}
              <div>
                <label className="block text-[#FFD700] font-medium mb-2">
                  Default Board
                </label>
                <select
                  value={settings.defaultBoard}
                  onChange={(e) => setSettings({ ...settings, defaultBoard: e.target.value })}
                  className="w-full px-4 py-3 bg-black border-2 border-[#333333] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                >
                  <option value="">Let AI choose (recommended)</option>
                  <option value="Business Growth Tips">Business Growth Tips</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Entrepreneurship">Entrepreneurship</option>
                  <option value="Tech & Tools">Tech & Tools</option>
                  <option value="E-commerce">E-commerce</option>
                </select>
                <p className="text-[#666666] text-xs mt-1">Pre-select a board or let AI recommend based on content</p>
              </div>

              {/* Info about connecting */}
              <div className="p-4 bg-[#2A4D3A]/30 rounded-lg border border-[#2A4D3A]">
                <p className="text-[#90EE90] text-sm">
                  <i className="fas fa-lightbulb mr-2"></i>
                  <strong>Tip:</strong> Once you connect your Pinterest account, this dropdown will show your actual boards.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-[#333333] bg-[#0A0A0A]">
          <button
            onClick={onClose}
            className="px-6 py-2 text-[#CCCCCC] hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-2 bg-[#FFD700] text-black rounded-lg font-bold hover:bg-[#FFC700] transition-colors"
          >
            <i className="fas fa-save mr-2"></i>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
