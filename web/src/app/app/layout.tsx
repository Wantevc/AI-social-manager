export default function AppLayout({ children }: { children: React.ReactNode }) {
return (
<div className="min-h-screen bg-white text-gray-900">
 <header className="border-b">
 <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
<a href="/" className="text-lg font-semibold">AI Social Content SaaS</a>
 <nav className="flex gap-4 text-sm">
 <a href="/app" className="rounded px-3 py-1 font-medium underline underline-offset-4">Dashboard</a>
 <a href="/app/connect" className="rounded px-3 py-1 font-medium hover:underline underline-offset-4">Connect</a>
 <a href="/app/planner" className="rounded px-3 py-1 font-medium hover:underline underline-offset-4">Planner</a>
 </nav>
 </div>
</header>
 <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
</div>
 );
}
