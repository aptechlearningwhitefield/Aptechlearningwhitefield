import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

/** The LMS supplied form is hosted as a standalone document so its required
 * field IDs, names, and vendor script remain intact and isolated from React. */
type EnquiryType = 'student-enquiry' | 'corporate-enquiry' | 'schools-colleges' | 'general-enquiry';

export default function LmsCorporateProposalForm({
  enquiryType = 'corporate-enquiry',
  context,
}: { enquiryType?: EnquiryType; context?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === window.location.origin &&
        event.source === iframeRef.current?.contentWindow &&
        event.data?.type === 'aptech-enquiry-submitted'
      ) {
        toast.success('Enquiry submitted successfully!', {
          description: 'Thank you. Our team will contact you soon.',
          duration: 5000,
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
      src={`/lms-corporate-proposal.html?enquiryType=${encodeURIComponent(enquiryType)}${context ? `&context=${encodeURIComponent(context)}` : ''}`}
      title="Submit an enquiry to Aptech Learning Whitefield"
      className="block w-full rounded-2xl border-0"
      style={{ height: enquiryType === 'student-enquiry' ? "1120px" : "900px" }}
      loading="lazy"
    />
  );
}
