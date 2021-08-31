import './styles/Menu.scss';

const Menu = (props) => {
	const { showMenu, changeScreen } = props;

	return (
		<>
			<div className='menu'
				style={showMenu === true ? { transform: 'translateX(0px)' } : { transform: 'translateX(-320px)' }}
			>
				<div className='title'>
					<div className='name'>
						<p>АГРОГОРОДОК</p>
						<span>ДРУЯ</span>
					</div>
					<p>на краю земли</p>
				</div>

				<div className='menu-items'>
					{/* мне было лень делать нормально.это демка сайта */}
					<span onClick={() => changeScreen(101)}>ДРУЯ</span>
					<span onClick={() => changeScreen(102)}>КОСТЕЛ СВЯТОЙ ТРОИЦЫ</span>
					<span onClick={() => changeScreen(103)}>БЛАГОВЕЩЕНСКАЯ ЦЕРКОВЬ</span>
					<span onClick={() => changeScreen(104)}>БОРИСОВ КАМЕНЬ</span>
					<span onClick={() => changeScreen(105)}>ЕВРЕЙСКОЕ КЛАДБИЩЕ И МЕМОРИАЛЫ</span>
					<span onClick={() => changeScreen(106)}>УЗКОКОЛЕЙКА</span>
					<span onClick={() => changeScreen(107)}>ПОЛЬСКАЯ ШКОЛА</span>
					<span onClick={() => changeScreen(108)}>ЧУДЕСА ДРУИ</span>
				</div>
			</div>
		</>
	);
};

export default Menu;
