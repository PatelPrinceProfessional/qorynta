import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Backgrounds
    content = re.sub(r'dark:bg-black\b', r'dark:bg-[#020617]', content)
    content = re.sub(r'dark:bg-\[\#000000\]', r'dark:bg-[#020617]', content)
    content = re.sub(r'dark:bg-\[\#00072d\]', r'dark:bg-gradient-to-b dark:from-[#020617] dark:via-[#00072D] dark:to-[#020617]', content)
    content = re.sub(r'bg-gray-900\b', r'dark:bg-[#0B132B]/80 dark:backdrop-blur-2xl dark:border dark:border-slate-800/80', content)
    content = re.sub(r'dark:bg-slate-900\b', r'dark:bg-[#0B132B]/80 dark:backdrop-blur-2xl dark:border dark:border-slate-800/80', content)
    
    # 2. Typography
    content = re.sub(r'dark:text-white\b', r'dark:text-slate-50', content)
    content = re.sub(r'dark:text-slate-200\b', r'dark:text-slate-300', content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

def main():
    src_dir = os.path.join(os.getcwd(), 'src')
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.html', '.css', '.jsx')):
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
