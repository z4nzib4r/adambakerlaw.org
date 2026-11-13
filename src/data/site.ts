/** Prefix a root-relative path with the deploy base (e.g. /adambakerlaw.org on GitHub Pages). */
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;

export const firm = {
  name: 'Adam Baker',
  fullName: 'Adam Baker, Attorney & Counselor at Law, LLC',
  attorney: 'Adam J. Baker',
  tagline: 'Attorney & Counselor at Law',
  phone: '(740) 592-9043',
  phoneHref: 'tel:+17405929043',
  fax: '(740) 592-9034',
  email: 'adambakerlaw@frontier.com',
  address: {
    street: '8 N Court St',
    suite: 'Ste. 212',
    city: 'Athens',
    state: 'OH',
    zip: '45701',
  },
  geo: { lat: 39.329403, lng: -82.101129 },
  facebook: 'https://www.facebook.com/profile.php?id=61572994227201',
  since: 1988,
  counties: ['Athens', 'Hocking', 'Perry', 'Morgan', 'Vinton', 'Washington'],
};

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${firm.address.street}, ${firm.address.city}, ${firm.address.state} ${firm.address.zip}`,
)}`;

export const mapsEmbed = `https://maps.google.com/maps?q=${firm.geo.lat},${firm.geo.lng}&z=16&output=embed`;

export const nav = [
  { href: url('/'), label: 'Home' },
  { href: url('/about-me/'), label: 'About' },
  { href: url('/practice-areas/'), label: 'Practice Areas' },
  { href: url('/resources/'), label: 'Resources' },
  { href: url('/contact-me/'), label: 'Contact' },
];

export const hours = [
  { day: 'Monday', time: '9:00 AM – 5:00 PM' },
  { day: 'Tuesday', time: '9:00 AM – 5:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 5:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 5:00 PM' },
  { day: 'Friday', time: 'By appointment' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
];

export const payments = ['Visa', 'MasterCard', 'Cash', 'Check', 'LawPay'];

/** A chunk of long-form content shown inside a practice area's accordion. */
export type Block = { heading?: string; text?: string[]; list?: string[] };

export type PracticeArea = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
  details?: Block[];
  pdf?: { href: string; size: string };
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'domestic-relations',
    title: 'Domestic Relations',
    summary:
      'Guidance through some of the most personal legal matters people face, handled with care and discretion.',
    items: ['Divorce', 'Dissolution', 'Child custody', 'Child support'],
    details: [
      {
        heading: 'Divorce',
        text: [
          'In Ohio, a divorce is a contested matter that often involves property, debt, custody of children, child support and spousal support. We work closely with you to maximize the amount of property that you keep and to minimize the amount of debt after the divorce. Custody of your children is most important for you, and we fight to ensure you have the custody of your children.',
        ],
      },
      {
        heading: 'Dissolution',
        text: [
          'In Ohio, a dissolution is a collaborative matter in which the parties have come to an agreement over division of property and debt, child support and spousal support when applicable. The allocation of property and debt is covered by a separation agreement, and custodial arrangements for the children are covered by a parenting plan.',
        ],
      },
      {
        heading: 'Child support',
        text: [
          'Child support is money that you or the other parent pay to meet your child’s financial needs, such as food, clothing, childcare and health insurance. If you receive child support and believe there are significant changes in your circumstances that warrant an increase, we can assist you in getting an increase in child support payments.',
          'The court decides the child support amount based on your and the other parent’s income, expenses for the child, and how much time you spend with the child.',
        ],
      },
      {
        heading: 'Custody and contested custody',
        text: [
          'Custody involves a number of factors in determining which unmarried parent should be the custodial parent of the child. Some of the factors used in deciding custody include the “best interests of the child,” the parents’ wishes, the child’s well-being, and the ability of each parent to provide a stable home. We will work closely with you in the custody matter and fight for you so that the child will primarily reside with you.',
        ],
      },
    ],
    pdf: { href: url('/docs/domestic-relations.pdf'), size: '176 KB' },
  },
  {
    slug: 'bankruptcy',
    title: 'Bankruptcy',
    summary:
      'Helping individuals get a fresh start by liquidating their debts through Chapter 7 bankruptcy.',
    items: ['Chapter 7 filings', 'Debt liquidation', 'Required counseling guidance'],
    details: [
      {
        heading: 'Getting a fresh start',
        text: [
          'Adam Baker practices bankruptcy law and helps clients get a fresh start financially. He assists clients in deciding whether Chapter 7 liquidation or consumer credit counseling is the best solution for handling their debt.',
        ],
      },
      {
        heading: 'Chapter 7 bankruptcy',
        text: [
          'Chapter 7 bankruptcy anticipates liquidation of the debtor’s assets to repay creditors; most debts are dischargeable. Common exceptions to a Chapter 7 discharge are child support, spousal support, most student loans, income taxes less than three years old, fines and penalties from criminal cases, and civil judgments arising from drunk-driving convictions.',
          'To reduce the assets that could be liquidated, exemptions are used to protect certain property. Depending on your individual circumstances, exemptions will let you keep your house, car, retirement, household goods, and life insurance with cash value.',
        ],
      },
      {
        heading: 'What to expect',
        text: [
          'After your bankruptcy petition is filed, there is one creditors’ meeting which you must attend. At that hearing, a bankruptcy trustee will review your petition and ask you questions about it. Your debts are usually discharged about 60 days after the creditors’ meeting.',
          'There are two required classes: one taken before your petition is filed and one taken after. Both may be taken online or by phone — see the Resources page for approved providers.',
        ],
      },
      {
        heading: 'If you are unable to pay your bills on time, we may be able to help you:',
        list: [
          'Stop repossession of property',
          'Stop eviction',
          'Stop wage garnishment',
          'Stop attachments of other assets',
          'Stop collection actions, including telephone calls',
          'End lawsuits',
          'Get utilities reinstated',
        ],
      },
    ],
    pdf: { href: url('/docs/bankruptcy-and-insolvency.pdf'), size: '113 KB' },
  },
  {
    slug: 'dui-ovi',
    title: 'DUI / OVI Defense',
    summary:
      'Defending individuals charged with impaired driving, whether from alcohol or drug use.',
    items: ['Alcohol-related charges', 'Drug-impaired driving', 'License matters'],
    details: [
      {
        heading: 'DUI, DWI and OMVI',
        text: [
          'People often refer to driving under the influence (DUI) or driving while intoxicated (DWI). However, since 1982 the official term in Ohio has been operating a motor vehicle while impaired (OMVI). I have successfully represented individuals charged with OMVI.',
        ],
      },
      {
        heading: 'Fourth Amendment defenses',
        text: [
          'Fourth Amendment violations are one of the most common defenses in an OMVI case. Your lawyer might argue that police violated your constitutional right to be protected against unreasonable searches and seizures.',
          'If the police did not have probable cause to make a vehicle stop, the seizure could be ruled unreasonable. That would make any evidence that followed the stop — like a field sobriety test — inadmissible in court.',
        ],
      },
      {
        heading: 'Other common OMVI defenses',
        text: ['Depending on the circumstances of your case, your lawyer might also argue:'],
        list: ['Fifth Amendment violations', 'Coerced testing', 'Problems of fact'],
      },
      { text: ['Feel free to call to discuss your OMVI case.'] },
    ],
    pdf: { href: url('/docs/dui-omvi-law.pdf'), size: '116 KB' },
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    summary:
      'Successfully litigating a broad range of disputes on behalf of individuals and businesses.',
    items: ['Breach of contract', 'Negligence', 'Oil & gas disputes'],
  },
  {
    slug: 'traffic',
    title: 'Traffic',
    summary:
      'Experienced representation in countless traffic matters, including speeding charges successfully reduced to no-points violations.',
    items: ['Speeding', 'Moving violations', 'Citations', 'Court appearances'],
  },
  {
    slug: 'oil-and-gas',
    title: 'Oil & Gas Law',
    summary:
      'Advising landowners on leases and regulatory matters affecting their mineral rights.',
    items: ['Lease negotiations', 'Lease terminations', 'ODNR permitting matters'],
    details: [
      {
        text: ['I have successfully represented individuals in the following areas of oil and gas law:'],
        list: [
          'Abandoned mineral interests under the Ohio Dormant Mineral Act',
          'Pipeline rights-of-way and easements',
          'Ownership of the surface and subsurface estates in real property',
          'Contractual disputes involving property rights',
          'Trespassing',
          'Surface damage or bodily injury claims resulting from drilling operations',
          'Investment disputes surrounding the ownership of mineral rights',
          'Reviewing titles and deeds to determine extent of ownership',
          'Negotiating lease terms, service agreements and royalties',
          'Drafting participation agreements and turnkey drilling contracts',
        ],
      },
    ],
    pdf: { href: url('/docs/oil-and-gas-law.pdf'), size: '188 KB' },
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Law',
    summary:
      'Handling residential and commercial transactions from contract through closing.',
    items: ['Residential closings', 'Commercial closings', 'Deeds', '1031 like-kind exchanges'],
    details: [
      {
        text: [
          'We have represented buyers and sellers of residential real estate, and sellers of commercial real estate, including 1031 like-kind exchanges.',
          'We have also successfully handled zoning and re-zoning issues, and represented tenants in eviction cases.',
        ],
      },
    ],
    pdf: { href: url('/docs/real-estate-law.pdf'), size: '95 KB' },
  },
];

