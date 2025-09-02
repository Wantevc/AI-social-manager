export default function Home() {
 return (
  <main className="min-h-screen bg-white text-gray-900">
<section className="mx-auto max-w-3xl px-6 py-24 text-center">
 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
AI Social Content SaaS
 </h1>
 <p className="mt-4 text-lg text-gray-600">
Create and schedule Instagram & Facebook posts with AI. Fast, consistent, scalable.
 </p>
<div className="mt-8 flex items-center justify-center gap-4">
<a
 href="/app"
className="rounded-xl border border-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-900 hover:text-white transition"
>
 Open the app
</a>
<a
 href="https://github.com/"
 target="_blank"
rel="noreferrer"
 className="text-sm text-gray-600 underline underline-offset-4 hover:text-gray-900"
 >
  View the code (coming soon)
</a>
</div>
 <p className="mt-10 text-xs text-gray-500">
MVP in progress — step by step ✨
</p>
 </section>
</main>
);
}
