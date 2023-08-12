import { BiTimeFive } from 'react-icons/bi';
import { FiHome, FiUser, FiLogOut } from 'react-icons/fi';
import {
  RiBarChartLine,
  RiMessage2Line,
  RiClockLine,
  RiGameLine,
  RiGroupLine,
  RiUserAddLine,
  RiCashLine,
  RiBroadcastLine,
  RiUserSettingsLine,
  RiChartLine,
  RiTrophyLine,
  RiMoneyDollarCircleLine,
  RiClipboardLine,
  RiTicketLine,
  RiFootballLine,
  RiReceiptLine,
  RiSettings2Line,
  RiFeedbackLine,
  RiBookLine,
} from 'react-icons/ri';

export const paths = {
  home: '/',
  dashboard: '/dashboard',
  login: '/login',
  games: '/game-admin',
  messages: '/messages',
  rules: '/rules',
  settings: '/settings',
  agents: '/agents',
  statistics: '/statistics',
  pending: '/pending',
  customers: '/customers',
  customerAdmin: '/customer-admin',
  cashier: '/cashier',
  addCustomer: '/add-customer',
  addAgent: '/add-agent',
  liveLimits: '/live-limits',
  agentPerformance: '/agents-performance',
  analysis: '/analysis',
  ipTracker: '/ip-tracker',
  transactions: '/transactions',
  collections: '/collections',
  deletedWagers: '/deleted-wagers',
  sportsbookLines: '/',
  betTicker: '/bet-ticker',
  ticketWriter: '/ticket-writer',
  scores: '/scores',
  agentAdmin: '/agent-admin',
  billing: '/billing',
  feedback: '/feedback',
  faq: '/faq',
  userManual: '/manual',
  unauthorized: '/unauthorized',
  upNext: "up-next",
  featured: "feaured",
  liveStreaming: "live-streaming",
  commercialLive: "commercial-live",
  baseball: "baseball",
  football: "football",
  basketball: "basketball",
  soccer: "soccer",
  golf: "golf",
  martialArts: "martial-arts",
  boxing: "boxing",
  tennis: "tennis",
  autoRacing: "auto-racing",
  cricket: "cricket",
};

export const pageTitles = {
  dashboard: 'Dashboard',
  timeclock: 'Time Clock',
  profile: 'Profile',
};

export const NavNames = {
  statistics: 'Weekly Figures',
  pending: 'Pending',
  messages: 'Messaging',
  games: 'Game Admin',
  customers: 'Customer Admin',
  cashier: 'Cashier',
  addCustomer: 'Add Customer',
  liveLimits: 'My Live Limits',
  agentPerformance: 'Agent Performance',
  analysis: 'Analysis',
  ipTracker: 'IP Tracker',
  transactions: 'Transactions History',
  collections: 'Collections',
  deletedWagers: 'Deleted Wagers',
  sportsbookLines: 'Sportsbook Lines',
  betTicker: 'Bet Ticker',
  ticketWriter: 'Ticket Writer',
  scores: 'Scores',
  agentAdmin: 'Agent Admin',
  billing: 'Billing',
  settings: 'Settings',
  rules: 'Rules',
  feedback: 'Feedback',
  faq: 'F.A.Q',
  userManual: 'User Manual',
};

export const pathObject = [
  {
    icon: RiBarChartLine,
    name: NavNames.statistics,
    route: paths.statistics,
    color: 'indigo',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: BiTimeFive,
    name: NavNames.pending,
    route: paths.pending,
    color: 'indigo',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: RiMessage2Line,
    name: NavNames.messages,
    route: paths.messages,
    color: 'indigo',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: RiGameLine,
    name: NavNames.games,
    route: paths.games,
    color: 'indigo',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: RiGroupLine,
    name: NavNames.customers,
    route: paths.customers,
    color: 'green',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  // {
  //   icon: RiCashLine,
  //   name: NavNames.cashier,
  //   route: paths.cashier,
  //   color: 'green',
  //   allowedRoles: ['admin', 'super-admin', 'agent'],
  // },
  {
    icon: RiUserAddLine,
    name: NavNames.addCustomer,
    route: paths.addCustomer,
    color: 'green',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: RiBroadcastLine,
    name: NavNames.liveLimits,
    route: paths.liveLimits,
    color: 'green',
    allowedRoles: ['admin', 'super-admin'],
  },
  // {
  //   icon: FiHome,
  //   name: NavNames.agentPerformance,
  //   route: paths.agentPerformance,
  //   color: 'grey2',
  //   allowedRoles: ['admin', 'super-admin'],
  // },
  // {
  //   icon: RiTrophyLine,
  //   name: NavNames.analysis,
  //   route: paths.analysis,
  //   color: 'grey2',
  //   allowedRoles: ['admin', 'super-admin', 'agent'],
  // },
  {
    icon: RiClipboardLine,
    name: NavNames.ipTracker,
    route: paths.ipTracker,
    color: 'grey2',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  // {
  //   icon: RiMoneyDollarCircleLine,
  //   name: NavNames.transactions,
  //   route: paths.transactions,
  //   color: 'grey2',
  //   allowedRoles: ['admin', 'super-admin', 'agent'],
  // },
  // {
  //   icon: FiHome,
  //   name: NavNames.collections,
  //   route: paths.collections,
  //   color: 'turquoise',
  //   allowedRoles: ['admin', 'super-admin', 'agent'],
  // },
  {
    icon: RiSettings2Line,
    name: NavNames.deletedWagers,
    route: paths.deletedWagers,
    color: 'turquoise',
    allowedRoles: ['admin', 'super-admin'],
  },
  {
    icon: RiBookLine,
    name: NavNames.sportsbookLines,
    route: paths.sportsbookLines,
    color: 'turquoise',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  // {
  //   icon: FiHome,
  //   name: NavNames.betTicker,
  //   route: paths.betTicker,
  //   color: 'turquoise',
  //   allowedRoles: ['admin', 'super-admin'],
  // },
  // {
  //   icon: RiTicketLine,
  //   name: NavNames.ticketWriter,
  //   route: paths.ticketWriter,
  //   color: '#87CEEB',
  //   allowedRoles: ['admin', 'super-admin'],
  // },
  {
    icon: RiFootballLine,
    name: NavNames.scores,
    route: paths.scores,
    color: '#87CEEB',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: FiHome,
    name: NavNames.agentAdmin,
    route: paths.agentAdmin,
    color: '#87CEEB',
    allowedRoles: ['admin', 'super-admin'],
  },
  {
    icon: FiHome,
    name: NavNames.billing,
    route: paths.billing,
    color: '#87CEEB',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: RiSettings2Line,
    name: NavNames.settings,
    route: paths.settings,
    color: '#87CEEB',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: FiUser,
    name: NavNames.rules,
    route: paths.rules,
    color: '#87CEEB',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: BiTimeFive,
    name: NavNames.feedback,
    route: paths.feedback,
    color: 'red',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: FiLogOut,
    name: NavNames.faq,
    route: paths.faq,
    color: 'red',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
  {
    icon: FiLogOut,
    name: NavNames.userManual,
    route: paths.userManual,
    color: 'red',
    allowedRoles: ['admin', 'super-admin', 'agent'],
  },
];

export default paths;
