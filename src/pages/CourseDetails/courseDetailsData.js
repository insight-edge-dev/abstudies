import headerImage from '../../assets/backgrounds/header.jpg';
import courses from '../../components/Courses/courseData.js';

const commonLanguages = 'English, Hindi, Bengali';
const courseBySlug = Object.fromEntries(
  courses.map((course) => [course.slug, course]),
);

const buildCourse = (slug, details) => ({
  ...courseBySlug[slug],
  shortTitle: courseBySlug[slug].title,
  ...details,
});

const courseDetails = {
  tuition: buildCourse('tuition', {
    title: 'Academic Excellence: Tuition Classes (Class 1–10)',
    shortTitle: 'Tuition Classes',
    image: headerImage,
    description: [
      'Your Gateway To Excellence! Whether you are under ICSE or CBSE, our integrated teaching approach ensures academic success.',
    ],
    highlights: [
      'Targeted Learning',
      'Comprehensive Subject Support',
      'Learning Beyond the Classroom',
    ],
    meta: {
      'Age Range': 'ICSE & CBSE',
      'Monthly Lectures': '3 Class per Week',
      'Class Duration': '2 hours',
      Language: commonLanguages,
    },
    price: '₹1500-₹4000 / month',
  }),
  'genio-abacus': buildCourse('genio-abacus', {
    description: [
      'Unlock the power of mental math! The Abacus is an ancient calculating tool used to perform lightning-fast arithmetic through a well-researched, highly structured curriculum. Our program includes brain drill exercises and mind games to de-stress students while sharpening their lateral thinking.',
    ],
    subheading: 'Key Benefits of Learning Abacus:',
    highlights: [
      'Enhanced Mental Math: Master arithmetic operations with speed and precision.',
      'Concentration & Focus: Dramatically improves attention spans and mental processing.',
      'Memory Retention: Strengthens visualization and long-term memory.',
      'Logical Thinking: Boosts analytical skills and problem-solving abilities.',
      'Boosted Confidence: Increases self-confidence and overall academic performance.',
    ],
    numberedHighlights: true,
    meta: {
      'Age Range': '5 years to 14 years',
      'Monthly Lectures': '1 Class per Week',
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: '₹1100 /month',
  }),
  therapy: buildCourse('therapy', {
    description: [
      'At AB Studies, we are a trusted destination for special children, offering dedicated care to nurture young minds with unique needs. Our programs for ASD (Autism Spectrum Disorder) and ADHD (Attention Deficit Hyperactivity Disorder) focus on holistic growth through structured routines and engaging activities.',
    ],
    highlights: [
      'Motor Skills Therapy: Includes animal walks, jumping practice, play dough, bead stringing, and using clothespins to improve fine motor control.',
      'Speech & Communication Therapy: Focuses on naming everyday objects, songs/rhymes with actions, and practicing greetings to build language skills.',
      'Behavioral & Social Therapy: Features “Turn-taking” games, role play with toys, sharing exercises, and “Feeling Faces” to identify emotions like happiness or sadness.',
      'Cognitive & Practical Skills: Engaging with simple puzzles, sorting by color/size/type, and learning self-help hygiene and dressing.',
    ],
    meta: {
      'Age Range': '3 years to 12 years',
      'Monthly Lectures': "Based on Child's Need",
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: '₹600',
  }),
  'art-craft': buildCourse('art-craft', {
    description: [
      'Unleash your imagination in our vibrant world of art! Whether you are a beginner or a seasoned artist, we offer a range of DIY projects and tutorials to spark your creativity.',
    ],
    subheading: 'Master Diverse Techniques:',
    highlights: [
      'Pencil & Shading: Sketching, charcoal, and color pencil shading.',
      'Painting Styles: Watercolors, glass painting, pastels, acrylics, and oil painting.',
      'Unique Mediums: Paper collage, earbud painting, thumb painting, and object making.',
    ],
    meta: {
      'Age Range': '4 years to 16 years',
      'Monthly Lectures': '1 Class per Week',
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: '₹500',
  }),
  'school-projects': buildCourse('school-projects', {
    description: [
      'Creative, age-appropriate guidance for school projects, models, charts and presentations in a supportive learning environment.',
    ],
    highlights: [
      'Project planning and topic guidance',
      'Model, chart and presentation support',
      'Creative, student-led execution',
    ],
    meta: {
      'Age Range': 'School Students',
      'Monthly Lectures': 'Based on Project Need',
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: 'Contact Us',
  }),
  computer: buildCourse('computer', {
    description: [
      'Basic to advanced computer education including typing, MS Office and fundamentals.',
    ],
    highlights: [],
    meta: {
      'Age Range': 'IT Instructor',
      'Monthly Lectures': '6 Months',
      'Class Duration': 'Beginner',
      Language: 'English',
    },
    price: '₹4000',
  }),
  'phonics-cursive': buildCourse('phonics-cursive', {
    description: [
      'Build a strong literacy foundation through child-friendly phonics and cursive writing sessions.',
    ],
    highlights: [
      'Phonics practice for pronunciation and confident reading',
      'Cursive training for writing speed, flow and fine motor skills',
      'Spelling accuracy and writing discipline',
    ],
    meta: {
      'Age Range': '3 years to 7 years',
      'Monthly Lectures': '1 Class per Week',
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: '₹800',
  }),
  'spoken-english': buildCourse('spoken-english', {
    description: [
      'Practical spoken English sessions designed to improve vocabulary, pronunciation and everyday communication confidence.',
    ],
    highlights: [
      'Conversation and pronunciation practice',
      'Vocabulary and sentence-building exercises',
      'Confidence for everyday communication',
    ],
    meta: {
      'Age Range': 'School Students',
      'Monthly Lectures': '1 Class per Week',
      'Class Duration': '1 hour',
      Language: 'English',
    },
    price: 'Contact Us',
  }),
};

export const relatedCourses = [
  courseDetails.tuition,
  courseDetails['genio-abacus'],
  courseDetails.computer,
];

export function getCourseDetails(slug) {
  return courseDetails[slug] ?? courseDetails.tuition;
}

export default courseDetails;
