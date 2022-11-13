const lineURL = `https://fortytonfootballget.vercel.app/loadpage`;
const statsURL = `https://fortytonfootballget.vercel.app/searchline/`;

const rowHead = document.querySelector('.teamHeader');
const statbod = document.querySelector('.statbody');
const btnContainer = document.querySelector('.teamHeader');

const statsArr = [];
let previousBtn;

btnContainer.addEventListener('click', function(e) {
    previousBtn;
    statbod.textContent = '';
    const button = e.target;
    const buttonNum = button.classList[3];
    const index = buttonNum.slice(buttonNum.indexOf('n')+1);
    const homebtn = document.querySelector(`.homebtn${index}`);
    const homeTeam = homebtn.textContent.split(' ').join('-');
    const awaybtn = document.querySelector(`.awaybtn${index}`);
    const awayTeam = awaybtn.textContent.split(' ').join('-');
    // console.log(typeof(homeTeam));
    getStats(homeTeam, awayTeam)
    previousBtn = index;
})



// accordContainer.addEventListener("click", function(e) {
//     e.preventDefault();
//     const button = e.target;
//     if (!button.classList.contains("accordion-button")) return;
//     button.closest(".accordion-item")
//           .querySelector(".accordion-collapse")
//           .classList.toggle("collapse")
// });





async function getStats(h, a,) {
    const page = await fetch(`${statsURL}${h} ${a}`);
    const res = await page.json();
    let home = res[0];
    let away = res[1];
    loadStats(home,away, h, a);
    // console.log(away, home);
};

const loadStats = function(h,a, hn, an) {
    const home = h[hn]
    const away = a[an]
    let html = ``;
    html = `
    <tr class="table-lite">
    <th scope="row">Offense</th>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr class="table-light">
    <th scope="row">Offense Rank</th>
    <td>${home['TOP % (excl OT)']}</td>
    <td>${away['TOP % (excl OT)']}</td>
    <td></td>
  </tr>
  <tr class="table-dark">
    <th scope="row">Total Yards per Game</th>
    <td>${home['Yards/Game']}</td>
    <td>${away['Yards/Game']}</td>
    <td></td>
  </tr>
  <tr class="table-dark">
  <th scope="row">Pass Play %</th>
  <td>${home['Pass Play %']}</td>
  <td>${away['Pass Play %']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Run Play %</th>
  <td>${home['Rush Play %']}</td>
  <td>${away['Rush Play %']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">3rd Down Conversion %</th>
  <td>${home['3D Conversion %']}</td>
  <td>${away['3D Conversion %']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">4th Down Conversion %</th>
  <td>${home['4D Conversion %']}</td>
  <td>${away['4D Conversion %']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Red Zone Scoring %</th>
  <td>${home['RZ Scoring % (TD)']}</td>
  <td>${away['RZ Scoring % (TD)']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Points per Game</th>
  <td>${home['Points/Game']}</td>
  <td>${away['Points/Game']}</td>
  <td></td>
</tr>
<tr class="table-lite">
  <th scope="row">Defense</th>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr class="table-light">
  <th scope="row">Defense Rank</th>
  <td>${home['Opp TOP % (excl OT)']}</td>
  <td>${away['Opp TOP % (excl OT)']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Points ALLOWED</th>
  <td>${home['Opp Points/Game']}</td>
  <td>${away['Opp Points/Game']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Rushing Yards Allowed</th>
  <td>${home['Opp Rush Yards/Game']}</td>
  <td>${away['Opp Rush Yards/Game']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Passing Yards Allowed</th>
  <td>${home['Opp Pass Yards/Game']}</td>
  <td>${away['Opp Pass Yards/Game']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Total Yards Allowed</th>
  <td>${home['Opp Yards/Game']}</td>
  <td>${away['Opp Yards/Game']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Opponent 3rd Down Conversion %</th>
  <td>${home['Opp 3D Conv %']}</td>
  <td>${away['Opp 3D Conv %']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Oppenent 4th Down Conversion %</th>
  <td>${home['Opp 4D Conv %']}</td>
  <td>${away['Opp 4D Conv %']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Oppenent Red Zone Scoring %</th>
  <td>${home['Opp RZ Scoring % (TD)']}</td>
  <td>${home['Opp RZ Scoring % (TD)']}</td>
  <td></td>
</tr>
<tr class="table-lite">
  <th scope="row">Gambling Stats</th>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">TDs Per Game</th>
  <td>${home['TDs/Game']}</td>
  <td>${away['TDs/Game']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Rushing TDs</th>
  <td>${home['Rush TDs/Game']}</td>
  <td>${away['Rush TDs/Game']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Turn Over Margin</th>
  <td>${home['TO Margin/Game']}</td>
  <td>${away['TO Margin/Game']}</td>
  <td></td>
</tr>
<tr class="table-dark">
  <th scope="row">Take aways</th>
  <td>${home['Takeaways/Game']}</td>
  <td>${away['Takeaways/Game']}</td>
  <td></td>
</tr>`;
    statbod.insertAdjacentHTML('beforeend', html)
    // console.log(home);
};
// getStats();

(async function getPage() {
    const page = await fetch(lineURL);
    const res = await page.json();
    for (let i=0; i < res.length; i++) {
        if (res[i][4][0].includes('+') || res[i][4][0].includes('-')) {
            statsArr.push(res[i]);
        }
    }
    // statsArr.shift();
    loadPage(statsArr);
})();

const loadPage = function(arr) {
    let html = ``;
    for (let i=0; i < arr.length;i++) {
        html = `
        <tr>
        <th scope="col"></th>
        <th scope="col"><button class="btn btn-lg btn-primary homebtn${i}" type="button">${arr[i][5][0]} ${res[i][4][0]}</button></th>
        <th scope="col"><button class="btn btn-lg btn-primary awaybtn${i}" type="button">${arr[i][5][1]} ${res[i][4][2]}</button></th>
        <th scope="col"></th>
      </tr>`
    //   console.log(arr[i]);
      rowHead.insertAdjacentHTML('beforeend', html)
    };
}


