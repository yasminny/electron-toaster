// @flow
import React, { Component } from 'react';
import Toaster from '../components/Toaster';

type Props = {};

export default class ToasterPage extends Component<Props> {
	props: Props;

	render() {
		return <Toaster />;
	}
}
