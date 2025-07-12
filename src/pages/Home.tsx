import QRCode from 'react-qr-code';
import { useState } from 'react';

export default function Home() {
  // Connection info for QR code
  const qrData = JSON.stringify({ ws: 'ws://192.168.1.5:9000', token: 'abc123' });

  // Placeholder: replace with real connection state
  const [connected] = useState(false);

  const [flashUrl, setFlashUrl] = useState(false);
  const [flashToken, setFlashToken] = useState(false);
  const [flashIp, setFlashIp] = useState(false);

  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedToken, setCopiedToken] = useState(false);
  const [copiedIp, setCopiedIp] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          LAN Controller
        </h1>
      </div>

      {/* Connection Status */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            connected 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-800'
          }`}>
            {connected ? '🟢 Connected' : '🔴 Disconnected'}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* QR Code Section */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <QRCode value={qrData} size={180} />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Scan this QR code with your mobile app to establish a connection
              </p>
            </div>
          </div>
          
          {/* Connection Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Connection Details</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">WebSocket URL</div>
                <div className={`flex items-center justify-between bg-blue-50 px-3 py-2 rounded border border-blue-200 transition-all duration-200
                  ${flashUrl ? 'bg-green-100 border-green-300' : ''}`}>
                  <span className="font-mono text-sm text-blue-800">ws://192.168.1.5:9000</span>
                  <button 
                    onClick={async () => {
                      await navigator.clipboard.writeText('ws://192.168.1.5:9000');
                      setFlashUrl(true);
                      setCopiedUrl(true);
                      setTimeout(() => setFlashUrl(false), 150);
                      setTimeout(() => setCopiedUrl(false), 2000);
                    }}
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedUrl ? (
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">Connection Token</div>
                <div className={`flex items-center justify-between bg-blue-50 px-3 py-2 rounded border border-blue-200 transition-all duration-200
                  ${flashToken ? 'bg-green-100 border-green-300' : ''}`}>
                  <span className="font-mono text-sm text-blue-800">abc123</span>
                  <button 
                    onClick={async () => {
                      await navigator.clipboard.writeText('abc123');
                      setFlashToken(true);
                      setCopiedToken(true);
                      setTimeout(() => setFlashToken(false), 150);
                      setTimeout(() => setCopiedToken(false), 2000);
                    }}
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedToken ? (
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">Local IP</div>
                <div className={`flex items-center justify-between bg-blue-50 px-3 py-2 rounded border border-blue-200 transition-all duration-200
                  ${flashIp ? 'bg-green-100 border-green-300' : ''}`}>
                  <span className="font-mono text-sm text-blue-800">192.168.1.5</span>
                  <button 
                    onClick={async () => {
                      await navigator.clipboard.writeText('192.168.1.5');
                      setFlashIp(true);
                      setCopiedIp(true);
                      setTimeout(() => setFlashIp(false), 150);
                      setTimeout(() => setCopiedIp(false), 2000);
                    }}
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedIp ? (
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 