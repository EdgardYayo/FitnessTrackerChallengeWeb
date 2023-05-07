// Sample challenge data
const challenges = [
    "Do 10 push-ups.",
    "Go for a 30-minute jog.",
    "Do 20 squats.",
    "Take a 15-minute walk outside.",
    "Complete a 1-minute plank.",
    "Do 15 jumping jacks.",
    "Try a new yoga pose for 5 minutes.",
    "Go for a bike ride for 45 minutes.",
    "Do 3 sets of 10 burpees.",
    "Take a 20-minute swim.",
    "Do 50 sit-ups.",
    "Go hiking for an hour.",
    "Try a HIIT workout for 20 minutes.",
    "Do 20 lunges on each leg.",
    "Go for a run and challenge yourself to beat your personal best.",
    "Do a 5-minute stretching routine.",
    "Take a Zumba or dance fitness class.",
    "Try a new sport or activity you've never done before.",
    "Do 3 sets of 12 bicep curls with dumbbells.",
    "Go for a long walk and enjoy nature.",
    "Complete a 10-minute ab workout.",
    "Try a new healthy recipe and cook it for dinner.",
    "Go for a 1-hour power walk.",
    "Do 10 minutes of meditation or deep breathing exercises."
  ];
  
  
  let completedChallenges = 0;
  let currentChallengeIndex = 0;
  let badgesEarned = [];
  let leaderboard = [];
  
  function completeChallenge() {
    completedChallenges++;
    document.getElementById("completed-count").textContent = completedChallenges;
    
    // Check for badge achievement
    if (completedChallenges === 5 && !badgesEarned.includes("Fitness Beginner")) {
      badgesEarned.push("Fitness Beginner");
      displayBadge("Fitness Beginner");
    } else if (completedChallenges === 10 && !badgesEarned.includes("Fitness Enthusiast")) {
      badgesEarned.push("Fitness Enthusiast");
      displayBadge("Fitness Enthusiast");
    } else if (completedChallenges === 15 && !badgesEarned.includes("Fitness Master")){
      badgesEarned.push("Fitness Master");
      displayBadge("Fitness Master");
    }
    
    
    if (currentChallengeIndex === challenges.length - 1) {
      // End of challenges, reset to the first challenge
      currentChallengeIndex = 0;
    } else {
      currentChallengeIndex++;
    }
    
    showChallenge();
  }
  
  function showChallenge() {
    const challengeDescription = document.getElementById("challenge-description");
    challengeDescription.textContent = challenges[currentChallengeIndex];
  }
  
  function displayBadge(badgeName) {
    const badgeList = document.getElementById("badge-list");
    const badgeItem = document.createElement("li");
    badgeItem.textContent = badgeName;
    badgeList.appendChild(badgeItem);
  }
  
  function calculateScore(completedChallenges) {
    // You can customize the scoring algorithm based on your requirements
    return completedChallenges * 10;
  }
  
  function displayLeaderboard() {
    const leaderboardList = document.getElementById("leaderboard-list");
    leaderboardList.innerHTML = "";
    
    for (let i = 0; i < leaderboard.length; i++) {
      const leaderboardItem = document.createElement("li");
      leaderboardItem.textContent = `${leaderboard[i].username}: ${leaderboard[i].score}`;
      leaderboardList.appendChild(leaderboardItem);
    }
  }

  function updateLeaderBoard(){
    // Update leaderboard
    const username = prompt("Enter your username:");
    const userScore = calculateScore(completedChallenges);
    leaderboard.push({ username, score: userScore });
    leaderboard.sort((a, b) => b.score - a.score);
    displayLeaderboard();
  }
  
  // Initialize the page
  showChallenge();
  