# d3-flask-playground
simple experiment visualizing python generated data in D3

## Start Both Components With Docker Compose

If you have [Docker Compose](https://docs.docker.com/compose/) installed on your machine, you can quickly setup the backend and frontend in development mode, as described below, with one command:

```bash
$ docker-compose up
```

Then, navigate your browser to <http://localhost:8080>.

## Backend Setup (Python, Flask)

*On Windows, activate virtual environment with `source venv/Scripts/activate`.*

### Initial Setup:
```bash
python3.8 -m venv venv
source venv/bin/activate
pip install Flask Flask-Cors
pip install waitress
pip install numpy
```

Code from <https://testdriven.io/blog/developing-a-single-page-app-with-flask-and-vuejs/>

Use [waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/usage.html) as a [production WSGI server](https://flask.palletsprojects.com/en/1.1.x/tutorial/deploy/).

### Start:
* development server: `FLASK_ENV=development FLASK_APP=app:app flask run`
* production server: `waitress-serve --port=5000 app:app`
* browse to <http://127.0.0.1:5000/data/12>

## Frontend Setup (TypeScript, D3)


### Initial Setup:
- start from <https://github.com/alex-rind/ts-playground/tree/master/webpack4-tsonly>
- change to a D3 line plot with animated transitions on loading fresh data
- retrieve data from a hard coded REST API URL

### Steps to Run:
* Setup dependencies `yarn install`
* (optionally) change `BACKEND_URL` in `src/index.ts` (default: same host as frontend web server)
* Start development server `npm start` and browse to <http://localhost:8080/>
* Build for production server `npm run build` and copy `dist` folder

## Further ToDos

* configure CORS
* try how large the data for each package should be
* set a secret key (used to sign cookies, if session object is used)
* if backend accepts inputs, it MUST validate inputs (e.g., <https://www.youtube.com/watch?v=e5_rgkvZsyk>)
* [flask-restful](https://flask-restful.readthedocs.io/en/latest/quickstart.html#a-minimal-api) provides object-to-API mapping for a typically REST interface
* try <https://geekflare.com/python-asynchronous-web-frameworks/>

## Benefits and Limitations

This architecture seems especially useful ...
* for independent work on VIS and ML. (Each may use their favorite frameworks or even connect a finished visualization prototype to a trained model.)
* if the python does not need to keep track of user state (i.e., each request provides all context information)
* if the initiative starts from the user (cp. [Sperrle et al., 2020](https://doi.org/10.2312/eurova.20201088)).

Some aspects of Visual Analytics will need special attention:
* training data for ML models is provided interactively via the frontend, esp. active learning (should work if inputs are validated).
* machine learning process taking the initiative to ask the human (cp. [Sperrle et al., 2020](https://doi.org/10.2312/eurova.20201088))
* provide progressive updates while machine learning is still in progress (cp. [Stolper et al., 2014](https://doi.org/10.1109/TVCG.2014.2346574)).

## Acknowledgments

This work was partly funded by the
Austrian Research Promotion Agency (FFG): grant #866855 via [ReMoCap-Lab](https://research.fhstp.ac.at/en/projects/remocap-lab).
