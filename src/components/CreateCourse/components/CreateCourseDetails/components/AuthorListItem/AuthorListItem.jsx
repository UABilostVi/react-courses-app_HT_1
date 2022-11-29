import React from 'react';

import { Button } from '../../../../../../common/Button';

const AuthorListItem = (props) => {
	return (
		<div
			key={props.id}
			id={props.id}
			title={props.name}
			className='author-item'
		>
			<span className='author-item-name'>{props.name}</span>
			<Button
				type='button'
				buttonText={props.buttonText}
				onClick={props.onClick}
			/>
		</div>
	);
};

export default AuthorListItem;
