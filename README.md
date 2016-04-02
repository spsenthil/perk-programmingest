## Perk Frontend Programming Test
Welcome to the Perk Frontend Programming Test! Congratulations on making it thus far.
The goal of this exam is to assess and better understand your coding practices and style.

Please read the following requirements and complete each section. Please describe the approach you take and feel free to go above + beyond!

### General Information
* You may utilize the ```test.html``` file to complete each question. If not, ensure you grab the ```<!-- Required Javascript Files -->``` section.
* Bootstrap CSS + Javascript has been included as well.
* Feel free to use Javascript frameworks (e.g. AngularJS).

### Git & Pull Requests
* Fork this repository.
* Create a new branch called programming-test and commit your changes there.
* Commit as often as you wish.
* Push your changes to your repository fork.
* Send in a pull request with your completed submission.

### Question 1
An API endpoint has been called which returns a JSON in the following format:

```json
{
  "data": {
    "users": [
      {
        "id": "8B4FBA5D-7D8C-4574-923E-3702BF482AA2",
        "first_name": "Foo",
        "last_name": "Bar",
        "email": "foobar@perk.com",
        "is_suspended": false
      },
      {
        "id": "1EBBD21B-8AB9-4BFC-A443-C35C7B9ABBA3",
        "first_name": "John",
        "last_name": "Appleseed",
        "email": "john@perk.com",
        "is_suspended": false
      },
      {
        "id": "AC8C3C74-5FF8-4401-AEB3-5DF2B7BFB9F2",
        "first_name": "Lorum",
        "last_name": "Ipsum",
        "email": "lorum@perk.com",
        "is_suspended": false
      },
      {
        "id": "9CF271EB-7277-4F7E-AD15-664904047456",
        "first_name": "Test",
        "last_name": "User",
        "email": "test@perk.com",
        "is_suspended": true
      }
    ]
  },
  "status": "success",
  "message": null
}
```

This response been parsed into a global variable known as ```usersResponse``` and can be used accordingly.

For this question, iterate over the ```usersResponse``` and display each with the following headers (e.g. table, et cetera).

```
Email
First Name
Last Name
Is Suspended?
```

### Question 2
On the page where users have been iterated, add a ```Create``` button.

This button should trigger a modal that displays the following fields within a form:

```
Email
First Name
Last Name
Password
Confirm Password
```

There should also be a ```hidden``` input field named ```id``` that has a random UUID4. If unfamiliar, generate UUIDs [here](https://www.uuidgenerator.net/).

Finally, add a ```Submit``` and ```Cancel``` button.

#### Submit button
This button should validate the following requirements:

```
E-mail: required, e-mail format (@)
First Name: required
Last Name: required
Password: required
Confirm Password: required, matches with password
Identifier: required, UUIDv4
```

If failing to meet an above requirement, display an alert to the user.

If requirements are met, close the modal and superficially update the users list.

#### Cancel button
Closes the modal.

### Question 3
Add an edit button or icon to each row of iterated users (see Question #1).

Upon clicking this button, display the creation form (see Question #2) with prefilled user information.

TIP: Utilize the identifier (id) of the user to streamline these clickable URLs.

### Question 4
Utilizing a CSS style, apply an indicator (e.g. red text or red row background) when a user is suspended.

### Bonus Question
*This isn't a requirement.*

Implement a way to persist the users beyond the current session.
