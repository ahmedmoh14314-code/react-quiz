# The React Quiz

A 15-question quiz. 30 seconds per question, points per correct answer, and it
keeps your highscore.

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

---

A learning project from my React practice. Built with Create React App.
