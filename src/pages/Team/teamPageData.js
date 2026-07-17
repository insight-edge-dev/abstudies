import teachers from '../../components/Teachers/teacherData.js';

const socialLinks = [
  { label: 'Twitter', icon: 'fab fa-twitter', href: '#' },
  { label: 'Facebook', icon: 'fab fa-facebook-f', href: '#' },
  { label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: '#' },
  { label: 'Instagram', icon: 'fab fa-instagram', href: '#' },
  { label: 'YouTube', icon: 'fab fa-youtube', href: '#' },
];

const teamPageData = teachers.map((teacher, index) => ({
  ...teacher,
  id: index + 1,
  socials: socialLinks,
}));

export default teamPageData;
