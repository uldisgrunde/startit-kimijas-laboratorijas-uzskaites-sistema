from flask import Flask, jsonify, render_template
import dati


app = Flask(__name__)

# nepieciešams garum- un mīkstinājumzīmēm json formātā
app.config['JSON_AS_ASCII'] = False


@app.route('/')
def index():
    return render_template('index.html')
    
@app.route('/pieslegties')
def pieslegties():
    return render_template('login.html')

@app.route('/publiski')
def publiski():
    return render_template('pub_data.html')

@app.route('/uzskaite')
def uzskaite():
    return render_template('vielu_aprikojuma_uzskaite.html')
@app.route('/aprikojums')
def aprikojums():
    return render_template('pievienot_vielu_aprikojumu.html')
@app.route('/menu')
def menu():
    return render_template('user_menu.html')
    
@app.route('/api/v1/vielas')
def vielas():
    # pārveidojam par json pirms atgriežam
    return jsonify(dati.vielas)


@app.route('/api/v1/viela/<vielasID>')
def viela_id(vielasID):
    # Noklusēta vērtība, ja viela netiks atrasta
    viela = "Viela ar ID {} neeksistē".format(vielasID)
    # meklējam vielu sarakstā
    for v in dati.vielas:
        # vielas ID ir skaitlis, jāpārveido datu tips
        if v["id"] == int(vielasID):
            viela = v
    return jsonify(viela)


if __name__ == "__main__":
    app.run("0.0.0.0", debug=True)
