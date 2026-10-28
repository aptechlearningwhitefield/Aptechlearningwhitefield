import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

// Images live in: public/assets/blog-images/python-vs-java/
const IMG_BASE = "/assets/blog-images/python-vs-java";
const img = (n: number) => `${IMG_BASE}/python-vs-java-img${n}.png`;

const UTM = "?utm_source=backlink&utm_medium=blog&utm_campaign=organic";
const LINKS = {
  python: `https://www.aptechwhitefield.com/courses/python${UTM}`,
  fullStack: `https://www.aptechwhitefield.com/courses/full-stack${UTM}`,
  home: `https://www.aptechwhitefield.com/${UTM}`,
};

const h2 = "text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4 leading-tight";
const h3 = "text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3";
const p = "text-slate-700 leading-relaxed mb-4";
const ul = "list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-6";
const inlineLink = "text-primary font-semibold underline underline-offset-2 hover:text-blue-700";

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={inlineLink}>
      {children}
    </a>
  );
}

const pythonReasons: [string, string][] = [
  ["Readable syntax", "Many Python programs are relatively easy to read."],
  ["Quick experimentation", "You can start with small scripts and build on them gradually."],
  ["Versatile applications", "Python can be used across several technical areas."],
  ["Project flexibility", "Learners can progress from simple calculations to automation and data-focused tasks."],
];

const javaReasons: [string, string][] = [
  ["Structured programming", "Java encourages clear organisation through classes and methods."],
  ["Object-oriented concepts", "Learners practise encapsulation, inheritance, and other core ideas."],
  ["Application development", "Java is used in a range of backend and enterprise software projects."],
  ["Strong foundations", "Learning Java can help learners understand how larger applications are organised."],
];

const comparison: [string, string, string][] = [
  ["Syntax", "Generally concise and readable", "More explicit structure and syntax"],
  ["Typing", "Dynamically typed", "Statically typed"],
  ["Program execution", "Commonly run through a Python interpreter or runtime", "Commonly compiled to bytecode and executed on the Java Virtual Machine"],
  ["Learning experience", "Often easier for quick experiments", "Encourages structured programming from early projects"],
  ["Common uses", "Automation, data analysis, scripting, web development, AI-related work", "Enterprise applications, backend systems, and many application-development projects"],
  ["Example beginner project", "Expense tracker or file organiser", "Student-record or library-management application"],
  ["Key concepts", "Variables, data structures, functions, modules", "Variables, types, classes, objects, methods"],
];

const pythonProjects: [string, string][] = [
  ["Expense tracker", "Store expenses and calculate totals by category."],
  ["File organiser", "Sort files into folders based on file type."],
  ["Basic data analysis", "Read a small dataset and summarise useful patterns."],
  ["Task reminder", "Create a simple script that organises tasks or displays reminders."],
];

const javaProjects: [string, string][] = [
  ["Student-record system", "Store and retrieve student details."],
  ["Library-management application", "Track books and borrowing status."],
  ["Inventory manager", "Record products, quantities, and stock changes."],
  ["Console-based quiz", "Ask questions, check answers, and calculate a score."],
];

const bothLanguagesSteps = [
  "Learn variables, data types, conditions, loops, and functions.",
  "Practise debugging and breaking problems into smaller steps.",
  "Build two or three small projects in your first language.",
  "Learn basic data structures and testing.",
  "Start the second language and compare how it handles familiar tasks.",
  "Rebuild one existing project in the second language to understand the differences.",
];

const courseChecklist: [string, string][] = [
  ["Curriculum", "Does it cover fundamentals before advanced topics?"],
  ["Practical work", "Will you write code and complete projects yourself?"],
  ["Debugging", "Are you taught how to find and fix errors?"],
  ["Instructor support", "Can you ask questions and get feedback?"],
  ["Project quality", "Do assignments reflect the skills you want to practise?"],
  ["Schedule and prerequisites", "Do the class timings and entry requirements fit your situation?"],
  ["Course details", "Are fees, duration, syllabus, and certificate information clearly explained?"],
];

