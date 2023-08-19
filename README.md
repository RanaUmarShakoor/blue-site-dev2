# EDU CLOUD

A cloud based education system

## How to run

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install the dependencies.

```bash
# Create a virtual environment
$ python -m venv .venv

# Activate the virtual environment
$ source .venv/bin/activate # Linux
$ .venv\Scripts\activate # Windows

# Update pip and wheel
$ pip install --upgrade pip
$ pip install --upgrade wheel

# Install the dependencies
$ pip install -r requirements.txt

# Set the environment variables
$ export FLASK_APP=app.py # Linux
$ set FLASK_APP=app.py # Windows

# Enable debug mode
$ export FLASK_DEBUG=1 # Linux
$ set FLASK_DEBUG=1 # Windows

# Enable development mode
$ export FLASK_ENV=development # Linux
$ set FLASK_ENV=development # Windows

# Run the app
$ flask run --host=0.0.0.0 --port=5000

```
