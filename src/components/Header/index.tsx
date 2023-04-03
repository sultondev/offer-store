import Image from 'next/image'
import Link from 'next/link'

import EmailIcon from '@/assets/icons/email-icon.svg'

export const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto xl:w-[1177px]">
        <div className="top text-white">
          <div className="top-left flex justify-between">
            <div className="flex">
              <Image src={EmailIcon} alt="Email" width={16} height={16} />
              <Link href={'mail:sultondeveloper@gmail.com'}>
                sultondeveloper@gmail.com
              </Link>
            </div>
            <div className="flex">
              <Image src={EmailIcon} alt="Email" width={16} height={16} />
              <Link href={'/'} locale="ru">
                Lang
              </Link>
            </div>
          </div>
          <div className="top-right"></div>
        </div>
      </div>
    </header>
  )
}
