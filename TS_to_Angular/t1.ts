interface Friend {
    firstName: string;
}

function logFirstName(friend: Friend) 
{
    console.log(friend.firstName);
} 
//logFirstName("just astring"); // Compile-time error
logFirstName({ firstName : "Thomas" }); // Object with property firstname having value of "Thomas"
