from flask import Flask


from flask import Flask,jsonify
import dati

app = Flask(__name__)
app.config['JSON_AS_ASCII']=False #nemaina simbolus

@app.route('/')
def index():
  #print(dati.vielas)
  return "Labrīt!"

@app.route('/api/v1/vielas')
def vielas():
  return jsonify(dati.vielas)# parveido json stringa

@app.route('/api/v1/viela/<vielasId>')
def vielas_id(vielasId):
  viela=f"Viela ar doto id {vielasId} neeksistē!"
  for v in dati.vielas:
    if str(v["id"])==vielasId:#atbrīvojas no stulbām klūdām
       viela=v
  return jsonify(viela)

@app.route('/api/v1/inventars')
def inventaris():
  return jsonify(dati.inventars)# parveido json stringa

@app.route('/api/v1/inventars/<inventarssID>')
def inventars_id(inventarssID):
  inv=f"Invertārs ar doto id {inventarssID} neeksistē!"
  for v in dati.inventars:
    if str(v["id"])==inventarssID:#atbrīvojas no stulbām klūdām
          inv=v
  return jsonify(inv)

if __name__ == "__main__":
    app.run("0.0.0.0", debug=True)
