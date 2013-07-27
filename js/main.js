var hideFirstTime = 1;
var numShow = 0;

function hideAll() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('courses').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
}

function showHide(shID) {
    if(hideFirstTime == 1)
    {
        hideFirstTime = 0;
        hideAll();
    }
    if (document.getElementById(shID)) {
        if (document.getElementById(shID).style.display != 'none') {
            document.getElementById(shID).style.display = 'none';
            numShow = 0;
        } else
        {
            if( numShow > 0 )
                hideAll();
            document.getElementById(shID).style.display = 'block';
            numShow = 1;
        }
    }//end if
}


var TimeToFade = 1000.0;

function fade(eid) {
  var element = document.getElementById(eid);
  if(element == null)
    return;
   
  if(element.FadeState == null) {
    if(element.style.opacity == null 
        || element.style.opacity == '' 
        || element.style.opacity == '1')
    {
      element.FadeState = 2;
    }
    else
    {
      element.FadeState = -2;
    }
  }
    
  if(element.FadeState == 1 || element.FadeState == -1)
  {
    element.FadeState = element.FadeState == 1 ? -1 : 1;
    element.FadeTimeLeft = TimeToFade - element.FadeTimeLeft;
  }
  else
  {
    element.FadeState = element.FadeState == 2 ? -1 : 1;
    element.FadeTimeLeft = TimeToFade;
    setTimeout("animateFade(" + new Date().getTime() + ",'" + eid + "')", 33);
  }  
}

function animateFade(lastTick, eid)
{  
  var curTick = new Date().getTime();
  var elapsedTicks = curTick - lastTick;
  
  var element = document.getElementById(eid);
 
  if(element.FadeTimeLeft <= elapsedTicks)
  {
    element.style.opacity = element.FadeState == 1 ? '1' : '0';
    element.style.filter = 'alpha(opacity = ' 
        + (element.FadeState == 1 ? '100' : '0') + ')';
    element.FadeState = element.FadeState == 1 ? 2 : -2;
    return;
  }
 
  element.FadeTimeLeft -= elapsedTicks;
  var newOpVal = element.FadeTimeLeft/TimeToFade;
  if(element.FadeState == 1)
    newOpVal = 1 - newOpVal;

  element.style.opacity = newOpVal;
  element.style.filter = 'alpha(opacity = ' + (newOpVal*100) + ')';
  
  setTimeout("animateFade(" + curTick + ",'" + eid + "')", 33);
}