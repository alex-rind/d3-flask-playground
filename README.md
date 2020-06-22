# d3-flask-playground
simple experiment visualizing python generated data in D3

## Frontend Setup (TypeScript, D3)

- start from <https://github.com/alex-rind/ts-playground/tree/master/webpack4-tsonly>
- change to a D3 line plot with animated transitions on loading fresh data
- retrieve data from a hard coded REST API URL

## Backend Setup (Python, Flask)

```
python3.8 -m venv venv
source venv/bin/activate
pip install Flask Flask-Cors
pip install waitress
pip install numpy
```

Code from <https://testdriven.io/blog/developing-a-single-page-app-with-flask-and-vuejs/>

Use [waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/usage.html) as a [production WSGI server](https://flask.palletsprojects.com/en/1.1.x/tutorial/deploy/).

Start:
* development server: `FLASK_ENV=development FLASK_APP=app:app flask run`
* production server: `waitress-serve --port=5000 app:app`
* browse to <http://127.0.0.1:5000/data/12>

## ToDos

* configure CORS
* set a secret key (used to sign cookies, if session object is used)
* try <https://geekflare.com/python-asynchronous-web-frameworks/>
