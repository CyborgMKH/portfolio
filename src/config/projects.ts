import ems from '../assets/ems.png'
import diabetec from '../assets/diabetec.png'
import portfolio from '../assets/portfolio.png'
import SuitCase from '../assets/SuitCase.png'
import payris from '../assets/payris.png'

export interface ProjectProps {
  name: string
  link: string
  slug: string
  bimg: string
}

export const projects: ProjectProps[] = [
  {
    name: 'Employee Management System',
    link: 'https://github.com/CyborgMKH/EMS',
    slug: 'CyborgMKH/EMS',
    bimg: ems,
  },
  {
    name: 'Diabetec Prediction System',
    link: 'https://github.com/CyborgMKH/1st-Repo/blob/master/DiabetesPrediction1.ipynb',
    slug: 'CyborgMKH/1st-Repo',
    bimg: diabetec,
  },
  {
    name: 'Portfolio.js',
    link: 'https://github.com/CyborgMKH/portfolio',
    slug: 'CyborgMKH/portfolio',
    bimg: portfolio,
  },
  {
    name: 'SuitCase Native Mobile Application',
    link: 'https://github.com/CyborgMKH/SuitCase',
    slug: 'CyborgMKH/SuitCase',
    bimg: SuitCase,
  },
  {
    name: 'Fun Olympics Project | Laravel',
    link: 'https://github.com/CyborgMKH/Olympics.git',
    slug: 'CyborgMKH/SuitCase',
    bimg: payris,
  }
  
]
