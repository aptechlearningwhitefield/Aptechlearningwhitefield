import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { CheckCircle } from 'lucide-react';
import { STUDENT_ENQUIRY_THANK_YOU_URL } from '@/lib/enquiry-feedback';

/** The LMS supplied form is hosted as a standalone document so its required
 * field IDs, names, and vendor script remain intact and isolated from React. */
type EnquiryType = 'student-enquiry' | 'corporate-enquiry' | 'schools-colleges' | 'general-enquiry';

export default function LmsCorporateProposalForm({
  enquiryType = 'corporate-enquiry',
  context,
}: { enquiryType?: EnquiryType; context?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const redirectFallbackRef = useRef<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const redirectIfIframeLeftSite = useCallback(() => {
    if (enquiryType !== 'student-enquiry') return;

    const iframeWindow = iframeRef.current?.contentWindow;
    if (!iframeWindow) return;

    try {
      if (iframeWindow.location.origin !== window.location.origin) {
        window.location.assign(STUDENT_ENQUIRY_THANK_YOU_URL);
      }
    } catch {
      window.location.assign(STUDENT_ENQUIRY_THANK_YOU_URL);
    }
  }, [enquiryType]);

  const handleIframeLoad = () => redirectIfIframeLeftSite();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === window.location.origin &&
        event.source === iframeRef.current?.contentWindow &&
        event.data?.type === 'aptech-enquiry-submitting'
      ) {
        if (enquiryType === 'student-enquiry') {
          if (redirectFallbackRef.current !== null) {
            window.clearTimeout(redirectFallbackRef.current);
          }
          redirectFallbackRef.current = window.setTimeout(
            redirectIfIframeLeftSite,
            3500,
          );
        } else {
          setSubmitted(true);
          toast.success('Enquiry submitted successfully!', {
            description: 'Thank you. Our team will contact you soon.',
            duration: 5000,
          });
        }
      }

      if (
        event.origin === window.location.origin &&
        event.source === iframeRef.current?.contentWindow &&
        event.data?.type === 'aptech-lms-form-resize' &&
        Number.isFinite(event.data.height)
      ) {
        iframeRef.current.style.height = `${Math.max(0, event.data.height)}px`;
      }

      if (
        event.origin === window.location.origin &&
        event.source === iframeRef.current?.contentWindow &&
        event.data?.type === 'aptech-lms-script-error'
      ) {
        toast.error('The LMS form could not connect', {
          description: 'The email copy may still be delivered, but the LMS script failed to load. Please contact the site administrator.',
          duration: 12000,
        });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      if (redirectFallbackRef.current !== null) {
        window.clearTimeout(redirectFallbackRef.current);
      }
    };
  }, [enquiryType, redirectIfIframeLeftSite]);

  return (
    <>
      {submitted && (
        <div role="status" aria-live="polite" className="py-20 text-center md:py-28">
          <CheckCircle size={64} className="mx-auto mb-6 text-green-500" />
          <h3 className="mb-4 text-4xl font-extrabold text-slate-900">Thank You!</h3>
          <p className="text-lg text-slate-600">Your enquiry has been submitted. Our team will contact you soon.</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={`/lms-corporate-proposal.html?enquiryType=${encodeURIComponent(enquiryType)}${context ? `&context=${encodeURIComponent(context)}` : ''}`}
        title="Submit an enquiry to Aptech Learning Whitefield"
        className="block w-full rounded-2xl border-0"
        style={{ height: '600px', display: submitted ? 'none' : 'block' }}
        loading="lazy"
        onLoad={handleIframeLoad}
      />
    </>
  );
}
