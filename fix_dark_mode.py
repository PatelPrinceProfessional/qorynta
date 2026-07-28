import re

def fix_process_section():
    path = 'src/components/home/ProcessSection.tsx'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Background gradient
    content = content.replace(
        'bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-background',
        'bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-background'
    )
    
    # 2. Title drop shadow
    content = content.replace(
        'drop-shadow-[0px_2px_4px_rgba(0,7,45,0.08)]',
        'drop-shadow-[0px_2px_4px_rgba(0,7,45,0.08)] dark:drop-shadow-none'
    )
    
    # 3. SVG Lines
    content = content.replace(
        """                      style={{
                        stroke: isHovered ? 'url(#activeGradient)' : '#99CAFF',
                        strokeWidth: isHovered ? 1.5 : 1,
                        filter: isHovered ? 'url(#glowEffect)' : 'none'
                      }}""",
        """                      style={{
                        stroke: isHovered ? 'url(#activeGradient)' : undefined,
                        strokeWidth: isHovered ? 1.5 : 1,
                        filter: isHovered ? 'url(#glowEffect)' : 'none'
                      }}"""
    )
    content = content.replace(
        'className="connection-line transition-all duration-300 ease-in-out dark:stroke-border"',
        'className="connection-line transition-all duration-300 ease-in-out stroke-[#99CAFF] dark:stroke-border"'
    )
    content = content.replace(
        """                      style={{ stroke: '#004EE0', animationDelay: `${i * 0.5}s`, opacity: isHovered ? 1 : 1 }}""",
        """                      style={{ animationDelay: `${i * 0.5}s`, opacity: isHovered ? 1 : 1 }}"""
    )
    content = content.replace(
        """                      style={{ stroke: '#004EE0', animationDelay: `${(i * 0.5) + 0.2}s`, opacity: isHovered ? 1 : 1 }}""",
        """                      style={{ animationDelay: `${(i * 0.5) + 0.2}s`, opacity: isHovered ? 1 : 1 }}"""
    )
    content = content.replace(
        'className="animate-pulse-path-left dark:stroke-primary"',
        'className="animate-pulse-path-left stroke-[#004EE0] dark:stroke-primary"'
    )
    content = content.replace(
        'className="animate-pulse-path-right dark:stroke-primary"',
        'className="animate-pulse-path-right stroke-[#004EE0] dark:stroke-primary"'
    )

    # 4. Central Hub Logo
    content = content.replace(
        'dark:border-border scale-100\'}`',
        'dark:border-border dark:border-[4px] scale-100\'}`'
    )
    content = content.replace(
        'bg-[#E3F2FF] w-[72px] h-[72px] rounded-full"',
        'bg-[#E3F2FF] dark:bg-transparent w-[72px] h-[72px] rounded-full"'
    )
    content = content.replace(
        'bg-[#E3F2FF] w-14 h-14 rounded-full"',
        'bg-[#E3F2FF] dark:bg-transparent w-14 h-14 rounded-full"'
    )
    content = content.replace(
        "hoveredIndex !== null ? 'text-[#0069D9]' : 'text-[#004EE0]'",
        "hoveredIndex !== null ? 'text-[#0069D9] dark:text-[#3b82f6]' : 'text-[#004EE0] dark:text-primary'"
    )

    # 5. Icon Badges
    content = content.replace(
        'bg-[#E3F2FF] group-hover:bg-[#004EE0] dark:bg-primary/10 flex',
        'bg-[#E3F2FF] group-hover:bg-[#004EE0] dark:bg-primary/10 dark:group-hover:bg-primary/10 flex'
    )
    content = content.replace(
        'border border-[#99CAFF] transition-colors',
        'border border-[#99CAFF] dark:border-primary/20 transition-colors'
    )
    content = content.replace(
        'className="w-6 h-6 text-[#004EE0] group-hover:text-[#F2FAF4] transition-colors',
        'className="w-6 h-6 text-[#004EE0] group-hover:text-[#F2FAF4] dark:text-primary dark:group-hover:text-primary transition-colors'
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def fix_why_qorynta():
    path = 'src/components/home/WhyQorynta.tsx'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Background
    content = content.replace(
        'bg-gradient-to-br from-[#E3F2FF] to-[#F2FAF4] dark:bg-background',
        'bg-gradient-to-br from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-background'
    )
    content = content.replace(
        'radial-gradient(circle, #99CAFF 1.5px, transparent 1.5px)',
        'radial-gradient(circle, var(--tw-gradient-from, #99CAFF) 1.5px, transparent 1.5px)'
    )

    # 2. Top Tag
    content = content.replace(
        'bg-[#E3F2FF] text-[#004EE0]',
        'bg-[#E3F2FF] dark:bg-primary/10 text-[#004EE0] dark:text-primary'
    )
    content = content.replace(
        'border border-[#99CAFF] shadow-sm',
        'border border-[#99CAFF] dark:border-primary/20 shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.2)]'
    )

    # 3. Main Text
    content = content.replace(
        'text-[#00072D] dark:text-foreground font-bold">Qorynta services',
        'text-[#00072D] dark:text-foreground font-bold">Qorynta services'
    )
    content = content.replace(
        'text-[#004EE0] font-[600]',
        'text-[#004EE0] dark:text-foreground font-[600]'
    )
    content = content.replace(
        'text-[#0A2472] font-[600]',
        'text-[#0A2472] dark:text-foreground font-[600]'
    )
    content = content.replace(
        'from-[#004EE0] to-[#0069D9]',
        'from-[#004EE0] to-[#0069D9] dark:from-blue-600 dark:to-cyan-500'
    )

    # 4. Feature Cards
    content = content.replace(
        'bg-[#FFFFFF] dark:bg-card bg-gradient-to-br from-[#E3F2FF]/30 to-transparent',
        'bg-[#FFFFFF] dark:bg-card bg-gradient-to-br from-[#E3F2FF]/30 to-transparent dark:from-transparent dark:to-transparent'
    )
    content = content.replace(
        'dark:border-border/50 shadow-[0px_10px_25px_rgba(5,22,80,0.04)]',
        'dark:border-border/50 shadow-[0px_10px_25px_rgba(5,22,80,0.04)] dark:shadow-sm'
    )
    content = content.replace(
        'hover:shadow-[0px_16px_35px_rgba(0,78,224,0.15)] hover:border-[1.5px] hover:border-[#004EE0]',
        'hover:shadow-[0px_16px_35px_rgba(0,78,224,0.15)] dark:hover:shadow-lg hover:border-[1.5px] hover:border-[#004EE0] dark:hover:border-border/50'
    )
    content = content.replace(
        'bg-[#E3F2FF] dark:bg-blue-900/20 text-[#004EE0]',
        'bg-[#E3F2FF] dark:bg-blue-900/20 text-[#004EE0] dark:text-blue-400'
    )
    content = content.replace(
        'border border-[#99CAFF] dark:border-blue-800/50',
        'border border-[#99CAFF] dark:border-blue-800/50 dark:shadow-[0_0_15px_rgba(37,99,235,0.2)]'
    )
    content = content.replace(
        'bg-[#E3F2FF] dark:bg-cyan-900/20 text-[#004EE0]',
        'bg-[#E3F2FF] dark:bg-cyan-900/20 text-[#004EE0] dark:text-cyan-400'
    )
    content = content.replace(
        'border border-[#99CAFF] dark:border-cyan-800/50',
        'border border-[#99CAFF] dark:border-cyan-800/50 dark:shadow-[0_0_15px_rgba(6,182,212,0.2)]'
    )

    # 5. Buttons
    content = content.replace(
        'bg-gradient-to-br from-[#00072D] to-[#0A2472] text-[#F2FAF4]',
        'bg-gradient-to-br from-[#00072D] to-[#0A2472] dark:from-primary dark:to-primary text-[#F2FAF4] dark:text-primary-foreground'
    )
    content = content.replace(
        'hover:from-[#004EE0] hover:to-[#0A2472] shadow-md hover:shadow-[0px_10px_25px_rgba(0,78,224,0.35)]',
        'hover:from-[#004EE0] hover:to-[#0A2472] dark:hover:from-primary/90 dark:hover:to-primary/90 shadow-md dark:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0px_10px_25px_rgba(0,78,224,0.35)] dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]'
    )
    content = content.replace(
        'text-[#00072D] font-[700] text-lg bg-[#FFFFFF]/90 backdrop-blur-sm px-5 py-3 rounded-xl border border-[#99CAFF] shadow-sm',
        'text-[#00072D] dark:text-foreground font-[700] text-lg bg-[#FFFFFF]/90 dark:bg-muted/50 backdrop-blur-sm px-5 py-3 rounded-xl border border-[#99CAFF] dark:border-border/50 shadow-sm'
    )
    content = content.replace(
        'bg-[#0069D9] animate-pulse shadow-[0_0_8px_rgba(0,105,217,0.8)]',
        'bg-[#0069D9] dark:bg-green-500 animate-pulse shadow-[0_0_8px_rgba(0,105,217,0.8)] dark:shadow-[0_0_8px_rgba(34,197,94,0.8)]'
    )
    content = content.replace(
        'text-[#0A2472] font-[700]',
        'text-[#0A2472] dark:text-muted-foreground font-[700]'
    )
    content = content.replace(
        'hover:text-[#004EE0]',
        'hover:text-[#004EE0] dark:hover:text-primary'
    )
    content = content.replace(
        'text-transparent bg-clip-text bg-gradient-to-br from-[#004EE0] via-[#0069D9] to-[#183EFF]',
        'text-transparent bg-clip-text bg-gradient-to-br from-[#004EE0] via-[#0069D9] to-[#183EFF] dark:from-blue-600 dark:to-cyan-500'
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def fix_industries_section():
    path = 'src/components/home/IndustriesSection.tsx'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Background
    content = content.replace(
        'bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-background',
        'bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-background'
    )
    
    # 2. Text
    content = content.replace(
        'bg-[#004EE0]',
        'bg-[#004EE0] dark:bg-blue-600'
    )
    content = content.replace(
        'from-[#004EE0] via-[#0069D9] to-[#183EFF]',
        'from-[#004EE0] via-[#0069D9] to-[#183EFF] dark:from-blue-600 dark:via-blue-500 dark:to-cyan-500'
    )
    content = content.replace(
        'hover:border-[#004EE0]">Portfolio',
        'hover:border-[#004EE0] dark:text-blue-400 dark:hover:text-blue-300">Portfolio'
    )
    content = content.replace(
        'hover:border-[#004EE0]">Contact Us',
        'hover:border-[#004EE0] dark:text-blue-400 dark:hover:text-blue-300">Contact Us'
    )
    
    # 3. Tabs
    content = content.replace(
        'border-[#99CAFF] bg-[#F2FAF4]/80',
        'border-[#99CAFF] dark:border-border/80/60 bg-[#F2FAF4]/80'
    )
    content = content.replace(
        'bg-gradient-to-r from-[#004EE0] to-[#0A2472]',
        'bg-gradient-to-r from-[#004EE0] to-[#0A2472] dark:from-blue-600 dark:to-blue-600'
    )
    content = content.replace(
        'shadow-[0px_6px_16px_rgba(0,78,224,0.3)]',
        'shadow-[0px_6px_16px_rgba(0,78,224,0.3)] dark:shadow-md dark:shadow-blue-600/20'
    )
    content = content.replace(
        "isActive ? 'text-[#F2FAF4] font-bold' : 'text-[#051650] font-[600] bg-transparent hover:bg-[#E3F2FF] hover:text-[#004EE0]'",
        "isActive ? 'text-[#F2FAF4] dark:text-white font-bold' : 'text-[#051650] dark:text-slate-400 font-[600] bg-transparent hover:bg-[#E3F2FF] dark:hover:bg-slate-800 hover:text-[#004EE0] dark:hover:text-white'"
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

fix_process_section()
fix_why_qorynta()
fix_industries_section()
