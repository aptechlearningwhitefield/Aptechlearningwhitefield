import { Helmet } from "@dr.pogodin/react-helmet";
import { Link, useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Tag,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { blog_posts } from "virtual:content";

import AiMachineLearningCareerArticle from "../../components/ai-machine-learning-career-article";
import DataScienceVsDataAnalyticsArticle from "../../components/data-science-vs-data-analytics-article";
import WeekendComputerClassesWhitefieldArticle from "../../components/weekend-computer-classes-whitefield-article";
import PythonVsJavaArticle from "../../components/python-vs-java-article";
import BestItCourseAfterBcomArticle from "../../components/best-it-course-after-bcom-article";
import BestItCourseAfterBscArticle from "../../components/best-it-course-after-bsc-article";
import StartingItCareerBangaloreArticle from "../../components/starting-it-career-bangalore-article";
import ChoosingTechnologySkillsAfterBcomArticle from "../../components/choosing-technology-skills-after-bcom-article";
import HowBcomGraduatesBuildItCareerArticle from "../../components/how-bcom-graduates-it-career-article";
import WhichComputerCourseBestAfter12thArticle from "../../components/which-computer-course-best-after-12th-article";
import ItCareerOptionsAfterGraduationArticle from "../../components/it-career-options-after-graduation-article";
import ArtsToItBaGraduatesArticle from "../../components/arts-to-it-ba-graduates-full-article";
import WhichItCourseHasBetterJobOpportunitiesArticle from "../../components/which-it-course-has-better-job-opportunities-article";
import BeyondAccountingBcomItCareerArticle from "../../components/beyond-accounting-bcom-it-career-article";
import CareerChangeToItArticle from "../../components/career-change-to-it-article";
import BestCourseCareerSwitchArticle from "../../components/best-course-career-switch-to-it-article";

import { SITE_URL as site } from "../../lib/site-url";
import { blogSeoMetadata, getBlogSeoKeywords } from "../../lib/seo-metadata";

const categoryColors: Record<string, string> = {
  "AI & Machine Learning": "bg-blue-50 text-blue-700",
  "Data Science": "bg-purple-50 text-purple-700",
  Python: "bg-green-50 text-green-700",
  "Generative AI": "bg-orange-50 text-orange-700",
};

const aiCareerImages = {
  learner:
    "/assets/blog-images/ai-machine-learning-career-2026/ai-career-learner.png",
};

const dataScienceVsAnalyticsHero =
  "/assets/blog-images/data-science-vs-data-analytics/data-science-vs-data-analytics-career.png";

const weekendComputerClassesHero =
  "/assets/blog-images/weekend-computer-classes-whitefield/weekend-computer-classes-image1.png";

const pythonVsJavaHero =
  "/assets/blog-images/python-vs-java/python-vs-java-img1.png";

const bestItCourseAfterBcomHero =
  "/assets/blog-images/best-it-course-after-bcom/best-it-course-after-bcom-career-guide.webp";
const bestItCourseAfterBscHero =
  "/assets/blog-images/best-it-course-after-bsc/best-it-course-after-bsc-guide.webp";
const careerChangeToItHero =
  "/assets/blog-images/best-course-for-career-switch-to-it/career-change-to-it-beginners-guide.png";
const bestCourseCareerSwitchHero =
  "/assets/blog-images/it-career-switch-guide/non-it-to-it-career-transition-guide.png";
const startingItCareerBangaloreHero =
  "/assets/blog-images/starting-it-career-bangalore-skills-course-paths/it-career-pathways-bangalore-hero.png";
const choosingTechnologySkillsAfterBcomHero =
  "/assets/blog-images/how-bcom-graduates-it-career/technology-skills-after-bcom-graduate-guide.png";
const howBcomGraduatesItCareerHero =
  "/assets/blog-images/how-bcom-graduates-it-career/bcom-graduate-exploring-it-career.png";
const whichComputerCourseAfter12thHero =
  "/assets/blog-images/computer-course-after-12th/computer-course-after-12th-career-guide.webp";
const itCareerOptionsAfterGraduationHero =
  "/assets/blog-images/it-career-options-after-graduation/it-career-options-after-graduation-hero.webp";
const artsToItBaGraduatesHero =
  "/assets/blog-images/arts-to-it-ba-graduates/best-it-course-after-ba-arts-graduates.png";
const whichItCourseJobOpportunitiesHero =
  "/assets/blog-images/which-it-course-has-better-job-opportunities/it-career-learning-paths-bangalore.png";
const beyondAccountingBcomHero =
  "/assets/blog-images/beyond-accounting-bcom-it-career/bcom-graduate-exploring-it-career-paths.png";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blog_posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate("/blogs", { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const isAiCareerArticle = post.slug === "ai-machine-learning-career-2026";

  const isDataScienceVsAnalyticsArticle =
    post.slug === "data-science-vs-data-analytics";

  const isWeekendComputerClassesArticle =
    post.slug === "weekend-computer-classes-whitefield-bangalore";

  const isPythonVsJavaArticle = post.slug === "python-for-beginners-whitefield";

  const isBestItCourseAfterBcomArticle =
    post.slug === "best-it-course-after-bcom" ||
    post.slug === "best-it-course-after-bcom-career-guide";

  const isBestItCourseAfterBscArticle =
    post.slug === "best-it-course-after-bsc";

  const isCareerChangeToItArticle =
    post.slug === "best-course-for-career-switch-to-it";
  const isBestCourseCareerSwitchArticle =
    post.slug === "best-course-career-switch-to-it";

  const isStartingItCareerBangaloreArticle =
    post.slug === "starting-it-career-bangalore-skills-course-paths";

  const isChoosingTechnologySkillsAfterBcomArticle =
    post.slug === "choosing-technology-skills-after-bcom";

  const isHowBcomGraduatesItCareerArticle =
    post.slug === "how-bcom-graduates-can-build-it-career";

  const isWhichComputerCourseAfter12thArticle =
    post.slug === "which-computer-course-is-best-after-12th";
  const isItCareerOptionsAfterGraduationArticle =
    post.slug === "it-career-options-after-graduation";
  const isArtsToItBaGraduatesArticle =
    post.slug === "arts-to-it-how-ba-graduates-can-build-a-technology-career";
  const isWhichItCourseJobOpportunitiesArticle =
    post.slug === "which-it-course-has-better-job-opportunities-in-bangalore";
  const isBeyondAccountingBcomArticle =
    post.slug === "beyond-accounting-bcom-it-career-options";

  const coverImage = isAiCareerArticle
    ? `${site}${aiCareerImages.learner}`
    : isDataScienceVsAnalyticsArticle
      ? `${site}${dataScienceVsAnalyticsHero}`
      : isWeekendComputerClassesArticle
        ? `${site}${weekendComputerClassesHero}`
        : isPythonVsJavaArticle
          ? `${site}${pythonVsJavaHero}`
          : isBestItCourseAfterBcomArticle
            ? `${site}${bestItCourseAfterBcomHero}`
            : isBestItCourseAfterBscArticle
              ? `${site}${bestItCourseAfterBscHero}`
              : isCareerChangeToItArticle
                ? `${site}${careerChangeToItHero}`
                : isBestCourseCareerSwitchArticle
                  ? `${site}${bestCourseCareerSwitchHero}`
                  : isStartingItCareerBangaloreArticle
                    ? `${site}${startingItCareerBangaloreHero}`
                    : isChoosingTechnologySkillsAfterBcomArticle
                      ? `${site}${choosingTechnologySkillsAfterBcomHero}`
                      : isHowBcomGraduatesItCareerArticle
                        ? `${site}${howBcomGraduatesItCareerHero}`
                        : isWhichComputerCourseAfter12thArticle
                          ? `${site}${whichComputerCourseAfter12thHero}`
                          : isItCareerOptionsAfterGraduationArticle
                            ? `${site}${itCareerOptionsAfterGraduationHero}`
                            : isArtsToItBaGraduatesArticle
                              ? `${site}${artsToItBaGraduatesHero}`
                              : isWhichItCourseJobOpportunitiesArticle
                                ? `${site}${whichItCourseJobOpportunitiesHero}`
                                : isBeyondAccountingBcomArticle
                                  ? `${site}${beyondAccountingBcomHero}`
                                  : `${site}/airo-assets/images/blogs/default-blog-image`;

  const blogSeo = blogSeoMetadata[post.slug];

  const seoTitle =
    blogSeo?.title ?? `${post.title} | Aptech Learning Whitefield Blog`;

  const seoDescription = blogSeo?.description ?? post.excerpt;
  const socialTitle = blogSeo?.ogTitle ?? post.title;
  const socialDescription = blogSeo?.ogDescription ?? post.excerpt;
  const twitterTitle = blogSeo?.twitterTitle ?? post.title;
  const twitterDescription = blogSeo?.twitterDescription ?? post.excerpt;

  const keywords = getBlogSeoKeywords(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${site}/blogs/${post.slug}#article`,
    headline: seoTitle,
    description: seoDescription,
    image: coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@id": `${site}/#organization`,
    },
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />

        {keywords && <meta name="keywords" content={keywords} />}

        <link rel="canonical" href={`${site}/blogs/${post.slug}`} />

        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:url" content={`${site}/blogs/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={coverImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={coverImage} />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />

        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* Back Button */}
        <div className="bg-white border-b border-slate-100 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Articles
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3 items-center">
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                  categoryColors[post.category] ?? "bg-slate-100 text-slate-600"
                }`}
              >
                {post.category}
              </span>

              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {isAiCareerArticle ? (
              <AiMachineLearningCareerArticle />
            ) : isDataScienceVsAnalyticsArticle ? (
              <DataScienceVsDataAnalyticsArticle />
            ) : isWeekendComputerClassesArticle ? (
              <WeekendComputerClassesWhitefieldArticle />
            ) : isPythonVsJavaArticle ? (
              <PythonVsJavaArticle />
            ) : isBestItCourseAfterBcomArticle ? (
              <BestItCourseAfterBcomArticle />
            ) : isBestItCourseAfterBscArticle ? (
              <BestItCourseAfterBscArticle />
            ) : isCareerChangeToItArticle ? (
              <CareerChangeToItArticle />
            ) : isBestCourseCareerSwitchArticle ? (
              <BestCourseCareerSwitchArticle />
            ) : isStartingItCareerBangaloreArticle ? (
              <StartingItCareerBangaloreArticle />
            ) : isChoosingTechnologySkillsAfterBcomArticle ? (
              <ChoosingTechnologySkillsAfterBcomArticle />
            ) : isHowBcomGraduatesItCareerArticle ? (
              <HowBcomGraduatesBuildItCareerArticle />
            ) : isWhichComputerCourseAfter12thArticle ? (
              <WhichComputerCourseBestAfter12thArticle />
            ) : isItCareerOptionsAfterGraduationArticle ? (
              <ItCareerOptionsAfterGraduationArticle />
            ) : isArtsToItBaGraduatesArticle ? (
              <ArtsToItBaGraduatesArticle />
            ) : isWhichItCourseJobOpportunitiesArticle ? (
              <WhichItCourseHasBetterJobOpportunitiesArticle />
            ) : isBeyondAccountingBcomArticle ? (
              <BeyondAccountingBcomItCareerArticle />
            ) : (
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="font-semibold text-primary mb-2">
                    Article Overview
                  </p>
                  <p>{post.excerpt}</p>
                </div>

                <div className="space-y-6 text-slate-600">
                  <p>
                    This article from Aptech Learning Whitefield covers
                    essential insights about <strong>{post.category}</strong>.
                    Whether you're a student looking to start your career, a
                    working professional aiming to upskill, or someone curious
                    about the IT industry, this guide provides practical
                    knowledge and actionable steps.
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Key Takeaways
                  </h2>

                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      Understanding the current market demand for{" "}
                      {post.category} professionals
                    </li>
                    <li>
                      Essential skills and certifications to build a successful
                      career
                    </li>
                    <li>
                      Real-world applications and job opportunities in Bangalore
                      and beyond
                    </li>
                    <li>
                      How structured training accelerates your career growth
                    </li>
                    <li>Why hands-on learning is crucial in the IT industry</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Why This Matters
                  </h2>

                  <p>
                    The IT industry is evolving rapidly, and staying updated
                    with trends is essential for career success. At Aptech
                    Learning Whitefield, we ensure our curriculum aligns with
                    industry requirements, helping you build relevant skills
                    that employers actually look for.
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    Next Steps
                  </h2>

                  <p>
                    Ready to take action? Our comprehensive training programs in{" "}
                    {post.category} are designed to equip you with the skills
                    and confidence needed to excel in this field. Whether you're
                    starting from scratch or looking to advance your expertise,
                    we have the right course for you.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mt-12 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Ready to Master {post.category}?
                  </h3>

                  <p className="text-slate-600 mb-6">
                    Join hundreds of students at Aptech Learning Whitefield who
                    are building successful IT careers.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      to="/courses"
                      className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Explore Our Courses <ArrowRight size={16} />
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-slate-200 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors"
                    >
                      Get Free Counselling
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Transform Your IT Career Today
            </h2>

            <p className="text-lg text-blue-100 mb-8">
              Don't just read about IT careers — build one with our
              industry-ready training programs at Aptech Learning Whitefield,
              Bangalore.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg"
              >
                Start Your Course <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-lg border-2 border-white hover:bg-blue-700 transition-all"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
