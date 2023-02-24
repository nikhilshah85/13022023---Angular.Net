create database shoppingAPP

use shoppingAPP

create table Products
(
	pId int primary key,
	pName varchar(20),
	pCategory varchar(20),
	pPrice int,
	pIsInStock bit
)

insert into Products values(101,'Pepsi','Cold-Drink',50,1)
insert into Products values(102,'IPhone','Electronics',140000,1)
insert into Products values(103,'Coke','Cold-Drink',75,0)
insert into Products values(104,'Maggie','Fast-Food',50,1)
insert into Products values(105,'Nike','Shoes',8000,0)

select * from Products










