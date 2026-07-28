import sys

with open("navbar_current.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# The start of the header block to replace
start_str = '<header className="fixed z-50 left-0 right-0 top-0 pointer-events-none">'
# The end of the dock block
end_str = '</nav>\n        </div>\n      </header>'

start_idx = content.find(start_str)
end_idx = content.find(end_str) + len(end_str)

if start_idx == -1 or end_idx == -1:
    print("Could not find the header boundaries.")
    sys.exit(1)

# The desktop links block we need to keep
links_start_str = '            <div className="flex items-center gap-1 mr-4">\n\n              {/* Home */}'
links_end_str = '            {/* Separator */}'
links_start_idx = content.find(links_start_str)
links_end_idx = content.find(links_end_str)

desktop_links = content[links_start_idx:links_end_idx]
# replace the wrapper class for desktop links to hidden lg:flex
desktop_links = desktop_links.replace(
    '            <div className="flex items-center gap-1 mr-4">',
    '            <div className="hidden lg:flex items-center gap-1 relative" onMouseLeave={() => setHoveredItem(null)}>'
)
# remove the closing </div> of the desktop links
desktop_links = desktop_links.rsplit('</div>', 1)[0]

# The button block
btn_start_str = '            {/* Dock Right Side */}'
btn_end_str = '</nav>'
btn_start_idx = content.find(btn_start_str)
btn_end_idx = content.find(btn_end_str)

button_block = content[btn_start_idx:btn_end_idx]
button_block = button_block.replace(
    '            {/* Dock Right Side */}\n            <div className="flex items-center gap-3">',
    '            {/* Dock Right Side (Desktop) */}\n            <div className="hidden lg:flex items-center gap-3">'
)
# remove the closing </div> of the button block
button_block = button_block.rsplit('</div>', 1)[0] + '</div>\n'

new_header = f"""      <header
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

{desktop_links}
            </div>

{button_block}

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

new_content = content[:start_idx] + new_header + content[end_idx:]

with open("src/components/Navbar.tsx", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Patch applied successfully.")
