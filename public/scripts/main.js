
function FieldworkManager() {
  this.checkSetup();

  this.signInButton = document.getElementById('sign-in');
  this.userName = document.getElementById('user-name');
  this.userPic = document.getElementById('user-pic');
  this.signOutButton = document.getElementById('sign-out');
  this.jobList = document.getElementById('jobs');
  this.jobInput = document.getElementById('job');
  this.userPic = document.getElementById('user-pic');

  this.signInButton.addEventListener('click', this.signIn.bind(this));
  this.signOutButton.addEventListener('click', this.signOut.bind(this));

  this.initFirebase();
}

FieldworkManager.prototype.initFirebase = function() {
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();

  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

FieldworkManager.prototype.signIn = function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);
};

FieldworkManager.prototype.signOut = function() {
  this.auth.signOut();
};

FieldworkManager.prototype.onAuthStateChanged = function(user) {
  if (user) {
    var profilePicUrl = user.photoURL;
    var userName = user.displayName;

    this.userPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
    this.userName.textContent = userName;

    this.userName.removeAttribute('hidden');
    this.userPic.removeAttribute('hidden');
    this.signOutButton.removeAttribute('hidden');

    this.signInButton.setAttribute('hidden', 'true');

    this.loadJobs();
  } else {
    this.userName.setAttribute('hidden', 'true');
    this.userPic.setAttribute('hidden', 'true');
    this.signOutButton.setAttribute('hidden', 'true');
    this.signInButton.removeAttribute('hidden');
  }
};

FieldworkManager.JOB_TEMPLATE =
    '<div class="job-container" style="padding: 0.5em;">' +
      '<div class="createdBy"></div>' +
      '<div class="createdDate"></div>' +
      '<div class="scheduleDate"></div>' +
      '<div class="location"></div>' +
      '<div class="assignedTo"></div>' +
      '<div class="metaId"></div>' +
    '</div>';

FieldworkManager.prototype.loadJobs = function() {
  this.jobsRef = this.database.ref('jobs');
  this.jobsRef.off();

  var setJob = function(data) {
    var val = data.val();
    this.displayJob(data.key, val.createdBy, val.createdDate, val.scheduleDate, val.location, val.assignedTo, val.metaId);
  }.bind(this);

  var removeJob = function(data){
    var val = data.val();
    var div = document.getElementById(data.key);
    div.parentNode.removeChild(div);
  }.bind(this);

  this.jobsRef.on('child_added', setJob);
  this.jobsRef.on('child_changed', setJob);
  this.jobsRef.on('child_removed', removeJob);
};

FieldworkManager.prototype.displayJob = function(key, createdBy, createdDate, scheduleDate, location, assignedTo, metaId) {
  var div = document.getElementById(key);
  if (!div) {
    var container = document.createElement('div');
    container.innerHTML = FieldworkManager.JOB_TEMPLATE;
    div = container.firstChild;
    div.setAttribute('id', key);
    this.jobList.appendChild(div);
  }
  if(createdDate === undefined)
    createdDate = "N/A";
  if(scheduleDate === undefined)
    scheduleDate = "N/A";

  div.querySelector('.createdBy').textContent = "Created by: " + createdBy;
  div.querySelector('.createdDate').textContent = "Created Date: " + createdDate;
  div.querySelector('.scheduleDate').textContent = "Schedule Date: " + scheduleDate;
  div.querySelector('.location').textContent = "Location: " + location;
  div.querySelector('.assignedTo').textContent = "Assigned to: " + assignedTo;
  div.querySelector('.metaId').textContent = "MetaId: " + metaId;

  setTimeout(function() {div.classList.add('visible')}, 1);
  this.jobList.scrollTop = this.jobList.scrollHeight;
};

FieldworkManager.prototype.toggleButton = function() {
  if (this.jobInput.value) {
    this.submitButton.removeAttribute('disabled');
  } else {
    this.submitButton.setAttribute('disabled', 'true');
  }
};

FieldworkManager.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ');
  } else if (config.storageBucket === '') {
    window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely. ' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty. ' +
        'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
        'displayed there.');
  }
};

window.onload = function() {
  window.fieldworkManager = new FieldworkManager();
};
