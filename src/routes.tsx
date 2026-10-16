import { RouteObject } from "react-router";
import HomePage from './pages/index';
import CoursesPage from './pages/courses/index';
import CourseDetailPage from './pages/courses/[courseId]';
import ContactPage from './pages/contact';
import CorporateTrainingPage from './pages/corporate-training';
import SchoolsCollegesPage from './pages/schools-colleges';
import PlacementsPage from './pages/placements';
import BlogPage from './pages/blog/index';
import BlogDetailPage from './pages/blog/[slug]';
import AboutPage from './pages/about';
import ThankYouPage from './pages/thank-you';
import { PolicyPage } from './pages/policies';
import ProdNotFoundPage from './pages/_404';
import DevNotFoundPage from '../export-plugins/PageNotFound';

const NotFoundPage = import.meta.env.DEV ? DevNotFoundPage : ProdNotFoundPage;
export const routes: RouteObject[] = [{
  path: '/',
  element: <HomePage />
}, {
  path: '/about',
  element: <AboutPage />
}, {
  path: '/courses',
  element: <CoursesPage />
}, {
  path: '/courses/:courseId',
  element: <CourseDetailPage />
}, {
  path: '/contact',
  element: <ContactPage />
}, {
  path: '/thank-you',
  element: <ThankYouPage />
}, {
  path: '/corporate-training',
  element: <CorporateTrainingPage />
}, {
  path: '/schools-colleges',
  element: <SchoolsCollegesPage />
}, {
  path: '/placements',
  element: <PlacementsPage />
}, {
  path: '/blogs',
  element: <BlogPage />
}, {
  path: '/blogs/:slug',
  element: <BlogDetailPage />
}, {
  path: '/privacy',
  element: <PolicyPage policy="privacy" />
}, {
  path: '/terms',
  element: <PolicyPage policy="terms" />
}, {
  path: '*',
  element: <NotFoundPage />
}];
export type Path = '/' | '/courses' | '/courses/:courseId' | '/contact' | '/thank-you';
export type Params = Record<string, string | undefined>;
