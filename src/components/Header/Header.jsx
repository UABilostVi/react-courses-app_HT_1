import { Button } from '../../common/Button';
import { Logo } from './components/Logo';
import './header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header-warpper'>
					<Logo className='logo' />
					<div className='user-name'>Vit</div>
					<Button buttonText='LogOut' />
				</div>
			</div>
		</header>
	);
};

export default Header;
