import { Helmet } from "@dr.pogodin/react-helmet";
import { Fragment } from "react";
import { Link } from "react-router";
import { SITE_URL } from "@/lib/site-url";

type PolicyKey = "privacy" | "terms";

type PolicySection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  listAfterParagraph?: number;
};

const policies: Record<
  PolicyKey,
  {
    title: string;
    seo: {
      title: string;
      description: string;
      keywords: string;
      ogTitle: string;
      ogDescription: string;
      twitterTitle: string;
      twitterDescription: string;
    };
    sections: PolicySection[];
  }
> = {
  terms: {
    title: "Terms and Conditions",
    seo: {
      title: "Aptech Whitefield Terms and Conditions | Bangalore Centre",
      description:
        "Read the Aptech Whitefield terms and conditions covering website use, course enrolment, fee payments, refunds and classroom conduct at our centre near ITPL.",
      keywords:
        "aptech whitefield terms and conditions, terms and conditions, course enrolment terms, aptech whitefield policies, aptech whitefield bangalore, terms and conditions aptech bangalore, course enrolment terms aptech, course enrolment terms near itpl, aptech whitefield refund policy, aptech whitefield student terms, aptech whitefield website terms, aptech whitefield data privacy, aptech whitefield itpl, aptech whitefield contact, aptech computer institute whitefield, aptech learning centre bangalore",
      ogTitle: "The Ground Rules for Learning With Us | Aptech, Bangalore",
      ogDescription:
        "Before you enrol, it helps to know how things work. Here's a clear summary of payments, batch changes, refunds and what we expect from every learner who joins.",
      twitterTitle: "Enrolling Soon? Read Our Terms First | Aptech Bangalore",
      twitterDescription:
        "Fees, refunds, attendance and website use, all in one handy place. A quick read now can save confusion later, so take a minute before you sign up for a course.",
    },
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Welcome to Aptech Learning Whitefield, operated by Cheekira Tech Pvt. Ltd., an authorized Aptech Learning franchise centre located in Whitefield, Bengaluru, Karnataka, India.",
          "These Terms and Conditions govern your access to and use of our website, course enquiries, training services, counselling services and other information made available through this website.",
          "By accessing or using this website, you agree to these Terms and Conditions. If you do not agree, please discontinue using the website.",
        ],
      },
      {
        title: "About Our Services",
        paragraphs: [
          "Aptech Learning Whitefield provides information about technology education and professional training programs, including:",
          "Course availability, eligibility, duration, curriculum, fees, certification and delivery mode may vary by program and batch. Please confirm the applicable details with our team before enrolling.",
        ],
        listAfterParagraph: 0,
        list: [
          "Artificial Intelligence and Machine Learning",
          "Generative AI and Prompt Engineering",
          "Data Science and Data Analytics",
          "Python Programming and Full Stack Development",
          "Cloud Computing and Cybersecurity",
          "Microsoft Technologies and other professional programs",
          "Corporate training, workshops and career counselling",
        ],
      },
      {
        title: "Course Enquiries and Registration",
        paragraphs: [
          "When submitting an enquiry or registration request, you agree to provide accurate, complete and current information.",
          "Submitting an enquiry does not automatically confirm admission or guarantee a seat in a course. Admission is subject to the applicable eligibility criteria, seat availability, registration requirements and confirmation by our team.",
          "We may contact you using the details you provide to respond to enquiries, discuss suitable courses, explain fees and provide admission-related information.",
        ],
      },
      {
        title: "Course Fees and Payments",
        paragraphs: [
          "Course fees, payment schedules, applicable taxes and other charges will be communicated by our authorised representatives before enrolment.",
          "Students should obtain written confirmation of the applicable fees, payment terms and any additional charges before making payment.",
          "Payments must be made through the payment methods officially communicated by Cheekira Tech Pvt. Ltd. or its authorised representatives. Please retain your payment receipts and transaction references.",
        ],
      },
      {
        title: "Cancellation, Refunds and Transfers",
        paragraphs: [
          "Course cancellation, refund eligibility, batch transfers, postponements and withdrawal requests will be governed by the specific written policy communicated to the student at the time of enrolment and any applicable law.",
          "Students should contact our administration team promptly to submit a request. Any applicable refund or deduction will be assessed according to the agreed terms and applicable legal requirements.",
          "No provision in these Terms and Conditions is intended to exclude rights that cannot legally be excluded.",
        ],
      },
      {
        title: "Training Delivery and Course Changes",
        paragraphs: [
          "We aim to deliver training in accordance with the course information and schedule communicated to students.",
          "Class schedules, trainers, learning materials, batch timings, delivery methods and curriculum details may change where reasonably necessary due to operational requirements, trainer availability, technology changes or other circumstances.",
          "Where a material change affects an enrolled student, we will communicate the change and applicable options in accordance with the enrolment terms and applicable law.",
        ],
      },
      {
        title: "Certification",
        paragraphs: [
          "Certificates are subject to the eligibility, attendance, assessment, completion and other requirements applicable to the relevant program.",
          "The issuing authority, certificate type and certification requirements may vary by course. Students should confirm these details before enrolment.",
          "Use of the Aptech name or brand does not imply that every course or certificate is issued by the same entity. Certification is subject to the applicable program arrangements.",
        ],
      },
      {
        title: "Placement Assistance and Career Guidance",
        paragraphs: [
          "We may provide career counselling, resume guidance, mock interviews, interview preparation and placement assistance, depending on the course and services offered.",
          "Placement assistance means support intended to help learners explore employment opportunities. It does not constitute a guarantee of employment, a specific salary, a job offer, an interview or selection by any employer.",
          "Employment outcomes depend on factors including individual skills, qualifications, experience, interview performance, market conditions and employer requirements.",
          "Any placement statistics or hiring-partner references displayed on the website are subject to their underlying data and applicable qualifications.",
        ],
      },
      {
        title: "Acceptable Use",
        paragraphs: ["You agree not to:"],
        list: [
          "Use the website for unlawful, fraudulent or misleading activities.",
          "Submit false information or impersonate another person.",
          "Attempt to gain unauthorised access to the website, servers or systems.",
          "Introduce malicious software or interfere with website functionality.",
          "Copy, distribute, modify or commercially exploit website content without permission.",
          "Use our website or contact forms to send spam or harmful content.",
        ],
      },
      {
        title: "Intellectual Property",
        paragraphs: [
          "Unless otherwise stated, the website's original text, graphics, design elements, logos, images and other materials are protected by applicable intellectual property laws.",
          "Aptech and related brand names, logos and marks belong to their respective owners. Their use on this website reflects the applicable franchise or authorised-use arrangement and does not transfer ownership.",
          "You may view and use website content for personal, non-commercial informational purposes. Reproduction, commercial use or redistribution requires the relevant rights holder's permission.",
        ],
      },
      {
        title: "Third-Party Websites and Services",
        paragraphs: [
          "Our website may contain links to third-party websites, platforms, maps, communication services or educational resources.",
          "These services may operate under their own terms and privacy policies. We do not control third-party websites and are not responsible for their independent content, availability or practices, except to the extent applicable law provides otherwise.",
          "Please review the relevant third-party terms before using those services.",
        ],
      },
      {
        title: "Website Accuracy and Availability",
        paragraphs: [
          "We make reasonable efforts to keep website information current and accurate. However, course information, schedules, availability, fees and other details may change.",
          "Website content is provided for general informational purposes and should not be treated as a substitute for written confirmation of specific enrolment terms.",
          "We aim to maintain website availability but cannot guarantee uninterrupted or error-free operation at all times.",
        ],
      },
      {
        title: "Limitation of Liability",
        paragraphs: [
          "To the extent permitted by applicable law, Cheekira Tech Pvt. Ltd. will not be responsible for indirect or consequential losses arising from the use of the website, reliance on general website information, or temporary website unavailability.",
          "Nothing in these Terms and Conditions excludes or limits liability where such exclusion or limitation is prohibited by law, including applicable consumer rights.",
        ],
      },
      {
        title: "Privacy",
        paragraphs: [
          "Personal information submitted through our website will be handled in accordance with our Privacy Policy. Please review the Privacy Policy to understand what information we collect, why we collect it and how you may contact us regarding your information.",
        ],
      },
      {
        title: "Changes to These Terms",
        paragraphs: [
          "We may update these Terms and Conditions to reflect changes in our services, business operations or legal requirements. The revised version will be published on this page with an updated effective date where appropriate.",
          "Your continued use of the website after an update does not remove any rights you may have under applicable law.",
        ],
      },
      {
        title: "Governing Law and Disputes",
        paragraphs: [
          "These Terms and Conditions are governed by the laws of India.",
          "Any dispute will be addressed through good-faith communication where practicable and otherwise handled by the competent courts or authorities having jurisdiction under applicable law.",
          "Nothing in this section restricts any statutory consumer remedy available to you.",
        ],
      },
      {
        title: "Contact Information",
        paragraphs: [
          "For questions about these Terms and Conditions, courses, registration or enrolment terms, please contact:",
          "Cheekira Tech Pvt. Ltd.\nOperating Aptech Learning Whitefield\n10, Shubhtaa Towers, ITPL Main Road\nNear Kadugodi Tree Park Metro Station, Whitefield, Bengaluru, Karnataka – 560066, India\nPhone: +91 74113 33500\nEmail: admin@cheekiratech.in\nGeneral Enquiries: aptechlearningwhitefield@gmail.com\nWebsite: https://www.aptechwhitefield.com/",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    seo: {
      title: "Aptech Whitefield Privacy Policy | Bangalore IT Institute",
      description:
        "Read the Aptech Whitefield privacy policy to see which personal details we collect, why we need them and how we keep them safe whenever you use our website.",
      keywords:
        "aptech whitefield privacy policy, privacy policy, data protection policy, aptech whitefield policies, aptech whitefield bangalore, privacy policy aptech bangalore, data protection policy aptech, data protection policy near itpl, aptech whitefield refund policy, aptech whitefield student terms, aptech whitefield website terms, aptech whitefield data privacy, aptech whitefield itpl, aptech whitefield contact, aptech computer institute whitefield, aptech learning centre bangalore",
      ogTitle: "How We Look After Your Personal Data | Aptech, Bangalore",
      ogDescription:
        "Your trust matters to us. Here's a plain-language look at how we handle enquiry forms, enrolment records and any information you share with our Whitefield team.",
      twitterTitle: "Your Data, Your Choice: Our Privacy Promise in Bangalore",
      twitterDescription:
        "Know exactly what we collect, how long we keep it for and how to ask us to update or delete your details. Simple answers, with no legal maze to wade through.",
    },
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Cheekira Tech Pvt. Ltd., which operates Aptech Learning Whitefield as an authorized Aptech Learning franchise centre, respects your privacy and is committed to handling personal information responsibly.",
          "This Privacy Policy explains how we collect, use, store, disclose and protect personal information when you visit our website, submit an enquiry, request counselling, register for a course or communicate with us.",
          "By using our website or providing information to us, you acknowledge that you have had the opportunity to read this Privacy Policy. Where consent is required by applicable law, we will seek it through an appropriate process.",
        ],
      },
      {
        title: "Information We Collect",
        paragraphs: [
          "Depending on how you interact with us, we may collect the following categories of information:",
          "Please do not submit passwords, payment-card security codes or other sensitive information through general enquiry forms.",
          "Technical information: when you visit our website, certain technical information may be collected through hosting services, server logs, analytics tools or similar technologies, depending on what is enabled. This may include IP address, browser type and device information, pages visited and referring website, approximate usage and interaction information, and date, time and technical error information.",
          "Information from service providers: where applicable, we may receive information associated with your enquiry or interaction from service providers that support our website, communications, analytics, registration or payment processes, subject to applicable law and the relevant arrangements.",
        ],
        listAfterParagraph: 0,
        list: [
          "Information you provide: name; mobile number and email address; educational qualifications and relevant professional background; course interests and training requirements; preferred batch, learning mode and counselling requirements; company name and professional contact information for corporate training enquiries; and information included in messages, forms or communications you send us.",
        ],
      },
      {
        title: "How We Use Your Information",
        paragraphs: [
          "We may use personal information for the following purposes:",
          "We will not use personal information for purposes that are incompatible with applicable legal requirements.",
        ],
        listAfterParagraph: 0,
        list: [
          "Responding to course enquiries and counselling requests.",
          "Explaining course content, eligibility, fees and batch availability.",
          "Processing registration and managing student administration.",
          "Communicating class schedules, assessments, course updates and completion requirements.",
          "Providing relevant career guidance and placement assistance.",
          "Responding to corporate training and institutional partnership requests.",
          "Improving website functionality, user experience and our services.",
          "Maintaining records, preventing fraud and protecting website security.",
          "Meeting applicable legal, accounting and regulatory obligations.",
          "Sending promotional communications where permitted by applicable law and subject to required consent.",
        ],
      },
      {
        title: "Calls, WhatsApp, Email and Promotional Messages",
        paragraphs: [
          "If you submit your phone number or email address through an enquiry form, we may contact you regarding your request and related course information.",
          "Promotional calls, messages and emails will be handled in accordance with applicable consent requirements and communication rules.",
          "Where an opt-out mechanism is available or required, you may use it to stop promotional communications. You may also contact us using the details provided below.",
          "Opting out of promotional messages will not necessarily stop essential communications relating to an existing enrolment, payment or service.",
        ],
      },
      {
        title: "Cookies and Similar Technologies",
        paragraphs: [
          "Our website or its service providers may use cookies or similar technologies to maintain website functionality, understand usage patterns, improve performance or support analytics and marketing, where applicable.",
          "You may be able to manage cookies through your browser settings and, where provided, our website's cookie preferences.",
          "Disabling certain cookies may affect some website features. Non-essential tracking technologies will be handled in accordance with applicable consent requirements.",
        ],
      },
      {
        title: "Sharing of Personal Information",
        paragraphs: [
          "We do not sell personal information as a routine business practice.",
          "We may share relevant information, where necessary and lawful, with:",
          "We seek to limit shared information to what is reasonably necessary for the relevant purpose.",
          "Third-party service providers may process information under their own terms and privacy practices, subject to applicable contractual and legal requirements.",
        ],
        listAfterParagraph: 1,
        list: [
          "Aptech and authorised franchise-related service providers for applicable academic administration, course delivery, certification or support.",
          "Technology and hosting providers to operate, maintain and secure our website and systems.",
          "Communication providers to respond to enquiries through email, telephone, WhatsApp or other enabled channels.",
          "Payment service providers to process transactions, where payment facilities are offered.",
          "Employers and recruitment partners where relevant to placement assistance and permitted by applicable law, including any necessary consent.",
          "Professional advisers and auditors where required for legitimate business or compliance purposes.",
          "Government authorities and legal bodies where disclosure is required by law or valid legal process.",
        ],
      },
      {
        title: "Data Storage, Security and Retention",
        paragraphs: [
          "We take reasonable measures appropriate to the nature of the information to protect personal data against unauthorised access, disclosure, alteration, loss or misuse.",
          "Such measures may include access restrictions, appropriate technical safeguards and security practices.",
          "No method of electronic transmission or storage can be guaranteed to be completely secure.",
          "We retain personal information for as long as reasonably necessary to fulfil the purposes described in this Policy, administer courses, maintain appropriate records, resolve disputes and meet legal obligations. Retention periods may vary depending on the type of information and the purpose for which it was collected.",
          "When information is no longer required, we will take appropriate steps to delete it or otherwise handle it in accordance with applicable law.",
        ],
      },
      {
        title: "Third-Party Links and Embedded Services",
        paragraphs: [
          "Our website may link to Aptech's main website, Google Maps, social media platforms, messaging services and other external websites or services.",
          "When you access those services, the relevant third party may collect information under its own privacy policy. We encourage you to review the applicable policies before sharing information with those services.",
          "Our Privacy Policy does not govern the independent practices of third-party websites.",
        ],
      },
      {
        title: "Children's Privacy",
        paragraphs: [
          "Some educational programs may be intended for school students or individuals under 18 years of age.",
          "Where personal information relating to a child is collected, we will follow the applicable legal requirements concerning parental or lawful guardian consent, age-related protections and the processing of children's personal data.",
          "Parents or lawful guardians may contact us with questions about information submitted in relation to a child.",
        ],
      },
      {
        title: "Your Privacy Rights and Choices",
        paragraphs: [
          "Subject to applicable law, you may request to:",
          "Requests will be reviewed and handled in accordance with applicable law. We may need to verify your identity before acting on a request.",
          "Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal. It may also affect our ability to provide particular services where the information is necessary for those services.",
        ],
        listAfterParagraph: 0,
        list: [
          "Know what personal information we hold about you.",
          "Correct inaccurate or incomplete information.",
          "Request deletion of information that we are no longer legally required to retain.",
          "Withdraw consent for processing where the processing is based on consent.",
          "Opt out of promotional communications.",
          "Raise a concern or complaint about how your information is handled.",
        ],
      },
      {
        title: "International Processing",
        paragraphs: [
          "Some third-party technology or communication providers may process or store information outside India.",
          "Where such processing occurs, we will address applicable legal requirements and relevant safeguards, as required by law.",
        ],
      },
      {
        title: "Changes to This Privacy Policy",
        paragraphs: [
          "We may revise this Privacy Policy to reflect changes in our operations, technology, service providers or applicable legal requirements.",
          "The revised version will be published on this page with an updated effective date where appropriate. We encourage visitors to review this page periodically.",
        ],
      },
      {
        title: "Contact and Privacy Requests",
        paragraphs: [
          "For privacy questions, data correction requests, deletion requests or complaints, please contact:",
          "Cheekira Tech Pvt. Ltd.\nOperating Aptech Learning Whitefield\n10, Shubhtaa Towers, ITPL Main Road\nNear Kadugodi Tree Park Metro Station, Whitefield, Bengaluru, Karnataka – 560066, India\nPhone: +91 74113 33500\nEmail: admin@cheekiratech.in\nGeneral Enquiries: aptechlearningwhitefield@gmail.com\nWebsite: https://www.aptechwhitefield.com/",
        ],
      },
    ],
  },
};

