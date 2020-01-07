// @flow
import React, { Component } from 'react';
import styles from './Toaster.css';
import { closeToaster } from '../utils/toaster';

type Props = {};

export default class Toaster extends Component<Props> {
	props: Props;

	render() {
		return (
			<div className={styles.container}>
				<h2>Toaster</h2>

				<button className={styles.btn} onClick={closeToaster}>
					Close
				</button>
			</div>
		);
	}
}
