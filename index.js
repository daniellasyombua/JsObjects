// Create a User object with properties like name, stepsWalked (an array of daily steps), 
// and a method totalSteps() that calculates and returns the total number of steps walked. 
// Add another method averageSteps() that returns the average steps per day.

// Create an object and add its properties
// Create totalSteps method then loop through the stepsWalked array adding the elements
// create averageSteps method that uses the result from totalSteps to calculate average by dividing it by the number of days(length of the array)

const human = {
    name:'Hellen',
    stepsWalked: [{day:'Mon' ,steps:520},{day:'Tue',steps:530},{day:'Wed',steps:700}],

    totalSteps: function (){
        let sum = 0;
        for(let i = 0; i < human.stepsWalked.length;i++)
            sum += human.stepsWalked[i].steps
        return sum
        
    },
    averageSteps: function(){
        let result = this.totalSteps();
        let avg = result/this.stepsWalked.length
        return avg
    }

}
console.log( human.totalSteps());
console.log( human.averageSteps());



//  Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. 
// Add a method displayRecipe() that logs the name and all ingredients in a readable list, and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.

// Create a Recipe constructor with attributes: name,ingredients,cookTime
// add a method displayRecipe that prints out the name and all ingredients in a list
// add another method isQuickMeal() that returns true if cookTime is 30 minutes or less using the if...while loop

  function Recipe(name,ingredients,cookTime){
      this.name = name;
       this.ingredients = ingredients;
        this.cookTime = cookTime;
        this.displayRecipe = function(){
           console.log(`My recipe name is ${this.name}, and my ingredient are: [${this.ingredients}]`);
            
       };
       this.isQuickMeal = function() {
        if (this.cookTime <= '30 minutes') {
          return true;
        } else {
          return false;
        }
      };
    };

   const recipe = new Recipe('Meat Stew',['Onion','Tomatoes','Pepper','Carrots'],'37 minutes');
console.log({recipe});
console.log(recipe.displayRecipe());
console.log(recipe.isQuickMeal());








//  Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). 
// Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.

// Create a Car object with properties like model, mileage, and serviceHistory
// add a method addService(date)that takes in the date and adds it to service record
// add a method lastServiceDate() that returns the most recent service

 const car = {
    model:'Harrier',
    mileage: '30,000 miles',
    serviceHistory:['02/10/25','03/11/25','10/12/25'],

    addService: function(date){
              
         serviceHistory = this.serviceHistory.push(date)
         return car.serviceHistory
            
    },
    lastServiceDate: function(){
        return car.serviceHistory.pop();
    }
};
    
    console.log({car});
    
    console.log(car.addService('16/12/25'));
     
    console.log(car.lastServiceDate());
    
      


//  Create a Playlist object with a property songs (an array of song titles). 
// Add methods addSong(title) to add a song, removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.

// Create an object playlist with the property song
// Add method addSong that adds a song to the playlist
// Add a method removeSong that deletes one song from the playlist
// Add a method listSongs that prints out all songs currently in the playlist.
 
 const playlist = {
   songs : ['Prayer','Warm embrace'],

    
     addSong:function(song){
        this.songs.push(song)
         console.log(playlist.songs)
    },
    
         
    
    removeSong:function(){
        return this.songs.pop()
        
     },
    listSongs: function(){
        console.log(this.songs);
        
    }


  }

console.log({playlist});
 playlist.addSong('Grace');
  
playlist.removeSong();




//  Create a Course constructor with title, lessons (an array), and completedLessons (array). 
// Add a method markComplete(lesson) that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".

// Create a constructor called Course with its attributes
// Create a method markComplete that adds a lesson to completedLessons
// Create a method getProgress that finds thelength of the two arrays(lessons, completedLessons) that represents the number of elements in them

        function Course(title,lessons,completedLessons){
            this.title = title;
            this.lessons = lessons;
            this.completedLessons = completedLessons;

            this.markComplete = function(){
                 this.completedLessons.push(lessons);
                 return completedLessons
            };
            this.getProgress = function(){
                let completedlesson = completedLessons.length;
                let lesson = lessons.length;
                return ( `${completedlesson} out of ${lesson} lessons completed`)
            };
        }

        const course = new Course('Front-End',['objects','arrays','strings','Methods','Functions'],['Functions'])
        console.log({course});
        console.log(course.markComplete());
        console.log(course.getProgress());




        
        
        
        
        
        
        
        
        
        
        