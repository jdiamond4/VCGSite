export type ProjectTeamMember = {
  name: string
  isProjectLeader?: boolean
  image?: string
}

export type ProjectTeam = {
  name: string
  members: ProjectTeamMember[]
}

export const projectTeams: ProjectTeam[] = [
  {
    name: 'PalCare',
    members: [
      { name: 'Tony Xu', isProjectLeader: true },
      { name: 'Charles Heyworth' },
      { name: 'Jack Shafer' },
      { name: 'Jenny Zhao' },
      { name: 'Katie Peacock' },
    ],
  },
  {
    name: 'Neurobiology',
    members: [
      { name: 'Karina Kejriwal', isProjectLeader: true },
      { name: 'Riley Warner' },
      { name: 'Mitchell Milias' },
      { name: 'Kennedy Farnham' },
      { name: 'Sabrina Maybaum' },
    ],
  },
  {
    name: 'IESC',
    members: [
      { name: 'Darren Sun', isProjectLeader: true },
      { name: 'Nathaniel Jackson' },
      { name: 'Lauren Fogelsong' },
      { name: 'Maeve Shoji' },
      { name: 'Will Henderson' },
    ],
  },
  {
    name: 'Executive Presence',
    members: [
      { name: 'Artun Duransoy', isProjectLeader: true },
      { name: 'Brody Provencher' },
      { name: 'Rex Shafer' },
      { name: 'Jordan Quint' },
      { name: 'Natalie Black' },
    ],
  },
  {
    name: 'Apex Clean Energy',
    members: [
      { name: 'Ethan Selvers', isProjectLeader: true },
      { name: 'Jack Copeland' },
      { name: 'Frank Siciliano' },
      { name: 'Ava McGoey' },
    ],
  },
  {
    name: 'Rho Impact',
    members: [
      { name: 'Edmund Rintis', isProjectLeader: true },
      { name: 'Maddy Baukh' },
      { name: 'Arun Jannupreddy' },
      { name: 'Julia Williams' },
      { name: 'Philip Margulies' },
    ],
  },
  {
    name: 'ClearForce',
    members: [
      { name: 'Amanda Chung', isProjectLeader: true },
      { name: 'Caitlin McGinn' },
      { name: 'Sammi Henske' },
      { name: 'Ziyuan Wei' },
      { name: 'Abdullah Rana' },
    ],
  },
  {
    name: 'BlueText',
    members: [
      { name: 'Yihui Yap', isProjectLeader: true },
      { name: 'Sania Singh' },
      { name: 'Vivek Rao' },
      { name: 'Trevor Robinson' },
      { name: 'Kate Martny' },
    ],
  },
  {
    name: 'MindWork Group',
    members: [
      { name: 'Jackson Tankersley', isProjectLeader: true },
      { name: 'Anya Aggarwal' },
      { name: 'Sienna Wardle' },
      { name: 'Somesh Jagannagari' },
      { name: 'Alex Levingston' },
    ],
  },
]
