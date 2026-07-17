import { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router';

import PageTransition from './components/Motion/PageTransition.jsx';

const HomePage = lazy(() => import('./pages/Home/Home.jsx'));
const AboutPage = lazy(() => import('./pages/About/About.jsx'));
const ContactPage = lazy(() => import('./pages/Contact/Contact.jsx'));
const CourseDetailsPage = lazy(
  () => import('./pages/CourseDetails/CourseDetails.jsx'),
);
const CoursesPage = lazy(() => import('./pages/Courses/Courses.jsx'));
const GalleryPage = lazy(() => import('./pages/Gallery/Gallery.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFound.jsx'));
const TeamPage = lazy(() => import('./pages/Team/Team.jsx'));

const routes = [
  { path: '/', Component: HomePage },
  { path: '/about', Component: AboutPage },
  { path: '/courses', Component: CoursesPage },
  { path: '/courses/:slug', Component: CourseDetailsPage },
  { path: '/gallery', Component: GalleryPage },
  { path: '/team', Component: TeamPage },
  { path: '/contact', Component: ContactPage },
  { path: '*', Component: NotFoundPage },
];

function App() {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div className="route-loader" role="status" aria-live="polite">
          <span className="sr-only">Loading page</span>
        </div>
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, Component }) => (
            <Route
              path={path}
              element={
                <PageTransition>
                  <Component />
                </PageTransition>
              }
              key={path}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
