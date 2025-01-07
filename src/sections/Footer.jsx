
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">

            <p>© 2025 Jay Nico</p>
 
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/JNico07" target="_blank" rel="noopener noreferrer" className="w-fit">
            <div className="social-icon">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/jaynicoolaño/" target="_blank" rel="noopener noreferrer" className="w-fit">
            <div className="social-icon">
              <img src="/assets/linkedin.png" alt="github" className="w-1/2 h-1/2"/>
            </div>
          </a>
        </div>
        
        <p className="text-white-500">All Rights Reserved</p>

    </section>
  )
}

export default Footer