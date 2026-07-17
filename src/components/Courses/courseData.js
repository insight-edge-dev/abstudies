import courseOneImage from '../../assets/images/courses-1.jpg';
import courseTwoImage from '../../assets/images/courses-2.jpg';
import courseThreeImage from '../../assets/images/courses-3.jpg';
import courseFourImage from '../../assets/images/courses-4.jpg';
import courseFiveImage from '../../assets/images/courses-5.jpg';
import courseSevenImage from '../../assets/images/courses-7.jpg';

const courses = [
  {
    slug: 'tuition',
    title: 'Tuition Classes (Class 1–10, All Boards)',
    image: courseOneImage,
  },
  { slug: 'genio-abacus', title: 'Genio Abacus', image: courseTwoImage },
  {
    slug: 'therapy',
    title: 'Special Therapy & Education (ASD & ADHD)',
    image: courseThreeImage,
  },
  { slug: 'art-craft', title: 'Creative Arts & Craft', image: courseFourImage },
  {
    slug: 'phonics-cursive',
    title: 'Phonics & Cursive Writing',
    image: courseSevenImage,
  },
  {
    slug: 'school-projects',
    title: 'School Projects & Computer Practicals',
    image: courseFiveImage,
  },
];

export default courses;
