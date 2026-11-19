import { Link } from "react-router";

const imageBase = "/assets/blog-images/how-bcom-graduates-it-career";

const images = {
  hero: `${imageBase}/technology-skills-after-bcom-graduate-guide.png`,
  accounting: `${imageBase}/accounting-software-vs-advanced-excel.png`,
  analytics: `${imageBase}/business-data-to-power-bi-dashboard-workflow.png`,
  programming: `${imageBase}/python-programming-basics-after-bcom.png`,
  project: `${imageBase}/bcom-graduate-practical-technology-learning-project.png`,
};

function ArticleImage({
  src,
  alt,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        loading={loading}
        className="w-full h-auto rounded-xl"
      />
    </figure>
  );
}

export default function ChoosingTechnologySkillsAfterBcomArticle() {
  return (
    <article className="blog-article max-w-none text-slate-700">
      <ArticleImage
        src={images.hero}
        alt="BCom graduate exploring technology skills on a laptop."
        loading="eager"
      />

      <p>
        A BCom degree gives you a foundation in accounting, finance, and
        business operations. If you are considering a technology career, you
        can build on that foundation by learning digital tools and technical
        skills that match the kind of work you want to do.
      </p>
      <p>
        There is no single technology skill that every commerce graduate needs.
        Some learners enjoy financial records and spreadsheets; others prefer
        business data, dashboards, or programming. This guide compares common
        starting points and offers a practical way to choose.
      </p>

      <h2>Start with Your BCom Strengths</h2>
      <p>
        Your experience with accounts, budgets, reports, and business processes
        can help you understand how organisations use technology. Think about
        which activities you enjoy: maintaining records, working with numbers,
        explaining trends, or solving problems step by step.
      </p>
      <ul>
        <li>
          <strong>Enjoy accounting and records?</strong> Explore digital
          accounting tools and spreadsheet skills.
        </li>
        <li>
          <strong>Enjoy reports and patterns?</strong> Explore data analytics
          and visualisation.
        </li>
        <li>
          <strong>Enjoy logic and problem-solving?</strong> Try programming
          fundamentals.
        </li>
      </ul>

      <h2>Technology Skills to Explore After BCom</h2>

      <h3>1. Digital Accounting and Advanced Excel</h3>
      <p>
        Accounting software supports tasks such as recording transactions and
        maintaining financial records. Spreadsheets are useful for organising
        information, applying formulas, comparing figures, and preparing
        summaries. These tools serve different purposes and can complement one
        another.
      </p>
      <ArticleImage
        src={images.accounting}
        alt="Comparison of accounting software recordkeeping and Advanced Excel analysis."
      />
      <p>
        A beginner learning plan might cover accounting workflows, spreadsheet
        formulas, sorting and filtering, charts, and clear report formatting.
        Review the course syllabus to see which tools and topics are actually
        included.
      </p>

      <h3>2. Data Analytics and Business Reporting</h3>
      <p>
        Data analytics may suit you if you like asking questions about business
        information: which costs changed, what products are selling, or how
        results compare over time. A learning path can introduce data
        organisation, cleaning, analysis, and visual reporting.
      </p>
      <ArticleImage
        src={images.analytics}
        alt="Business data workflow from records and preparation to analysis and reporting."
      />
      <p>Depending on the programme, tools to explore may include:</p>
      <ul>
        <li>Spreadsheets for calculations and structured data</li>
        <li>SQL fundamentals for working with databases</li>
        <li>Charts and dashboards for presenting findings</li>
        <li>Power BI or another business intelligence tool</li>
      </ul>
      <p>
        Begin with the basics and practise explaining what a report shows.
        Learning to communicate an insight is as useful as creating a chart.
      </p>

      <h3>3. Python and Programming Fundamentals</h3>
      <p>
        Programming introduces a different way to solve problems: describe a
        task as clear instructions a computer can follow. Python is one option
        for learning foundational concepts and can be used in areas such as
        automation and data work.
      </p>
      <ArticleImage
        src={images.programming}
        alt="Learner practising Python programming fundamentals at a computer."
      />
      <p>A beginner can start with:</p>
      <ul>
        <li>Variables and common data types</li>
        <li>Conditions and loops</li>
        <li>Functions and basic data structures</li>
        <li>Small exercises that solve practical problems</li>
      </ul>
      <p>
        You do not need to choose programming just because it is associated with
        IT. Try a few beginner exercises first and see whether you enjoy the
        process.
      </p>

      <h2>How to Choose a Learning Path</h2>
      <p>
        Compare a course with your interests and current experience, rather
        than choosing only by its title. Before enrolling, check its syllabus,
        prerequisites, practice work, duration, and learning format.
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3">If you enjoy...</th>
              <th className="border border-slate-200 p-3">
                Explore learning in...
              </th>
              <th className="border border-slate-200 p-3">
                Useful first steps
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3">
                Accounts and financial records
              </td>
              <td className="border border-slate-200 p-3">
                Digital accounting
              </td>
              <td className="border border-slate-200 p-3">
                Accounting workflows and spreadsheets
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3">
                Reports and business numbers
              </td>
              <td className="border border-slate-200 p-3">
                Data analytics
              </td>
              <td className="border border-slate-200 p-3">
                Data organisation and visual reports
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3">
                Logic and problem-solving
              </td>
              <td className="border border-slate-200 p-3">
                Programming
              </td>
              <td className="border border-slate-200 p-3">
                Python fundamentals and small exercises
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Questions to ask a training provider include:</p>
      <ul>
        <li>Does the course start at a level that suits my experience?</li>
        <li>Which tools and topics are covered in the current syllabus?</li>
        <li>Are there guided exercises or projects to practise with?</li>
        <li>What are the prerequisites, duration, fees, and learning format?</li>
      </ul>

      <h2>A Simple Roadmap</h2>
      <ol>
        <li>
          <strong>Choose one area to try.</strong> Start with accounting tools,
          analytics, or programming based on your interests.
        </li>
        <li>
          <strong>Learn the foundations.</strong> Build comfort with the
          terminology and basic tools before moving to advanced topics.
        </li>
        <li>
          <strong>Practise on small tasks.</strong> Create a spreadsheet
          summary, interpret a simple dataset, or write a short program.
        </li>
        <li>
          <strong>Keep examples of your work.</strong> Note what you did, the
          tools you used, and what you learned.
        </li>
        <li>
          <strong>Review your next step.</strong> Continue deeper in that area
          or explore a related skill once you understand the basics.
        </li>
      </ol>
      <ArticleImage
        src={images.project}
        alt="BCom graduate reviewing a practical technology learning project."
      />

      <h2>Conclusion</h2>
      <p>
        Your BCom background can help you connect business knowledge with
        technology. Digital accounting and Excel, data analytics, and
        programming are different paths, each suited to different interests.
        Start with the area that feels relevant, check the syllabus carefully,
        and build confidence through regular practice.
      </p>

      <div className="my-10 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Ready to explore your next learning step?
        </h2>
        <p className="mb-5">
          Compare available courses and ask about the current syllabus and
          learning requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/courses"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Explore courses
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-white"
          >
            Contact the centre
          </Link>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <h3>Which technology skill should I learn first after BCom?</h3>
      <p>
        Start with a skill that matches the work you enjoy. Digital accounting
        and spreadsheets may suit learners interested in records, analytics may
        suit those who enjoy reports, and programming may appeal to those who
        like logic and problem-solving.
      </p>
      <h3>Can a BCom graduate learn programming?</h3>
      <p>
        Yes. Begin with programming fundamentals and small exercises. You can
        build up gradually without assuming prior computer science experience.
      </p>
      <h3>Should I choose data analytics or programming?</h3>
      <p>
        They focus on different tasks. Analytics centres on preparing,
        understanding, and presenting data; programming centres on writing
        instructions to solve problems. Try introductory activities in both
        before deciding.
      </p>
      <h3>What should I check before joining a course?</h3>
      <p>
        Review the current syllabus, prerequisites, practical work, tools
        covered, duration, fees, and learning format. Confirm details directly
        with the training provider.
      </p>
    </article>
  );
}