const faqs: [string, string][] = [
  [
    "Is Python easier than Java for beginners?",
    "Python is often considered easier to start with because its syntax is concise and readable. Java introduces more explicit structure and type declarations. However, the easier option depends on your background, learning style, and the way the subject is taught.",
  ],
  [
    "Should I learn Python or Java first for software development?",
    "Both are valid choices. Python can be a good starting point for scripting and experimentation, while Java is useful for learning structured, object-oriented application development. Choose based on the projects and concepts you want to study first.",
  ],
  [
    "Can I learn Python without a programming background?",
    "Yes. Beginners can start with basic concepts such as variables, conditions, loops, and functions. Practising with small projects and learning to debug errors will help you develop your skills gradually.",
  ],
  [
    "Is Java useful for full-stack development?",
    "Java is commonly used for backend application development and can form part of a full-stack path. Full-stack development also involves front-end technologies, databases, and the integration of different application components.",
  ],
  [
    "Can I learn Python and Java together?",
    "You can, but it is often easier to learn one language's fundamentals first. Once you can write and debug small programs independently, learning a second language becomes a way to compare approaches and broaden your skills.",
  ],
];

function Figure({ n, alt }: { n: number; alt: string }) {
  return (
    <figure className="my-8">
      <img
        src={img(n)}
        alt={alt}
        loading={n === 1 ? "eager" : "lazy"}
        className="w-full h-auto rounded-2xl border border-slate-100"
      />
    </figure>
  );
}

function TermList({ items }: { items: [string, string][] }) {
  return (
    <ul className={ul}>
      {items.map(([term, text]) => (
        <li key={term}>
          <strong className="text-slate-900">{term}:</strong> {text}
        </li>
      ))}
    </ul>
  );
}

