// write a function that takes a collection of match score results as a string where the number of points for team x got in the championship. points should be awarded where if x > y, x gets 3 points; if x < y, x gets 0 points; if x = y, x gets 1 point. match scores will be represented by a string in the format "x:y"
function calculatePoints(matchResults){
    let resultsArray = matchResults.split(', ');
    let teamXPoints = 0;
    let teamYPoints = 0;
    for (let result of resultsArray){
        let [teamXScore, teamYScore] = result.split(':');
        teamXScore = parseInt(teamXScore);
        teamYScore = parseInt(teamYScore);
        if (teamXScore > teamYScore){
            teamXPoints += 3;
        } else if (teamXScore < teamYScore) {
            teamYPoints +=3;
        } else {
            teamXPoints += 1;
            teamYPoints += 1;
        }
    }
    return { teamX: teamXPoints, teamY: teamYPoints };
}

let matchResults = "2:1, 3:2, 1:3, 2:5";
let points = calculatePoints(matchResults);
console.log("Team X points:", points.teamX);
console.log("Team Y points:", points.teamY);

// line 3: splits the input string into an array of match results
// lines 4-5: initialises variables at 0
// lines 6-18: iterates through the match results and calculates points.