# The React Quiz

A 15-question quiz. 30 seconds per question, points per correct answer, and it
keeps your highscore.

![A question with the timer and score running](docs/screenshot.png)

I built this while learning `useReducer`. One reducer holds everything —
`status`, `index`, `points`, `secondsRemaining` — and `status` decides what is
on screen: `loading → ready → active → finished`.

## Running it

Two terminals, because the questions come from `json-server`:

```bash
npm install

npm run server   # http://localhost:8000
npm start
```

## Known issues

- No hosted demo — the questions need `json-server` running locally.
- Misspelled names I have not fixed yet: `finsh.js`, the `restrat` action.
- A leftover `console.log` in `Questions.js`.
- `DateCounter.js` is a separate `useReducer` exercise, not part of the quiz.

## Why it is still exactly as I wrote it

The list above is short enough to clear in ten minutes. I have left it.

This repo is the day `useReducer` stopped being a hook I had read about and
became one I could reach for, and the typos are part of that day. Renaming
`finsh.js` now would give me a cleaner file tree and cost me the only honest
record I have of where I was.

I work with current React tooling. This is where I started, kept as it was.