export default function PythonVsJavaArticle() {
  return (
    <article className="max-w-none">
      <Figure
        n={1}
        alt="Python and Java compared for beginners choosing a first programming language in Bangalore"
      />

      <p className={p}>
        Choosing your first programming language can feel confusing, especially
        when both Python and Java are widely used in software development. One
        is known for its readable syntax and beginner-friendly approach; the
        other is recognised for its structured programming model and broad use
        in application development.
      </p>
      <p className={p}>
        If you are a student, recent graduate, working professional, or
        aspiring developer in Bangalore, the right choice depends on what you
        want to build and how you prefer to learn. This guide to{" "}
        <ExtLink href={LINKS.python}>python vs java which to learn first</ExtLink>{" "}
        compares their syntax, practical applications, learning experience, and
        project possibilities so you can make a more informed decision.
      </p>

      <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg my-8">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Should You Learn Python or Java First?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Python is often a comfortable first language because its syntax is
          concise and readable. Java can be a strong starting point if you want
          to learn object-oriented programming and build structured
          applications. Neither language is universally better. Consider your
          interests, preferred projects, learning goals, and the kind of
          development work you want to explore before choosing.
        </p>
      </div>

      {/* 1. Python */}
      <h2 className={h2}>1. What Is Python?</h2>
      <p className={p}>
        Python is a general-purpose programming language known for readable
        syntax and a large ecosystem of libraries. It is used in automation,
        data analysis, web development, scripting, and artificial
        intelligence-related projects.
      </p>
      <p className={p}>
        For example, a beginner could write a Python script to organise files,
        calculate monthly expenses, process a spreadsheet, or analyse a small
        dataset. These projects help learners understand variables, conditions,
        loops, functions, and problem-solving without needing to write
        extensive code for every task.
      </p>
      <p className={p}>
        Python can be a practical choice if you want to experiment quickly and
        see how programming concepts work in real situations.
      </p>
      <Figure
        n={2}
        alt="Beginner learning Python by writing a small script"
      />
      <h3 className={h3}>Why do beginners choose Python?</h3>
      <TermList items={pythonReasons} />
      <p className={p}>
        Python still requires practice. Understanding logic, debugging errors,
        selecting appropriate data structures, and writing maintainable code
        are important parts of learning it.
      </p>

      {/* 2. Java */}
      <h2 className={h2}>2. What Is Java?</h2>
      <p className={p}>
        Java is a general-purpose programming language widely used to develop
        enterprise applications, backend systems, and many other kinds of
        software. It follows a structured programming approach and strongly
        supports object-oriented programming.
      </p>
      <p className={p}>
        A Java beginner might create a student-record application, a
        library-management system, or a simple inventory program. These
        exercises introduce classes, objects, methods, data types, and the
        organisation of code into reusable components.
      </p>
      <p className={p}>
        Java can be a good fit for learners who want to understand structured
        application development and are willing to practise its syntax and
        programming concepts step by step.
      </p>
      <Figure
        n={3}
        alt="Java classes and objects used to build a structured application"
      />
      <h3 className={h3}>Why do beginners choose Java?</h3>
      <TermList items={javaReasons} />
      <p className={p}>
        Java may involve more setup and syntax than a very small Python
        program. However, its structure can help beginners build disciplined
        coding habits.
      </p>

      {/* 3. Differences */}
      <h2 className={h2}>3. Python vs Java: Key Differences</h2>
      <p className={p}>
        Python and Java can both teach programming fundamentals, but they
        approach some tasks differently.
      </p>
      <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
        <table className="w-full text-sm text-left border-collapse min-w-[640px]">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Comparison point</th>
              <th scope="col" className="px-4 py-3 font-semibold">Python</th>
              <th scope="col" className="px-4 py-3 font-semibold">Java</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map(([point, py, java], i) => (
              <tr key={point} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <th scope="row" className="px-4 py-3 font-semibold text-slate-900 align-top">
                  {point}
                </th>
                <td className="px-4 py-3 text-slate-700 align-top">{py}</td>
                <td className="px-4 py-3 text-slate-700 align-top">{java}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={p}>
        Neither language is limited to the applications listed in this table.
        Both have broader ecosystems, and the best choice depends on the
        specific project and development environment.
      </p>
      <Figure
        n={4}
        alt="Side-by-side comparison of Python and Java syntax, typing and uses"
      />

      {/* 4. Easier */}
      <h2 className={h2}>4. Which Language Is Easier to Learn First?</h2>
      <p className={p}>
        For many new programmers, Python feels more approachable because a
        short program can contain fewer visible syntax elements. This can make
        it easier to focus on problem-solving rather than punctuation and
        boilerplate.
      </p>
      <p className={p}>
        Java can feel more demanding at first because beginners encounter
        types, class structure, and additional syntax early. At the same time,
        these concepts introduce useful habits for organising larger programs.
      </p>
      <p className={p}>
        Your experience also depends on your background. If you have never
        programmed before, either language can work with a structured learning
        plan. If you already understand programming fundamentals, moving
        between languages may be easier.
      </p>
      <h3 className={h3}>Choose based on your learning preferences</h3>
      <ul className={ul}>
        <li>Choose Python first if you prefer readable examples and want to experiment with small scripts.</li>
        <li>Consider Java first if you want to focus on object-oriented programming and structured applications.</li>
        <li>If you are unsure, try one small project in each language before committing to a longer learning path.</li>
      </ul>
      <p className={p}>
        Remember that “easier” does not mean “better for every goal.” Regular
        practice and the quality of your learning process matter more than
        choosing a language because it is popular.
      </p>

      {/* 5. Build */}
      <h2 className={h2}>5. What Can You Build With Python and Java?</h2>
      <p className={p}>
        Projects make programming concepts easier to understand because you
        apply them to a concrete problem.
      </p>
      <h3 className={h3}>Beginner Python project ideas</h3>
      <TermList items={pythonProjects} />
      <p className={p}>
        These projects help you practise variables, loops, functions, file
        handling, and data processing.
      </p>
      <h3 className={h3}>Beginner Java project ideas</h3>
      <TermList items={javaProjects} />
      <p className={p}>
        These projects can introduce classes, objects, methods, collections,
        validation, and application structure.
      </p>

      {/* 6. Career */}
      <h2 className={h2}>6. Which Language Should You Choose for Your Career Goals?</h2>
      <p className={p}>
        Your career interests can help you decide what to learn first, but a
        programming language alone does not guarantee a job or determine your
        entire career path.
      </p>
      <Figure
        n={5}
        alt="Choosing between Python and Java based on career goals"
      />
      <h3 className={h3}>If you are interested in automation or data-focused work</h3>
      <p className={p}>
        Python may be a useful starting point because it supports scripting,
        data processing, and a range of data-related libraries. As you
        progress, learn how to work with files, use relevant libraries, test
        your code, and explain the results of your projects.
      </p>
      <h3 className={h3}>If you are interested in backend or enterprise application development</h3>
      <p className={p}>
        Java is worth considering because it is widely used in structured
        application development. Build a foundation in object-oriented
        programming, collections, error handling, and testing before moving to
        larger applications.
      </p>
      <h3 className={h3}>If you are exploring full-stack development</h3>
      <p className={p}>
        Think about the type of application you want to create and the
        technologies you need around the language. Java-based backend
        development may involve frameworks and databases; a full-stack path
        also requires understanding front-end technologies and how application
        components communicate.
      </p>
      <p className={p}>
        If you want formal guidance, review the curriculum and practical
        exercises offered by a{" "}
        <ExtLink href={LINKS.python}>python course in whitefield</ExtLink> or a{" "}
        <ExtLink href={LINKS.fullStack}>java full stack course in whitefield</ExtLink>.
        Check the syllabus, instructor support, project work, prerequisites,
        and current course availability before enrolling.
      </p>

      {/* 7. Both */}
      <h2 className={h2}>7. Can You Learn Both Python and Java?</h2>
      <p className={p}>
        Yes. You can learn both, but beginners usually benefit from developing
        a sound foundation in one language before adding another. A practical
        sequence is:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-slate-700 leading-relaxed mb-6">
        {bothLanguagesSteps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <p className={p}>
        This approach helps you focus on programming concepts rather than
        trying to memorise two sets of syntax simultaneously.
      </p>

      {/* 8. Course */}
      <h2 className={h2}>8. How to Choose a Programming Course in Whitefield</h2>
      <p className={p}>
        A course should help you understand concepts, practise regularly, and
        develop the confidence to solve problems independently. Compare course
        options based on what is taught and how you will learn, rather than
        choosing solely by the language name.
      </p>
      <h3 className={h3}>Use this checklist before enrolling</h3>
      <TermList items={courseChecklist} />
      <p className={p}>
        If you are comparing a{" "}
        <ExtLink href={LINKS.python}>python course in whitefield</ExtLink> with a{" "}
        <ExtLink href={LINKS.fullStack}>java full stack course in whitefield</ExtLink>,
        remember that these may serve different learning goals. Python
        programming and Java full-stack development are not exactly equivalent
        course categories. Compare the actual syllabus, project scope, and
        technologies covered before deciding.
      </p>

      {/* Conclusion */}
      <h2 className={h2}>Conclusion</h2>
      <p className={p}>
        The choice between Python and Java depends on your interests,
        preferred learning style, and the projects you want to build. Python
        may feel more approachable if you want concise syntax and quick
        experiments. Java may appeal to you if you want to study
        object-oriented programming and structured application development.
      </p>
      <p className={p}>
        When deciding python vs java which to learn first, focus on building a
        strong programming foundation, practising consistently, and completing
        small projects. You can learn the second language later as your goals
        become clearer.
      </p>
      <p className={p}>
        If you are considering programming training in Whitefield, review the
        syllabus, hands-on project work, schedule, and support offered by the
        centre before making a decision. Visit the{" "}
        <ExtLink href={LINKS.home}>Aptech Whitefield website</ExtLink> to
        explore the available learning options and enquire about relevant
        course details.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 my-10 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          Not sure which language matches your goals?
        </h3>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          Start by identifying the type of project you want to build, then
          compare the course syllabus and practical learning approach. Confirm
          course availability, syllabus, fees, and schedule directly with the
          centre before enrolling.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Courses <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-slate-200 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* FAQs */}
      <h2 className={h2}>FAQs</h2>
      <div className="space-y-3">
        {faqs.map(([q, a], i) => (
          <details
            key={q}
            className="group bg-white border border-slate-200 rounded-xl px-5 py-4 open:shadow-sm"
          >
            <summary className="cursor-pointer font-bold text-slate-900 list-none flex justify-between gap-4">
              <span>
                {i + 1}. {q}
              </span>
              <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="text-slate-700 leading-relaxed mt-3">{a}</p>
          </details>
        ))}
      </div>
    </article>
  );
}
