with open('frontend/src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

submit_code = '''
    fetch('http://localhost:5000/api/problems', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(res => res.json()).then(newProblem => {
      dispatch({ type:"ADD_PROBLEM", problem: newProblem });
      dispatch({ type:"ADD_NOTIFICATION", n:{ to:"citizen", forUser:"You", text: Your report submitted. AI routed it to ., time:"just now", unread:true }});
      dispatch({ type:"ADD_NOTIFICATION", n:{ to:"government", forUser:"Secretary", text: New submission from ., time:"just now", unread:true }});
      setStep(3);
    }).catch(err => console.error(err));
'''

# We will just replace from 'const newProblem =' to 'setStep(3);'
start_idx = content.find('const newProblem = {')
end_idx = content.find('setStep(3);', start_idx) + 11

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + submit_code + content[end_idx:]
    with open('frontend/src/App.jsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Patched successfully")
else:
    print("Could not find the block to patch")
