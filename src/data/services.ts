export type Service = {
  title: string
  description: string
  bullets: string[]
}

export const services: Service[] = [
  {
    title: 'Strategic Communication & Digital Advocacy',
    description: 'Design and execute communication strategies that amplify impact across digital channels.',
    bullets: [
      'Messaging frameworks and editorial planning',
      'Social media strategy and content systems',
      'Campaigns for policy and public awareness',
      'Stakeholder engagement and narrative development',
    ],
  },
  {
    title: 'Strategic & Organizational Development',
    description: 'Strengthen strategy, governance, and operations for agile, mission-aligned delivery.',
    bullets: [
      'Strategy facilitation and roadmapping',
      'Organizational assessment and operating models',
      'Process optimization and change management',
      'Governance design and leadership coaching',
    ],
  },
  {
    title: 'Program & Project Management',
    description: 'Plan, implement, and monitor programs using robust project delivery frameworks.',
    bullets: [
      'Workplans, budgets, and risk management',
      'MEAL frameworks and dashboards',
      'Partner coordination and field support',
      'Operational tooling and workflows',
    ],
  },
  {
    title: 'Research, Policy Analysis & Compliance',
    description: 'Generate insights and ensure alignment with regulatory and donor requirements.',
    bullets: [
      'Policy briefs and contextual analysis',
      'Baseline and endline studies',
      'Donor compliance and reporting systems',
      'Data governance and ethics',
    ],
  },
  {
    title: 'Capacity Building & Resource Mobilization',
    description: 'Develop skills and secure funding through targeted training and grant support.',
    bullets: [
      'Training curricula and facilitation',
      'Grant strategy and proposal development',
      'Partnership mapping and outreach',
      'Knowledge management and toolkits',
    ],
  },
]
