// @flow
import React, { Component } from 'react';
import styles from './Toaster.css';

type Props = {};

export default class Toaster extends Component<Props> {
	props: Props;

	render() {
		return (
			<div className={styles.container}>
				<h2>Toaster</h2>

			</div>
		);
	}
}
