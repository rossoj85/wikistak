var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack_2');

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        //allowNull: false   ,,----may have to put this back in 
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    // date: {
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.NOW
    // }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true  ///this is inside the object bec sqlize is checking it.. The res is checked by db
        }
    }
});

module.exports = {
  db: db,
  Page: Page,
  User: User
};

