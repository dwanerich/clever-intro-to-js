// alert('hello world')
// console.log('alo haaa')

// Challenge 1: Your age in days

let = ageInDays = () => {

    let birthYear = prompt('what year where you born?');
    let ageInDaysss = (2021 - birthYear) * 365;
    let h2 = document.createElement('h2');
    let textAnswer = document.createTextNode('you are ' + ageInDaysss + ' days old');
    h2.setAttribute('id', 'ageInDays');
    h2.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h2);
    console.log(document.getElementById('flex-box-result').appendChild(h2))
}

let = resetParams = () => {

    document.getElementById('ageInDays').remove();
    console.log(document.getElementById('ageInDays'))
}

// Challenge 2: Cat Generator

let generateCat = () => {
    let image = document.createElement('img');
    let div = document.getElementById('flex-box-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)

}

// Challenge 3: Rock, Paper, Scissors

let rpsGame = (yourChoice) => {
    console.log(yourChoice)
    // console.log(Math.floor(Math.random() * 3))
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numToChoice(randToRpsInt())
    console.log('computer choice: ', botChoice)

    // alert(botChoice,humanChoice)
    // console.log(botChoice)
    results = decideWinner(humanChoice, botChoice);
    console.log(results)
    // [0,1] [.5,.5] tie | human lost | bot won

    message = finalMessage(results)
    console.log(message)
    // (message:'You won!', 'color': 'green')

    rpsFrontEnd(yourChoice.id, botChoice, message);

}

    let randToRpsInt = () => {
        return (Math.floor(Math.random() * 3))
    }

    let numToChoice = (num) => {
      return ['rock', 'paper', 'scissors'][num]
    }

    let decideWinner = (yourChoice, computerChoice) => {
        let rpsDatabase = {
            'rock': {'rock' : .5, 'paper' : 1, 'scissors' : 1},
            'paper' : {'rock' : .0,'paper' : .5, 'scissors' : 0},
            'scissors' : {'rock' : 0, 'paper' : 1, 'scissors' : .5}
        }

        let yourScore = rpsDatabase[yourChoice][computerChoice]
        let computerScore = rpsDatabase[computerChoice][yourChoice]

        return [yourScore, computerScore]

    }

    let finalMessage = ([yourScore, computerScore]) => {
        if (yourScore === 0) {
            return {'message' : 'you lost!', 'color' : 'red'}
        } else if (yourScore === .5) {
            return {'message' : 'you tied', 'color' : 'yellow'}
        } else {
            return {'message' : 'you won!', 'color' : 'green'}
        }
    }

    let rpsFrontEnd = (humanImageChoice, botImageChoice, finalMessage) => {

        let imagesDatabase = {
            'rock' : document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        }
        // how do we remove all the images
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        let humanDiv = document.createElement('humanDiv')
        let botDiv = document.createElement('botDiv')
        let winnerDiv = document.createElement('winnerDiv')

        humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
        winnerDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + '</h1>'
        botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,28,24,1);'>"

        document.getElementById('flex-box-rps').appendChild(humanDiv)
        document.getElementById('flex-box-rps').appendChild(winnerDiv)
        document.getElementById('flex-box-rps').appendChild(botDiv)



    }


