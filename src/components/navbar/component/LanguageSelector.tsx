'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { TbLanguage } from 'react-icons/tb'

const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'bn', name: 'বাংলা' },
]

const LanguageSelector = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentLang = searchParams.get('lang') || 'en'
  const currentLanguage = languageOptions.find((lang) => lang.code === currentLang)

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'bn' : 'en'
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', newLang)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 text-sm text-black hover:bg-gray-100 cursor-pointer"
    >
      <TbLanguage className="h-4 w-4 text-black" />
      <span>
        {currentLang.toUpperCase()} - {currentLanguage?.name}
      </span>
    </button>
  )
}

export default LanguageSelector;