import React,{useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,Routes,Route,Link,useLocation} from 'react-router-dom';
import {Header,Footer,ActionProvider} from './components/Shared.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Corporate from './pages/Corporate.jsx';
import './style.css';
function App(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0);document.title=({ '/':'Home','/about':'About','/corporate':'Corporate'}[pathname]||'Page not found')+' | Punchline Company'},[pathname]);return <ActionProvider><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/corporate" element={<Corporate/>}/><Route path="*" element={<main style={{padding:'60px 24px'}}><h1>Page not found</h1><Link className="btn" to="/">Back to Home</Link></main>}/></Routes><Footer/></ActionProvider>}
createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
