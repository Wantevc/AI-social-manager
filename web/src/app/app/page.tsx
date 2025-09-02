async function getBackend() {
 try {
 const r = await fetch("http://localhost:8000/version", { cache: "no-store" });
 if (!r.ok) throw new Error("Bad status " + r.status);
 return await r.json();
} catch (e) {
return null;
}
}
export default async function AppHome() {
const data = await getBackend();
 return (
<section className="space-y-6">
<h1 className="text-2xl font-bold">Dashboard (MVP placeholder)</h1>
 <p className="text-gray-600">
Here we’ll add channel connect, planner, and publishing in the next steps.
 </p>
 <div className="rounded-xl border p-4">
<h2 className="mb-2 text-lg font-semibold">Backend status</h2>
{data ? (
 <div className="text-sm text-gray-800">
 <div>API version: <span className="font-mono">{String(data.version)}</span></div>
<div>ENV: <span className="font-mono">{String(data.env)}</span></div>
<div>DEBUG: <span className="font-mono">{String(data.debug)}</span></div>
</div>
  ) : (
 <div className="text-sm text-red-600">Couldn’t reach http://localhost:8000/version</div>
 )}
 </div>
 </section>
 );
}
