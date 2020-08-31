import React, { Component } from 'react';
import Reset from '../components/Reset';
import Card from '../layouts/Card';

class SettingsPage extends Component {
  render() {
    return (
      <Card>
        <h1 data-testid="settings-title">
          «Configurações»
        </h1>
        <Reset />
      </Card>
    );
  }
}

export default SettingsPage;
