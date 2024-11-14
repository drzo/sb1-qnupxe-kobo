import React from 'react';
import { Send } from 'lucide-react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function TextInput({ value, onChange, onSubmit }: TextInputProps) {
  return (
    <div className="relative w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-32 p-4 text-gray-800 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        placeholder="Enter your prompt here..."
      />
      <button
        onClick={onSubmit}
        className="absolute bottom-4 right-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}