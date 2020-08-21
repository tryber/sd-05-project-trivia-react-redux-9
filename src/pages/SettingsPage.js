import React, { Component } from 'react';
import Reset from '../components/Reset';

class SettingsPage extends Component {
  render() {
    return (
      <div>
        <Reset />
        <h1 data-testid="settings-title">
          «Configurações»
        </h1>
      </div>
    );
  }
}

export default SettingsPage;
