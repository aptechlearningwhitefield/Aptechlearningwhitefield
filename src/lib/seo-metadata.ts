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
  "which course has more job opportunities in bangalore, aptech vs online courses which is better, online vs offline computer classes which is better, it career guide, it jobs, tech career tips, it career guide in whitefield, it career guide in bangalore, it career guide near itpl, it jobs in bangalore, it jobs in marathahalli, it jobs in whitefield, tech career tips in kr puram, tech career tips for freshers in bangalore, tech career tips in whitefield, it career guide guide for beginners";

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
  "ai-machine-learning-career-2026":
    "best course for career switch to it, which course has more job opportunities in bangalore, ai ml career, ai jobs, machine learning jobs, ai ml career in whitefield, ai ml career in bangalore, ai ml career near itpl, ai jobs in bangalore, ai jobs in marathahalli, ai jobs in whitefield, machine learning jobs in kr puram, machine learning jobs for freshers in bangalore, machine learning jobs in whitefield, ai ml career guide for beginners",
  "data-science-vs-data-analytics":
    "data science vs full stack development, can non it graduate learn data science, data analyst jobs in whitefield, data science vs data analytics, data science career, data analyst career, data science vs data analytics in whitefield, data science vs data analytics in bangalore, data science vs data analytics near itpl, data science career in bangalore, data science career in marathahalli, data science career in whitefield, data analyst career in kr puram, data analyst career for freshers in bangalore, data analyst career in whitefield, data science vs data analytics guide for beginners",
  "python-for-beginners-whitefield":
    "python vs java which to learn first, python developer salary in bangalore for freshers, python for beginners, learn python, python jobs, python for beginners in whitefield, python for beginners in bangalore, python for beginners near itpl, learn python in bangalore, learn python in marathahalli, learn python in whitefield, python jobs in kr puram, python jobs for freshers in bangalore, python jobs in whitefield, python for beginners guide for beginners",
  "cybersecurity-career-bangalore":
    "skills needed to get it job in bangalore, which course has more job opportunities in bangalore, cyber security career, cyber security jobs, ethical hacking career, cyber security career in whitefield, cyber security career in bangalore, cyber security career near itpl, cyber security jobs in bangalore, cyber security jobs in marathahalli, cyber security jobs in whitefield, ethical hacking career in kr puram, ethical hacking career for freshers in bangalore, ethical hacking career in whitefield, cyber security career guide for beginners",
  "generative-ai-workplace-productivity":
    "weekend computer classes for working professionals whitefield, artificial intelligence course in bangalore, generative ai at work, ai productivity tools, ai skills for professionals, generative ai at work in whitefield, generative ai at work in bangalore, generative ai at work near itpl, ai productivity tools in bangalore, ai productivity tools in marathahalli, ai productivity tools in whitefield, ai skills for professionals in kr puram, ai skills for professionals for freshers in bangalore, ai skills for professionals in whitefield, generative ai at work guide for beginners",
  "cloud-computing-aws-azure-guide":
    "best it course after bsc, which course has more job opportunities in bangalore, aws vs azure, cloud computing career, cloud certification, aws vs azure in whitefield, aws vs azure in bangalore, aws vs azure near itpl, cloud computing career in bangalore, cloud computing career in marathahalli, cloud computing career in whitefield, cloud certification in kr puram, cloud certification for freshers in bangalore, cloud certification in whitefield, aws vs azure guide for beginners",
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
    twitterTitle: "New to AI? Try Our Beginner-Friendly GenAI Course, Bangalore",
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
    twitterTitle: "Thinking About Data Science? Start Your Journey in Bangalore",
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
    twitterTitle: "Still Doing Reports the Hard Way? Excel Classes in Bangalore",
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
  "ai-machine-learning-career-2026": {
    title: "AI & Machine Learning Careers in 2026: Skills, Salaries & How to Get Started",
    description:
      "Looking for the best course for career switch to IT? See why AI and ML stand out in Bangalore, which roles are opening up and how to take your very first step.",
    ogTitle: "Switching to Tech? Why AI & ML Is a Smart Bet in Bangalore",
    ogDescription:
      "Changing careers is scary. This guide lays out the AI and ML roles companies are hiring for, the skills that matter most and a realistic plan to get there.",
    twitterTitle: "Stuck in the Wrong Job? How to Move Into Tech in Bangalore",
    twitterDescription:
      "Real talk on moving into AI from sales, support, finance or non-tech roles. What to learn first, how long it takes and where to find openings near Whitefield.",
  },
  "data-science-vs-data-analytics": {
    title: "Data Science vs Full Stack Development | Bangalore Careers",
    description:
      "Data science vs full stack development vs data analytics: compare the skills, salaries and day-to-day work in Bangalore to pick the right career path for you.",
    ogTitle: "Data or Development? Choosing Your Tech Path in Bangalore",
    ogDescription:
      "One path is about finding answers in numbers, the other is about building products people use. Here's how to tell which one suits your strengths and interests.",
    twitterTitle: "Can Non-IT Grads Go Into Data Science? A Bangalore Guide",
    twitterDescription:
      "Yes, many do. We compare data science, data analytics and full stack careers, explain the learning curve for each and share honest tips for complete beginners.",
  },
  "python-for-beginners-whitefield": {
    title: "Python vs Java: Which to Learn First? | Bangalore Guide",
    description:
      "Python vs Java which to learn first? We compare ease of learning, job demand and the Python developer salary in Bangalore for freshers to help you decide well.",
    ogTitle: "Your First Programming Language, Picked Right | Bangalore",
    ogDescription:
      "Choosing your first language shouldn't take weeks of research. This beginner's guide explains the trade-offs clearly and suggests where to start this week.",
    twitterTitle: "What Do Python Freshers Earn in Bangalore? Find Out Here",
    twitterDescription:
      "See typical starting salaries, the skills recruiters check for and a simple roadmap to go from zero coding knowledge to your very first Python job near ITPL.",
  },
  "cybersecurity-career-bangalore": {
    title: "Skills Needed to Get IT Job in Bangalore | Cybersecurity",
    description:
      "Skills needed to get IT job in Bangalore are changing fast. See why cybersecurity is booming, which certifications help and how complete beginners can break in.",
    ogTitle: "Why Cybersecurity Is One of Bangalore's Hottest IT Careers",
    ogDescription:
      "Every breach creates demand for skilled defenders. Learn what security analysts actually do, what the work looks like and how to build the skills to join them.",
    twitterTitle: "Want a Secure Career? Start in Cybersecurity in Bangalore",
    twitterDescription:
      "A practical starter guide for students and career switchers: the tools to learn, the certifications worth your money and how to land that first security role.",
  },
  "generative-ai-workplace-productivity": {
    title: "Weekend Computer Classes in Whitefield, Bangalore | GenAI",
    description:
      "Weekend computer classes for working professionals in Whitefield. See how generative AI is changing everyday work and how to upskill without quitting your job.",
    ogTitle: "How Generative AI Is Changing Daily Office Work in Bangalore",
    ogDescription:
      "Emails drafted in seconds, reports summarised in minutes. Here are real ways teams use generative AI at work today, and the skills that will help you keep up.",
    twitterTitle: "Busy All Week? Upskill in AI on Weekends Here in Bangalore",
    twitterDescription:
      "You don't need a career break to learn something new. Short weekend sessions near ITPL help working people use AI tools confidently in their day-to-day jobs.",
  },
  "cloud-computing-aws-azure-guide": {
    title: "Best IT Course After BSc? AWS vs Azure Guide for Bangalore",
    description:
      "Is cloud computing the best IT course after BSc? We compare AWS and Azure, the certifications that matter and the cloud jobs opening up all across Bangalore.",
    ogTitle: "AWS or Azure: Which Cloud Should You Learn First? Bangalore",
    ogDescription:
      "Both platforms are everywhere, but they suit different goals. This guide compares them side by side so you can pick one and start learning with real purpose.",
    twitterTitle: "Science Grad Wondering What's Next? Try Cloud in Bangalore",
    twitterDescription:
      "Cloud skills are among the most requested by employers near ITPL. See how BSc graduates can get started, which certification to take first and why it pays.",
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

const ORG_NAME = 'Aptech Learning Whitefield';

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: 'Best Computer Institute in Whitefield, Bangalore | Aptech',
    description:
      'Looking for a computer institute in Whitefield? Aptech near ITPL teaches Python, data science, AI and full stack in small batches, with real placement support.',
    keywords:
      'computer institute in whitefield, aptech whitefield, aptech whitefield bangalore, computer training institute in whitefield bangalore, computer classes in whitefield, aptech near me, computer course near me, aptech bangalore, computer institute, it training institute, computer training centre, best computer institute in whitefield, computer institute near itpl, it training institute in bangalore, it training institute near itpl whitefield, computer training centre in whitefield, best computer institute in bangalore, computer institute near marathahalli, computer institute in mahadevapura, top it training institute in whitefield',
    canonical: `${SITE_URL}/`,
    ogTitle: 'Learn Job-Ready Tech Skills Near ITPL, Bangalore | Aptech',
    ogDescription:
      "From your first line of code to your first job offer, Aptech Whitefield walks with you. Practical classes, patient trainers and a placement team in your corner.",
    twitterTitle: 'New to Tech or Switching Careers? Start Here in Bangalore',
    twitterDescription:
      "Weekday or weekend, fresher or working pro, there's a batch for you at Aptech Whitefield near ITPL. Drop in for a free demo class and see how we teach first.",
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: ORG_NAME,
      description:
        'Leading IT training institute offering industry-ready courses in AI, Data Science, Python, and Full Stack Development',
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Kadugodi Tree Park Metro',
        addressLocality: 'Whitefield',
        addressRegion: 'Karnataka',
        postalCode: '560066',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9846999,
        longitude: 77.7465325,
      },
      telephone: '+91-74113-33500',
      email: 'aptechlearningwhitefield@gmail.com',
      openingHours: 'Mo-Sa 09:00-18:00',
      sameAs: socialProfileList,
    },
  },

  about: {
    title: 'Aptech Learning Whitefield, Bangalore | About Our Institute',
    description:
      "Aptech Learning Whitefield brings Aptech's trusted computer education to east Bangalore. Meet our trainers, see how we teach and why learners stay with us.",
    keywords:
      'aptech learning whitefield, aptech computer education whitefield, is aptech worth it, aptech certificate value, is aptech certificate valid for jobs, is aptech recognised by government of india, aptech whitefield reviews, aptech learning, aptech computer education, aptech institute, aptech learning bangalore, aptech computer education bangalore, aptech institute whitefield, aptech institute bangalore, aptech learning near itpl, aptech computer education near itpl, aptech institute near me, aptech computer education near me, aptech learning centre whitefield',
    canonical: `${SITE_URL}/about`,
    ogTitle: 'Meet the Trainers and Mentors Behind Our Bangalore Centre',
    ogDescription:
      "We're a team of trainers, counsellors and placement mentors near ITPL who care about one thing: helping you learn tech properly and land work you're proud of.",
    twitterTitle: 'Is Aptech Worth It? An Honest Look From Bangalore Learners',
    twitterDescription:
      'Curious whether Aptech is worth it? Read how our Whitefield centre teaches, who our trainers are and what our learners say about the experience, in their words.',
  },

  contact: {
    title: 'Aptech Whitefield Contact Number & Address, ITPL Bangalore',
    description:
      'Find the Aptech Whitefield contact number, address and centre timings near ITPL. Call us or walk in, and our counsellors will help you choose the right course.',
    keywords:
      'aptech whitefield contact number, aptech whitefield address, aptech whitefield timings, free demo class computer course whitefield, computer institute in marathahalli, computer classes in kadugodi, computer institute near hoodi, computer institute near brookefield, computer course in kr puram, computer course in mahadevapura, computer classes in varthur, computer classes near hope farm, computer classes in kundalahalli, computer institute near hoskote, aptech whitefield, aptech centre, computer institute, aptech whitefield location, aptech whitefield phone number, aptech whitefield near itpl, aptech whitefield directions, aptech centre near me, aptech centre in whitefield, computer institute near itpl whitefield, computer institute near me, aptech whitefield enquiry, aptech whitefield working hours',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Getting Here: Directions to Our Centre Near ITPL, Bangalore',
    ogDescription:
      'Planning a visit? Get directions and centre timings, then drop in whenever it suits you. Our counsellors can walk you through courses and fees over a chat.',
    twitterTitle: 'Book Your Free Demo Class at Aptech Whitefield, Bangalore',
    twitterDescription:
      "Want to try a class before you decide? Call our Whitefield team, pick a time that works for you and sit in on a free demo session for any course you'd like.",
  },

  placements: {
    title: 'Aptech Whitefield Placement Support | IT Jobs in Bangalore',
    description:
      'Explore Aptech Whitefield placement support: resume reviews, mock interviews and introductions to companies hiring freshers near ITPL and across Bangalore.',
    keywords:
      'aptech whitefield placement, aptech placement record, companies hiring freshers near itpl, it placement training, job oriented courses, it jobs for freshers, it placement training in whitefield, it placement training in bangalore, job oriented courses in whitefield, job oriented courses in bangalore, it jobs for freshers in whitefield, it jobs for freshers near itpl, it jobs near itpl, placement assistance courses bangalore, courses with job guarantee in whitefield, campus placement training bangalore',
    canonical: `${SITE_URL}/placements`,
    ogTitle: 'From Classroom to Job Offer | Aptech Placements Bangalore',
    ogDescription:
      'Training is only half the job. Our placement team helps you polish your resume, practise interviews and get in front of recruiters who are hiring right now.',
    twitterTitle: 'Which Companies Are Hiring Freshers Near ITPL, Bangalore?',
    twitterDescription:
      'Curious where Aptech learners end up? See our placement record, the kind of roles freshers land and how we prepare you for interviews from the very first week.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Thing',
      name: 'Placement Assistance Program',
      description: '100% job placement assistance for IT professionals',
    },
  },

  corporateTraining: {
    title: 'IT Training Institute Near ITPL, Bangalore | For Companies',
    description:
      'Aptech Whitefield is an IT training institute near ITPL that builds custom AI, data, Python and Power BI programs for teams, at your office or at our centre.',
    keywords:
      'it training institute near itpl, corporate it training, employee upskilling, corporate ai training, corporate it training in bangalore, corporate it training in whitefield, corporate it training near itpl, employee upskilling programs in bangalore, employee upskilling whitefield, corporate ai training for companies in bangalore, corporate ai training near itpl, corporate training companies in whitefield, corporate python training bangalore, corporate power bi training bangalore, corporate data science training whitefield',
    canonical: `${SITE_URL}/corporate-training`,
    ogTitle: 'Upskill Your Team Without the Hassle | Aptech Bangalore',
    ogDescription:
      "Just tell us what your team needs to learn and when they're free. We'll shape the syllabus, schedule and format around your business, not the other way round.",
    twitterTitle: 'Corporate AI, Data & Python Programs for Bangalore Teams',
    twitterDescription:
      'Bring practical AI, Python and analytics skills to your people. Flexible batches, hands-on labs and trainers who understand how companies near ITPL really work.',
  },

  schoolsColleges: {
    title:
      'Which Computer Course Is Best After 12th? | Bangalore Guide',
    description:
      'Wondering which computer course is best after 12th or a BA? Aptech Whitefield works with schools and colleges to guide students towards skills that get jobs.',
    keywords:
      'which computer course is best after 12th, best it course after ba, software engineering diploma after 12th, computer courses after 12th, it courses for students, college it training, computer courses after 12th in whitefield, computer courses after 12th in bangalore, it courses for students in whitefield, it courses for students in bangalore, college it training programs bangalore, college it training in whitefield, computer courses after bcom in bangalore, it courses after graduation bangalore, school coding classes whitefield, industry training for college students bangalore',
    canonical: `${SITE_URL}/schools-colleges`,
    ogTitle: 'Helping Students Choose the Right IT Path | Aptech Bangalore',
    ogDescription:
      'We partner with schools and colleges to run career talks, coding workshops and certification programs, so students leave with real skills and clear direction.',
    twitterTitle: "Just Finished 12th? Here's What to Study Next in Bangalore",
    twitterDescription:
      'Choosing a course after 12th or graduation can feel overwhelming. Our counsellors help students compare options honestly, based on interest and job demand.',
  },

  notFound: {
    title: 'Page Not Found | Aptech Learning Whitefield',
    description:
      'The page you are looking for could not be found. Return to Aptech Learning Whitefield homepage to explore our IT training courses.',
    canonical: `${SITE_URL}/404`,
  },

  // Course-specific metadata (generic template)
  courseTemplate: {
    title: '{courseName} Course | Aptech Learning Whitefield - Industry-Ready Training',
    description:
      'Master {courseName} with hands-on projects and industry expertise. 100% placement assistance. Enroll at Aptech Learning Whitefield.',
    keywords: '{courseName}, {courseName} course, {courseName} training, learn {courseName}, certification',
  },

  // Blog post template
  blogTemplate: {
    title: '{postTitle} | Aptech Learning Blog',
    description:
      'Read insights on {postTitle} from Aptech Learning experts. Industry trends, tips, and best practices for IT professionals.',
    keywords: '{postTitle}, IT training, professional development, industry insights',
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
        name: 'description',
        content: metadata.description,
      },
      ...(metadata.keywords
        ? [
            {
              name: 'keywords',
              content: metadata.keywords,
            },
          ]
        : []),
      ...(metadata.ogTitle
        ? [
            {
              property: 'og:title',
              content: metadata.ogTitle,
            },
          ]
        : []),
      ...(metadata.ogDescription
        ? [
            {
              property: 'og:description',
              content: metadata.ogDescription,
            },
          ]
        : []),
      ...(metadata.ogImage
        ? [
            {
              property: 'og:image',
              content: metadata.ogImage,
            },
          ]
        : []),
      {
        property: 'og:url',
        content: metadata.canonical || SITE_URL,
      },
      {
        name: 'twitter:title',
        content: metadata.ogTitle || metadata.title,
      },
      {
        name: 'twitter:description',
        content: metadata.ogDescription || metadata.description,
      },
    ],
    ...(metadata.canonical && {
      link: [
        {
          rel: 'canonical',
          href: metadata.canonical,
        },
      ],
    }),
  };
}
