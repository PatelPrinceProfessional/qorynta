import re

with open("src/components/Navbar.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Increase gap between links
content = content.replace('className="hidden lg:flex items-center gap-1 relative"', 'className="hidden lg:flex items-center gap-3 relative"')

# 2. Update all link typography and padding
content = content.replace('px-3 py-1.5 text-[13px] font-medium', 'px-5 py-2.5 text-[14px] font-[600] tracking-wide')
content = content.replace('text-[13px] font-medium transition-colors duration-200 block', 'text-[14px] font-[600] tracking-wide transition-colors duration-200 block')

# 3. Update active pill background
content = content.replace('bg-blue-50/80 dark:bg-blue-500/10', 'bg-gradient-to-r from-[#E3F2FF] to-[#F2FAF4] dark:from-blue-500/10 dark:to-blue-500/5 border border-[#99CAFF]/30 dark:border-blue-500/20')

# 4. Enhance CTA Button
content = content.replace('rounded-full px-5 h-9 text-[13px] font-semibold', 'rounded-full px-6 h-11 text-[14px] font-[700] tracking-wide')

# 5. Enhance Nav heights and shadow
content = content.replace('h-14 md:h-16 bg-[#FFFFFF]/80', 'h-16 md:h-[72px] bg-[#FFFFFF]/90')
content = content.replace('h-16 md:h-20 bg-transparent', 'h-20 md:h-[88px] bg-transparent')
content = content.replace('shadow-[0_15px_40px_rgba(0,0,0,0.1)]', 'shadow-[0_20px_40px_rgba(0,78,224,0.08)]')

with open("src/components/Navbar.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Navbar styled successfully.")
