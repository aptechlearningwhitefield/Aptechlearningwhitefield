import { useEffect, useState } from 'react';

interface Review {
  reviewId: string;
  reviewer?: { displayName: string; profilePhotoUrl?: string; profileUrl?: string };
  starRating: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';
  comment?: string;
  createTime: string;
  updateTime: string;
  googleMapsUri?: string;
}

interface GoogleReviewsProps {
  reviews?: Review[];
  title?: string;
  maxVisible?: number;
  className?: string;
}

const STAR_MAP: Record<string, number> = {
  ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          className={`h-4 w-4 ${n <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews({
  reviews: initialReviews = [],
  title = 'What Our Customers Say',
  maxVisible = 6,
  className = '',
}: GoogleReviewsProps) {
  const [reviews, setReviews] = useState(initialReviews);
  const [googleMapsUri, setGoogleMapsUri] = useState('https://maps.google.com/?q=Aptech+Learning+Whitefield+Bangalore');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    fetch('/api/google-reviews')
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok || result?.success !== true) throw new Error('Google reviews unavailable');
        if (!active) return;
        setReviews(result.reviews ?? []);
        setGoogleMapsUri(result.business?.googleMapsUri || 'https://maps.google.com/?q=Aptech+Learning+Whitefield+Bangalore');
      })
      .catch(() => {
        if (active) setReviews([]);
      })
      .finally(() => {
        if (active) setLoaded(true);
      });
    return () => { active = false; };
  }, []);

  const visible = reviews.slice(0, maxVisible);

  if (visible.length === 0) {
    if (!loaded) return <section id="testimonials" className={`py-12 px-4 ${className}`} aria-labelledby="google-testimonials-heading" aria-live="polite"><p className="text-center text-sm text-gray-500">Loading testimonials...</p></section>;
    return <section id="testimonials" className={`py-12 px-4 ${className}`} aria-labelledby="google-testimonials-heading"><div className="max-w-6xl mx-auto text-center"><h2 id="google-testimonials-heading" className="text-2xl font-bold mb-3">{title}</h2><p className="text-sm text-gray-600">Google testimonials are temporarily unavailable. Please check back soon.</p><a className="mt-3 inline-block text-sm font-medium text-blue-700 hover:underline" href={googleMapsUri} target="_blank" rel="noopener noreferrer">Read all reviews on Google</a></div></section>;
  }

  return (
    <section id="testimonials" className={`py-12 px-4 ${className}`} aria-labelledby="google-testimonials-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="google-testimonials-heading" className="text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((review) => {
            const stars = STAR_MAP[review.starRating] ?? 5;
            const date = new Date(review.createTime).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            return (
              <div
                key={review.reviewId}
                className="rounded-lg border p-5 shadow-sm bg-white flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  {review.reviewer?.profilePhotoUrl ? (
                    <img src={review.reviewer.profilePhotoUrl} alt={`${review.reviewer.displayName} profile`} referrerPolicy="no-referrer" className="h-10 w-10 rounded-full object-cover" />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold text-sm">
                      {(review.reviewer?.displayName ?? 'G').charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    {review.reviewer?.profileUrl ? <a href={review.reviewer.profileUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:underline">{review.reviewer.displayName}</a> : <p className="font-medium text-sm">{review.reviewer?.displayName ?? 'Google user'}</p>}
                    <p className="text-xs text-gray-500">{date}</p>
                  </div>
                </div>
                <StarRating rating={stars} />
                {review.comment && (
                  <p className="text-sm text-gray-700 whitespace-pre-line">{review.comment}</p>
                )}
                <div className="mt-auto flex items-center gap-1 text-xs text-gray-400">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <a href={review.googleMapsUri || googleMapsUri} target="_blank" rel="noopener noreferrer" className="hover:underline">Google Review</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center"><a href={googleMapsUri} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-700 hover:underline">See all reviews on Google</a></div>
      </div>
    </section>
  );
}
