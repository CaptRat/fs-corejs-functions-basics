
export const johnnyFive = {
  greet (name) {
    if (!name) {
      return `Johnny Five is Alive`}
    else {
      return `Hello, ${name}. I am Johnny 5.  I am alive!`
    }
  }
}


export const shout = (message) => {
   return message.toUpperCase() + "!!!";
};

shout("i am small letters");


/*
Create an object literal name johnnyFive and export it as export const johnnyFive = {}  Create a greet function, make the function return Johnny Five is Alive

Create a shout function expression, and export it const shout = ...  Using the arrow syntax, make the shout function take a message as a parameter (assuming it's a string) and make it all uppercase and append 3 !!!'s on the end of the message.

Modify the johnnyFive object to have a shout function.  Call the greet function inside of the new shout function
Take the result from the greet function and use it as parameter inside of the greet function created in step 2.
Return the result. The output should be: Johnny Five is Alive!!!;

Modify johnnyFive's greet function to take a name. greet(name).   If the name is blank, return previous message Johnny Five is Alive
If a name is provided, return a new message Hello, ${name}. I am Johnny 5. I am alive!*/
