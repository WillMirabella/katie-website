import Link from 'next/link';
import { essays } from '@/data/essays';

export default function EssaysPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Essays</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Thoughts, reflections, and stories from life&apos;s journey. Each piece explores 
          the moments and experiences that shape how we see the world.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {essays.map((essay) => (
          <article
            key={essay.id}
            className="bg-accent-light rounded-2xl shadow-sm border border-primary-medium/30 p-8 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  <Link 
                    href={`/essays/${essay.id}`}
                    className="hover:text-primary-medium transition-colors"
                  >
                    {essay.title}
                  </Link>
                </h2>
                
                {essay.date && (
                  <p className="text-sm text-foreground/60 mb-4">{essay.date}</p>
                )}
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {essay.shortDescription}
                </p>
              </div>
              
              <div className="mt-auto">
                <Link
                  href={`/essays/${essay.id}`}
                  className="inline-flex items-center text-primary-medium hover:text-primary-medium/80 font-medium transition-colors"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}