const ghPages = require('gh-pages');
const path = require('path');

// Path to build
const buildPath = path.join(__dirname, '../build');

const options = {
    branch: 'master',            // push build to master branch
    dotfiles: true,              // include any files starting with a dot
    message: 'Create new build', // set commit message
};

ghPages.publish(buildPath, options, (err) => {
    console.error(err);
});
