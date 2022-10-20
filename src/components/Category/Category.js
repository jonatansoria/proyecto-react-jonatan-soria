import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

const MenuCategory = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const styles = {
		popUpBtn: { 
            marginLeft: 100,
			textDecoration: 'none',
			color: 'white',
			fontSize: 15,
			fontWeight: 'bold',
			textTransform: 'capitalize',
           
		},

		link: {
			fontSize: 14,
            fontWeight: 'bold',
			textDecoration: 'none',
		},
	};

	return (
		<span>
			<Button
				style={styles.popUpBtn}
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>Categorías
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				
			>
				<MenuItem>
					<Link to='/category/Remeras' style={styles.link}>
						Remeras
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/category/Laminas' style={styles.link}>
						Laminas
					</Link>
				</MenuItem>
				<MenuItem>
					<Link to='/category/Tazas' style={styles.link}>
						Tazas
					</Link>
				</MenuItem>
			</Menu>
		</span>
	);
};

export default MenuCategory;