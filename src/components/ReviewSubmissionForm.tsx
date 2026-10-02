import { useEffect, useState } from "react";
import { CheckCircle, Send, Star } from "lucide-react";
import { trackGoogleAnalyticsEvent } from '@/lib/google-analytics';

export default function ReviewSubmissionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState("");
  const [gotcha, setGotcha] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    void fetch("/api/reviews").catch(() => undefined);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (gotcha) return;
    setStatus("loading");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, rating, review, _gotcha: gotcha }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Review submission failed");
      trackGoogleAnalyticsEvent('submit_review', 'website_review');
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="p-0" aria-labelledby="review-form-heading">
      <div className="mx-auto w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {status === "success" ? (
          <div className="py-6 text-center">
            <CheckCircle className="mx-auto mb-4 text-green-500" size={38} />
            <h2 className="text-xl font-bold text-slate-900">Thank you for your review!</h2>
            <p className="mt-2 text-sm text-slate-600">It has been received and will be checked before being published.</p>
            <button onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-primary hover:underline">
              Submit another review
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <div className="mb-3 inline-flex rounded-full bg-yellow-50 p-3 text-yellow-500">
                <Star size={22} fill="currentColor" />
              </div>
              <h2 id="review-form-heading" className="text-2xl font-bold text-slate-900">Share your experience</h2>
              <p className="mt-2 text-sm text-slate-600">Reviews are checked by our team before they are published.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="website"
                value={gotcha}
                onChange={(event) => setGotcha(event.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px]"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Your name *
                  <input required maxLength={120} value={name} onChange={(event) => setName(event.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email (optional)
                  <input type="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </label>
              </div>
              <label className="block text-sm font-medium text-slate-700">
                Rating
                <select value={rating} onChange={(event) => setRating(event.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="5">★★★★★ — Excellent</option>
                  <option value="4">★★★★ — Very good</option>
                  <option value="3">★★★ — Good</option>
                  <option value="2">★★ — Fair</option>
                  <option value="1">★ — Needs improvement</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Your review *
                <textarea required minLength={10} maxLength={3000} rows={5} value={review} onChange={(event) => setReview(event.target.value)} className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 font-normal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Tell us about your learning experience..." />
              </label>
              <button type="submit" disabled={status === "loading"} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-bold text-white transition hover:bg-blue-700 disabled:opacity-60">
                <Send size={16} /> {status === "loading" ? "Submitting..." : "Submit review"}
              </button>
              {status === "error" && <p role="alert" className="text-center text-sm text-red-600">Could not submit your review. Please try again later.</p>}
            </form>
          </>
        )}
      </div>
    </section>
  );
}
