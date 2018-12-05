const fs = require('fs');
const path = require('path');

module.exports = (componentName) => {
    const componentCode = `import React from 'react';

    import './${componentName}.css';

    export default function(props) {
        return (
            <div className="${componentName}"></div> 
        )
    }`;

    fs.writeFileSync(
        path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
        componentCode,
    );
};