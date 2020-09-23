import React from 'react';
import ReactDOM from 'react-dom'
import App from 'containers';

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages[locale]}>
        <App />
    </IntlProvider>,
    document.getElementById('root'),
);