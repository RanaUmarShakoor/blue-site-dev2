from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/register")
def register():
    return render_template("register.html")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/index")
def index2():
    return redirect(url_for("index"))


@app.route("/home")
def home():
    return redirect(url_for("index"))


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/courses")
def courses():
    return render_template("courses.html")


@app.route("/gallery")
def gallery():
    return render_template("gallery.html")

# Replace with jobs
@app.route("/jobs")
def jobs():
    return render_template("jobs.html")

@app.route("/full-it-stack")
def full_it_stack():
    return render_template("full-it-stack.html")

@app.route("/blog")
def blog():
    return render_template("blog.html")


@app.route("/blog-details")
def blog_details():
    return render_template("blog-details.html")

@app.route("/exchange")
def exchange():
    return render_template("exchange.html")

# Replace with full-it-stack
@app.route("/vacancies")
def vacancies():
    return render_template("vacancies.html")

@app.route("/vacancy-details")
def vacancy_details():
    return render_template("vacancy-details.html")


@app.route("/online-training")
def online_training():
    return render_template("online-training.html")


@app.route("/platform")
def platform():
    return render_template("platform.html")


@app.route("/certification")
def certification():
    return render_template("certification.html")


@app.route("/team")
def teams():
    return render_template("team.html")


@app.route("/solutions")
def solution():
    return render_template("solutions.html")


# url not found
@app.errorhandler(404)
def page_not_found(e):
    url = request.path.removeprefix("/")
    url = url.removesuffix("/")
    title = str(e).split(":")[0]
    message = str(e).split(":")[1]
    return render_template("404.html", url=url, title=title, message=message)


if __name__ == "__main__":
    app.run(debug=True)
