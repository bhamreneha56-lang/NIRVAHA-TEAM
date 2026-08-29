import re

with open('frontend/src/Dashboards.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

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

content = content.replace('function App() {\n  const [state, dispatch] = React.useReducer(reducer, initialState);', app_code)

# Let's also patch the submit problem function to POST to the backend!
# In the original code, it was dispatch({ type:"ADD_PROBLEM", problem: newProb })
# Let's find CitizenReport submission

with open('frontend/src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

