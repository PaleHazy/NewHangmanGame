  // VARIABLES
      // ==========================================================================
      var  game= {
        word: "",
         letter: "",
         letters_Already_Guessed: [],
         underscore_arr : [],
         remaining_guesses: 10,
         wins: 0,
         losses: 0,
 
         select_random_word: function() {
             var wordArr = ['maths', 'world', 'big', 'random'];
 
            word =wordArr[Math.floor(Math.random()*wordArr.length)]
             return word
         },
         // Generate the dynamic underscore spaces where the letters will go
         make_underscore: function(){
             for (i=0;  i<this.word.length; i++) {
                 this.underscore_arr.push("_");
                 }
         },
         reset: function(){
             //Reset Game and generate another random word 
             this.word = game.select_random_word(); 
             //this.letter = "";
             this.underscore_arr = [];    
             this.letters_Already_Guessed = [];
             this.remaining_guesses = 10;
         },
 
         //check if the letters already guessed equal the word
         
         check_user_guess: function(){
             if (this.word.includes(this.letter)){
                 idx = this.word.indexOf(this.letter)
                 this.underscore_arr[idx] = this.letter;
             }
             else{
                     this.remaining_guesses --;
             }
         },
 
         check_game: function(){
             if (this.remaining_guesses > 0 && (this.underscore_arr.join('') === this.word)){
                 this.wins++;
                 alert("You Win, let's play another game");
                 //game reset function here
                 this.reset();
             }
             else if (this.remaining_guesses === 1 && (this.underscore_arr.join('')!== this.word)){
                 this.losses++;
                 alert("You lose, Try Again");
                 //game reset function here
                 this.reset();
             }
             else if (this.remaining_guesses > 0 && (this.underscore_arr.join('')!== this.word)){
               //decrement remaining guesses
         
                 }
             }
         
       }
 
       // FUNCTIONS
       // ==============================================================================
       // Logs  Game  session details to current stats to the console.
       function reWriteStats() {
         console.log("Word: " + game.word);
         console.log("Underscore " + game.underscore_arr)
         //console.log("Current Word: " + game.currentWord);
         console.log("Typed letter:" + game.letter);
         console.log("Letters Already Guessed: " + game.letters_Already_Guessed);
         console.log("Remaining Guesses: " + game.remaining_guesses);
         console.log("Number of Wins: " + game.wins);
         console.log("Number of Losses: " + game.losses);
         console.log("------------------------------");
       }
 
       //GAME PLAY
   // Check spaces
       game.reset()
       game.make_underscore();
       document.onkeyup = function(event){
 
         if (event.which <= 90 && event.which >= 48) {
 
           // Grab the letter typed by user
           game.letter = event.key.toLowerCase();
           document.getElementById("guesses_left").innerHTML = game.remaining_guesses;
           document.getElementById("guessed_letters").innerHTML = game.letters_Already_Guessed;
           document.getElementById("word").innerHTML = game.underscore_arr;
           game.letters_Already_Guessed.push(game.letter);
           document.getElementById("wins").innerHTML = game.wins;
           document.getElementById("losses").innerHTML = game.losses;
           //replace underscore with letter
           game.check_user_guess();
           game.check_game()
           //alert("you typed " + game.letter)
         }
       }
 