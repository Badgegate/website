import React from 'react';

export default function CTATop() {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 px-6 py-4 border-b border-border">
      <div>
        <p>
          Unlock opportunities<br/>
          with your verified credentials
        </p>
      </div>
      <div>
        <a href="/app" className="flex flex-row gap-1 items-center hover:text-violet-600 font-bold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
          </span>
          Launch App
        </a>
      </div>
    </div>
  );
}