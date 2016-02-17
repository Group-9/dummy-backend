const express = require('express');

const dummyQuestions = [
  'First thing you do with your phone everyday?',
  'Favourite smartphone app?',
  'What brand smartphone do you have?'
];

const levels = [];
for (var i = 0; i < 20; i++) {
  levels[i] = {
    id: i,
    number: i,
    created_at: '2016-02-15 12:00:00',
    updated_at: '2016-02-15 12:00:00'
  };
  levels[i].questions = [];
  for (var j = 0; j < 20; j++) {
    levels[i].questions[j] = {
      id: (i * 20) + j,
      text: dummyQuestions[((i * 20) + j) % 3]
    };
  }
}

const questions = [];
for (var i = 0; i < 400; i++) {
  questions[i] = {
    id: i,
    text: dummyQuestions[i % 3],
    answers: [{
      id: 1,
      text: 'Facebook',
      percent: 56,
      created_at: '2016-02-15 12:00:00',
      updated_at: '2016-02-15 12:00:00'
    }, {
      id: 2,
      text: 'Twitter',
      percent: 22,
      created_at: '2016-02-15 12:00:00',
      updated_at: '2016-02-15 12:00:00'
    }, {
      id: 3,
      text: 'Instagram',
      percent: 16,
      created_at: '2016-02-15 12:00:00',
      updated_at: '2016-02-15 12:00:00'
    }],
    created_at: '2016-02-15 12:00:00',
    updated_at: '2016-02-15 12:00:00'
  };
}

const app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.send('94% Dummy Server');
});

app.get('/level', (req, res) => {
  res.json(levels);
});

app.get('/question/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (questions[id]) {
    res.json(questions[id]);
  } else {
    res.status(404).json('Not found');
  }
});

app.listen(app.get('port'), () => {
  console.log('App started');
});
