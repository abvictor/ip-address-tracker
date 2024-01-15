import bgDesktop from '../../assets/bg-image.png'

function Header () {   
    return (
        <header className="w-full bg-slate-500 ">
            <img className='w-full h-60 object-cover z-10' src={bgDesktop} alt='An blue background-image with white stripes'/>
        </header>
    )
}

export default Header;
