// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById('search').addEventListener('click', searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById('input-name').value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === 'po'|| name === 'dragon warrior') { change('Po','po','buddy')
  } else if (name === 'tigress' || name === 'master tigress') {
    change('Master Tigress','tigress','That was pretty hardcore!'  )
  } else if (name === 'mantis' || name === 'master mantis') {
    change('Master Mantis','mantis','Fear the bug!')
  } else if (name === 'monkey' || name === 'master monkey') {
    change('Monkey','monkey','We should hang out')
  } else if (name === 'crane' || name === 'master crane') {
   change('Master Crane','crane','You can chain my body, but you will never chain my warrior spirit!')
  } else if (name === 'viper' || name === 'master viper') {
    change('Master viper','viper','Id dont need to bite to fight!')
  } else if (name === 'shifu' || name === 'master shifu') {
    change('Master Shifu','shifu','There is now a Level Zero.')
  } else if (name === 'ping' || name === 'mr. ping') {
    change('Mr.ping','mr-ping','We are noodle folk, broth runs through our veins!')
  } else {
    change('?????','question-mark.png','character not found')
}
}
function change (name,imgname,quote){
    document.getElementById('character-name').innerHTML = name;
    document.getElementById('main-img').src = `img/${imgname}.png`;
    document.getElementById('quote').innerHTML =quote;
}
//god have mercy on me my hands hurt, i need to add a clipboard to ubuntu baddly 