import { useThemeStore } from "../store/useThemeStore";

const SettingsPage = () => {
  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Settings</h2>
          <p className="text-sm text-base-content/70">
            More settings coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;