import { useEffect, useRef } from 'react';
import { notifyEnquirySubmitted } from '@/lib/enquiry-feedback';

/** The LMS supplied form is hosted as a standalone document so its required
 * field IDs, names, and vendor script remain intact and isolated from React. */
export default function LmsCorporateProposalForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === window.location.origin &&
        event.source === iframeRef.current?.contentWindow &&
        event.data?.type === 'aptech-enquiry-submitted'
      ) {
        notifyEnquirySubmitted(event.data.spreadsheetSaved !== false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/lms-corporate-proposal.html"
      title="Request a corporate training proposal"
      className="block w-full rounded-2xl border-0"
      style={{ height: "900px" }}
      loading="lazy"
    />
  );
}
