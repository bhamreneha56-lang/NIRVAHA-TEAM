import re

with open('frontend/src/Dashboards.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add the fetch effect to the App component in Dashboards.jsx
app_code = '''
export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    fetch('http://localhost:5000/api/problems')
      .then(res => res.json())
      .then(data => {
        data.forEach(p => dispatch({ type: "ADD_PROBLEM", problem: p }));
      })
      .catch(err => console.error("API error:", err));
  }, []);
'''

content = re.sub(r'export default function App\(\) \{\s*const \[state, dispatch\] = React\.useReducer\(reducer, initialState\);', app_code, content)

with open('frontend/src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

