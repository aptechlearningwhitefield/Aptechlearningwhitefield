import { SITE_URL } from "./site-url";
import { socialProfileList } from "./social-links";

/**
 * SEO Metadata Configuration for Aptech Learning Whitefield
 * Centralized management of title, description, keywords, and structured data
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
}

export const courseListingSeoKeywords =
  "software training institute in whitefield, short term computer courses with job placement, aptech course fees, aptech whitefield fees, aptech course fees and duration, computer courses with emi or education loan, computer course for beginners, it for beginners course, it courses, computer courses, software courses, it courses in whitefield, it courses in bangalore, best it courses in bangalore, it courses near itpl, it courses near me, it courses fees in bangalore, it courses with placement in whitefield, computer courses in whitefield, computer courses in bangalore, software courses in whitefield, software courses bangalore, it courses in marathahalli, it courses in kr puram";

export const blogListingSeoKeywords =
  "IT course options in Bangalore, aptech vs online courses which is better, online vs offline computer classes which is better, it career guide, it jobs, tech career tips, it career guide in whitefield, it career guide in bangalore, it career guide near itpl, it jobs in bangalore, it jobs in marathahalli, it jobs in whitefield, tech career tips in kr puram, tech career tips for freshers in bangalore, tech career tips in whitefield, it career guides for beginners";

export const courseSeoKeywords: Record<string, string> = {
  "ai-machine-learning":
    "ai ml course in whitefield, machine learning training bangalore, artificial intelligence course in bangalore, ai ml course, artificial intelligence course, machine learning course, ai ml course near itpl, ai ml course in bangalore, best ai ml course in bangalore, ai ml course near me, ai ml course fees in bangalore, ai ml course with placement in whitefield, artificial intelligence course in whitefield, artificial intelligence course in marathahalli, machine learning course in whitefield, machine learning course bangalore, ai ml course in marathahalli, ai ml course in kr puram",
  "generative-ai":
    "artificial intelligence course in bangalore, ai ml course in whitefield, generative ai course, genai course, llm course, generative ai course in whitefield, generative ai course in bangalore, best generative ai course in bangalore, generative ai course near itpl, generative ai course near me, generative ai course fees in bangalore, generative ai course with placement in whitefield, genai course in whitefield, genai course in bangalore, llm course in whitefield, llm course bangalore, generative ai course in marathahalli, generative ai course in kr puram",
  "genai-accelerator":
    "weekend it course in whitefield for working professionals, artificial intelligence course in bangalore, genai accelerator, generative ai course for professionals, weekend ai course, genai accelerator in whitefield, genai accelerator in bangalore, best genai accelerator in bangalore, genai accelerator near itpl, genai accelerator near me, genai accelerator fees in bangalore, genai accelerator with placement in whitefield, generative ai course for professionals in whitefield, generative ai course for professionals in bangalore, weekend ai course in whitefield, weekend ai course bangalore, genai accelerator in marathahalli, genai accelerator in kr puram",
  "prompt-engineering":
    "prompt engineering course in bangalore, prompt engineering course in whitefield, artificial intelligence course in bangalore, is ai ml hard for beginners, prompt engineering course, chatgpt course, ai tools course, prompt engineering course near itpl, best prompt engineering course in bangalore, prompt engineering course near me, prompt engineering course fees in bangalore, prompt engineering course with placement in whitefield, chatgpt course in whitefield, chatgpt course in bangalore, ai tools course in whitefield, ai tools course bangalore, prompt engineering course in marathahalli, prompt engineering course in kr puram",
  "innovate-generative-ai":
    "generative ai course for beginners, ai course for beginners in whitefield, artificial intelligence course in bangalore, computer course for beginners, generative ai for beginners, ai course for beginners, no code ai course, generative ai for beginners in whitefield, generative ai for beginners in bangalore, best generative ai for beginners in bangalore, generative ai for beginners near itpl, generative ai for beginners near me, generative ai for beginners fees in bangalore, generative ai for beginners with placement in whitefield, ai course for beginners in bangalore, no code ai course in whitefield, no code ai course bangalore, generative ai for beginners in marathahalli, generative ai for beginners in kr puram",
  "rapid-app-development":
    "rapid app development course in whitefield, app development course in bangalore, web development course in bangalore, software training institute in whitefield, app development course, low code development course, rapid application development course, app development course in whitefield, best app development course in bangalore, app development course near itpl, app development course near me, app development course fees in bangalore, app development course with placement in whitefield, low code development course in whitefield, low code development course in bangalore, rapid application development course in whitefield, rapid application development course bangalore, app development course in marathahalli, app development course in kr puram",
  "data-science":
    "data science course in whitefield, data science course in bangalore with placement, smart pro data science aptech, data science course, data science training, data science certification, data science course near itpl, data science course in bangalore, best data science course in bangalore, data science course near me, data science course fees in bangalore, data science course with placement in whitefield, data science training in whitefield, data science training in bangalore, data science certification in whitefield, data science certification bangalore, data science course in marathahalli, data science course in kr puram",
  "data-science-essentials":
    "can non it graduate learn data science, data science course in whitefield, data science for beginners, data science course for non it, data science basics course, data science for beginners in whitefield, data science for beginners in bangalore, best data science for beginners in bangalore, data science for beginners near itpl, data science for beginners near me, data science for beginners fees in bangalore, data science for beginners with placement in whitefield, data science course for non it in whitefield, data science course for non it in bangalore, data science basics course in whitefield, data science basics course bangalore, data science for beginners in marathahalli, data science for beginners in kr puram",
  "data-analytics-power-bi":
    "data analyst jobs in whitefield, mis course in bangalore, best it course after bcom, data analytics course, power bi course, data analyst course, data analytics course in whitefield, data analytics course in bangalore, best data analytics course in bangalore, data analytics course near itpl, data analytics course near me, data analytics course fees in bangalore, data analytics course with placement in whitefield, power bi course in whitefield, power bi course in bangalore, data analyst course in whitefield, data analyst course bangalore, data analytics course in marathahalli, data analytics course in kr puram",
  "data-visualization-power-bi":
    "advanced excel course in whitefield, excel training for jobs, tally vs advanced excel for accounting jobs, mis course in bangalore, advanced excel course, power bi training, data visualization course, advanced excel course near itpl, advanced excel course in bangalore, best advanced excel course in bangalore, advanced excel course near me, advanced excel course fees in bangalore, advanced excel course with placement in whitefield, power bi training in whitefield, power bi training in bangalore, data visualization course in whitefield, data visualization course bangalore, advanced excel course in marathahalli, advanced excel course in kr puram",
  python:
    "python course in whitefield, python training in bangalore, aptech certified python developer, python course fees in bangalore, what is the fee for python course at aptech, python course, python training, python certification, python course near itpl, python course in bangalore, best python course in bangalore, python course near me, python course fees in marathahalli, python course with placement in whitefield, python training in whitefield, python training in kr puram, python certification in whitefield, python certification bangalore, python course in marathahalli, python course in kr puram",
  "foundation-ai-ml":
    "is ai ml hard for beginners, ai ml course in whitefield, ai ml for beginners, foundation ai course, basic machine learning course, ai ml for beginners in whitefield, ai ml for beginners in bangalore, best ai ml for beginners in bangalore, ai ml for beginners near itpl, ai ml for beginners near me, ai ml for beginners fees in bangalore, ai ml for beginners with placement in whitefield, foundation ai course in whitefield, foundation ai course in bangalore, basic machine learning course in whitefield, basic machine learning course bangalore, ai ml for beginners in marathahalli, ai ml for beginners in kr puram",
  "advanced-ai-ml":
    "machine learning training bangalore, artificial intelligence course in bangalore, advanced machine learning course, deep learning course, advanced ai course, advanced machine learning course in whitefield, advanced machine learning course in bangalore, best advanced machine learning course in bangalore, advanced machine learning course near itpl, advanced machine learning course near me, advanced machine learning course fees in bangalore, advanced machine learning course with placement in whitefield, deep learning course in whitefield, deep learning course in bangalore, advanced ai course in whitefield, advanced ai course bangalore, advanced machine learning course in marathahalli, advanced machine learning course in kr puram",
  cybersecurity:
    "cyber security course in whitefield, cyber security course in bangalore, software training institute in whitefield, skills needed to get it job in bangalore, cyber security course, ethical hacking course, network security course, cyber security course near itpl, best cyber security course in bangalore, cyber security course near me, cyber security course fees in bangalore, cyber security course with placement in whitefield, ethical hacking course in whitefield, ethical hacking course in bangalore, network security course in whitefield, network security course bangalore, cyber security course in marathahalli, cyber security course in kr puram",
  "full-stack":
    "full stack developer course in whitefield, java full stack course in whitefield, java training institute in bangalore, spring boot course bangalore, aptech smart pro java, web development course in bangalore, mern stack course bangalore, full stack developer course, java full stack course, mern stack course, full stack developer course near itpl, full stack developer course in bangalore, best full stack developer course in bangalore, full stack developer course near me, full stack developer course fees in bangalore, full stack developer course with placement in whitefield, java full stack course in bangalore, mern stack course in whitefield, full stack developer course in marathahalli, full stack developer course in kr puram",
  "cloud-computing":
    "cloud computing course in whitefield, aws course in bangalore, software training institute in whitefield, best it course after bsc, cloud computing course, aws course, azure course, cloud computing course near itpl, cloud computing course in bangalore, best cloud computing course in bangalore, cloud computing course near me, cloud computing course fees in bangalore, cloud computing course with placement in whitefield, aws course in whitefield, aws course in marathahalli, azure course in whitefield, azure course bangalore, cloud computing course in marathahalli, cloud computing course in kr puram",
  "microsoft-technologies":
    ".net course in whitefield, asp.net training in bangalore, .net course, asp.net course, c# course, .net course near itpl, .net course in bangalore, best .net course in bangalore, .net course near me, .net course fees in bangalore, .net course with placement in whitefield, asp.net course in whitefield, asp.net course in bangalore, c# course in whitefield, c# course bangalore, .net course in marathahalli, .net course in kr puram",
  "digital-marketing":
    "digital marketing course in whitefield, digital marketing institute in bangalore, digital marketing course, seo course, google ads course, digital marketing course near itpl, digital marketing course in bangalore, best digital marketing course in bangalore, digital marketing course near me, digital marketing course fees in bangalore, digital marketing course with placement in whitefield, seo course in whitefield, seo course in bangalore, google ads course in whitefield, google ads course bangalore, digital marketing course in marathahalli, digital marketing course in kr puram",
};

export const blogSeoKeywords: Record<string, string> = {
  "beyond-accounting-bcom-it-career-options":
    "it career options for bcom graduates, beyond accounting career, bcom to it career, tally vs advanced excel, data analytics course after bcom, python course after bcom, software testing course, bcom graduate jobs, it courses in whitefield",
  "which-it-course-has-better-job-opportunities-in-bangalore":
    "which it course has better job opportunities, it course with better jobs in bangalore, short term it courses with placement, full stack developer course, data analytics course, cloud computing course, cybersecurity course, it fresher jobs in bangalore, it courses in whitefield",
  "starting-it-career-bangalore-skills-course-paths":
    "which course has more job opportunities in bangalore, skills needed to get it job in bangalore, short term computer courses with job placement, companies hiring freshers near itpl, python programming, sql, data analytics, power bi, full stack development, cloud computing, cybersecurity, ai and machine learning, practical projects, entry-level it roles",
  "best-course-for-career-switch-to-it":
    "best course for career switch to it, short term computer courses with job placement, career change to it, it courses for non-it graduates, data analytics for career switch, python programming for beginners, full stack development course, cybersecurity course, technology skills for beginners",
  "best-course-career-switch-to-it":
    "best course for career switch to it, short term computer courses with job placement, non-it to it career transition, technology skills, programming fundamentals, practical it projects, career guidance, technical training",
  "best-it-course-after-bsc":
    "best it course after bsc, it courses for bsc graduates, computer courses after bsc, career options after bsc, bsc to it career, technology skills, data science, data analytics, python programming, software development, sql, power bi",
  "arts-to-it-how-ba-graduates-can-build-a-technology-career":
    "best it course after ba, best course for arts students after graduation, it courses for arts graduates, arts to it career, technology courses after ba, computer skills for graduates, digital skills, data analytics, programming for beginners, python, web development",
  "best-it-course-after-bcom-career-guide":
    "best it course after bcom, tally vs advanced excel for accounting jobs, accounting software course, data analytics course after bcom, python course after bcom, it career options after bcom",
  "it-career-options-after-graduation":
    "it career options after graduation, best course for career switch to it, best it course after bcom, best it course after ba, best it course after bsc, skills needed to get it job in bangalore, programming, data analytics, cloud computing, cybersecurity, computer fundamentals",
  "choosing-technology-skills-after-bcom":
    "technology skills after bcom, choosing technology skills after bcom, digital accounting, advanced excel, data analytics, programming after bcom, commerce graduates, technology courses after bcom",
  "which-computer-course-is-best-after-12th":
    "which computer course is best after 12th, computer courses after 12th, best it course after ba, best it course after bsc, best it course after bcom, programming course for beginners, full stack course, data analytics course, artificial intelligence course, computer education in whitefield, computer courses in bangalore",
  "best-it-course-after-bcom":
    "best it course after bcom, tally vs advanced excel for accounting jobs, short term computer courses with job placement, accounting software, business data, excel skills, data analytics, programming fundamentals, career transition, digital skills",
  "how-bcom-graduates-can-build-it-career":
    "best it course after bcom, tally vs advanced excel, can non-it graduates learn data science, commerce graduates, it career options, accounting software, business reporting, excel skills, sql, power bi, python programming, data analysis, practical technology projects",
  "ai-machine-learning-career-2026":
    "best course for career switch to it, ai ml career, ai jobs, machine learning jobs, ai ml career in whitefield, ai ml career in bangalore, ai ml career near itpl, ai jobs in bangalore, ai jobs in marathahalli, ai jobs in whitefield, machine learning jobs in kr puram, machine learning jobs for freshers in bangalore, machine learning jobs in whitefield, ai ml career guide for beginners",
  "data-science-vs-data-analytics":
    "data science vs data analytics, data analyst jobs in whitefield, data science course in whitefield, data science courses in bangalore with placement, smart pro data science aptech, data analytics and power bi, data science career, data analyst career, data science vs data analytics in whitefield, data science vs data analytics in bangalore, data science vs data analytics near itpl, data science career in bangalore, data science career in marathahalli, data science career in whitefield, data analyst career for freshers in bangalore, data science vs data analytics guide for beginners",
  "python-for-beginners-whitefield":
    "python vs java which to learn first, python developer salary in bangalore for freshers, python for beginners, learn python, python jobs, python for beginners in whitefield, python for beginners in bangalore, python for beginners near itpl, learn python in bangalore, learn python in marathahalli, learn python in whitefield, python jobs in kr puram, python jobs for freshers in bangalore, python jobs in whitefield, python for beginners guide for beginners",
};

export interface CourseSEOMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const courseSeoMetadata: Record<string, CourseSEOMetadata> = {
  "ai-machine-learning": {
    title: "AI ML Course in Whitefield, Bangalore | Hands-On Projects",
    description:
      "Join our AI ML course in Whitefield and learn machine learning the practical way, with real datasets, guided projects and mentors who explain things simply.",
    ogTitle: "Build Real AI Projects, Not Just Notes | Aptech, Bangalore",
    ogDescription:
      "You'll train models, clean messy data and present your work like a pro. By the end, you'll have a portfolio that shows recruiters what you can actually do.",
    twitterTitle: "Want a Career in AI? Start Machine Learning in Bangalore",
    twitterDescription:
      "Machine learning training in Bangalore that starts with the basics and builds up step by step. Weekday and weekend batches at our centre near ITPL, Whitefield.",
  },
  "generative-ai": {
    title: "Artificial Intelligence Course in Bangalore | Generative AI",
    description:
      "Our artificial intelligence course in Bangalore focuses on generative AI: LLMs, chatbots and AI tools, so you can build useful things, not just talk about them.",
    ogTitle: "Learn to Build Apps With Generative AI | Aptech, Bangalore",
    ogDescription:
      "ChatGPT is just the start. Discover how large language models work, connect them to real data and create simple AI apps you can proudly show in interviews.",
    twitterTitle: "Curious About ChatGPT and LLMs? Learn GenAI in Bangalore",
    twitterDescription:
      "Go beyond copy-pasting prompts. In this hands-on GenAI course at Aptech Whitefield, you'll learn how AI tools really work and build real projects of your own.",
  },
  "genai-accelerator": {
    title: "Weekend IT Course in Whitefield, Bangalore for Professionals",
    description:
      "A weekend IT course in Whitefield for working professionals who want generative AI skills fast. Learn across Saturdays and Sundays, use it at work on Monday.",
    ogTitle: "Fast-Track Your GenAI Skills on Weekends | Aptech Bangalore",
    ogDescription:
      "Busy weekdays? No problem. This accelerator packs practical generative AI training into focused weekend sessions built around real workplace tasks and tools.",
    twitterTitle: "Only Free on Weekends? Learn Generative AI in Bangalore Now",
    twitterDescription:
      "You don't have to quit your job to upskill. Join our GenAI Accelerator in Whitefield, near ITPL, and learn alongside other professionals over a few weekends.",
  },
  "prompt-engineering": {
    title: "Prompt Engineering Course in Bangalore | Aptech Whitefield",
    description:
      "Our prompt engineering course in Bangalore teaches you to get sharper, more reliable answers from ChatGPT, Gemini and other AI tools for work and for study.",
    ogTitle: "Get Better Answers From AI Tools | Prompt Skills, Bangalore",
    ogDescription:
      "Most people use AI like a search box. Learn simple techniques to write clear prompts, check outputs and save hours on writing, research and everyday tasks.",
    twitterTitle: "Tired of Vague AI Replies? Learn Prompting in Bangalore",
    twitterDescription:
      "No coding needed. In a few short sessions at Aptech Whitefield, you'll learn how to talk to AI tools so they give you exactly what you need, almost every time.",
  },
  "innovate-generative-ai": {
    title: "Generative AI Course for Beginners in Bangalore | Aptech",
    description:
      "A friendly generative AI course for beginners at Aptech Whitefield. Explore AI tools, build small projects and grow your confidence without writing any code.",
    ogTitle: "Start Your AI Journey With Zero Coding | Aptech, Bangalore",
    ogDescription:
      "Never touched AI before? That's fine. This course starts from scratch and shows you how to use generative AI for ideas, content and simple problem-solving.",
    twitterTitle:
      "New to AI? Try Our Beginner-Friendly GenAI Course, Bangalore",
    twitterDescription:
      "Students, homemakers, business owners and job seekers are all welcome. Learn what generative AI can do for you in a relaxed classroom near ITPL, Whitefield.",
  },
  "rapid-app-development": {
    title: "Rapid App Development Course in Whitefield, East Bangalore",
    description:
      "Our rapid app development course in Whitefield shows you how to plan, build and launch working apps quickly using modern low-code and web tools, step by step.",
    ogTitle: "Turn Your App Idea Into Reality, Fast | Aptech, Bangalore",
    ogDescription:
      "Got an idea for an app but no idea where to start? Learn a quick, practical way to design, build and test apps, then deploy them for real users to try out.",
    twitterTitle: "Build and Launch an App in Weeks, Not Months | Bangalore",
    twitterDescription:
      "It's perfect for founders, freshers and developers who want results fast. Learn rapid app development with guided projects at our centre near ITPL, Whitefield.",
  },
  "data-science": {
    title: "Data Science Course in Whitefield, Bangalore | Placements",
    description:
      "Join the data science course in Whitefield built around Aptech Smart Pro. Learn Python, statistics, machine learning and analytics, then get placement help.",
    ogTitle: "Learn to Turn Raw Data Into Decisions | Aptech, Bangalore",
    ogDescription:
      "Companies have more data than ever and too few people who can read it. Build that skill with real case studies, hands-on labs and support from friendly mentors.",
    twitterTitle:
      "Thinking About Data Science? Start Your Journey in Bangalore",
    twitterDescription:
      "Whether you're a fresher, an engineer or switching from another field, our Smart Pro Data Science course in Bangalore gives you a clear path to a data role.",
  },
  "data-science-essentials": {
    title: "Can Non IT Graduate Learn Data Science? Yes, in Bangalore",
    description:
      "Can non IT graduate learn data science? Absolutely. Data Science Essentials at Aptech Whitefield starts from zero and builds your skills one step at a time.",
    ogTitle: "Data Science for Commerce and Arts Graduates | Bangalore",
    ogDescription:
      "No coding background? No maths degree? You can still get into data. We start with the basics of Python and statistics and explain every concept in simple terms.",
    twitterTitle: "From BCom or BA to Data Science? It's Possible in Bangalore",
    twitterDescription:
      "Plenty of non-IT graduates now work with data. This beginner course at Aptech Whitefield gives you the foundation to join them, at a pace that truly suits you.",
  },
  "data-analytics-power-bi": {
    title: "Data Analyst Jobs in Whitefield | Power BI Course, Bangalore",
    description:
      "Get ready for data analyst jobs in Whitefield with our Power BI course. Learn dashboards, MIS reporting and simple data storytelling that managers actually use.",
    ogTitle: "Build Dashboards Your Manager Will Actually Love | Bangalore",
    ogDescription:
      "Excel sheets everywhere and still no clear picture? Learn to pull your data together, spot trends and present insights in Power BI with confidence and clarity.",
    twitterTitle: "Best IT Course After BCom? Try Data Analytics in Bangalore",
    twitterDescription:
      "Commerce grads and MIS professionals, this one's for you. Turn your sense for numbers into a data analytics career with hands-on Power BI training near ITPL.",
  },
  "data-visualization-power-bi": {
    title: "Advanced Excel Course in Whitefield, Bangalore | Power BI",
    description:
      "Our advanced Excel course in Whitefield covers formulas, pivot tables, MIS reports and Power BI visuals, the kind of Excel training for jobs employers ask for.",
    ogTitle: "Make Spreadsheets Work for You, Not Against You | Bangalore",
    ogDescription:
      "Stop wrestling with messy spreadsheets. Learn shortcuts, smart formulas and clean charts that make your reports faster to build and much easier to understand.",
    twitterTitle:
      "Still Doing Reports the Hard Way? Excel Classes in Bangalore",
    twitterDescription:
      "Pivot tables, VLOOKUP, dashboards and more. Practical Excel and Power BI classes at Aptech Whitefield for students, accountants and busy office professionals.",
  },
  python: {
    title: "Python Course in Whitefield, Bangalore | Fees & Placement",
    description:
      "Join our Python course in Whitefield and become an Aptech Certified Python Developer. Check Python course fees in Bangalore, batch timings and job support.",
    ogTitle: "Learn Python the Practical, Hands-On Way | Aptech Bangalore",
    ogDescription:
      "Write your first program in week one and build real projects by the end. Our trainers keep things simple, hands-on and focused on what real jobs actually need.",
    twitterTitle: "Want to Become a Python Developer in Bangalore? Start Here",
    twitterDescription:
      "Python training in Bangalore for complete beginners and coders levelling up. Flexible weekday and weekend batches near ITPL, plus help landing your first role.",
  },
  "foundation-ai-ml": {
    title: "Is AI ML Hard for Beginners? Start Simple Here in Bangalore",
    description:
      "Is AI ML hard for beginners? Not when it's taught well. Our Foundation AI & ML course in Whitefield breaks every idea into small, easy-to-follow steps for you.",
    ogTitle: "AI and Machine Learning Basics, Made Simple | Bangalore",
    ogDescription:
      "There's no heavy maths on day one. You'll start with intuition and examples, then move into simple Python models once the core ideas finally click for you.",
    twitterTitle: "Nervous About AI? Begin With Foundation AI & ML, Bangalore",
    twitterDescription:
      "This is the gentle starting point before advanced AI. Learn at your own pace with patient trainers at Aptech Whitefield and build a solid base for the future.",
  },
  "advanced-ai-ml": {
    title: "Machine Learning Training Bangalore | Advanced AI and ML",
    description:
      "Advanced machine learning training Bangalore professionals choose for depth: deep learning, model tuning, deployment basics and full industry-style projects.",
    ogTitle: "Take Your ML Skills to the Next Level | Aptech, Bangalore",
    ogDescription:
      "Already know the basics? Go deeper into neural networks, model evaluation and getting models into production, with portfolio projects that look great on GitHub.",
    twitterTitle: "Ready for Deep Learning? Level Up Your Skills in Bangalore",
    twitterDescription:
      "Built for developers and data folks who want more than tutorials. Tackle harder problems, get mentor feedback and grow steadily into senior AI roles over time.",
  },
  cybersecurity: {
    title: "Cyber Security Course in Whitefield, Bangalore | Aptech",
    description:
      "Our cyber security course in Whitefield teaches network security, ethical hacking basics and threat defence in hands-on labs that feel like real incidents.",
    ogTitle: "Learn to Defend Systems Like a Pro | Cyber Labs, Bangalore",
    ogDescription:
      "Attacks make the news every week, and companies need people who can stop them. Build practical security skills step by step, starting right from the basics.",
    twitterTitle: "Curious About Ethical Hacking? Start Training in Bangalore",
    twitterDescription:
      "Find out how hackers think so you can keep them out. Beginner-friendly cyber security classes with real tools and scenarios at Aptech Whitefield near ITPL.",
  },
  "full-stack": {
    title: "Full Stack Developer Course in Whitefield, Bangalore | Java",
    description:
      "Join our full stack developer course in Whitefield. Choose Java with Spring Boot or the MERN stack, build real web apps and get placement help when you finish.",
    ogTitle: "Build Full Web Apps From Front to Back | Aptech Bangalore",
    ogDescription:
      "Design the screens, write the server code, connect the database and ship it live. You'll graduate with deployed projects instead of half-finished exercises.",
    twitterTitle: "Java or MERN? Pick Your Stack and Start Coding in Bangalore",
    twitterDescription:
      "A web development course in Bangalore from a Java training institute near ITPL. Pick the stack that suits your goals and learn it properly, with mentor help.",
  },
  "cloud-computing": {
    title: "Cloud Computing Course in Whitefield, Bangalore | AWS, Azure",
    description:
      "Our cloud computing course in Whitefield covers AWS and Azure fundamentals through hands-on labs, real deployment tasks and guidance for certification exams.",
    ogTitle: "Get Cloud-Ready for Tomorrow's Tech Jobs | Aptech Bangalore",
    ogDescription:
      "Almost every company is moving to the cloud. Learn to launch servers, manage storage and keep things secure, so you can support that move with real confidence.",
    twitterTitle: "Servers, Storage, Security: Learn the Cloud in Bangalore",
    twitterDescription:
      "Start with the basics of cloud computing and finish with real deployments. Ideal for freshers, sysadmins and developers near ITPL, Whitefield and well beyond.",
  },
  "microsoft-technologies": {
    title: ".NET Course in Whitefield, Bangalore | ASP.NET & C# Training",
    description:
      "Our .NET course in Whitefield teaches C#, ASP.NET and MVC through real app projects, with Aptech certification and real support for your first developer job.",
    ogTitle: "Build Business Apps With Microsoft .NET | Aptech Bangalore",
    ogDescription:
      "Many banks, IT services firms and enterprises run on .NET. Learn the tools they use every day and build web apps that look and work just like the real thing.",
    twitterTitle: "Want to Build Software in C#? Start Coding in Bangalore",
    twitterDescription:
      "ASP.NET training in Bangalore for students and developers. Learn step by step from experienced trainers at Aptech Whitefield and build projects you're proud of.",
  },
  "digital-marketing": {
    title: "Digital Marketing Course in Whitefield, Bangalore | Aptech",
    description:
      "Join our digital marketing course in Whitefield and learn SEO, Google Ads, social media and analytics by running real, live campaigns, not just watching slides.",
    ogTitle: "Learn Marketing That Gets Real Results | Aptech Bangalore",
    ogDescription:
      "Rank pages, run ads, grow social accounts and read the numbers behind them. Build a portfolio of real work that agencies and brands can see, judge and trust.",
    twitterTitle: "Want an Agency Job? Learn Digital Marketing in Bangalore",
    twitterDescription:
      "A digital marketing institute in Bangalore that keeps things practical. Learn the tools agencies use daily with trainers who explain the why, not just the how.",
  },
};

export const blogSeoMetadata: Record<string, CourseSEOMetadata> = {
  "beyond-accounting-bcom-it-career-options": {
    title: "Beyond Accounting: IT Career Options for BCom Graduates",
    description:
      "Explore IT career options for BCom graduates, including data analytics, Tally, Advanced Excel, software testing, Python, AI and business analysis.",
    ogTitle: "BCom to IT: Career Options Beyond Accounting",
    ogDescription:
      "Discover practical IT career paths for commerce graduates, compare Tally and Advanced Excel, and learn how to build a project portfolio.",
    twitterTitle: "Beyond Accounting: IT Careers for BCom Graduates",
    twitterDescription:
      "Compare data analytics, digital accounting, software testing and Python learning paths for a BCom graduate IT career.",
  },
  "which-it-course-has-better-job-opportunities-in-bangalore": {
    title: "Which IT Course Has Better Job Opportunities in Bangalore?",
    description:
      "Compare full stack development, data analytics, cloud computing and cybersecurity courses, practical projects and interview preparation for Bangalore IT careers.",
    ogTitle: "Which IT Course Has Better Job Opportunities in Bangalore?",
    ogDescription:
      "Compare role-specific IT learning paths, project requirements and course-selection factors before choosing your next technology course.",
    twitterTitle: "Compare IT Courses and Job Opportunities in Bangalore",
    twitterDescription:
      "Explore full stack development, data analytics, cloud computing and cybersecurity through a practical fresher career guide.",
  },
  "starting-it-career-bangalore-skills-course-paths": {
    title: "Starting an IT Career in Bangalore: Skills & Course Guide",
    description:
      "Explore IT career paths in Bangalore, compare in-demand skills and training options, and learn how to choose a course that matches your interests and goals.",
    ogTitle: "Your Roadmap to an IT Career in Bangalore",
    ogDescription:
      "From data analytics and Python to cloud and cybersecurity, explore practical learning paths and the skills behind different entry-level technology roles.",
    twitterTitle: "Bangalore IT Careers: Choose Your Learning Path",
    twitterDescription:
      "Not sure where to begin in tech? Compare role-focused skills, project ideas and course pathways before choosing your next learning step.",
  },
  "best-course-for-career-switch-to-it": {
    title: "Best Course for Career Switch to IT: Beginner Guide",
    description:
      "Planning a career change to IT? Explore beginner-friendly courses, essential technical skills and practical steps to prepare for technology careers.",
    ogTitle: "Planning a Career Change to IT? A Beginner's Learning Roadmap",
    ogDescription:
      "Explore beginner-friendly technology courses, essential skills and a practical roadmap for moving into IT.",
    twitterTitle: "Best Course for Career Switch to IT: Beginner Guide",
    twitterDescription:
      "Learn how to choose an IT course, build technical skills and plan a career transition from a non-technical background.",
  },
  "best-course-career-switch-to-it": {
    title: "Top IT Courses to Build a Successful Career After a Career Switch",
    description:
      "Explore IT career-change courses, compare learning paths and understand the skills, projects and placement support to consider before choosing training.",
    ogTitle: "Top IT Courses to Build a Successful Career After a Career Switch",
    ogDescription:
      "A career change can begin with one practical decision. Explore technology learning paths, essential preparation and ways to build experience.",
    twitterTitle: "Top IT Courses to Build a Successful Career After a Career Switch",
    twitterDescription:
      "Which IT path fits your experience? Compare options, plan your learning and prepare for a career transition with practical projects.",
  },
  "best-it-course-after-bsc": {
    title: "Best IT Course After BSc: Skills & Career Options",
    description:
      "Explore the best IT course after BSc. Compare Data Science, Python, Data Analytics and other technology skills to plan your next career step.",
    ogTitle: "Best IT Course After BSc: Skills and Career Opportunities",
    ogDescription:
      "Compare Data Science, Data Analytics, Python, Full Stack Development and AI learning paths for BSc graduates.",
    twitterTitle: "Best IT Course After BSc: Skills and Career Options",
    twitterDescription:
      "Explore IT course options after BSc and choose a technology learning path that fits your interests and career goals.",
  },
  "arts-to-it-how-ba-graduates-can-build-a-technology-career": {
    title: "Best IT Course After BA: Skills & Career Options",
    description:
      "Explore the best IT course after BA. Discover beginner-friendly technology skills, data analytics, Python and career paths for Arts graduates.",
    ogTitle: "From Arts to IT: A Practical Path for BA Graduates",
    ogDescription:
      "Discover technology learning options that can fit the communication, research and critical-thinking strengths of BA graduates.",
    twitterTitle: "How BA Graduates Can Start an IT Career",
    twitterDescription:
      "Compare data analytics, Python, web development and digital marketing before choosing an IT learning path after BA.",
  },
  "it-career-options-after-graduation": {
    title: "IT Career Options After Graduation: Courses & Skills",
    description:
      "Explore IT course options after BCom, BA and BSc, compare technology skills, and plan your next career step with practical guidance for graduates in Bangalore.",
    ogTitle: "Your Degree Is Just the Beginning of Your IT Journey",
    ogDescription:
      "Explore technology learning paths for commerce, arts and science graduates, from programming and analytics to cloud computing and cybersecurity.",
    twitterTitle: "From Graduation to Technology: Where Can You Start?",
    twitterDescription:
      "Discover how programming, analytics, cloud computing and cybersecurity can fit different interests and career goals.",
  },
  "choosing-technology-skills-after-bcom": {
    title: "Technology Skills After BCom: A Graduate's Guide | Aptech",
    description:
      "Compare digital accounting, Advanced Excel, data analytics, and programming to choose a technology learning path that fits your interests after BCom.",
    ogTitle: "Choosing the Right Technology Skills After BCom",
    ogDescription:
      "A practical guide to technology learning options for commerce graduates, from digital accounting and spreadsheets to analytics and programming.",
    twitterTitle: "Which Technology Skills Should You Learn After BCom?",
    twitterDescription:
      "Compare digital accounting, data analytics, and programming, then choose a learning path that fits your interests and goals.",
  },
  "how-bcom-graduates-can-build-it-career": {
    title: "How BCom Graduates Can Build an IT Career",
    description:
      "Explore IT career paths after BCom, compare business technology, data analytics and programming skills, and plan your next learning step with confidence.",
    ogTitle: "Your Commerce Degree Can Open a Door to Technology",
    ogDescription:
      "Discover how commerce graduates can explore business software, reporting, data analysis and programming through practical technology learning.",
    twitterTitle: "BCom to IT: What Should You Learn First?",
    twitterDescription:
      "Compare technology skill paths after BCom and see how your interests, strengths and practical projects can guide your next step.",
  },
  "which-computer-course-is-best-after-12th": {
    title: "Top Computer Courses After 12th in Bangalore | Aptech Learning",
    description:
      "Compare programming, web development, data analytics, AI, and business technology courses after Class 12. Learn what to consider before choosing.",
    ogTitle: "Choosing a Computer Course After Class 12",
    ogDescription:
      "Explore technology learning areas, beginner requirements, and course-selection tips to help you choose a computer course after 12th.",
    twitterTitle: "Which Computer Course Should You Choose After 12th?",
    twitterDescription:
      "Compare programming, web development, analytics, AI, and business technology before choosing your next learning path.",
  },
  "best-it-course-after-bcom": {
    title: "Best IT Courses After BCom in Whitefield | Aptech Learning",
    description:
      "Explore IT courses after BCom, from accounting software and data analytics to programming. Compare skills, career paths and learning options before you choose.",
    ogTitle: "From Commerce to Technology: Explore Your Next Career Step",
    ogDescription:
      "A commerce degree can lead to more than traditional accounting roles. Explore technology learning paths and the skills that may support your next step.",
    twitterTitle: "Which IT Skills Should a BCom Graduate Learn?",
    twitterDescription:
      "Compare accounting technology, data analytics and programming paths. Use this practical guide to identify a learning direction that fits your goals.",
  },
  "best-it-course-after-bcom-career-guide": {
    title: "Best IT Course After BCom | Aptech Learning Whitefield",
    description:
      "Explore the best IT course options after BCom, including accounting software, Advanced Excel, data analytics, Python and programming, with practical career guidance.",
    ogTitle: "Best IT Course After BCom: Skills and Career Paths",
    ogDescription:
      "Compare accounting software, spreadsheets, data analytics, Python and programming to choose an IT learning path after BCom.",
    twitterTitle: "Best IT Course After BCom: What Should You Learn?",
    twitterDescription:
      "Discover practical IT learning options after BCom and compare accounting, analytics and programming career paths.",
  },
  "ai-machine-learning-career-2026": {
    title: "AI & Machine Learning Career 2026: Skills & Roles | Aptech",
    description:
      "Looking for the best course for career switch to IT? See why AI and ML stand out in Bangalore, which roles are opening up and how to take your very first step.",
    ogTitle: "Switching to Tech? Why AI & ML Is a Smart Bet in Bangalore",
    ogDescription:
      "Changing careers is scary. This guide lays out the AI and ML roles companies are hiring for, the skills that matter most and a realistic plan to get there.",
    twitterTitle: "Stuck in the Wrong Job? How to Move Into Tech in Bangalore",
    twitterDescription:
      "Real talk on moving into AI from sales, support, finance or non-tech roles. What to learn first, how long it takes and where to find openings near Whitefield.",
  },
  "weekend-computer-classes-whitefield-bangalore": {
    title: "Weekend Computer Classes in Whitefield, Bangalore | Aptech",
    description:
      "Explore weekend computer classes in Whitefield, Bangalore, including flexible course options for working professionals and students.",
    ogTitle: "Weekend Computer Classes in Whitefield",
    ogDescription:
      "Compare flexible weekend computer and IT course options in Whitefield, Bangalore.",
    twitterTitle: "Learn Computer Skills on Weekends in Whitefield",
    twitterDescription:
      "Explore practical weekend learning options for computer and IT skills near Whitefield.",
  },
  "data-science-vs-data-analytics": {
    title: "Data Science vs Data Analytics: Which to Choose? | Aptech",
    description:
      "Compare data science and data analytics, including their skills, tools, career opportunities and learning paths, to decide which direction suits you.",
    ogTitle:
      "Data Science vs Data Analytics: Which Career Path Is Right for You?",
    ogDescription:
      "Explore the differences between data science and data analytics, the skills each path uses and practical ways to choose where to start.",
    twitterTitle: "Data Science vs Data Analytics: A Career Guide",
    twitterDescription:
      "Compare the day-to-day work, tools, skills and learning paths for data science and data analytics before choosing your next step.",
  },
  "python-for-beginners-whitefield": {
    title: "Python for Beginners in Whitefield, Bangalore | Aptech",
    description:
      "Python vs Java which to learn first? We compare ease of learning, job demand and the Python developer salary in Bangalore for freshers to help you decide well.",
    ogTitle: "Your First Programming Language, Picked Right | Bangalore",
    ogDescription:
      "Choosing your first language shouldn't take weeks of research. This beginner's guide explains the trade-offs clearly and suggests where to start this week.",
    twitterTitle: "What Do Python Freshers Earn in Bangalore? Find Out Here",
    twitterDescription:
      "See typical starting salaries, the skills recruiters check for and a simple roadmap to go from zero coding knowledge to your very first Python job near ITPL.",
  },
};

export function getCourseSeoKeywords(courseId: string): string | undefined {
  return courseSeoKeywords[courseId];
}

export function getCourseSEOMetadata(
  courseId: string,
): CourseSEOMetadata | undefined {
  return courseSeoMetadata[courseId];
}

export function getBlogSeoKeywords(slug: string): string | undefined {
  return blogSeoKeywords[slug];
}

const ORG_NAME = "Aptech Learning Whitefield";

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: "Best Computer Institute in Whitefield, Bangalore | Aptech",
    description:
      "Looking for a computer institute in Whitefield? Aptech near ITPL teaches Python, data science, AI and full stack in small batches, with real placement support.",
    keywords:
      "computer institute in whitefield, aptech whitefield, aptech whitefield bangalore, computer training institute in whitefield bangalore, computer classes in whitefield, aptech near me, computer course near me, aptech bangalore, computer institute, it training institute, computer training centre, best computer institute in whitefield, computer institute near itpl, it training institute in bangalore, it training institute near itpl whitefield, computer training centre in whitefield, best computer institute in bangalore, computer institute near marathahalli, computer institute in mahadevapura, top it training institute in whitefield",
    canonical: `${SITE_URL}/`,
    ogTitle: "Learn Job-Ready Tech Skills Near ITPL, Bangalore | Aptech",
    ogDescription:
      "From your first line of code to your first job offer, Aptech Whitefield walks with you. Practical classes, patient trainers and a placement team in your corner.",
    twitterTitle: "New to Tech or Switching Careers? Start Here in Bangalore",
    twitterDescription:
      "Weekday or weekend, fresher or working pro, there's a batch for you at Aptech Whitefield near ITPL. Drop in for a free demo class and see how we teach first.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: ORG_NAME,
      description:
        "Leading IT training institute offering industry-ready courses in AI, Data Science, Python, and Full Stack Development",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Kadugodi Tree Park Metro",
        addressLocality: "Whitefield",
        addressRegion: "Karnataka",
        postalCode: "560066",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9846999,
        longitude: 77.7465325,
      },
      telephone: "+91-74113-33500",
      email: "aptechlearningwhitefield@gmail.com",
      openingHours: "Mo-Sa 09:00-18:00",
      sameAs: socialProfileList,
    },
  },

  about: {
    title: "Aptech Learning Whitefield, Bangalore | About Our Institute",
    description:
      "Aptech Learning Whitefield brings Aptech's trusted computer education to east Bangalore. Meet our trainers, see how we teach and why learners stay with us.",
    keywords:
      "aptech learning whitefield, aptech computer education whitefield, is aptech worth it, aptech certificate value, is aptech certificate valid for jobs, is aptech recognised by government of india, aptech whitefield reviews, aptech learning, aptech computer education, aptech institute, aptech learning bangalore, aptech computer education bangalore, aptech institute whitefield, aptech institute bangalore, aptech learning near itpl, aptech computer education near itpl, aptech institute near me, aptech computer education near me, aptech learning centre whitefield",
    canonical: `${SITE_URL}/about`,
    ogTitle: "Meet the Trainers and Mentors Behind Our Bangalore Centre",
    ogDescription:
      "We're a team of trainers, counsellors and placement mentors near ITPL who care about one thing: helping you learn tech properly and land work you're proud of.",
    twitterTitle: "Is Aptech Worth It? An Honest Look From Bangalore Learners",
    twitterDescription:
      "Curious whether Aptech is worth it? Read how our Whitefield centre teaches, who our trainers are and what our learners say about the experience, in their words.",
  },

  contact: {
    title: "Aptech Whitefield Contact Number & Address, ITPL Bangalore",
    description:
      "Find the Aptech Whitefield contact number, address and centre timings near ITPL. Call us or walk in, and our counsellors will help you choose the right course.",
    keywords:
      "aptech whitefield contact number, aptech whitefield address, aptech whitefield timings, free demo class computer course whitefield, computer institute in marathahalli, computer classes in kadugodi, computer institute near hoodi, computer institute near brookefield, computer course in kr puram, computer course in mahadevapura, computer classes in varthur, computer classes near hope farm, computer classes in kundalahalli, computer institute near hoskote, aptech whitefield, aptech centre, computer institute, aptech whitefield location, aptech whitefield phone number, aptech whitefield near itpl, aptech whitefield directions, aptech centre near me, aptech centre in whitefield, computer institute near itpl whitefield, computer institute near me, aptech whitefield enquiry, aptech whitefield working hours",
    canonical: `${SITE_URL}/contact`,
    ogTitle: "Getting Here: Directions to Our Centre Near ITPL, Bangalore",
    ogDescription:
      "Planning a visit? Get directions and centre timings, then drop in whenever it suits you. Our counsellors can walk you through courses and fees over a chat.",
    twitterTitle: "Book Your Free Demo Class at Aptech Whitefield, Bangalore",
    twitterDescription:
      "Want to try a class before you decide? Call our Whitefield team, pick a time that works for you and sit in on a free demo session for any course you'd like.",
  },

  placements: {
    title: "Aptech Whitefield Placement Support | IT Jobs in Bangalore",
    description:
      "Explore Aptech Whitefield placement support: resume reviews, mock interviews and introductions to companies hiring freshers near ITPL and across Bangalore.",
    keywords:
      "aptech whitefield placement, aptech placement record, companies hiring freshers near itpl, it placement training, job oriented courses, it jobs for freshers, it placement training in whitefield, it placement training in bangalore, job oriented courses in whitefield, job oriented courses in bangalore, it jobs for freshers in whitefield, it jobs for freshers near itpl, it jobs near itpl, placement assistance courses bangalore, courses with job guarantee in whitefield, campus placement training bangalore",
    canonical: `${SITE_URL}/placements`,
    ogTitle: "From Classroom to Job Offer | Aptech Placements Bangalore",
    ogDescription:
      "Training is only half the job. Our placement team helps you polish your resume, practise interviews and get in front of recruiters who are hiring right now.",
    twitterTitle: "Which Companies Are Hiring Freshers Near ITPL, Bangalore?",
    twitterDescription:
      "Curious where Aptech learners end up? See our placement record, the kind of roles freshers land and how we prepare you for interviews from the very first week.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Thing",
      name: "Placement Assistance Program",
      description: "100% job placement assistance for IT professionals",
    },
  },

  corporateTraining: {
    title: "IT Training Institute Near ITPL, Bangalore | For Companies",
    description:
      "Aptech Whitefield is an IT training institute near ITPL that builds custom AI, data, Python and Power BI programs for teams, at your office or at our centre.",
    keywords:
      "it training institute near itpl, corporate it training, employee upskilling, corporate ai training, corporate it training in bangalore, corporate it training in whitefield, corporate it training near itpl, employee upskilling programs in bangalore, employee upskilling whitefield, corporate ai training for companies in bangalore, corporate ai training near itpl, corporate training companies in whitefield, corporate python training bangalore, corporate power bi training bangalore, corporate data science training whitefield",
    canonical: `${SITE_URL}/corporate-training`,
    ogTitle: "Upskill Your Team Without the Hassle | Aptech Bangalore",
    ogDescription:
      "Just tell us what your team needs to learn and when they're free. We'll shape the syllabus, schedule and format around your business, not the other way round.",
    twitterTitle: "Corporate AI, Data & Python Programs for Bangalore Teams",
    twitterDescription:
      "Bring practical AI, Python and analytics skills to your people. Flexible batches, hands-on labs and trainers who understand how companies near ITPL really work.",
  },

  schoolsColleges: {
    title: "Which Computer Course Is Best After 12th? | Bangalore Guide",
    description:
      "Wondering which computer course is best after 12th or a BA? Aptech Whitefield works with schools and colleges to guide students towards skills that get jobs.",
    keywords:
      "which computer course is best after 12th, best it course after ba, software engineering diploma after 12th, computer courses after 12th, it courses for students, college it training, computer courses after 12th in whitefield, computer courses after 12th in bangalore, it courses for students in whitefield, it courses for students in bangalore, college it training programs bangalore, college it training in whitefield, computer courses after bcom in bangalore, it courses after graduation bangalore, school coding classes whitefield, industry training for college students bangalore",
    canonical: `${SITE_URL}/schools-colleges`,
    ogTitle: "Helping Students Choose the Right IT Path | Aptech Bangalore",
    ogDescription:
      "We partner with schools and colleges to run career talks, coding workshops and certification programs, so students leave with real skills and clear direction.",
    twitterTitle: "Just Finished 12th? Here's What to Study Next in Bangalore",
    twitterDescription:
      "Choosing a course after 12th or graduation can feel overwhelming. Our counsellors help students compare options honestly, based on interest and job demand.",
  },

  notFound: {
    title: "Page Not Found | Aptech Learning Whitefield",
    description:
      "The page you are looking for could not be found. Return to Aptech Learning Whitefield homepage to explore our IT training courses.",
    canonical: `${SITE_URL}/404`,
  },

  // Course-specific metadata (generic template)
  courseTemplate: {
    title:
      "{courseName} Course | Aptech Learning Whitefield - Industry-Ready Training",
    description:
      "Master {courseName} with hands-on projects and industry expertise. 100% placement assistance. Enroll at Aptech Learning Whitefield.",
    keywords:
      "{courseName}, {courseName} course, {courseName} training, learn {courseName}, certification",
  },

  // Blog post template
  blogTemplate: {
    title: "{postTitle} | Aptech Learning Blog",
    description:
      "Read insights on {postTitle} from Aptech Learning experts. Industry trends, tips, and best practices for IT professionals.",
    keywords:
      "{postTitle}, IT training, professional development, industry insights",
  },
};

/**
 * Get SEO metadata for a page
 * Falls back to home metadata if page not found
 */
