export type AlumniMember = {
  id: string
  name: string
  graduationYear: 2024 | 2025 | 2026
  title: string
  company: string
  image?: string
  companyLogo?: string
  linkedin?: string
}

const graduationYears: AlumniMember['graduationYear'][] = [2026, 2025, 2024]

const classOf2026: AlumniMember[] = [
  {
    id: 'dario-petrillo',
    name: 'Dario Petrillo',
    graduationYear: 2026,
    title: 'Incoming Associate',
    company: 'Boston Consulting Group',
    image: '/alumni/dario-petrillo.jpg',
    companyLogo: '/logos/bcg.png',
    linkedin: 'https://www.linkedin.com/in/dario-petrillo-a3596428a/',
  },
  {
    id: 'liam-tuohy',
    name: 'Liam Tuohy',
    graduationYear: 2026,
    title: 'Incoming Associate Consultant',
    company: 'Bain & Company',
    image: '/alumni/liam-tuohy.jpg',
    companyLogo: '/logos/bain.png',
    linkedin: 'https://www.linkedin.com/in/liam-tuohy-530400237/',
  },
  {
    id: 'akshay-kulkarni',
    name: 'Akshay Kulkarni',
    graduationYear: 2026,
    title: 'Incoming Investment Associate',
    company: 'Citadel',
    image: '/alumni/akshay-kulkarni.jpg',
    companyLogo: '/logos/citadel-alumni.png',
    linkedin: 'https://www.linkedin.com/in/akshay-kulkarni04/',
  },
  {
    id: 'stefan-van-biljon',
    name: 'Stefan van Biljon',
    graduationYear: 2026,
    title: 'Incoming Associate',
    company: 'Boston Consulting Group',
    image: '/alumni/stefan-van-biljon.jpg',
    companyLogo: '/logos/bcg.png',
    linkedin: 'https://www.linkedin.com/in/stefan-van-biljon-5b8ab8249/',
  },
  {
    id: 'katherine-walldorf',
    name: 'Katherine Walldorf',
    graduationYear: 2026,
    title: 'Investment Banking Analyst',
    company: 'Lazard',
    image: '/alumni/katherine-walldorf.jpg',
    companyLogo: '/logos/lazard-alumni.png',
    linkedin: 'https://www.linkedin.com/in/katewalldorf/',
  },
  {
    id: 'rubin-jha',
    name: 'Rubin Jha',
    graduationYear: 2026,
    title: 'Investment Banking Analyst',
    company: 'Ducera',
    image: '/alumni/rubin-jha.jpg',
    companyLogo: '/logos/ducera.png',
    linkedin: 'https://www.linkedin.com/in/rubinjha/',
  },
]

const classOf2025: AlumniMember[] = [
  {
    id: 'akaash-kamdar',
    name: 'Akaash Kamdar',
    graduationYear: 2025,
    title: 'Consultant',
    company: 'Deloitte',
    image: '/alumni/akaash-kamdar.jpg',
    companyLogo: '/logos/deloitte-alumni.png',
    linkedin: 'https://www.linkedin.com/in/akaash-kamdar/',
  },
  {
    id: 'dylan-myaing',
    name: 'Dylan Myaing',
    graduationYear: 2025,
    title: 'Associate Consultant',
    company: 'Bain & Company',
    image: '/alumni/dylan-myaing.jpg',
    companyLogo: '/logos/bain.png',
    linkedin: 'https://www.linkedin.com/in/dylan-myaing/',
  },
  {
    id: 'ignacio-setuain',
    name: 'Ignacio Setuain',
    graduationYear: 2025,
    title: 'Financial Analyst',
    company: 'Amazon',
    image: '/alumni/ignacio-setuain.jpg',
    companyLogo: '/logos/amazon-alumni.png',
    linkedin: 'https://www.linkedin.com/in/ignacio-setuain-81a0a21b3/',
  },
  {
    id: 'esha-sharma',
    name: 'Esha Sharma',
    graduationYear: 2025,
    title: 'Engineering Analyst',
    company: 'Goldman Sachs',
    image: '/alumni/esha-sharma.jpg',
    companyLogo: '/logos/goldman-alumni.png',
    linkedin: 'https://www.linkedin.com/in/esha-sharma-8553331b9/',
  },
  {
    id: 'zachary-nachlis',
    name: 'Zachary Nachlis',
    graduationYear: 2025,
    title: 'Investment Banking Analyst',
    company: 'PJT Partners',
    image: '/alumni/zachary-nachlis.jpg',
    companyLogo: '/logos/pjt-partners.png',
    linkedin: 'https://www.linkedin.com/in/zacharynachlis/',
  },
  {
    id: 'angelina-cherian',
    name: 'Angelina Cherian',
    graduationYear: 2025,
    title: 'Investment Banking Analyst',
    company: 'Houlihan Lokey',
    image: '/alumni/angelina-cherian.png',
    companyLogo: '/logos/houlihan-lokey.jpg',
    linkedin: 'https://www.linkedin.com/in/angelina-cherian-633620217/',
  },
  {
    id: 'vazira-ahmedjonova',
    name: 'Vazira Ahmedjonova',
    graduationYear: 2025,
    title: 'Consultant',
    company: 'Oliver Wyman',
    image: '/alumni/vazira-ahmedjonova.png',
    companyLogo: '/logos/oliver-wyman.png',
    linkedin: 'https://www.linkedin.com/in/vazira-ahmedjonova/',
  },
  {
    id: 'jason-he',
    name: 'Jason He',
    graduationYear: 2025,
    title: 'Co-Founder',
    company: 'Y Combinator',
    image: '/alumni/jason-he.jpg',
    companyLogo: '/logos/y-combinator.png',
    linkedin: 'https://www.linkedin.com/in/jasonjche/',
  },
]

