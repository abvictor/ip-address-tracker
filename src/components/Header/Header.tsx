import bgDesktop from '../../assets/bg-image.png'

function Header () {   
    return (
        <header className="w-full bg-slate-500 ">
            <img className='w-full h-48 object-cover z-10' src={bgDesktop}/>
        </header>
    )
}

export default Header;
