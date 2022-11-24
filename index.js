const lineURL = `https://fortytonfootballget.vercel.app/loadpage`;
const statsURL = `https://fortytonfootballget.vercel.app/searchline/`;


const btnContInsert = document.querySelector('.rowInsert');
const statbod = document.querySelector('.statbody');
const btnContainer = document.querySelector('.section-about');
const btnReset = document.querySelector('.btn__reset');
const btnsAll = document.getElementsByClassName('btn__homeTeam')



btnReset.addEventListener('click', () => {
    document.getElementById('tableID').style.opacity = "1"
    document.querySelector('.statsComp__table').classList.toggle('u-hide');
    btnReset.classList.toggle('u-hide');
    btnsAll.disabled = false;
})

const statsArr = [];


btnContInsert.addEventListener('click', function(e) {
    btnsAll.disabled = true
    statbod.textContent = '';
    const button = e.target;
    const buttonNum = button.classList[2];
    const teamName = button.textContent.trim().split(' ');
    // console.log(teamName);
    const index = buttonNum.slice(buttonNum.indexOf('n')+1);
    const homebtn = document.querySelector(`.homebtn${index}`);
    const homeTeam = createTeamName(homebtn);
    const awaybtn = document.querySelector(`.awaybtn${index}`);
    const awayTeam = createTeamName(awaybtn)
    // console.log(homeTeam, awayTeam);
    getStats(homeTeam, awayTeam);
});


const createTeamName = str => {
  let teamName = '';
  const team = [];
  const btn = str.textContent.trim().split(' ')
  for (const item of btn) {
    if (!item.includes('+') && !item.includes('-'))
    team.push(item);
  };
  teamName += team.join('-')
  return teamName;
}

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
    const homeName = hn.replace('-', ' ')
    const awayName = an.replace('-', ' ')

    // console.log(displayHomeName);
    let html = ``;
    html = `
    <tr class="table-lite">
    <th scope="row">Offense</th>
    <td>${homeName}</td>
    <td>${awayName}</td>
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
  <td>${away['Opp RZ Scoring % (TD)']}</td>
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
    statbod.insertAdjacentHTML('beforeend', html);
    document.getElementById('tableID').style.opacity = "0"
    document.querySelector('.statsComp__table').classList.toggle('u-hide');
    btnReset.classList.toggle('u-hide');
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
        <div class="statsComp__row--row row">
        <div class="col-1-of-2"><button class="btn btn__homeTeam homebtn${i}">
            ${arr[i][5][0]} ${arr[i][4][0]}
        </button></div>
        <div class="col-1-of-2"><button class="btn btn__homeTeam awaybtn${i}">
        ${arr[i][5][1]} ${arr[i][4][2]}
        </button></div>
    </div>`

    // statsComp__table statsComp__table--buttons col-1-of-2
    //   console.log(arr[i]);
      btnContInsert.insertAdjacentHTML('beforeend', html)
    };
}


