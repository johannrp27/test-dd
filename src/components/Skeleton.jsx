import React from 'react';

export default function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-56 h-12 bg-slate-200 rounded-lg mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            className="rounded-t-2xl shadow-md
          bg-white overflow-hidden flex flex-col gap-2"
            key={i}
          >
            <div className="h-44 w-100 bg-slate-200" />
            <div className="p-6 flex flex-col gap-4 props">
              <div className="w-100 h-10 bg-slate-200" />
              <div className="flex justify-between">
                <div className="w-1/4 h-8 bg-slate-200" />
                <div className="w-1/4 h-8 bg-slate-200" />
              </div>
              <div className="w-100 h-28 bg-slate-200" />

              <div className="w-1/2 h-12 self-center bg-slate-200" />
              <div className="w-1/2 h-12 self-center bg-slate-200" />

            </div>
            <div className="w-100 h-12 bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
