import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/' aria-label='Home'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl flex flex-wrap'>
                        <span className='text-slate-500'>Royal</span>
                        <span className='text-slate-700'>Estate</span>
                    </h1>
                </Link>
                
                <form className='bg-slate-100 p-3 rounded-lg flex items-center' aria-label='Search'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                        aria-label='Search input'
                    />
                    <FaSearch className='text-slate-600 ml-2' aria-hidden='true' />
                </form>
                
                <nav>
                    <ul className='flex gap-4'>
                        <li className='hidden sm:inline'>
                            <Link to='/' className='text-slate-700 hover:underline'>
                                Home
                            </Link>
                        </li>
                        <li className='hidden sm:inline'>
                            <Link to='about' className='text-slate-700 hover:underline'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile' aria-label={currentUser ? 'Profile' : 'Sign in'}>
                                {currentUser ? (
                                    <img
                                        className='rounded-full h-7 w-7 object-cover'
                                        src={currentUser.avatar}
                                        alt='Profile'
                                        onError={(e) => e.currentTarget.src = '/path/to/default-avatar.png'}
                                    />
                                ) : (
                                    <span className='text-slate-700 hover:underline'>
                                        Sign in
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
