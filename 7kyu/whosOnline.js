// 🎯 Who's Online?

//❓ DESCRIPTIONS
// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

// ✅ SOLUTIONS
// 1 variant

const whosOnline = (friends) => {
    const result = {
        online: [],
        offline: [],
        away: []
    };

    // Loop through each friend
    for (let friend of friends) {
        const { username, status, lastActivity } = friend;

        if (status === 'online') {
            if (lastActivity <= 10) {
                result.online.push(username);
            } else {
                result.away.push(username);
            }
        } else if (status === 'offline') {
            result.offline.push(username);
        }
    }

    // Remove empty arrays from the result object
    for (const key in result) {
        if (result[key].length === 0) {
            delete result[key];
        }
    }

    return result;
};

// 2 variant
const whosOnline = (friends) => {
    let output = {};
    friends.forEach(e => {
        let status = e.status;
        if(status === 'online' && e.lastActivity > 10) status = 'away';
        let temp = output[status];
        if(output[status]) {
            output[status].push(e.username);
        }
        else {
            output[status] = [e.username];
        }
    });
    return output;
}

// 3 variant
const whosOnline = friends => friends.reduce((a,{username, status, lastActivity}) => {
    const fStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
    a[fStatus] ? a[fStatus].push(username) : a[fStatus] = [username];
    return a;
  }, {})

// 4 variant
const whosOnline = (friends) => {
    const output = {}
    friends.forEach((n) => {
        if (n.status === 'online' && n.lastActivity <= 10) {
            if (!output.online) output.online = [];
            output.online.push(n.username)
        } else if (n.status === 'offline') {
            if(!output.offline) output.offline = [];
            output.offline.push(n.username)
        } else {
            if(!output.away) output.away = [];
            output.away.push(n.username)
        }
    })
    return output;
}

// 5 variant
const whosOnline = friends =>
    [['online',  friend => friend.status === 'online' && friend.lastActivity <= 10],
     ['away',    friend => friend.status === 'online' && friend.lastActivity >  10],
     ['offline', friend => friend.status === 'offline']]
    .map(([status, func]) => [status, friends.filter(func).map(friend => friend.username)])
    .reduce((result, [status, array]) => {
        if (array.length) result[status] = array;
        return result;
    }, {});