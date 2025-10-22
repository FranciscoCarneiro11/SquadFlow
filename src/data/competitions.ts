export type Competition = {
  id: string;
  name: string;
  slug: string;
  region: string;
  logo?: string;
  logoClass?: string;   
};

export const FEATURED_COMPETITIONS: Competition[] = [
  { id: 'ucl',  name: 'Liga dos Campeõe', slug: 'uefa-champions-league', region: 'UEFA',
    logo: '/logos/competitions/ucl.png',             logoClass: 'logo--ucl' },

  { id: 'uel',  name: 'UEFA Liga Europa', slug: 'uefa-europa-league', region: 'UEFA',
    logo: '/logos/competitions/uel.png',             logoClass: 'logo--uel' },

  { id: 'epl',  name: 'Premier League', slug: 'premier-league', region: 'Inglaterra',
    logo: '/logos/competitions/epl.png',             logoClass: 'logo--epl' },

  { id: 'laliga', name: 'LaLiga', slug: 'laliga', region: 'Espanha',
    logo: '/logos/competitions/laliga.png' },

  { id: 'seriea', name: 'Serie A', slug: 'serie-a', region: 'Itália',
    logo: '/logos/competitions/seriea.png',          logoClass: 'logo--seriea' },

  { id: 'bund', name: 'Bundesliga', slug: 'bundesliga', region: 'Alemanha',
    logo: '/logos/competitions/bundesliga.png',      logoClass: 'logo--bund' },

  { id: 'ligue1', name: 'Ligue 1', slug: 'ligue-1', region: 'França',
    logo: '/logos/competitions/ligue1.png',          logoClass: 'logo--ligue1' },

  { id: 'uecl', name: 'UEFA Conference', slug: 'uefa-conference-league', region: 'UEFA',
    logo: '/logos/competitions/uecl.png',            logoClass: 'logo--uecl' },

  { id: 'lib',  name: 'Libertadores', slug: 'copa-libertadores', region: 'CONMEBOL',
    logo: '/logos/competitions/libertadores.png',    logoClass: 'logo--lib' },

  { id: 'lp24', name: 'Liga Portugal', slug: 'liga-portugal', region: 'Portugal',
    logo: '/logos/competitions/liga-portugal.png',   logoClass: 'logo--lp' },
];