export function getSEOMetadata(pageName: string): SEOMetadata {
  return seoMetadata[pageName] || seoMetadata.home;
}

/**
 * Generate Helmet configuration from metadata
 * Useful for consistent SEO implementation across pages
 */
export function getHelmetConfig(metadata: SEOMetadata) {
  return {
    title: metadata.title,
    meta: [
      {
        name: "description",
        content: metadata.description,
      },
      ...(metadata.keywords
        ? [
            {
              name: "keywords",
              content: metadata.keywords,
            },
          ]
        : []),
      ...(metadata.ogTitle
        ? [
            {
              property: "og:title",
              content: metadata.ogTitle,
            },
          ]
        : []),
      ...(metadata.ogDescription
        ? [
            {
              property: "og:description",
              content: metadata.ogDescription,
            },
          ]
        : []),
      ...(metadata.ogImage
        ? [
            {
              property: "og:image",
              content: metadata.ogImage,
            },
          ]
        : []),
      {
        property: "og:url",
        content: metadata.canonical || SITE_URL,
      },
      {
        name: "twitter:title",
        content: metadata.ogTitle || metadata.title,
      },
      {
        name: "twitter:description",
        content: metadata.ogDescription || metadata.description,
      },
    ],
    ...(metadata.canonical && {
      link: [
        {
          rel: "canonical",
          href: metadata.canonical,
        },
      ],
    }),
  };
}
