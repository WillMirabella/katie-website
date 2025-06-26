import { notFound } from 'next/navigation';
import Link from 'next/link';
import { essays } from '@/data/essays';

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = essays.find((e) => e.id === slug);

  if (!essay) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link
          href="/essays"
          className="inline-flex items-center text-primary-medium hover:text-primary-medium/80 font-medium transition-colors mb-8"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Essays
        </Link>
      </div>

      <article className="prose prose-lg max-w-none">
        <header className="not-prose mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {essay.title}
          </h1>
          {essay.date && (
            <p className="text-foreground/70 text-lg">{essay.date}</p>
          )}
        </header>

        <div className="text-foreground/80 leading-relaxed">
          {essay.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            return (
              <p key={index} className="mb-6">
                {paragraph.trim()}
              </p>
            );
          })}
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-primary-light/30">
        <Link
          href="/essays"
          className="inline-flex items-center text-primary-medium hover:text-primary-medium/80 font-medium transition-colors"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Essays
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return essays.map((essay) => ({
    slug: essay.id,
  }));
}