export interface NavItem {
  id: number;
  path: string;
  title: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 2,
    path: '#!',
    title: 'Issue Tracker',
    icon: 'mingcute:bug-line',
    active: false,
  },
  {
    id: 3,
    path: '#!',
    title: 'Google Apps',
    icon: 'mingcute:google-fill',
    active: false,
  },
  {
    id: 4,
    path: '/other-apps',
    title: 'Other Apps',
    icon: 'ant-design:appstore-outlined',
    active: false,
  },
  {
    id: 5,
    path: '#!',
    title: 'Opportunity Board',
    icon: 'bi:briefcase',
    active: false,
  },
  {
    id: 6,
    path: '#!',
    title: 'Welfare',
    icon: 'bi:map',
    active: false,
  },
  {
    id: 7,
    path: '#!',
    title: 'Health Board',
    icon: 'bi:activity',
    active: false,
  },
  {
    id: 8,
    path: 'authentication/login',
    title: 'Login',
    icon: 'tabler:login',
    active: true,
  },
  {
    id: 9,
    path: 'authentication/sign-up',
    title: 'Sign Up',
    icon: 'tdesign:user-add',
    active: true,
  },
];

export default navItems;
