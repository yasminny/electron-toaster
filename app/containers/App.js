// @flow
import * as React from 'react';
import styles from './App.css';
import { closeWindow, minimizeWindow } from '../utils/window';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return <>
      <header className={styles.titleBar}>
        <div className={styles.drag}>
          <div className={styles.controls}>
            <div className={styles.button} onClick={minimizeWindow}>
              <span>-</span>
            </div>
            <div className={styles.button} onClick={closeWindow}>
              <span>x</span>
            </div>
          </div>
        </div>
      </header>
      {children}
      </>;
  }
}
