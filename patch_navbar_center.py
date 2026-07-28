import re
import sys

try:
    with open("navbar_current.tsx", "r", encoding="utf-8") as f:
        content = f.read()

    # We need to replace everything from <header ...> down to </header>
    # But wait, we can just extract the inner links we need.

    # Extract the home link
    home_link_match = re.search(r'(<motion\.div[^>]*>\s*\{hoveredItem === \'home\'.*?</motion\.div>)', content, re.DOTALL)
    home_link = home_link_match.group(1) if home_link_match else ""

    # Extract the services link
    services_link_match = re.search(r'(<motion\.div[^>]*>\s*\{hoveredItem === \'services\'.*?</motion\.div>\s*</AnimatePresence>\s*</motion\.div>)', content, re.DOTALL)
    services_link = services_link_match.group(1) if services_link_match else ""

    # Extract the navLinks map
    navlinks_map_match = re.search(r'(\{navLinks\.filter[^}]+\}\)\s*\)\})', content, re.DOTALL)
    navlinks_map = navlinks_map_match.group(1) if navlinks_map_match else ""
    if not navlinks_map:
        # Alternative extraction for the mapping part
        navlinks_map_match = re.search(r'(\{navLinks\.filter.*?</motion\.div>\s*\)\})', content, re.DOTALL)
        navlinks_map = navlinks_map_match.group(1) if navlinks_map_match else ""

    # Extract the Button
    button_match = re.search(r'(<Button[^>]*>.*?</Button>)', content, re.DOTALL)
    button = button_match.group(1) if button_match else ""

    header_block = f"""      <header
        className={{cn(
          'fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] left-0 right-0',
          isScrolled ? 'top-0 md:top-4' : 'top-0 md:top-[34px]'
        )}}
      >
        {{/* Glowing Scroll Progress Bar */}}
        <div
          className={{cn(
            "absolute top-0 left-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-50 transition-all duration-150 ease-out",
            isScrolled ? "opacity-0 md:opacity-100" : "opacity-100"
          )}}
          style={{{{ width: `${{scrollProgress}}%` }}}}
        />
        
        <div className="w-full md:container md:mx-auto px-0 md:px-6 lg:px-8">
          <nav className={{cn(
            "w-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto",
            isScrolled 
              ? "h-14 md:h-16 bg-[#FFFFFF]/80 dark:bg-background/85 backdrop-blur-xl border-b md:border border-slate-200/60 dark:border-border/80 shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] md:rounded-full px-4 sm:px-6 lg:px-8" 
              : "h-16 md:h-20 bg-transparent border-b border-transparent px-4 sm:px-6 lg:px-8 md:px-0 lg:px-0"
          )}}>
            <Link to="/" className="flex items-center gap-2 group z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105" onClick={{() => setIsMobileMenuOpen(false)}}>
              <img src="/logo.webp" alt="Qorynta Services" width={{140}} height={{40}} fetchPriority="high" className={{cn("w-auto object-contain transition-all duration-500", isScrolled ? "h-8" : "h-10")}} />
            </Link>

            {{/* Desktop Navigation */}}
            <div className="hidden lg:flex items-center gap-1 relative" onMouseLeave={{() => setHoveredItem(null)}}>
              {home_link}
              {services_link}
              {navlinks_map}
            </div>

            {{/* Dock Right Side (Desktop) */}}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              {button}
            </div>

            {{/* Mobile Actions */}}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                ref={{menuButtonRef}}
                onClick={{() => setIsMobileMenuOpen(!isMobileMenuOpen)}}
                className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle Mobile Menu"
              >
                {{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}}
              </button>
            </div>
          </nav>
        </div>
      </header>"""

    # Replace the old header with the new header block
    new_content = re.sub(r'<header className="fixed z-50 left-0 right-0 top-0 pointer-events-none">.*?</header>', header_block, content, flags=re.DOTALL)

    with open("src/components/Navbar.tsx", "w", encoding="utf-8") as f:
        f.write(new_content)

    print("Patch applied successfully.")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
