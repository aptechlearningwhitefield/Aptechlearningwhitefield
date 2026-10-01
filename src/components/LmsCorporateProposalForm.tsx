/** The LMS supplied form is hosted as a standalone document so its required
 * field IDs, names, and vendor script remain intact and isolated from React. */
export default function LmsCorporateProposalForm() {
  return (
    <iframe
      src="/lms-corporate-proposal.html"
      title="Request a corporate training proposal"
      className="block w-full rounded-2xl border-0"
      style={{ height: "900px" }}
      loading="lazy"
    />
  );
}
