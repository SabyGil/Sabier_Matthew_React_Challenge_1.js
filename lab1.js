const episodes = [
  {
    id: 's06e01',
    title: 'Pilot'
  }, {
    id: 's06e02',
    title: 'Top Banana'
  }, {
    id: 's06e03',
    title: 'Charity Drive'
  }, {
    id: 's06e04',
    title: 'Visiting Ours'
  }, {
    id: 's06e05',
    title: 'My Mother, the Car'
  }, {
    id: 's06e06',
    title: 'In God We Trust'
  }, {
    id: 's06e07',
    title: 'Storming the castle'
  }, {
    id: 's06e08',
    title: 'Pier Pressure'
  }, {
    id: 's06e09',
    title: 'Public Relations'
  }
];

const finaleEpisode = {
  id: 's06e10',
  title: 'Bringing Up Buster'
};

// Add this finaleEpisode to the episodes object  and save that into addToPlaylist.

const addToPlaylist = episodes.concat(finaleEpisode);

// You may want to add a function which takes away the current episode you were just watching and returns the new object consisting only of the
// rest of the episodes which you have not viewed yet.

function filter () {
  for (var i = 0; i <= addToPlaylist.length - 1; i++) {
    var currentEp = addToPlaylist[i];

    console.log(currentEp);
    console.log(addToPlaylist.length - i + ' episodes left');
    if (i === addToPlaylist.length - 1) {
      console.log('Finished! Find Season 2!');
    }
  }
}

filter();
