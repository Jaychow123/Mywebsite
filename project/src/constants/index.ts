import { NavLink, EducationItem, SkillCategory, Certification, CloudBadge, AIQuote } from '../types';

export const navLinks: NavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'education', title: 'Education' },
  { id: 'skills', title: 'Skills' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'badges', title: 'Cloud Badges' },
  { id: 'quotes', title: 'AI Insights' },
  { id: 'contact', title: 'Contact' },
];

export const education: EducationItem[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of South Dakota',
    location: 'Vermillion, SD, USA',
    cgpa: '4.0 / 4.0',
  },
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'Gayatri Vidya Parishad College of Engineering',
    location: 'Visakhapatnam, Andhra Pradesh, India',
    cgpa: '8.1 / 10',
  },
  {
    degree: 'Intermediate (Class XI & XII)',
    institution: 'Sri Vaishnavi Abhyaas Junior College',
    location: 'India',
    cgpa: '9.9 / 10',
  },
  {
    degree: 'Class X',
    institution: 'Sivani High School',
    location: 'India',
    cgpa: '10 / 10',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Querying',
    skills: ['C', 'C++', 'Python', 'SQL'],
  },
  {
    title: 'Cloud & Data Platforms',
    skills: ['Google Cloud', 'AWS', 'BigQuery', 'Looker'],
  },
  {
    title: 'Data Visualization & Analysis',
    skills: ['Power BI', 'Excel', 'Word', 'PowerPoint', 'Matplotlib', 'NumPy', 'Pandas'],
  },
  {
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'Model Training & Evaluation'],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Getting Started with Deep Learning',
    issuer: 'NVIDIA',
  },
  {
    title: 'AWS Academy Graduate – Machine Learning Foundations',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'Introduction to Programming Using Python',
    issuer: 'Microsoft',
  },
];

export const cloudBadges: CloudBadge[] = [
  { title: 'BigQuery for Data Analysts', image: 'https://images.pexels.com/photos/4168045/pexels-photo-4168045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Introduction to Data Analytics on Google Cloud', image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Engineer Data for Predictive Modeling with BigQuery ML', image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Derive Insights from BigQuery Data', image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Google Cloud Essentials', image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Explore Machine Learning Models with Explainable AI', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Use Machine Learning APIs on Google Cloud', image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Insights from Data with BigQuery', image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Prepare Data for ML APIs on Google Cloud', image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const aiQuotes: AIQuote[] = [
  {
    quote: "Artificial intelligence is the new electricity. Just as electricity transformed almost everything 100 years ago, today I actually have a hard time thinking of an industry that I don't think AI will transform in the next several years.",
    author: "Andrew Ng",
    role: "AI Researcher & Founder of deeplearning.ai",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "A key to achieving success is to assemble a strong and stable management team. The future depends on what we do in the present.",
    author: "Sundar Pichai",
    role: "CEO of Google & Alphabet",
    image: "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The development of full artificial intelligence could spell the end of the human race... It would take off on its own, and re-design itself at an ever-increasing rate.",
    author: "Stephen Hawking",
    role: "Theoretical Physicist",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "AI is likely to be either the best or worst thing to happen to humanity.",
    author: "Elon Musk",
    role: "CEO of Tesla & SpaceX",
    image: "https://images.pexels.com/photos/5717450/pexels-photo-5717450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];