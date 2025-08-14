import React, { useState } from 'react';
import { ArrowLeft, Github, Settings, Send } from 'lucide-react';

export default function ChatUI() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <button className="p-1 hover:bg-gray-700 rounded">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-medium">
              H
            </div>
            <span className="font-medium">Hitesh Choudhary</span>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-700 rounded">
          <Github size={20} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {/* User Message */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
            H
          </div>
          <div className="flex-1">
            <div className="bg-gray-800 rounded-lg px-4 py-2 max-w-md">
              <p className="text-sm">Hello! How can I help you today?</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-gray-400">Hitesh Choudhary</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">10:24 AM</span>
            </div>
          </div>
        </div>

        {/* Assistant Response */}
        <div className="flex justify-end">
          <div className="flex items-start space-x-3 max-w-md">
            <div className="flex-1">
              <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium ml-auto mb-2">
                hi
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500">10:26 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="flex justify-center">
          <div className="text-gray-400 text-sm">
            Sorry, I couldn't process that message.
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="px-4 py-4 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="1"
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-600 rounded">
              <Settings size={16} className="text-gray-400" />
            </button>
          </div>
          <button
            onClick={handleSendMessage}
            className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}