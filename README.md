# d3-flask-playground
simple experiment visualizing python generated data in D3

## Frontend Setup (TypeScript, D3)

cp. <https://github.com/alex-rind/ts-playground/tree/master/webpack4-tsonly>

## Backend Setup (Python, Flask)

```
python3.8 -m venv venv
source venv/bin/activate
pip install Flask Flask-Cors
pip install waitress
```

Code from <https://testdriven.io/blog/developing-a-single-page-app-with-flask-and-vuejs/>

Use [waitress](https://docs.pylonsproject.org/projects/waitress/en/stable/usage.html) as a [production WSGI server](https://flask.palletsprojects.com/en/1.1.x/tutorial/deploy/).

Start `python app.py` and browse to <http://127.0.0.1:5000/ping>

## ToDos

* configure CORS
* check a developer key

