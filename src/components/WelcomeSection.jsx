import { useEffect } from "react"
import "../index.css"

const WelcomSection=() => {
    useEffect(() => {
        const lines = document.querySelectorAll('.line');
        lines.forEach((line, index) => {
          const delay = index * 2900-(500*(index-1)); // Adjust the delay time as needed
          line.style.animationDelay = `${delay}ms`;
        });
      }, []);
    return(
    <div className="w-1/2 min-h-screen bg-black flex items-center">
        <div className='m-2 p-2'>
        <p className="typing-effect line text-8xl p-2 text-white">Welcome To</p>
        <p className="typing-effect line text-8xl p-2 text-white">Threadify</p>
        </div>
  </div>)
  
}

export default WelcomSection