import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-sm">
  <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
    Username
  </label>
  <input 
    type="text" 
    id="username" 
    name="username" 
    placeholder="Enter your username" 
    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
  />
</div>
    );
}