import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import 'boxicons'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
