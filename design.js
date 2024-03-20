var t=(Math.ceil(Math.random()*2));
var scoreList=[0,1,2,3,4,6,'W'];
Battingtoss();
console.log(t);
function Battingtoss()
    {
        if(t==1)
        {
        document.getElementById("toss").value="MI Batting";
        }
        else
        {
            document.getElementById("toss").value="CSK Batting";
        }
    }
    var count1=0;
    var count2=0;
    var w1count=0;
    var w2count=0;
    var team1score=0;
    var team2score=0;
    var team1=[];
    var team2=[];
    function handleStrike()
    {
        if(t==1)
        {
            if(team2score!=0 && team1score>team2score)
            {
                updateresult();
            }
            else
            {
                if(count1!=6 && w1count!=2)
                {
                    var s=scoreList[Math.floor(Math.random()*7)];
                    console.log(s);
                    team1.push(s);
                    if(s=='W')
                    {
                        w1count++;
                    }
                    else
                    {
                        team1score=team1score+parseInt(s);
                        document.getElementById("team1score").textContent=team1score;
                    }
                    count1++;
                    updatescores();
                }
                else
                {
                    if(team2score==0)
                    {
                        t=2;
                        Battingtoss();
                    }
                    else
                    {
                        if(team1score>team2score)
                        {
                            document.getElementById("result").textContent="MI WON!!!";
                        }
                        else if(team2score>team1score)
                        {
                            document.getElementById("result").textContent="CSK WON!!!";
                        }
                        else
                        {
                            document.getElementById("result").textContent="Match Draw!!!";
                        }
                    }
                }
            }

        }
        else
        {
            if(team1score!=0 && team2score>team1score)
            {
                updateresult();
            }
            else
            {
                if(count2!=6 && w2count!=2)
                {
                    var s=scoreList[Math.floor(Math.random()*7)];
                    console.log(s);
                    team2.push(s);
                    if(s=='W')
                    {
                        w2count++;
                    }
                    else
                    {
                        team2score=team2score+parseInt(s);
                        document.getElementById("team2score").textContent=team2score;
                    }
                    count2++;
                    updatescores();
                }
                else
                {
                    if(team1score==0)
                    {
                        t=1;
                        Battingtoss();
                    }
                    else
                    {
                        if(team1score>team2score)
                        {
                            document.getElementById("result").textContent="MI WON!!!";
                        }
                        else if(team2score>team1score)
                        {
                            document.getElementById("result").textContent="CSK WON!!!";
                            }
                        else
                        {
                            document.getElementById("result").textContent="Match Draw!!!";
                        }
                    }
                }
            }
        }
    }
    function updatescores()
    {
        var team1Value = document.getElementById("team1box").children;
        for(let i=0;i<team1.length;i++)
        {
            team1Value[i].textContent = team1[i];
        }
        var team2Value = document.getElementById("team2box").children;
        for(let i=0;i<team2.length;i++)
        {
            team2Value[i].textContent = team2[i];
        }
    
    }
    function updateresult()
    {
        if(team1score>team2score)
        {
            document.getElementById("result").textContent="MI WON!!!";
        }
        else
        {
            document.getElementById("result").textContent="CSK WON!!!";
        }
    }