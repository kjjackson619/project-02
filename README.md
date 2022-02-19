# PIN IT!

## Description

`PIN IT` is an idea board where users can look at ideas to get inspiration for their next big project or trip. If users feel like they have something of interest that they want to contribute to the idea board, then they have the ability to.

## Table of Contents

- [Intsallation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Install [Git](https://git-scm.com/)
2. Download or clone the source code to a local folder
3. Install [node.js](https://nodejs.org/en/)
4. Install [mysql](https://dev.mysql.com/downloads/mysql/)
5. Open the bash terminal, make sure you're in the correct directory
6. Run `npm i` to install all the NPM packages needed
7. Add a `.env` file to your directory and populate as such:
    ``` 
        DB_NAME= { Database Name }
        DB_USER= { mysql username }
        DB_PW= { mysql password }
    ```

## Usage

To start to the program on a localhost server (default port of 3001) run either `npm start` or `node server.js` in the bash terminal. When the server is running open your web browser of choice and enter `localhost:{port}` into your address bar. 

## Credits

### Contributors: 
* [Jonathan Chastain](https://github.com/ChastainJon)
* [Adam Al-ibraheem](https://github.com/AdamAlibraheem000)
* [Kevin jackson](https://github.com/kjjackson619)
* [Salipha Mansaray](https://github.com/Salipha)

### NPM Packages:

* "bcrypt": "^5.0.1",
* "connect-session-sequelize": "^7.1.2",
* "dotenv": "^16.0.0",
* "express": "^4.17.2",
* "express-handlebars": "^6.0.2",
* "express-session": "^1.17.2",
* "mysql2": "^2.3.3",
* "sequelize": "^6.16.0"

### CSS Frameworks:

* [Materialize](https://materializecss.com/)

## License

### GNU GPL v3

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Questions

If you have any questions please feel free to reach out to any of the [contributors](#contributors)
