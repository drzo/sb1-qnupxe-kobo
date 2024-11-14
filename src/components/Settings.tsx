import React from 'react';
import { Sliders, Thermometer, Hash, Repeat } from 'lucide-react';

interface SettingsProps {
  settings: {
    temperature: number;
    maxLength: number;
    topP: number;
    repetitionPenalty: number;
  };
  onSettingChange: (key: string, value: number) => void;
}

export default function Settings({ settings, onSettingChange }: SettingsProps) {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Sliders className="w-5 h-5" />
          Generation Settings
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Thermometer className="w-4 h-4" />
            Temperature: {settings.temperature}
          </label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={settings.temperature}
            onChange={(e) => onSettingChange('temperature', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Hash className="w-4 h-4" />
            Max Length: {settings.maxLength}
          </label>
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={settings.maxLength}
            onChange={(e) => onSettingChange('maxLength', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            Top-p: {settings.topP}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={settings.topP}
            onChange={(e) => onSettingChange('topP', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Repeat className="w-4 h-4" />
            Repetition Penalty: {settings.repetitionPenalty}
          </label>
          <input
            type="range"
            min="1"
            max="2"
            step="0.1"
            value={settings.repetitionPenalty}
            onChange={(e) => onSettingChange('repetitionPenalty', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}