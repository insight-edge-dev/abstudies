import founderOneImage from '../../assets/images/team-2.png';
import founderTwoImage from '../../assets/images/team-1.png';

export const aboutPageStats = [
  {
    value: 10,
    label: 'Available',
    detail: 'Services',
    backgroundClass: 'bg-success',
  },
  {
    value: 5,
    label: 'Online',
    detail: 'Courses',
    backgroundClass: 'bg-primary',
  },
  {
    value: 6,
    label: 'Skilled',
    detail: 'Instructors',
    backgroundClass: 'bg-secondary',
  },
  {
    value: 100,
    label: 'Happy',
    detail: 'Students',
    backgroundClass: 'bg-warning',
  },
];

export const founders = [
  {
    name: 'Founder Name',
    role: 'Founder & Academic Director',
    description:
      'Passionate about shaping young minds, our founder has years of experience in education and a deep commitment to student success.',
    image: founderOneImage,
    accentClass: 'about-founder-card--primary',
  },
  {
    name: 'Co-Founder Name',
    role: 'Co-Founder & Program Coordinator',
    description:
      'Dedicated to holistic development, our co-founder focuses on nurturing creativity, confidence, and essential life skills in every student.',
    image: founderTwoImage,
    accentClass: 'about-founder-card--secondary',
  },
];

export const features = [
  {
    title: 'Skilled Instructors',
    description:
      'Our experienced and dedicated faculty ensure every student receives clear guidance, strong fundamentals, and personalized support.',
    backgroundClass: 'bg-primary',
    icon: 'fa fa-2x fa-graduation-cap text-white',
  },
  {
    title: 'Safe & Supportive Environment',
    description:
      ' We provide a joyful, secure, and motivating atmosphere where students feel confident, curious, and ready to learn everyday.',
    backgroundClass: 'bg-secondary',
    icon: 'fa fa-2x fa-certificate text-white',
  },
  {
    title: 'Activity-Based Learning',
    description:
      'Hands-on activities, creative sessions, and modern teaching methods help children develop skills beyond academics.',
    backgroundClass: 'bg-warning',
    icon: 'fa fa-2x fa-book-reader text-white',
  },
];
