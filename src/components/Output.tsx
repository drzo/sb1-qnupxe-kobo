import React from 'react';
import { Copy, RotateCcw } from 'lucide-react';

interface OutputProps {
  content: string;
  onReset: () => void;
}

export default function Output({ content, onReset }: OutputProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Generated Output</h3>
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="w-5 h-5" />
          </button>
          <button
            onClick={onReset}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="prose max-w-none">
        <p className="whitespace-pre-wrap text-gray-700">{content || 'Generated text will appear here...'}</p>
      </div>
    </div>
  );
}