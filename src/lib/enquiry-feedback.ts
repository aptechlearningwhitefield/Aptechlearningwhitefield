import { toast } from 'sonner';

export function notifyEnquirySubmitted(spreadsheetSaved = true) {
  if (!spreadsheetSaved) {
    toast.warning('Enquiry received, but not saved to Google Sheets', {
      description: 'GoDaddy accepted your enquiry. The site administrator should check the Sheets connection.',
      duration: 9000,
    });
    return;
  }

  toast.success('Enquiry submitted!', {
    description: 'Thank you. Our team will contact you soon.',
    duration: 5000,
  });
}
