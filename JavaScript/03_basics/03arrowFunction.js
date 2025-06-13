const user = {
    username: "Dhruv",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);//this is used for current context
        console.log(this);//prints the current context
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()//is working because of this function

// console.log(this);//empty

function chai(){
    let username = "Dhruv"
    console.log(this);
}
chai()