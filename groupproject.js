<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JEOPARDY</title>

    <link rel="stylesheet" href="groupstyle.css">
    <script type="text/javascript" src="groupproject.js"></script>


</head>
<body>

    <div id="form">
        <div id="gradient"></div>

        <h2>WELCOME TO THE GAME OF JEOPARDY</h2>
    
    
        <form id="groupform" onsubmit="register()">
    
            <br>
            <fieldset>
                <legend>Registration</legend> <br>
                <label>Enter First Name</label>
                <input type="Text" id="fname" class="formdata" minlength="3">
                <br><br>
    
                <label>Enter Last Name</label>
                <input type="Text" id="lname" class="formdata" minlength="3">
                <br><br>
    
    
                <Label> Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <input type="email" id="email" pattern=".+@SomeEmail.com">
                <br><br>
    
    
                <label> Date of Birth
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                </label>
                <input type="date" id="DOB">
    
                <br>
                <label>Address</label> <br>
                <Label> Street &nbsp;&nbsp;&nbsp; </Label><input type="text" id="street" class="inp" /> </br>
                <Label> City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Label><input type="text" id="city" class="inp" /> <br>
                <Label> Town &nbsp;&nbsp;&nbsp; </Label><input type="text" id="town" class="inp" /> </br>
                <Label> Country </Label><input type="text" id="country" class="inp" /> </br>
    
    
                <br>
                <label>Self Image</label><br>
                <input type="file" id="myfile" name="myfile"><br><br>
    
    
    
                <b><Label> Select Your Education Level: </Label></br></br></b>
                <input type="radio" id="edulevel1" name="edulevel" value ="Secondary" /> <Label> Secondary </Label>
                <input type="radio" id="edulevel" name="edulevel" value ="Tertiary" /> <Label> Tertiary </Label><br>
                <br>
    
                <label>Gender: </label></br></br>
                <input type="radio" id="gender" name="gender" value="Male" /> <Label> Male </Label>
                <input type="radio" id="gender2" name="gender" value = "Female" /> <Label> Female </Label></br>
    
    
                <br>
                <textarea id="showpercentage" rows="7" cols="20"></textarea>
    
    
                </br></br>
    
                <input type="submit" value="Register" id="submitbutton">
                <input type="submit" value="Play Game" id="play" disabled onclick="playGame()">
                <input type="submit" value="End Game" id="endgame" disabled onclick="endGame()">
                </br></br>
                <input type="reset" value="Quit" id="quit">
                <input type="submit" value="Results " id="result" onclick="findPercentageScore()">
    
    
                <!-- <input type="submit" value="Show Percentage" id="showpercentage" onclick=""> -->
                <!--<input type = "reset" value = "Quit" id ="quit" onclick = "findPercentageScore()"-->
                </br></br>
    
                <label> Show all Players </label><br>
                <textarea id="showallplayers" rows="7" cols="20"> </textarea>
                </br>
    
    
            </fieldset>
            </forms>
    
    
    
            <p id="demo">Player Information: </p>
    

    </div>

 

    <div id="jeopardy" hidden>
        <div id="gradient"></div>

        <br><br><br>
        
        <!-- container tags for chart -->
    
    <div id="container"></div>
    <div id="container1"></div>
    
        
    <p style="display:inline">Correct:</p>   
    <p id="questionsamount" class="questions" style="display:inline">Correct</p>
    <br>
    <p style="display:inline">Incorrect:</p>   
    <p id="wrong" style="display:inline" class="questions">wrong</p>
    <br>
    <p style="display:inline">Answered:</p>   
    <p id="answered" style="display:inline" class="questions">Answered</p>
    <br>
    <p style="display:inline">Percentage:</p>   
    <p id="Percentage" style="display:inline" class="questions">Perc</p>
    <p style="display:inline" class="questions">%</p>
    
    
    
    <br><br><br><br>
    
    
    

         <p id="playername"  class="questions center2">Name</p>
        <p id="playertotal"  class="questions center2">PlayerTotal: </p>
    
          
    
       
        
       
        
        <table  class="center" id="table" >
            <tr>
                
                 <th>Jamaican</th>   
                 <th>Food</th> 
                 <th>Sports</th> 
                 <th>Music</th> 
                 <th>General</th>    
            </tr>
    
            <tr>
                <td> <button id="1Q1">$100</button></td>
                <td><button id="2Q1">$100</button></td>
                <td><button id="3Q1">$100</button></td>
                <td><button id="4Q1">$100</button></td>
                <td><button id ="5Q1">$100</button></td>
            </tr>
    
            <tr>
              <td> <button id="1Q2">$200</button></td>
              <td><button id="2Q2">$200</button></td>
                <td><button id="3Q2">$200</button></td>
                <td><button id="4Q2">$200</button></td>
                <td><button id ="5Q2">$200</button></td>   
            </tr>
            <tr>
              <td> <button id="1Q3">$300</button></td>
              <td><button id="2Q3">$300</button></td>
                <td><button id="3Q3" >$300</button></td>
                <td><button id="4Q3">$300</button></td>
                <td><button id = "5Q3">$300</button></button>
                
            </tr>
            <tr>
              <td> <button id="1Q4">$400</button></td>
              <td><button id="2Q4">$400</button></td>
                <td><button id="3Q4">$400</button></td>
                <td><button id="4Q4">$400</button></td></td>
                <td><button id ="5Q4">$400</button></td>
                
            </tr>
            <tr>
              <td> <button id="1Q5">$500</button></td>
              <td><button id="2Q5">$500</button></td>
                <td><button id="3Q5">$500</button></td>
                <td><button id="4Q5">$500</button></td>
                <td><button id="5Q5">$500</button></td> 
            </tr>
    
            
            
      
        </table>
    
    
    <br><br>
    
      
    
         <br><br>
    
        <!-- CATEGORY 1 QUESTION 1 ANSWERS -->
          <center>
            <p id="parishq" class="questions test" hidden> How Many Parishes Does Jamaica Have?</p>
           <button id="parish1" class="test" hidden>14</button> 
           <button id="parish2"class="test" hidden>20</button> 
           <button id="parish3" class="test"hidden>26</button> 
           <button id="parish4"class="test" hidden>15</button> 
          </center>
    
          <!-- CATEGORY 1 QUESTION 2 ANSWERS -->
          <center>
            <p id="indeq" class="questions test" hidden> When did Jamaica Gain Independence</p>
           <button id="indeq1" class="test" hidden>1838</button> 
            <button id="indeq2" class="test" hidden>1962</button>
          
           
          </center>
    
          <!-- CATEGORY 1 QUESTION 3 ANSWERS -->
          <center>
            <p id="columbusq" class="questions test" hidden> When did Christopher Columbus Discover Jamaica</p>
           <button id="columbus1" class="test" hidden>May 5, 1494</button> 
            <button id="columbus2" class="test" hidden>May 5, 1509</button>
          
           
          </center>
    
          <!-- CATEGORY 1 QUESTION 4 ANSWERS -->
          <center>
            <p id="garveyq" class="questions test" hidden> When did Marcus Garvey Die</p>
           <button id="garvey1" class="test" hidden>17 August 1887</button> 
            <button id="garvey2" class="test" hidden>10 June 1940</button>
            <button id="garvey3" class="test" hidden>17 November 1930</button>
          
           
          </center>
    
          <!-- CATEGORY 1 QUESTION 5 ANSWERS -->
          <center>
            <p id="beachq" class="questions test" hidden> How many miles of beaches does Jamaica have?</p>
           <button id="beach1" class="test" hidden>1000 miles</button> 
            <button id="beach2" class="test" hidden>790 miles</button>
            <button id="beach3" class="test" hidden>635 miles</button>
          
           
          </center>
    
    <!-- CATEGORY 2 QUESTION 1 -->
    <center>
      <p id="foodq" class="questions" hidden> Ackee can be classified as a?</p>
     <button id="food1" hidden>Vegetable</button> 
      <button id="food2" hidden>Fruit</button>
     
    </center>
    
    <!-- CATEGORY 2 QUESTION 2 -->
    <center>
      <p id="soupq" class="questions" hidden> What is "mannish water"?</p>
     <button id="soup1" hidden> Goat's head soup</button> 
      <button id="soup2" hidden>An alcoholic beverage </button>
      </center>
    
      <!-- CATEGORY 2 QUESTION 3 -->
    <center>
      <p id="dipq" class="questions" hidden>  What do you think "dip and fall back" is?</p>
     <button id="dip1" hidden> Pickled cabbage with corn beef </button> 
      <button id="dip2" hidden> A stew of pickled mackerel with coconut milk  </button>
      </center>
    
      <!-- CATEGORY 2 QUESTION 4 -->
    <center>
      <p id="duckq" class="questions" hidden>  What do you think "duckunu" is?</p>
     <button id="duck1" hidden> A dark fruity rum cake  </button> 
      <button id="duck2" hidden> A pudding</button>
      </center>
    
       <!-- CATEGORY 2 QUESTION 5 -->
    <center>
      <p id="stampq" class="questions" hidden>  What is "stamp and go"?</p>
     <button id="stamp1" hidden> Red kidney beans stewed with salty meat </button> 
      <button id="stamp2" hidden>Saltfish fritters</button>
      </center>
    
    <!--CATEGORY 3 QUESTION 1-->
    <center>
      <p id="winner" class="questions" hidden>Who has won the UEFA CHAMPIONS LEAGUE the most?</p>
      <button id="winner1" hidden>AC Milan</button>
      <button id="winner2" hidden>Barcelona</button>
      <button id="winner3" hidden>Real Mdrid</button>
    </center>
          
    <!--CATEGORY 3 QUESTION 2-->
    <center>
      <p id="schoolboy" class="questions" hidden>Who has won the ISSA Manning Cup the most?</p>
      <button id="schoolboy1" hidden>Jamaica College</button>
      <button id="schoolboy2" hidden>Kingston College</button>
      <button id="schoolboy3" hidden>St. Georges College</button>
    </center>
    
    <!--CATEGORY 3 QUESTION 3-->
    <center>
      <p id="fastest" class="questions" hidden>From which country does the fastest man and woman come from?</p>
      <button id="fastest1" hidden>Great Britan</button>
      <button id="fastest2" hidden>Jamaica</button>
      <button id="fastest3" hidden>USA</button>
    </center>
    
    <!--CATEGORY 3 QUESTION 4-->
    <center>
      <p id="cricket" class="questions" hidden>Which team has the most Hero CPL T20 titles?</p>
      <button id="cricket1"hidden>Jamaica Tallawahs</button>
      <button id="cricket2" hidden>Barbados Royals</button>
      <button id="cricket3" hidden>St. Luca Zouks</button>
    </center>
    
    <!--CATEGORY 3 QUESTION 5-->
    <center>
      <p id="worldcup" class="questions" hidden>Which team hasn't won a World Cup?</p>
      <button id="worldcup1"  hidden>Argentina</button>
      <button id="worldcup2" hidden>Belgium</button>
      <button id="worldcup3" hidden>Spain</button>
    </center>
    
    
    
     <!--CATEGORY 4 QUESTIONS 1 for $100-->
     <center>
      <p id = "musicq" class = "questions" hidden>Who won the award for best Reggae at the 2019 Grammy Awards?</p>
      <button id = "music1" hidden>Shaggy</button>
      <button id ="music2" hidden>Koffee</button>
      <button id = "music3" hidden>Ziggy Marley</button>
      <button id = "music4" hidden>Morgan Heritage</button>
    </center>
      
    
     <!--CATEGORY 4 QUESTIONS 2 for $200-->
    <center>
      <p id = "marleyq" class = "questions" hidden>What song did Bob Marley use to bring the One Love Peace to a climax</p>
      <button id = "marley1" hidden>One Love</button>
      <button id ="marley2" hidden>Jammin</button>
      <button id = "marley3" hidden>Redemption</button>
      <button id = "marley4" hidden>No Woman No Cry</button>
    </center>
    
    
    
     <!--CATEGORY 4 QUESTIONS 3 for $300-->
     <center>
      <p id = "reggaeq" class = "questions" hidden>Who won "Best Reggae Act" at the MOBO Award held in England in 2021</p>
      <button id = "reggae1" hidden>Shenseea</button>
      <button id ="reggae2" hidden>Sean Paul</button>
      <button id = "reggae3" hidden>Lila Ike</button>
      <button id = "reggae4" hidden>Spice</button>
    </center>
    
    <!--CATEGORY 4 QUESTIONS 4 for $400-->
    <center>
      <p id = "electricq" class = "questions" hidden>In what year was the infamous dancehall artist Vbyz Kartel incarcerated</p>
      <button id = "electric1" hidden>2022</button>
      <button id ="electric2" hidden>2010</button>
      <button id = "electric3" hidden>2013</button>
      <button id = "electric4" hidden>2011</button>
    </center>
    
    <!--CATEGORY 4 QUESTIONS 4 for $500-->
    <center>
      <p id = "barbieq" class = "questions" hidden>True or False : Spice has a song with Nicki Minaj feat Skeng</p>
      <button id = "barbie1" hidden>True</button>
      <button id ="barbie2" hidden>False</button>
    </center>
    
    
    <!--Category 5 Question 1 for $100-->
    <center>
      <p id = "spotifyq" class = "questions" hidden>What artist has the most streams on Spotify</p>
      <button id = "spotify1" hidden>Travis Scott</button>
      <button id ="spotify2" hidden>Drake</button>
      <button id ="spotify3" hidden>BTS</button>
    </center>

    
    <!--Category 5 Question 2 for $200-->

    <center>
      <p id = "greekq" class = "questions" hidden>Who was the Ancient Greek God of the Sun?</p>
      <button id = "greek1" hidden>Helios</button>
      <button id ="greek2" hidden>Hermes</button>
      <button id ="greek3" hidden>Apollo</button>
    </center>
    
    
    <!--Category 5 Question 3 for $300-->
    <center>
      <p id = "titanicq" class = "questions" hidden>What is the name of the last song played on the Titanic</p>
      <button id = "titanic1" hidden>My Heart Will Go On</button>
      <button id ="titanic2" hidden>Vision Of Salome</button>
      <button id ="titanic3" hidden>Nearer, my God, to thee</button>
    </center>



    <!--Category 5 Question 4 for $400-->
    <center>
      <p id = "langq" class="questions"hidden> Which language has the more native speakers: English or Spanish?</p>
      <button id = "lang1" hidden>Spanish</button>
      <button id = "lang2" hidden>English</button>
      </center>
  

    <!--Category 5 Question 25 for $500-->
    <center>
    <p id = "diceq" class="questions"hidden> How many dots appear on a pair of dice?</p>
    <button id = "dice1" hidden>42</button>
    <button id = "dice2" hidden>6</button>
    <button id = "dice3" hidden>36</button>
    </center>


        <br>
    
        <center>
          <p id="countdown" class="test" ></p>
        </center>
    
        
    
        <center>
          <br>
          <button id="answer" class="test"  hidden>Answer</button> 
         </center> 
    
    
         <hr class="hr">
    
         <center>
           <br><br>
          <button id="end" class="end"  hidden>Statistics</button> 
         </center>
         <br>
         <center>
         <button id="playagain" class="playagain"  hidden>Play Again</button> 
        </center> 
    
        <center>
          <button id="results" class="playagain"  hidden>Results</button> 
         </center> 
       
       
    </div>
    

</body>

</html>
