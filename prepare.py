import os

with open('frontend/src/full_prototype.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace const { useState... } = React; with imports
content = content.replace('const { useState, useEffect, useMemo, useRef, createContext, useContext } = React;', "import React, { useState, useEffect, useMemo, useRef, createContext, useContext } from 'react';")

# Recharts imports
content = content.replace('const {\n  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,\n  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer\n} = Recharts;', "import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';")
content = content.replace('const { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;', "import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';")

# Leaflet
content = "import L from 'leaflet';\nimport 'leaflet/dist/leaflet.css';\n" + content

# Since I already created AppContext, I need to remove the duplicate context creation in this file, or just let this file be the single source of truth for now.
# Let's just make this file "LegacyApp.jsx" and render it in main.jsx! It will be a 100% working copy of their prototype. 
# BUT wait! We want Phase 4: backend integration!

with open('frontend/src/Dashboards.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
