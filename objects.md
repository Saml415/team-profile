# Classes
## Team

## Employee
- name : String -The employees's name. ("Fred") 


- id : Number - The unique id of the employee. (1)


- email: String - The email used to contact employee. ("fred@email.com")

Methods:

- getName(): String - Returns the employees's name
- getId(): Number - Returns the employee's ID
- getEmail(): String - Returns the employees's email
getRole()—returns 'Employee' 

## Manager
Inherits from Employee.
Properties:

- officeNumber: Number - The managers's office room number. (10)

Methods:


- getRole(): String - overridden parent class. to return 'Manager'
## Engineer
Inherits from Employee.
Properties:

github—GitHub username


getGithub()


getRole()—overridden to return 'Engineer'

## Intern

## App

## renderHTML