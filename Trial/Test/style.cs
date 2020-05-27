:root{
background-color: rgb(224, 233, 253);
}

li{
    padding-bottom: 3px;
    color: white;
    text-shadow: 1.5px 1px 3px black;
    list-style-type: none;
}

p{
    color: black;
    text-shadow: .5px .5px white;
    text-align: center;
    font-size: xx-large;
    font-family: sans-serif;

}
h2{
    font-family: sans-serif;
    margin-top: -.5rem;
}
input{
    text-align: center;
}

.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
  }

  button {
    display: inline-block;
    font-family: sans-serif;
    background-color: #5e6df1;
    border-radius: 10px;
    border: 3px double #cccccc;
    color: #eeeeee;
    text-align: center;
    font-size: 15px;
    padding: 20px;
    width: 200px;
    margin-top: 3px;
  }

  button:hover{
      box-shadow: 4px 3px 6px #4450bd;
  }

#startpage{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#timer{
    font-family: sans-serif;
    background-color: #5a69f0;
    color: #eeeeee;
    font-size: x-large;
    text-shadow: .5px .5px black;
    text-align: center;
}
#quiz {
    display: none;
}

#result {
    display: none;
}

#gameover {
    text-align: center;
    display: none;
    flex-direction: column;
    align-items: center;
}

#highScore{
    height: 1.5rem;
    border: groove 2px;
}

#high-scorePage{
    display: none;
    width: 50%;
    border: solid;
    border-color: silver;
    border-bottom-style: groove;
    padding-bottom: .3rem;
    background: lightsteelblue;
}

#highscore-header{
    display:flex;
    justify-content: space-around;
    border-bottom-style: outset;
    margin-bottom: .5rem;
    background-color: #5e6df1;
    color: #eeeeee;
    font-family: sans-serif;
}
#highscoreContainer{
    height: 100%;
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#initials{
    margin: .5rem;
    height: 1.75rem;
}

#highscore-initials{
    display: inline-block;
    padding-left: 9.5rem;
    font-family: sans-serif;
    font-weight: bold;
}

#highscore-score{
    float: right;
    padding-right: 8.75rem;
    font-family: sans-serif;
    font-weight: bold;
}

#finalScore{
    padding-bottom: 0.5rem;
    font-size: x-large;
    font-family: sans-serif;
    font-weight: bold;
}

#endGameBtns{
    display: none;
}
