'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "section", deps: []
 * createTable "topping", deps: []
 * createTable "pizza", deps: [section, section]
 * createTable "pizza_toppings", deps: [pizza, topping]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2021-03-23T05:25:10.339Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "section",
            {
                "section_id": {
                    "type": Sequelize.INTEGER,
                    "field": "section_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "section": {
                    "type": Sequelize.STRING(45),
                    "field": "section",
                    "allowNull": false
                },
                "last_updated": {
                    "type": Sequelize.DATE,
                    "field": "last_updated",
                    "defaultValue": Sequelize.Literal,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "topping",
            {
                "topping_id": {
                    "type": Sequelize.INTEGER,
                    "field": "topping_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "topping": {
                    "type": Sequelize.STRING(45),
                    "field": "topping",
                    "unique": true,
                    "allowNull": false
                },
                "topping_type": {
                    "type": Sequelize.STRING(45),
                    "field": "topping_type",
                    "allowNull": false
                },
                "measurment_type": {
                    "type": Sequelize.STRING(45),
                    "field": "measurment_type",
                    "allowNull": false
                },
                "price": {
                    "type": Sequelize.FLOAT,
                    "field": "price",
                    "allowNull": false
                },
                "last_updated": {
                    "type": Sequelize.DATE,
                    "field": "last_updated",
                    "defaultValue": Sequelize.Literal,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "pizza",
            {
                "pizza_id": {
                    "type": Sequelize.INTEGER,
                    "field": "pizza_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "pizza_name": {
                    "type": Sequelize.STRING(45),
                    "field": "pizza_name",
                    "allowNull": false
                },
                "section_id": {
                    "type": Sequelize.INTEGER.UNSIGNED,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "section",
                        "key": "section_id"
                    },
                    "field": "section_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "last_updated": {
                    "type": Sequelize.DATE,
                    "field": "last_updated",
                    "defaultValue": Sequelize.Literal,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                },
                "sectionSectionId": {
                    "type": Sequelize.INTEGER,
                    "field": "sectionSectionId",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "section",
                        "key": "section_id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "pizza_toppings",
            {
                "pizza_id": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "pizza",
                        "key": "pizza_id"
                    },
                    "unique": "pizza_toppings_topping_id_pizza_id_unique",
                    "field": "pizza_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "topping_id": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "topping",
                        "key": "topping_id"
                    },
                    "unique": "pizza_toppings_topping_id_pizza_id_unique",
                    "field": "topping_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "last_updated": {
                    "type": Sequelize.DATE,
                    "field": "last_updated",
                    "defaultValue": Sequelize.Literal,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
