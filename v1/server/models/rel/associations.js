module.exports = associations = (models) => {
    models.section.belongsToMany(models.dough, {
        through: models.dough_section,
        foreignKey: 'section_id'
    })
    models.dough.belongsToMany(models.section, {
        through: models.dough_section,
        foreignKey: 'dough_id'
    })


    models.section.hasMany(models.pizza, {
        foreignKey: 'section_id'
    })
    models.pizza.belongsTo(models.section)


    models.pizza.belongsToMany(models.topping, {
        through: models.pizza_toppings,
        foreignKey: 'pizza_id'
    })
    models.topping.belongsToMany(models.pizza, {
        through: models.pizza_toppings,
        foreignKey: 'topping_id'
    })


    models.pizza.belongsToMany(models.dough, {
        through: models.pizza_dough,
        foreignKey: 'pizza_id'
    })
    models.dough.belongsToMany(models.pizza, {
        through: models.pizza_dough,
        foreignKey: 'dough_id'
    })

    models.orders.belongsToMany(models.pizza, {
        through: models.order_pizzas,
        foreignKey: 'order_id'
    })
    models.pizza.belongsToMany(models.orders, {
        through: models.order_pizzas,
        foreignKey: 'pizza_id'
    })

    models.orders.hasMany(models.order_discounts, {
        foreignKey: 'order_id'
    })
    models.order_discounts.belongsTo(models.orders)

    models.employee.hasMany(models.clock_in_times, {
        foreignKey: 'Employee_Id'
    });
    models.clock_in_times.belongsTo(models.employee, {
        foreignKey: 'Employee_Id'
    });

    models.employee.hasMany(models.clock_out_times, {
        foreignKey: 'Employee_Id'
    });
    models.clock_out_times.belongsTo(models.employee, {
        foreignKey: 'Employee_Id'
    });

    models.employee.hasMany(models.break_in_times, {
        foreignKey: 'Employee_Id'
    })
    models.break_in_times.belongsTo(models.employee, {
        foreignKey: 'Employee_Id'
    })

    models.employee.hasMany(models.break_out_times, {
        foreignKey: 'Employee_Id'
    })
    models.break_out_times.belongsTo(models.employee, {
        foreignKey: 'Employee_Id'
    })

    models.employee.hasOne(models.register, {
        foreignKey: 'Employee_Id'
    });
    models.register.belongsTo(models.employee, {
        foreignKey: 'Employee_Id'
    })
}