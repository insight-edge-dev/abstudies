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
    title: 'Academic Excellence: Tuition Classes (Class 1–10, All Boards)',
    shortTitle: 'Tuition Classes',
    image: headerImage,
    description: [
      'Our tuition program for Classes 1 to 10 bridges the gap between school curricula and deep conceptual understanding across all major boards, including ICSE, CBSE, and State Boards. Covering core subjects like English, Bengali, Hindi, and sciences, our integrated teaching approach focuses on foundational mastery and exam preparation. We empower students to eliminate exam fear, build resilient problem-solving skills, and consistently achieve top marks in their school evaluations.',
    ],
    subheading: 'Why Choose Us for Tuitions?',
    highlights: [
      'Very Small Batch Sizes: We maintain highly optimized, small student groups to ensure a focused and distraction-free learning environment.',
      'Personalized & Extra Attention: Our low student-to-faculty ratio ensures that instructors walk the extra mile to provide individual care to every child.',
      'Expert & Experienced Teachers: Classes are led by highly qualified, motivated faculty members who specialize in simplifying complex topics.',
      'Comfortable Air-Conditioned Rooms: We provide a fully air-conditioned, safe, and modern classroom setting to keep students comfortable and focused.',
      'Rigorous Assessments: Regular mock tests and class tests are administered to track progress and build immense confidence before final exams.',
    ],
    meta: {
      'Age Range': 'Classes 1–10',
      Boards: 'ICSE, CBSE & State Boards',
      'Monthly Lectures': '3 Classes per Week',
      'Class Duration': '2 hours',
      Language: commonLanguages,
    },
    price: '₹1500–₹4000 / month',
  }),
  'genio-abacus': buildCourse('genio-abacus', {
    description: [
      "Genio Abacus is an elite brain development program that transforms mathematics into a fun, lightning-fast mental game. Utilizing the abacus tool alongside a well-researched curriculum, it effectively stimulates both hemispheres of the brain during a child's critical formative years. Through engaging mind games and rapid brain drills, we guide students to master calculation speeds and perform arithmetic operations mentally with remarkable ease.",
    ],
    subheading: 'Core Benefits of Genio Abacus:',
    highlights: [
      'Enhanced Mental Math: Master arithmetic operations with lightning speed, accuracy, and precision without relying on calculators or paper.',
      'Concentration & Focus: Significantly expands attention spans and sharpens mental processing power.',
      'Memory & Visualization Retention: Strengthens visual memory, spatial ability, and long-term memory retention.',
      'Logical & Analytical Thinking: Boosts critical problem-solving skills and lateral thinking abilities.',
      'Rocketing Confidence: Elevates self-esteem and overall academic performance across all school subjects.',
    ],
    meta: {
      'Age Range': '5 years to 14 years',
      'Monthly Lectures': '1 Class per Week',
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: '₹1100 / month',
  }),
  therapy: buildCourse('therapy', {
    description: [
      "At AB Studies, we host a dedicated, nurturing, and inclusive space tailored to the unique developmental needs of children diagnosed with Autism Spectrum Disorder (ASD) and Attention Deficit Hyperactivity Disorder (ADHD). Our personalized, evidence-based program integrates structured routines, therapeutic play, and active learning to promote holistic growth. Our trained professionals work closely with families to implement customized learning plans that strengthen each child's innate capabilities, foster self-reliance, and build social confidence.",
    ],
    subheading: 'Specialized Therapies We Provide:',
    highlights: [
      'Motor Skills Therapy: Incorporates physical exercises like animal walks, jumping practice, play dough shaping, bead stringing, and using clothespins to improve fine and gross motor control.',
      'Speech & Communication Therapy: Focuses on expressive language development through object-naming drills, action-oriented songs, and interactive greeting practices.',
      'Behavioral & Social Therapy: Features turn-taking games, peer sharing exercises, toy role-play, and “Feeling Faces” tools to help children identify and manage emotions.',
      'Cognitive & Practical Life Skills: Promotes intellectual growth and self-reliance using simple puzzles, classification tasks (sorting by color, size, or type), and basic self-help training for hygiene and dressing.',
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
      'Art and craft are vital cornerstones of early childhood development, serving as crucial mediums for self-expression, imagination, and sensory exploration. Engaging in creative arts helps children refine fine motor skills, bilateral coordination, and concentration while providing an excellent emotional outlet to process thoughts and ideas. At AB Studies, we nurture this creative spark in a supportive environment, encouraging students to experiment, explore diverse textures, and gain hands-on artistic confidence.',
    ],
    subheading: 'Types of Arts & Crafts We Teach:',
    highlights: [
      'Pencil & Shading: Advanced sketching, charcoal work, and color pencil shading techniques.',
      'Painting Styles: Traditional watercolors, glass painting, pastels, acrylics, and oil painting.',
      'Unique Mediums & Textures: Paper collage making, earbud painting, thumb painting, and clay modeling.',
      'Crafts & Object Making: Creative DIY craft projects and structural model-making to turn everyday items into art.',
    ],
    meta: {
      'Age Range': '4 years to 16 years',
      'Monthly Lectures': '1 Class per Week',
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: '₹500',
  }),
  'phonics-cursive': buildCourse('phonics-cursive', {
    description: [
      'Our Phonics & Cursive Writing program is a foundational literacy course designed to establish strong reading, pronunciation, and writing habits in young learners. Through systematic phonics instruction, children learn letter sounds and blending techniques, while our cursive training focuses on proper pencil control, fluid hand movements, and neatness.',
    ],
    subheading: 'Why Toddlers Need This Program:',
    highlights: [
      'Early Reading Independence: Phonics empowers toddlers to decode new words effortlessly, turning them into fluent, confident readers.',
      'Spelling & Vocabulary Foundations: Helps children recognize letter patterns, drastically improving spelling accuracy and language comprehension.',
      'Develops Fine Motor Control: The continuous, flowing movements of cursive writing strengthen hand muscles and refine motor planning.',
      'Beautiful, Fast Penmanship: Teaches proper spacing, speed, and letter formation, helping toddlers develop legible, elegant handwriting.',
    ],
    meta: {
      'Age Range': '3 years to 7 years',
      'Monthly Lectures': '1 Class per Week',
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: '₹800',
  }),
  'school-projects': buildCourse('school-projects', {
    description: [
      'We encourage “Learning Beyond the Classroom” by transforming regular assignments into thrilling educational discoveries. Our dedicated school project assistance supports students in Science, Social Studies, and Literature by guiding them through hands-on modeling, creative research, and presentation formatting. This comprehensive guidance ensures students submit high-quality work, deeply understand the underlying academic concepts, and develop vital organizational skills.',
      'In an increasingly digital landscape, computer education is an indispensable life skill that prepares students for the future. Our Computer Practical classes emphasize “Learning by Doing” in a modern, fully equipped laboratory environment. Under the guidance of skilled instructors, students move past mere theory to master fundamental applications like MS Word, MS Excel, MS PowerPoint, internet applications, and programming basics, building the real-world digital confidence required for academic success.',
    ],
    subheading: 'What Students Learn:',
    highlights: [
      'School Projects: Hands-on modeling, creative research, and presentation formatting across Science, Social Studies, and Literature.',
      'Computer Practicals: MS Word, MS Excel, MS PowerPoint, internet applications, and programming basics.',
      'Practical Confidence: Stronger organizational, presentation, and real-world digital skills.',
    ],
    meta: {
      'Age Range': 'School Students',
      'Monthly Lectures': 'Based on Learning Need',
      'Class Duration': '1 hour',
      Language: commonLanguages,
    },
    price: 'Contact Us',
  }),
};

export const relatedCourses = [
  courseDetails.tuition,
  courseDetails['genio-abacus'],
  courseDetails['phonics-cursive'],
];

export function getCourseDetails(slug) {
  return courseDetails[slug] ?? courseDetails.tuition;
}

export default courseDetails;
