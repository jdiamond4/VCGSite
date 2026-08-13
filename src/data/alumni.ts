export type AlumniMember = {
  id: string
  name: string
  graduationYear: 2023 | 2024 | 2025
  title: string
  company: string
  image?: string
  companyLogo?: string
  linkedin?: string
}

const graduationYears: AlumniMember['graduationYear'][] = [2025, 2024, 2023]

const classOf2025: AlumniMember[] = [
  {
    id: 'akaash-kamdar',
    name: 'Akaash Kamdar',
    graduationYear: 2025,
    title: 'Consultant',
    company: 'Deloitte',
    image: '/alumni/akaash-kamdar.png',
    companyLogo: '/logos/deloitte-alumni.png',
    linkedin: 'https://www.linkedin.com/in/akaash-kamdar/',
  },
  {
    id: 'dylan-myaing',
    name: 'Dylan Myaing',
    graduationYear: 2025,
    title: 'Associate Consultant',
    company: 'Bain & Company',
    image: '/alumni/dylan-myaing.png',
    companyLogo: '/logos/bain.png',
    linkedin: 'https://www.linkedin.com/in/dylan-myaing/',
  },
  {
    id: 'ignacio-setuain',
    name: 'Ignacio Setuain',
    graduationYear: 2025,
    title: 'Financial Analyst',
    company: 'Amazon',
    image: '/alumni/ignacio-setuain.png',
    companyLogo: '/logos/amazon-alumni.png',
    linkedin: 'https://www.linkedin.com/in/ignacio-setuain-81a0a21b3/',
  },
  {
    id: 'esha-sharma',
    name: 'Esha Sharma',
    graduationYear: 2025,
    title: 'Engineering Analyst',
    company: 'Goldman Sachs',
    image: '/alumni/esha-sharma.png',
    companyLogo: '/logos/goldman-alumni.png',
    linkedin: 'https://www.linkedin.com/in/esha-sharma-8553331b9/',
  },
  {
    id: 'zachary-nachlis',
    name: 'Zachary Nachlis',
    graduationYear: 2025,
    title: 'Investment Banking Analyst',
    company: 'PJT Partners',
    image: '/alumni/zachary-nachlis.png',
    linkedin: 'https://www.linkedin.com/in/zacharynachlis/',
  },
]

const classOf2024: AlumniMember[] = [
  {
    id: 'preetham-minchu',
    name: 'Preetham Minchu',
    graduationYear: 2024,
    title: 'Software Engineer',
    company: 'Citadel',
    image: '/alumni/preetham-minchu.png',
    companyLogo: '/logos/citadel-alumni.png',
    linkedin: 'https://www.linkedin.com/in/preethamminchu/',
  },
  {
    id: 'emily-gaw',
    name: 'Emily Gaw',
    graduationYear: 2024,
    title: 'Fixed Income Analyst',
    company: 'Morgan Stanley',
    image: '/alumni/emily-gaw.png',
    companyLogo: '/logos/morgan-stanley-alumni.png',
    linkedin: 'https://www.linkedin.com/in/emily-gaw-31a26a189/',
  },
  {
    id: 'harry-cowen',
    name: 'Harry Cowen',
    graduationYear: 2024,
    title: 'Investment Banking Analyst',
    company: 'Barclays',
    image: '/alumni/harry-cowen.png',
    companyLogo: '/logos/barclays-alumni.png',
    linkedin: 'https://www.linkedin.com/in/harry-cowen-68532a1b7/',
  },
  {
    id: 'grayson-mccombs',
    name: 'Grayson McCombs',
    graduationYear: 2024,
    title: 'Associate Consultant',
    company: 'Bain & Company',
    image: '/alumni/grayson-mccombs.png',
    companyLogo: '/logos/bain.png',
    linkedin: 'https://www.linkedin.com/in/grayson-mccombs/',
  },
  {
    id: 'yasaar-ellis',
    name: 'Yasaar Ellis',
    graduationYear: 2024,
    title: 'Technology Risk Assurance Staff',
    company: 'EY',
    image: '/alumni/yasaar-ellis.png',
    companyLogo: '/logos/ey-alumni.png',
    linkedin: 'https://www.linkedin.com/in/yasaar-ellis-28b6931ab/',
  },
]

const placeholderAlumni: AlumniMember[] = graduationYears
  .filter((year) => year === 2023)
  .flatMap((graduationYear) =>
    Array.from({ length: 5 }, (_, index) => ({
      id: `${graduationYear}-${index + 1}`,
      name: 'Alumni Name',
      graduationYear,
      title: 'Current Title',
      company: 'Company',
    })),
  )

export const alumni: AlumniMember[] = [...classOf2025, ...classOf2024, ...placeholderAlumni]

export const alumniByYear = graduationYears.map((year) => ({
  year,
  members: alumni.filter((member) => member.graduationYear === year),
}))