export const resources = [
  {
    title: 'Documentation Required for Bankruptcy Filing',
    description: 'A convenient list of required documents to bring with you when filing for bankruptcy.',
    href: url('/docs/bankruptcy-documents.pdf'),
    size: '84 KB',
    category: 'Bankruptcy',
  },
  {
    title: 'Initial Interview Bankruptcy Questionnaire',
    description: 'Convenient and easy-to-use fillable bankruptcy questionnaire.',
    href: url('/docs/bankruptcy-questionnaire.pdf'),
    size: '524 KB',
    category: 'Bankruptcy',
    fillable: true,
  },
  {
    title: 'Cricket Debt Counseling Services',
    description: 'Information, pricing and instructions about Cricket Debt Counseling services.',
    href: url('/docs/cricket-debt-counseling.pdf'),
    size: '816 KB',
    category: 'Bankruptcy',
  },
  {
    title: 'SolidStart Financial Education Services',
    description: 'Information, pricing and instructions about SolidStart Financial Education services.',
    href: url('/docs/solidstart-financial-education.pdf'),
    size: '926 KB',
    category: 'Bankruptcy',
  },
  {
    title: 'Domestic Relations Information Sheet',
    description: 'Convenient and easy-to-use fillable version.',
    href: url('/docs/domestic-relations-information-sheet.pdf'),
    size: '260 KB',
    category: 'Domestic Relations',
    fillable: true,
  },
  {
    title: 'Privacy Policy & Terms of Use',
    description: 'How this website handles your information and the terms that govern its use.',
    href: url('/docs/privacy-policy-terms-of-use.pdf'),
    size: '122 KB',
    category: 'General',
  },
];
