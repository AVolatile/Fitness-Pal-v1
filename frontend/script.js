document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const disabilities = document.getElementById('disabilities').value.split(',');
    const healthRisks = document.getElementById('healthRisks').value.split(',');
    const strengths = document.getElementById('strengths').value.split(',');
    const weaknesses = document.getElementById('weaknesses').value.split(',');
    const goals = document.getElementById('goals').value;

    const userData = {
        name: name,
        age: parseInt(age, 10),
        disabilities: disabilities,
        healthRisks: healthRisks,
        strengths: strengths,
        weaknesses: weaknesses,
        goals: goals
    };

    const response = await fetch('http://localhost:5000/api/ai/recommendations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();
    displayRecommendations(data);
});

function displayRecommendations(data) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = `
        <h2>Recommendations</h2>
        <p>${data.dietTips}</p>
        <p>${data.workoutRegimen}</p>
    `;
}