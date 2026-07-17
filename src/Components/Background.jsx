import React from "react";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#1F252C]">
      {/* Top Left Glow */}
      <div className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full border border-white/5"></div>

      {/* Profile Circle */}
      <div className="absolute top-20 right-20 h-[520px] w-[520px] rounded-full border border-white/10"></div>

      {/* Bottom Left Circle */}
      <div className="absolute bottom-10 left-10 h-[320px] w-[320px] rounded-full border border-white/5"></div>

      {/* Top Right Circle */}
      <div className="absolute -top-32 right-[-120px] h-[350px] w-[350px] rounded-full border border-white/5"></div>

      {/* Small Dots */}
      <div className="absolute left-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/20"></div>

      <div className="absolute left-[55%] top-[42%] h-1.5 w-1.5 rounded-full bg-white/20"></div>

      <div className="absolute left-[72%] top-[70%] h-1.5 w-1.5 rounded-full bg-white/20"></div>

      <div className="absolute left-[30%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-white/20"></div>

      <div className="absolute right-[15%] top-[22%] h-1 w-1 rounded-full bg-white/15"></div>

      <div className="absolute right-[32%] bottom-[15%] h-1 w-1 rounded-full bg-white/15"></div>

      {/* Soft Glow */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-slate-700/20 blur-[120px]"></div>

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-slate-700/20 blur-[140px]"></div>
    </div>
  );
}

export default Background;
