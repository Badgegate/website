import React from 'react';

export default function CTABottom() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 px-6 py-32 border-b border-border">
      <div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-2xl">
        Join the future of credential-based opportunity matching.
        </p>
      </div>
      <div>
        <a href="/app" className="font-bold flex flex-row gap-1 items-center hover:text-violet-600 bg-background shadow-[0px_0px_16px_0px_rgba(0,0,0,0.10)] rounded-full px-4 py-3">
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