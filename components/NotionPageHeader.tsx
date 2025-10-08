import type * as types from 'notion-types'
import cs from 'classnames'
import * as React from 'react'
import { Breadcrumbs, Header, Search, useNotionContext } from 'react-notion-x'
import { IoMdMenu } from '@react-icons/all-files/io/IoMdMenu'
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose'

import { isSearchEnabled, navigationLinks, navigationStyle } from '@/lib/config'

import styles from './styles.module.css'

export function NotionPageHeader({
  block
}: {
  block: types.CollectionViewPageBlock | types.PageBlock
}) {
  const { components, mapPageUrl } = useNotionContext()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        <Breadcrumbs block={block} rootOnly={true} />

        <div className='notion-nav-header-rhs breadcrumbs'>
          {/* Mobile: Search first, then hamburger */}
          {isSearchEnabled && (
            <div className={styles.mobileSearch}>
              <Search block={block} title={null} />
            </div>
          )}

          {/* Hamburger menu button (mobile only) */}
          <button
            className={styles.hamburgerButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>

          {/* Desktop: Navigation links then search */}
          <div className={cs(styles.desktopNav, 'breadcrumbs')}>
            {navigationLinks
              ?.map((link, index) => {
                if (!link?.pageId && !link?.url) {
                  return null
                }

                if (link.pageId) {
                  return (
                    <components.PageLink
                      href={mapPageUrl(link.pageId)}
                      key={index}
                      className={cs(styles.navLink, 'breadcrumb', 'button')}
                    >
                      {link.title}
                    </components.PageLink>
                  )
                } else {
                  return (
                    <components.Link
                      href={link.url}
                      key={index}
                      className={cs(styles.navLink, 'breadcrumb', 'button')}
                    >
                      {link.title}
                    </components.Link>
                  )
                }
              })
              .filter(Boolean)}

            {isSearchEnabled && <Search block={block} title={null} />}
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              {navigationLinks
                ?.map((link, index) => {
                  if (!link?.pageId && !link?.url) {
                    return null
                  }

                  if (link.pageId) {
                    return (
                      <components.PageLink
                        href={mapPageUrl(link.pageId)}
                        key={index}
                        className={cs(styles.mobileNavLink, 'breadcrumb', 'button')}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </components.PageLink>
                    )
                  } else {
                    return (
                      <components.Link
                        href={link.url}
                        key={index}
                        className={cs(styles.mobileNavLink, 'breadcrumb', 'button')}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </components.Link>
                    )
                  }
                })
                .filter(Boolean)}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
