import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS ,faA} from '@fortawesome/free-solid-svg-icons'; 
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


function Navbar() {
    return (
        <nav className='mb-20 lg:mb-2 flex items-center justify-between py-6 '>
            <div className='flex flex-shrink-0 items-center text-gray-400 gap-1'>
                <FontAwesomeIcon className='text-3xl'  icon={faS} />
                <FontAwesomeIcon icon={faA} />
            </div>

            <div className='m-8 flex gap-4 text-2xl justify-center items-center  text-gray-400'>
                <a href='https://www.linkedin.com/in/shafeeqahmed89/?originalSubdomain=in' target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-100"/></a>
                <a href='https://github.com/shafeeq8904' target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-gray-100"/></a>
                
            </div>
        </nav>
    );
}

export default Navbar;
