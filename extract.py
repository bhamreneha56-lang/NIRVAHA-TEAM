import re

with open('original_prompt.txt', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'<script type="text/babel" data-presets="react">(.*?)</script>', content, re.DOTALL)
if match:
    code = match.group(1)
    with open('frontend/src/full_prototype.jsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Extracted {len(code)} characters.")
else:
    print("Not found.")
