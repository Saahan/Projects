

//Arrays to hold entities

let playerArray = [];
let gamesArray = [];
let teamArray = [];



let t1 = new Team("Team1","City1","Division1");
let t2 = new Team("Team2","City2","Division2");
let t3 = new Team("Team3","City3","Division3");

//hardcoded games

let g1 = new Game("Team1","Team3",4,new Date());
let g2 = new Game("Team2","Team10",10,new Date());
let g3 = new Game("Team1","Team10",12,new Date());


teamArray.push(t1);
teamArray.push(t2);
teamArray.push(t3);

gamesArray.push(g1);
gamesArray.push(g2);
gamesArray.push(g3);

console.log(teamArray);

init();

function init()
{
	
	//load teams in drop down
	
	
	loadTeams();
	loadPlayers();
	loadGames();
	//loadTeams();
	
}



function hideThis(t)
{
	t.parentNode.style.display = "none";
	
}


function refreshThis(t)
{
	if(t.parentNode.id == "allPlayersDiv")
	{
		refreshAllPlayerDiv();
	}
	
}



function loadTeams()
{
	let playerTeam = document.getElementById("playerTeam");
	
	clearChildNodes(playerTeam);
	
	for(x in teamArray)
	{
		let teamOption = document.createElement("OPTION");
		teamOption.innerHTML = teamArray[x].name;
		
		playerTeam.appendChild(teamOption);
	}
	
	
	
}




function loadPlayers()
{
	let choosePlayerSelect = document.getElementById("choosePlayerSelect");
	
	clearChildNodes(choosePlayerSelect);
	
	
	for(x in playerArray)
	{
		let playerOption = document.createElement("OPTION");
		playerOption.innerHTML = playerArray[x].firstName;
		
		playerOption.id = playerArray[x].playerID;
		
		choosePlayerSelect.appendChild(playerOption);
	}

	
}




function loadGames()
{
	let chooseGameSelect = document.getElementById("chooseGameSelect");
	
	clearChildNodes(chooseGameSelect);
	
	for(x in gamesArray)
	{
		let gameOption = document.createElement("OPTION");
		gameOption.innerHTML = gamesArray[x].team1 + " vs " + gamesArray[x].team2;
		
		chooseGameSelect.appendChild(gameOption);
	}
	
	
	
}










function clearChildNodes(elem)
{
	
	while(elem.hasChildNodes())
	{
		  elem.removeChild(elem.firstChild);
	}
	
	
}






//Hockey player object

function Player(firstName,lastName,team,age,position)
{
	this.playerID = -1;	
	this.firstName = firstName;
	this.lastName = lastName;
	this.team = team;
	this.age = age;
	this.position = position;
	
	this.gamesPlayed  = [];
	
	this.playerShotArray = [];
	
	this.performance = 0;
	
	//add performance function()
	
}



function playerShots(inTheNet,total,game)
{
	this.inTheNet = inTheNet;
	this.total = total;
	this.game = game;
}



//Game object

function Game(team1,team2,gameNum,gameDate)
{
	this.team1 = team1;
	this.team2 = team2
	this.gameNum = gameNum;
	this.gameDate = gameDate;
	
}


//Team object

function Team(name,city,division)
{
	this.name = name;
	this.city = city;
	this.division = division;
	
}


//gamePlayed object

function GamePlayed(game,player)
{
	this.game = game;
	this.player = player;
}




//toggleSubMenu

function toggleSubMenu(id)
{
 let subMenu1 = document.getElementById(id);
 
 if(subMenu1.style.display == "none")
 {
	subMenu1.setAttribute("style","display:block"); 
 }
 else
 {
   subMenu1.setAttribute("style","display:none");
 }
 
}


function subMenu1_click(t)
{
	console.log(t.id);
	
	if(t.id == "subMenu1_playerLink")
	{
	   let playerSubMenu = document.getElementById("playerSubMenu");
	  
	    
		if(playerSubMenu.style.display == "block")
		{
			playerSubMenu.style.display = "none";
		}
		else
		{
			playerSubMenu.style.display = "block";
		}
	}
	else if (t.id == "subMenu1_gameLink")
	{

	}
	else
	{
		
     document.getElementById("addTeamDiv").style.display = "block";
	}
	
}



function playerSubMenuClick(t)
{
	
	if(t.id == "addPlayerLink")
	{
		let addPlayerDiv = document.getElementById("addPlayerDiv");
		addPlayerDiv.style.display = "block";
	}
	else if(t.id == "addGamesPlayedLink")
	{
		let gamedPlayeddiv = document.getElementById("gamedPlayeddiv");
		gamedPlayeddiv.style.display = "block";
	}
	else if(t.id == "showPlayerLink")
	{
		//show all the players
		
		let allPlayersDiv = document.getElementById("allPlayersDiv");
		allPlayersDiv.style.display = "block";
		
	}
	
	
	else
	{
		
	}

addGamesPlayedLink
	
	
}






