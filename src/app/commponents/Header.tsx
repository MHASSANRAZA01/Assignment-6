import Link from 'next/link'
import Image from 'next/image'
import images from './public/images/logo.png'

const Header = () => {
  return (
    <div className='praentconntainer'>
        <div className='Header'>
        <Link href={"/"}> <Image className='logo'
            src={"/images/logo.png"}
            alt="image"
            width={70}
            height={43.71}
          /></Link>
            <ul className='line'>
                
                <li><Link href={"/"}>MAIN</Link></li>
                <li><Link href={"/"}>GALLERY</Link></li>
                <li><Link href={"/"}>PROJECTS</Link></li>
                <li><Link href={"/"}>CERTIFICATIONS</Link></li>
                <li><Link href={"/"}>CONTACTS</Link></li>
            </ul>

        </div>



    </div>
  )
}

export default Header