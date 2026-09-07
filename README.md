# The React Quiz

A 15-question quiz about React. You get 30 seconds per question, points per
correct answer, and the app keeps your highscore between rounds.

I built this to practise `useReducer`. The app has a real state machine — the
whole screen is decided by one `status` field — and that turned out to be the
part I learned the most from.

## Running it

The questions are served by `json-server`, so you need two terminals:

```bash
npm install

npm run server   # serves data/questions.json on http://localhost:8000
npm start        # http://localhost:3000
```

If you only run `npm start`, the fetch fails and you get the error screen.
That is expected — the API has to be up first.

## How the state works

Everything lives in one reducer in `src/components/App.js`:

```js
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};
```

`status` moves through `loading → ready → active → finished`, and the JSX just
renders whatever matches:

```jsx
{status === "loading" && <Loader />}
{status === "error" && <Error />}
{status === "ready" && <StartScreen ... />}
{status === "active" && ( ... )}
{status === "finished" && <Finsh ... />}
```

The reason I used a reducer instead of seven `useState` calls: the actions
touch several fields at once. `start` sets the status *and* calculates the
timer from the number of questions. `newAnswer` stores the answer *and* adds
points. `finish` sets the status *and* compares against the highscore. Keeping
those together in one place is what made the app stop breaking.

Some things I worked out while building it:

- **`maxPoints` and `numQuestions` are not state.** They are derived from
  `questions` on every render. Storing them would mean keeping them in sync.
- **The timer dispatches, it does not own the countdown.** `Timer` runs a
  `setInterval` that fires `{ type: "tick" }`, and the reducer decides when
  time is up. The interval is cleared in the effect cleanup, otherwise a new
  one stacks up on every render.
- **`restart` reuses the fetched questions.** It spreads `initialState` but
  keeps `state.questions` and jumps straight to `ready`, so it does not refetch.

## Structure

```
data/questions.json          the 15 questions, served by json-server
src/components/
├── App.js                   reducer + status routing
├── StartScreen.js           question count and the start button
├── Questions.js             the current question
├── Options.js               answer buttons, locked after answering
├── Progress.js              progress bar and running score
├── Timer.js                 setInterval that dispatches "tick"
├── NextQuestions.js         Next / Finish depending on the index
├── finsh.js                 final score and restart
├── Loader.js / Error.js     fetch states
└── Header.js / Main.js / Footer.js
```

## Known issues

Things I know are wrong and want to come back to:

- There is no hosted demo, because the questions need `json-server` running
  locally. Moving them into the bundle would fix that.
- Some names are misspelled: `finsh.js`, the `restrat` action, `qusetions` in
  the start screen. They work, but they should be fixed.
- `finsh` is a component and should start with a capital letter.
- There is a leftover `console.log(question)` in `Questions.js`.
- `DateCounter.js` is a separate `useReducer` exercise that is not part of the
  quiz. It is still in the folder.
- The timer keeps running while the tab is in the background.

## Built with

Create React App, React 19, `useReducer`, `json-server`.
