import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import TextInput from './components/TextInput';
import Settings from './components/Settings';
import Output from './components/Output';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [settings, setSettings] = useState({
    temperature: 0.7,
    maxLength: 200,
    topP: 0.9,
    repetitionPenalty: 1.1,
  });

  const handleSettingChange = (key: string, value: number) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = () => {
    // Simulate AI text generation
    const mockResponse = `${input}\n\nHere's a simulated AI response based on your prompt. The temperature is set to ${settings.temperature}, and the maximum length is ${settings.maxLength} tokens. The response would continue with relevant, generated text...`;
    setOutput(mockResponse);
  };

  const handleReset = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">AI Text Generator</h1>
          </div>
          <p className="text-gray-600">Create compelling content with advanced AI technology</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <TextInput
              value={input}
              onChange={setInput}
              onSubmit={handleGenerate}
            />
            <Output
              content={output}
              onReset={handleReset}
            />
          </div>
          
          <div className="lg:col-span-1">
            <Settings
              settings={settings}
              onSettingChange={handleSettingChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;