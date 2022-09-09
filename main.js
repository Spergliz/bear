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
    change('tigress','tigress','That was pretty hardcore!'  )
  } else if (name === 'mantis' || name === 'master mantis') {
    change('Master Mantis','mantis','Fear the bug!')
  } else if (name === 'monkey' || name === 'master monkey') {
    change('monkey','monkey','We should hang out')
  } else if (name === 'crane' || name === 'master crane') {

    // Update page to Crane
   // document.getElementById('character-name').innerHTML = 'Master Crane';
   // document.getElementById('main-img').src = 'img/crane.png';
   // document.getElementById('quote').innerHTML = 'You can chain my body, but you will never chain my warrior spirit!';
  } else if (name === 'viper' || name === 'master viper') {
    // Update page to Viper
    document.getElementById('character-name').innerHTML = 'Master Viper';
    document.getElementById('main-img').src = 'img/viper.png';
    document.getElementById('quote').innerHTML =
      "I don't need to bite to fight!";
  } else if (name === 'shifu' || name === 'master shifu') {
    // Update page to Master Shifu
    document.getElementById('character-name').innerHTML = 'Master Shifu';
    document.getElementById('main-img').src = 'img/shifu.png';
    document.getElementById('quote').innerHTML = 'There is now a Level Zero.';
  } else if (name === 'ping' || name === 'mr. ping') {
    // Update page to Mr. Ping
    document.getElementById('character-name').innerHTML = 'Mr. Ping';
    document.getElementById('main-img').src = 'img/mr-ping.png';
    document.getElementById('quote').innerHTML =
      'We are noodle folk, broth runs through our veins!';
  } else {
    // Update page to Question Mark
    document.getElementById('character-name').innerHTML = '?????';
    document.getElementById('main-img').src = 'img/question-mark.png';
    document.getElementById('quote').innerHTML = 'Character Not Found';
  }
}
function change (name,imgname,quote){
    // Update page to Po
    document.getElementById('character-name').innerHTML = name;
    document.getElementById('main-img').src = `img/${imgname}.png`;
    document.getElementById('quote').innerHTML =quote;
}