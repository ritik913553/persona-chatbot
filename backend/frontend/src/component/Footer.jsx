import { Github, Linkedin, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-200 text-gray-600 py-4 ">
      <p className="text-center text-sm"> Built by <a href="https://github.com/ritikgupta" className="underline" >Ritik Gupta</a></p>
      <li className='flex justify-center space-x-4 mt-5 '>
        <ul className='rounded-full p-2 border-2 border-orange-500'>
            <a href="https://github.com/ritik913553"  target='_blank' ><Github size={17} /></a>
        </ul>
         <ul className='rounded-full p-2 border-2 border-orange-500'>
            <a href="https://www.linkedin.com/in/ritik-gupta-52aa982a7/" target='_blank' ><Linkedin  size={17}  /></a>
        </ul>
         <ul className='rounded-full p-2 border-2 border-orange-500'>
            <a href="https://x.com/RitikGu24346807" target='_blank' ><X  size={17}  /></a>
        </ul>
      </li>
    </div>
  )
}

export default Footer
