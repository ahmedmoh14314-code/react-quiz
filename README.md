# The React Quiz

A 15-question quiz with a timer, points per correct answer and a highscore. An early React project, kept as I first wrote it.

React · `useReducer` · Create React App

![A question with the timer and score running](docs/screenshot.png)

## Live demo

None: the questions come from a local `json-server`, so it runs on your machine (steps at the bottom).

## What this project demonstrates

- **One reducer as a state machine.** `App.js` keeps `questions`, `status`, `index`, `answer`, `points`, `highscore` and `secondsRemaining` in a single `useReducer`. `status` moves through `loading → ready → active → finished` (or `error`), and the JSX renders whichever screen matches.
- **Every change is an action.** `dataReceived`, `start`, `newAnswer`, `nextQuestion`, `finish`, `restart`, `tick`. Scoring happens in the reducer: `newAnswer` compares the payload with `correctOption` and adds the question's points.
- **A timer in an effect.** `Timer.js` starts a `setInterval` that dispatches `tick` every second and clears it on unmount. The reducer finishes the quiz when the seconds run out.
- **Derived values in render.** The number of questions and the maximum points are computed from state, not stored.
- **Children as composition.** `Main` and `Footer` are layout components that take `children`.

`DateCounter.js` is a separate `useReducer` exercise, not part of the quiz.

## Where to look

| File | What it shows |
| --- | --- |
| `src/components/App.js` | The reducer and the status-driven rendering |
| `src/components/Options.js` | Answer buttons: disabled after answering, coloured correct or wrong |
| `src/components/Timer.js` | The interval effect |
| `src/components/NextQuestions.js` | Next or Finish depending on the index |

## What I would change

The code is as I first wrote it. Reading it back, this is what I would fix:

- `finsh.js` should be `Finish.js`. Components start with a capital, and the word is misspelled. Same for the `restrat` action and `qusetions` on the start screen.
- The questions should ship with the app instead of being served by `json-server`, so it runs with one command and can be hosted.
- `Questions.js` still has a `console.log` in it.
- The timer keeps counting while the tab is in the background.
- `Error` is both an imported component and the global constructor used in the reducer's `default` case. The two collide.

I have left them. This is the project where `useReducer` went from something I had read about to something I reach for, and the version I actually wrote is more useful to show than one tidied up afterwards. I build with Vite now.

## Running locally

Two terminals, because the questions come from `json-server`:

```bash
npm install
npm run server   # http://localhost:8000
npm start
```
