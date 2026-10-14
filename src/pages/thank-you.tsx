import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <>
      <Helmet>
        <title>Thank You | Aptech Learning Whitefield</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <main className="flex min-h-[60vh] items-center justify-center px-4 py-16">
        <div className="max-w-xl text-center">
          <CheckCircle size={56} className="mx-auto mb-6 text-green-500" />
          <h1 className="mb-4 text-3xl font-extrabold text-slate-900">Thank You!</h1>
          <p className="mb-8 text-lg text-slate-600">
            Your enquiry has been submitted. Our team will contact you soon.
          </p>
          <Link
            to="/"
            className="inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Return to Home
          </Link>
        </div>
      </main>
    </>
  );
}
