'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NavigationMenu } from 'radix-ui'
import { clsx } from 'clsx'

const navigationItems = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Contato', href: '#contato' },
] as const

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname) {
      setIsMobileMenuOpen(false)
    }
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'backdrop-blur-md shadow-md bg-primary-dark'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[360px] w-full">
              <Link href="/" className="block">
                <Image
                  src="/lp/images/logo/logo.svg"
                  alt="Logo Integra Therapie"
                  width={361.79}
                  height={60}
                  className="w-full h-auto"
                  priority
                />
              </Link>
            </div>

            <NavigationMenu.Root className="hidden lg:block">
              <NavigationMenu.List className="flex space-x-8">
                {navigationItems.map(item => {
                  const isActive = pathname === item.href
                  return (
                    <NavigationMenu.Item key={item.name}>
                      <NavigationMenu.Link asChild>
                        <Link
                          href={item.href}
                          className={clsx(
                            'text-base font-sans uppercase transition-all duration-300',
                            'hover:text-primary focus:outline-none',
                            'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0',
                            'rounded px-2 py-1',
                            'relative after:absolute after:bottom-0 after:left-0 after:right-0',
                            'after:h-0.5 after:bg-primary after:transform after:scale-x-0',
                            'after:transition-transform after:duration-300 hover:after:scale-x-100',
                            isActive
                              ? 'text-primary after:scale-x-100'
                              : 'text-white-soft'
                          )}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  )
                })}
              </NavigationMenu.List>
            </NavigationMenu.Root>

            <button
              type="button"
              className="lg:hidden p-2 text-primary hover:text-primary-dark cursor-pointer transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-accent pt-20">
          <div className="container mx-auto px-6 py-6">
            <nav>
              <ul className="space-y-6">
                {navigationItems.map(item => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          'block py-4 px-6 text-xl font-sans rounded-lg',
                          isActive
                            ? 'text-primary-dark bg-primary/35'
                            : 'text-primary-dark hover:text-primary-dark hover:bg-primary/35'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
