import ems from '../assets/ems.png'
import diabetec from '../assets/diabetec.png'
import portfolio from '../assets/portfolio.png'

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
  }
  
]
