import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

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
        toast.warning('Inbox copy delivered; LMS receipt is unconfirmed', {
          description: event.data.spreadsheetSaved === false
            ? 'GoDaddy accepted the enquiry, but Google Sheets did not confirm it. The LMS portal also has not confirmed receipt.'
            : 'The email inbox accepted the enquiry. Please verify it appears in the LMS portal.',
          duration: 9000,
        });
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
