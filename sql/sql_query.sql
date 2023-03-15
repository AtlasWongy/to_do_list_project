show databases;

use todolistdatabase;

show tables;

CREATE TABLE product(
	id int NOT NULL auto_increment,
    name varchar(255) NOT NULL,
    description varchar(255),
    price integer,
    primary key(id)
);

select *
from product;

insert into product (id, name, description, price)
values (1, 'item1', 'This is a sample input', 100)