const classOf2024: AlumniMember[] = [
  {
    id: 'preetham-minchu',
    name: 'Preetham Minchu',
    graduationYear: 2024,
    title: 'Software Engineer',
    company: 'Citadel',
    image: '/alumni/preetham-minchu.jpg',
    companyLogo: '/logos/citadel-alumni.png',
    linkedin: 'https://www.linkedin.com/in/preethamminchu/',
  },
  {
    id: 'emily-gaw',
    name: 'Emily Gaw',
    graduationYear: 2024,
    title: 'Fixed Income Analyst',
    company: 'Morgan Stanley',
    image: '/alumni/emily-gaw.jpg',
    companyLogo: '/logos/morgan-stanley-alumni.png',
    linkedin: 'https://www.linkedin.com/in/emily-gaw-31a26a189/',
  },
  {
    id: 'harry-cowen',
    name: 'Harry Cowen',
    graduationYear: 2024,
    title: 'Investment Banking Analyst',
    company: 'Barclays',
    image: '/alumni/harry-cowen.jpg',
    companyLogo: '/logos/barclays-alumni.png',
    linkedin: 'https://www.linkedin.com/in/harry-cowen-68532a1b7/',
  },
  {
    id: 'grayson-mccombs',
    name: 'Grayson McCombs',
    graduationYear: 2024,
    title: 'Associate Consultant',
    company: 'Bain & Company',
    image: '/alumni/grayson-mccombs.jpg',
    companyLogo: '/logos/bain.png',
    linkedin: 'https://www.linkedin.com/in/grayson-mccombs/',
  },
  {
    id: 'catherine-irons',
    name: 'Catherine Irons',
    graduationYear: 2024,
    title: 'Associate Consultant',
    company: 'Bain & Company',
    image: '/alumni/catherine-irons.jpg',
    companyLogo: '/logos/bain.png',
    linkedin: 'https://www.linkedin.com/in/catherine-irons/',
  },
  {
    id: 'aryan-pandya',
    name: 'Aryan Pandya',
    graduationYear: 2024,
    title: 'Investor',
    company: 'Alpine Investors',
    image: '/alumni/aryan-pandya.png',
    companyLogo: '/logos/alpine-investors.png',
    linkedin: 'https://www.linkedin.com/in/aryan-pandya/',
  },
  {
    id: 'dora-friedman',
    name: 'Dora Friedman',
    graduationYear: 2024,
    title: 'Consultant',
    company: 'Deloitte',
    image: '/alumni/dora-friedman.jpg',
    companyLogo: '/logos/deloitte-alumni.png',
    linkedin: 'https://www.linkedin.com/in/dorafriedman/',
  },
]

export const alumni: AlumniMember[] = [...classOf2026, ...classOf2025, ...classOf2024]

export const alumniByYear = graduationYears.map((year) => ({
  year,
  members: alumni.filter((member) => member.graduationYear === year),
}))