export function PolicyPage({ policy }: { policy: PolicyKey }) {
  const { title, seo, sections } = policies[policy];
  const canonical = `${SITE_URL}/${policy}`;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="bg-slate-50 min-h-screen">
        <header className="bg-[#0A1628] py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-blue-200 text-sm font-medium mb-3">
              Aptech Learning Whitefield
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              {title}
            </h1>
            <p className="text-blue-200 mt-4">
              Effective Date: 16 October 2026
            </p>
            <nav
              aria-label="Website policies"
              className="flex gap-5 mt-6 text-sm"
            >
              <Link
                to="/privacy"
                className="text-white/80 hover:text-white underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/80 hover:text-white underline underline-offset-4"
              >
                Terms and Conditions
              </Link>
            </nav>
          </div>
        </header>
        <div className="container mx-auto px-4 py-10 md:py-14 max-w-4xl">
          <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10">
            <p className="text-sm text-slate-500 mb-8">
              Website:{" "}
              <a href={SITE_URL} className="text-primary hover:underline">
                {SITE_URL}/
              </a>
            </p>
            <div className="space-y-9">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  aria-labelledby={`policy-section-${index}`}
                >
                  <h2
                    id={`policy-section-${index}`}
                    className="text-xl md:text-2xl font-bold text-[#0A1628] mb-3"
                  >
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    {section.paragraphs?.map((paragraph, paragraphIndex) => (
                      <Fragment key={paragraphIndex}>
                        <p className="whitespace-pre-line">{paragraph}</p>
                        {section.listAfterParagraph === paragraphIndex &&
                          renderList(section.list)}
                      </Fragment>
                    ))}
                    {section.listAfterParagraph === undefined &&
                      renderList(section.list)}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

function renderList(items?: string[]) {
  if (!items) return null;

  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