function refreshAllPlayerDiv()
{
	let allPlayersDiv_inner = document.getElementById("allPlayersDiv_inner");
	clearChildNodes(allPlayersDiv_inner);
	
	
	for(x in playerArray)
	{
		addPlayerDiv(playerArray[x]);
	}
	
	
	
}






function addPlayerSubMenu()
{
	
	
}



function addPlayerDiv(p)
{
	let playerDiv = document.createElement("DIV");
	playerDiv.id = "playerDiv-" + p.playerID;
	
	
	playerDivTemplateStr = `Player ID : ${p.playerID} (${p.age} years old
	
	Player First Name : ${p.firstName}
	
	Player Last name : ${p.lastName}
	
	Player Team : ${p.team}
	
	Player Position: ${p.position}
	
	Number of Games Played : ${p.gamesPlayed.length}
	
	`
	
	//alert(playerDivTemplateStr);
	
	
	playerDiv.setAttribute("class","playerDiv");
	
	
	let showGamesPlayed = document.createElement("A");
	showGamesPlayed.innerHTML = "Show Games Played"
	showGamesPlayed.id = "sgp-" + p.playerID;
	showGamesPlayed.setAttribute("href","#");
	
	//showGamesPlayed.onclick=showGamesPlayed;
	
	
	playerDiv.innerHTML = playerDivTemplateStr;
		
	playerDiv.appendChild(showGamesPlayed);
	
	

	
//	
	
	
	
	let gamesPlayedDiv = document.createElement("DIV");
	gamesPlayedDiv.id = "gamePlayedDiv-" + p.playerID;
	
	playerDiv.appendChild(gamesPlayedDiv);
	
	


	
	let allPlayersDiv_inner = document.getElementById("allPlayersDiv_inner");
	
	allPlayersDiv_inner.appendChild(playerDiv);
	
	
	let sgpLink = document.getElementById("sgp-" + p.playerID);
	sgpLink.onclick=showGamesPlayed;
	
	sgpLink.setAttribute("onclick","showGamesPlayed(this)")
	console.log(sgpLink);
	
}


function showGamesPlayed(e)
{
	console.log("aaa");
	
	let SGPLink = e.target;
	
	let SGPLinkIdArr = sgpLink.id.split("-");
	
	let player = playerArray[ +SGPLinkIdArr[2] ];
	
	let gamePlayedDivID = "gamePlayedDiv-player-" + SGPLinkIdArr[2] ;
	
	let gamePlayedDiv =	document.getElementById(gamePlayedDivID);
	
	
	for(x in player.gamesPlayed)
	{
		
		let playerGameDiv = document.createElement("DIV");
		playerGameDiv.innerHTML = (player.gamesPlayed[x]).game;
		
		gamePlayedDiv.appendChild(playerGameDiv);
		
		
		
		
		
	}
	
	
}



function addPlayer()
{
	
	let playerFirstNameTxt = document.getElementById("playerFirstNameTxt").value;
	let playerLastNameTxt = document.getElementById("playerLastNameTxt").value;
	let playerAgeTxt = document.getElementById("playerAgeTxt").value;
	let playerPositionTxt = document.getElementById("playerPositionTxt").value;
	let playerTeamTxt  = document.getElementById("playerTeam").value;
	
	let player = new Player(playerFirstNameTxt,playerLastNameTxt,playerTeamTxt,playerAgeTxt,playerPositionTxt)
	
	player.playerID = "player-" + playerArray.length;
	
	
	playerArray.push(player);
	
	addPlayerDiv(player);
	
	console.log(player);
	
	loadPlayers();
	
	document.getElementById("addPlayerDiv").style.display = "none";
	
}




function addTeam()
{
	
	let teamNameTxt = document.getElementById("teamNameTxt").value;
	let cityName = document.getElementById("cityName").value;
	let division = document.getElementById("division").value;
	
	let team  = new Team(teamNameTxt,cityName,division)
	
	teamArray.push(team);
	
	//loadTeams();
	
	
	
	let playerTeam = document.getElementById("playerTeam");
	
	let teamOption = document.createElement("OPTION");
		teamOption.innerHTML = teamNameTxt;
		
	playerTeam.appendChild(teamOption);
	
	
	
	
	
	document.getElementById("addTeamDiv").style.display = "none";
	
}

function addGamePlayed()
{
	let choosePlayerSelect = document.getElementById("choosePlayerSelect");
	let chooseGameSelect = document.getElementById("chooseGameSelect");
	let playerOptionSelected = choosePlayerSelect.options[choosePlayerSelect.selectedIndex];
	
	let game1 = new GamePlayed(chooseGameSelect.value,choosePlayerSelect.value);
	
	
	
	let playerIDArr = (playerOptionSelected.id).split("-");
	
	console.log(playerIDArr);
	
	let player = playerArray[ +playerIDArr[1] ];
	
	
	
	
	player.gamesPlayed.push(game1);
	
	
	
	
}